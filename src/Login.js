import React, { Component } from "react";
import "./Login.css";
import InputBox from "./components/InputField"
// import axios from 'axios'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  // componentDidMount() {
  //   axios.get(`http://localhost:3000/login/`)
  //   .then(()=> {
  //     console.log(this.state.email);
  //     console.log(this.state.password)
  //   })
  //   .catch((error)=> {
  //     console.log(error);
  //   })
  // }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  // onChange={this.handleChange}

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form className="loginContainer" action="/login" method="POST">
            <InputBox label="Email" type="text" name="email" />
            <InputBox label="Password" type="password" name="password" />
            <button className="submit" type="submit" value="Log In">Login</button>
        </form>
          <div>
            <span>Not a User? </span>
            <a href={window.location.href + 'signup'}>Register Now!</a>
          </div>
      </div>
    );
  }
}