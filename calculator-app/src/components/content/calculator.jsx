import React, { Component } from 'react';
import { connect } from 'react-redux';
import DigitButton from './calculator/digitButton';
import OperationButton from './calculator/operationButton';
import ACTIONS from '../../redux/action';

class Calculator extends Component {
    state = { 
        formater: Intl.NumberFormat("en-us")
     } 

     /* the system will save 3 digits of decimal automatically, this function aims to show all the decimals */
     format = (number) => {
         const [integer, decimal] = number.split('.');
         if(decimal === undefined)
            return this.state.formater.format(integer);
        return `${this.state.formater.format(integer)}.${decimal}`;
     }

    render() { 
        return (
            <React.Fragment>
                <div className="calculator">
                    <div className="output">
                        <div className="last-output">
                            {this.format(this.props.lastOperand)} {this.props.operation}
                        </div>
                        <div className="current-output">
                            {this.format(this.props.currentOperand)}
                        </div>
                    </div>
                    <button onClick={this.props.clear}>AC</button>
                    <button onClick={this.props.delete}>Del</button>
                    <button>x^2</button>
                    <OperationButton operation={"/"} />
                    <DigitButton digit={"7"}/>
                    <DigitButton digit={"8"}/>
                    <DigitButton digit={"9"}/>
                    <OperationButton operation={"*"} />
                    <DigitButton digit={"4"}/>
                    <DigitButton digit={"5"}/>
                    <DigitButton digit={"6"}/>
                    <OperationButton operation={"-"} />
                    <DigitButton digit={"1"}/>
                    <DigitButton digit={"2"}/>
                    <DigitButton digit={"3"}/>
                    <OperationButton operation={"+"} />
                    <button>+/-</button>
                    <DigitButton digit={"0"}/>
                    <DigitButton digit={"."}/>
                    <button onClick={this.props.evaluate}>=</button>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operation: state.operation,
    }
}

/* There is only one delete key, so components are not set up separately */
const mapDispatchProps = {
    delete:() => {
        return {
            type: ACTIONS.DELETE_DIGIT,
        }
    },
    clear: () => {
        return {
            type: ACTIONS.CLEAR,
        }
    },
    evaluate: () =>{
        return {
            type: ACTIONS.EVALUATE,
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchProps)(Calculator);