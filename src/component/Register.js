import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AutosizeInput from 'react-input-autosize';

import './style.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    }
  }

  handleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  submit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="username" name="username" onChange={this.handleChange}/>
            <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
            <input type="email" placeholder="email address" name="email" onChange={this.handleChange}/>
            <Link to="/login"><button onSubmit={this.submit}>Create</button></Link>
            <p className="message">Already registered?
              <Link to="/login">Sign In </Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
}
export default Register;