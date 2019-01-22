import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './style.css';

class App extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <Link to="/profile"><button>login</button></Link>
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