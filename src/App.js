import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button';

import './sass/main.scss';

// Components

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Lesson from './Components/Lesson';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container ">
          <ScrollUpButton />
          <Header />
          <Sidebar />
          <Lesson />
        </div>
      </Router>
    );
  }
}

export default App;
