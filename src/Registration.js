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

  // formMethod="post" formAction={window.location.href + "register"}d

  render() {
    return (
      <div className="Login">
        <form action="http://localhost:3000/register">
          <div className="loginContainer">
            <InputBox label="First Name" type="text" name="FirstName"/>
            <InputBox label="Last Name" type="text" name="LastName"/>
            <InputBox label="Phone Number" type="text" name="Phone"/>
            <InputBox label="Email Address" type="text" name="Email"/>
            <InputBox label="Confirm Email Address" type="text" name="ConfirmEmail"/>
            <InputBox label="Password" type="password" name="Password"/>
            <InputBox label="Confirm Password" type="password" name="ConfirmPassword"/>
          </div>
          <div className="right">
            <button className="submit" value="Submit" onClick={console.log('clicked')}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}