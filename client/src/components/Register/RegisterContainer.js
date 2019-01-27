import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link ,withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { login, setErrorMessage,register } from 'actions/appActions'
import ErrorView from 'components/ErrorView'
// import './style.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      fullname:'',
    }
  }

  compoponentWillMount(){
    this.props.clearErrors()
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
    const {errorMessage,submit,success} = this.props;
    return (
      <div>
      {success?(
          <Redirect to="/login" />
      ):(
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="username" name="username" onChange={this.handleChange}/>
            <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
            <input type="email" placeholder="email address" name="email" onChange={this.handleChange}/>
             <input type="text" placeholder="your full name" name="fullname" onChange={this.handleChange}/>
           <button onSubmit={this.submit}>Create</button>
            <p className="message">Already registered?
              <Link to="/login">Sign In </Link>
               <ErrorView message={errorMessage} />
            </p>
          </form>
        </div>
      </div>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: state.errorMessage,
  success : state.success
})

const mapDispatchToProps = dispatch => ({
  submit: (username, password,email,fullname) => dispatch(login(username, password,email,fullname)),
  clearErrors: () => dispatch(setErrorMessage(''))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))