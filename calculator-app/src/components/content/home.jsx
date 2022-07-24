import React, { Component } from 'react';
import Base from './base';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Base>
                    <h5 className="card-title">Welcome to Online Calculator</h5>
                    <h6 className="card-subtitle mb-2 text-muted">This is an online calculator made by Yang Zhou</h6>
                </Base>
            </React.Fragment>
        );
    }
}
 
export default Home;