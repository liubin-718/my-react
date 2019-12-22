import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateMsg from './components/StateMsg'
import Vmodule from './components/Vmodule'
import HocTest from './components/HocTest.tsx'
import Composition from './components/Composition'
import HooksTest from './components/HooksTest'

function App(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div className="App">
          <Vmodule/>
          <StateMsg/>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <HocTest/>
          <Composition/>
          <HooksTest/>
      </div>
    </div>
  );
}

export default App;
