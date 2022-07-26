import React, { Component } from 'react';
import $ from 'jquery'

class Register extends Component {
    state = { 
        error_message:"",
        username: "",
        password: "",
        password_confirm: "",
     } 

     handleClick = e =>{
         e.preventDefault(); /* Instead of submitting directly, use ajax to submit, so need to prevent the default behavior */

        console.log(this.state.password, this.state.password_confirm);
        if(this.state.username === "")
            this.setState({error_message: "the username can not be null"})
        else if(this.state.password === "")
            this.setState({error_message: "the password can not be null"})
        else if(this.state.password_confirm === "")
            this.setState({error_message: "the confirmed password can not be null"})
        else if(this.state.password !== this.state.password_confirm)
            this.setState({error_message: "the passwords entered twice are inconsistent"})
        else{
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/calculator/register/",
                type: "get",
                data:{
                    username: this.state.username,
                    password: this.state.password,
                    password_confirm: this.state.password_confirm,
                },
                DataType: "json",
                success: resp => {
                    console.log(resp);
                    if(resp.result === "success"){
                        window.location.href="/calculator/login"; /* relocation */
                    }else{
                        this.setState({error_message: "the username has already exist"});
                    }
                }
            })
        }
     }
    render() { 
        return (
            <React.Fragment>
                 <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">UserName</label>
                        {/* onChange: setState when there is an input*/}
                        <input onChange={e => {this.setState({username: e.target.value})}} type="username" className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={e => {this.setState({password: e.target.value})}} type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password_confirm" className="form-label">Confirmed Password</label>
                        <input onChange={e => {this.setState({password_confirm: e.target.value})}} type="password" className="form-control" id="password_confirm" />
                    </div>
                    <div style = {{height: "2rem", color: "red"}}>
                        {this.state.error_message}
                    </div>
                    <button onClick={this.handleClick} type="submit" className="btn btn-primary">Login</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default Register;