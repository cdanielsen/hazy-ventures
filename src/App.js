import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'; 
import Packages from './Components/Packages'; 
import Questionaire from './Components/Questionaire'; 
import Testimonials from './Components/Testimonials'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Packages />
        <Questionaire />
        <Testimonials />
      </div>
    );
  }
}

export default App;
