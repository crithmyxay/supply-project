import React, { Component } from "react";
import "./Login.css";
import InputBox from "./components/InputField"

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
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
        <form onSubmit={this.handleSubmit}>
          <div className="loginContainer">
            <InputBox label="First Name" type="text" name="firstName"/>
            <InputBox label="Last Name" type="text" name="lastName"/>
            <InputBox label="Phone Number" type="text" name="phone"/>
            <InputBox label="Email Address" type="text" name="email"/>
            <InputBox label="Confirm Email Address" type="text" name="confirmEmail"/>
            <InputBox label="Password" type="password" name="password"/>
            <InputBox label="Confirm Password" type="password" name="confirmPassword"/>
          </div>
          <div className="right">
            <button type="submit" formMethod="post" formAction={window.location.href + "register"}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}