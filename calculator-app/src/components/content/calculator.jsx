import React, { Component } from 'react';
import { connect } from 'react-redux';
import DigitButton from './calculator/digitButton';

class Calculator extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className="calculator">
                    <div className="output">
                        <div className="last-output">
                            {this.props.lastOperand} {this.props.operation}
                        </div>
                        <div className="current-output">
                            {this.props.currentOperand}
                        </div>
                    </div>
                    <button>AC</button>
                    <button>Del</button>
                    <button>x^2</button>
                    <button>/</button>
                    <DigitButton digit={"7"}/>
                    <DigitButton digit={"8"}/>
                    <DigitButton digit={"9"}/>
                    <button>*</button>
                    <DigitButton digit={"4"}/>
                    <DigitButton digit={"5"}/>
                    <DigitButton digit={"6"}/>
                    <button>-</button>
                    <DigitButton digit={"1"}/>
                    <DigitButton digit={"2"}/>
                    <DigitButton digit={"3"}/>
                    <button>+</button>
                    <button>+/-</button>
                    <DigitButton digit={"0"}/>
                    <DigitButton digit={"."}/>
                    <button>=</button>
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
 
export default connect(mapStateToProps)(Calculator);