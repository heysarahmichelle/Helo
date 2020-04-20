import React, { Component } from 'react';
import axios from 'axios';

export default class Auth extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            loginError: false,
            registerError: false
        }
    }
    handleLogin = () => {
        axios.put('/api/login', {username: this.state.username, password: this.state.password}).then(res => {
            if(res.data){
                console.log(res.data)
                this.props.history.push('/dashboard')
            } else {
                this.setState({
                    loginError: true
                })
            }
        }).catch(err => {
            console.log("u suk")
        })
    } 
    handleRegister = () => {
        axios.post('/api/registration', {username: this.state.username, password: this.state.password})
        .then(res=>{
            console.log(res.data)
            if(res.data){
                this.props.history.push('/dashboard')
            } else {
                this.setState({
                    registerError: true
                })
            }
        }).catch(err=> {
            console.log('Nooope')
    })
    }

    render() {
        return (
            <div className="auth-component">
                <div className="login-box">
                    <div className="user-content">
                        Username:<input 
                        onChange={(e)=>this.setState({username: e.target.value})}
                        className="username-helo"/>
                    </div>
                    <div className="pass-content">
                        Password:<input 
                        onChange={(e)=>this.setState({password: e.target.value})} 
                        className="password-helo"
                        type="password"/>
                    </div>
                    <div className="login-buttons">
                        <button 
                        onClick={this.handleLogin} 
                        className="login-b">Login</button>
                        <button 
                        onClick={this.handleRegister} 
                        className="register-b">Register</button>
                    </div>
                </div>
            </div>
        )
    }
}
