import React, { Component } from 'react';

/* page format */
class Base extends Component {
    state = {  } 
    render() { 
        return (
            <div className="card" style={{marginTop: "20px"}}>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
 
export default Base;