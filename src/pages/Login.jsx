import React, { Component } from 'react';
//import './costume-css/login.css';
import InputUsername from '../components/login/InputUsername.jsx';
import InputPassword from '../components/login/InputPassword.jsx';
class Login extends Component {

    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <form method="post">
                    <InputUsername/>
                    <InputPassword/>
                    <button type="submit" className="btn btn-primary btn-block btn-large">Login Page.</button>
                </form>
            
            </div>
        );
    }
}

export default Login;
