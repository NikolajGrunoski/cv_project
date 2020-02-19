import React, { Component } from 'react';
import HomePage from './components/homePage';
import { useSpring } from 'react-spring';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <HomePage/>
    );
  }
}

export default App;
