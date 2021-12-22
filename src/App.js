import logo from './logo.svg';
import { Switch, Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Main';
import About from './components/About';
import Portofolio from './components/Portofolio';
import './components/FontAwesomeIcons';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Home exact path="/" />
        <Portofolio path="/portofolio" />
        <About path="/about" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
