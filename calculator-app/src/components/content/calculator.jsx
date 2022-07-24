import React, { Component } from 'react';

class Calculator extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className="calculator">
                    <div className="output">
                        <div className="last-output">123 *</div>
                        <div className="current-output">96</div>
                    </div>
                    <button>AC</button>
                    <button>Del</button>
                    <button>x^2</button>
                    <button>/</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>*</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>-</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                    <button>+/-</button>
                    <button>0</button>
                    <button>.</button>
                    <button>=</button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Calculator;