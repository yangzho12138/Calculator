import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'

class NavBar extends Component {
    state = {  } 

    handleClick = () => {
        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/calculator/logout/",
            type: "get",
            success: resp => {
                if(resp.result === "success")
                    window.location.href = "/calculator";
            }
        })
    }

    render_calculator = () =>{
        if(this.props.is_login)
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/calculator/calculator">Calculator</Link>
                </li>
            );
        else
            return "";
    }

    render_user = () =>{
        if(this.props.is_login)
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="nav-link" >{this.props.username}</div>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.handleClick} className="nav-link" to="/calculator/register">Logout</a>
                    </li>
                </ul>
            );
        else
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/calculator/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/calculator/register">Register</Link>
                    </li>
                </ul>
            )
    }

    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/calculator">Online Calculator</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/calculator/home">Home</Link>
                                </li>
                                {this.render_calculator()}
                            </ul>
                            {this.render_user()}
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

 
export default NavBar;