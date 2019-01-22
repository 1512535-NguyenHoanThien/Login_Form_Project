import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './style.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
        }
        this.onLogIn = this.onLogIn.bind(this)
        this.onHandleChange = this.onHandleChange.bind(this)
    }

    onHandleChange = (e) => {
        var target = e.target;
        var name =target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    onLogIn(){
      fetch('localhost:4000/login', {
         method: 'POST',      
         body: {
           
        }
  });
    }

    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form" action='/login'>
                        <input onChange={this.onHandleChange} type="text" placeholder="username" name="username" value={this.state.username}/>
                        <input onChange={this.onHandleChange} type="password" placeholder="password" name="password" value={this.state.password}/>
                        <button onClick={this.onLogIn}>login</button>
                        <p className="message">Not registered?
                            <Link to="/register">Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default App;