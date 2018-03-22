import React, { Component } from "react";
import "./Login.css";
import InputBox from "./components/InputField"

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit} action="/login" method="get">
          <div className="loginContainer">
            <InputBox label="Email" type="text" name="Email"/>
            <InputBox label="Password" type="password" name="Password"/>
          </div>
          <div className="right">
            <input className="submit" type="submit" formMethod="get" formAction={window.location.href + "login"} value="Log In" />
          </div>
          <div>
            <span>Not a User? </span>
            <a href={window.location.href + 'signup'}>Register Now!</a>
          </div>
        </form>
      </div>
    );
  }
}