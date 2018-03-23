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
        <form className="loginContainer" action="http://localhost:3000/user" method="POST">
          <InputBox label="First Name" type="text" name="firstname"/>
          <InputBox label="Last Name" type="text" name="lastname"/>
          <InputBox label="Phone Number" type="text" name="number"/>
          <InputBox label="Email Address" type="text" name="email"/>
          <InputBox label="Confirm Email Address" type="text" name="ConfirmEmail"/>
          <InputBox label="Password" type="password" name="password"/>
          <InputBox label="Confirm Password" type="password" name="ConfirmPassword"/>
          <div className="right">
            <button className="submit" value="Submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}