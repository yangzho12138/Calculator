import React, { Component } from 'react';
import $ from 'jquery'

class Login extends Component {
    state = { 
        error_message:"",
        username: "",
        password: "",
     } 

     handleClick = e =>{
         e.preventDefault(); /* Instead of submitting directly, use ajax to submit, so need to prevent the default behavior */

        if(this.state.username === "")
            this.setState({error_message: "the username can not be null"})
        else if(this.state.password === "")
            this.setState({error_message: "the password can not be null"})
        else{
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/calculator/login/",
                type: "get",
                data:{
                    username: this.state.username,
                    password: this.state.password,
                },
                DataType: "json",
                success: resp => {
                    if(resp.result === "success"){
                        window.location.href="/calculator/"; /* relocation */
                    }else{
                        this.setState({error_message: "the username or password is wrong"});
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
                        <input onChange={e => {this.setState({username: e.target.value})}} type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={e => {this.setState({password: e.target.value})}} type="password" className="form-control" id="exampleInputPassword1" />
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
 
export default Login;