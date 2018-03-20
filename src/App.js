import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Login from './Login.js'
import SignUpForm from './Registration.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Login</h1>
        </header>
        <Login />
        <SignUpForm />
      </div>
    );
  }
}

export default App;
