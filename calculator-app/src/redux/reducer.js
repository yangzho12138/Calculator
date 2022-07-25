import ACTIONS from "./action";

const evaluate = state => {
    let {lastOperand, currentOperand, operation} = state;
    let last = parseFloat(lastOperand);
    let current = parseFloat(currentOperand);

    let res = "";
    switch(operation){
        case "+" :
            res = last + current;
            break;
        case "-":
            res = last - current;
            break;
        case "*" :
            res = last * current;
            break;
        case "/" :
            res = last / current;
            break;
    }

    return res.toString();
}

const reducer = (state = {
    currentOperand: "0",
    lastOperand: "",
    operation: "",
    overwrite: false, /* after evaluation, the user enter the number, the result of last evaluation should be erased */
},action) => {
    switch(action.type){
        case ACTIONS.ADD_DIGIT:
            if(state.overwrite === true)
                return{
                    ...state,
                    currentOperand: action.digit,
                    overwrite: false,
                }
            if(state.currentOperand === '0' && action.digit === '0')
                return state;
            if(state.currentOperand === '0' && action.digit !== '0')
                return{
                    ...state, /* 将字典展开，其余值不变，修改特定的值 */
                    currentOperand: action.digit,
                }
            if(action.digit === '.' && state.currentOperand.includes('.'))
                return state;
            if(action.digit === '.' && state.currentOperand === "")
                return{
                    ...state,
                    currentOperand: "0.",
                }
            return {
                ...state,
                currentOperand: state.currentOperand + action.digit,
            }

        case ACTIONS.DELETE_DIGIT:
            if(state.overwrite)
                return{
                    ...state,
                    currentOperand: "0",
                    overwrite: false,
                }
            if(state.currentOperand === "")
                return state;
            if(state.currentOperand.length === 1)
                return {
                    ...state,
                    currentOperand: "0",
                }
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0,-1), /* delete the last digit */
            }
        
        case ACTIONS.CHOOSE_OPERSTION:
            if(state.currentOperand === "" && state.lastOperand === "")
                return {
                    ...state,
                    lastOperand: '0',
                    operation: action.operation,
                }
            if(state.lastOperand === "")
                return{
                    ...state,
                    lastOperand: state.currentOperand,
                    operation: action.operation,
                    currentOperand: "0",
                }
            if(state.currentOperand === "0")
                return {
                    ...state,
                    operation: action.operation,
                }
            return {
                ...state,
                lastOperand: evaluate(state),
                operation: action.operation,
                currentOperand: "0",
            }

        case ACTIONS.CLEAR:
            return {
                ...state,
                currentOperand: "0",
                lastOperand: "",
                operation: "",
            }
        
        case ACTIONS.EVALUATE:
            if(state.currentOperand === "" || state.lastOperand === "" || state.operation === "")
                return state;
            return {
                ...state,
                lastOperand: "",
                operation: "",
                currentOperand: evaluate(state),
                overwrite: true,
            }
        
        default:
            return state;
    }
};

export default reducer;