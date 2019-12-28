import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateMsg from './components/StateMsg'
import Vmodule from './components/Vmodule'
import HocTest from './components/HocTest.tsx'
import Composition from './components/Composition'
import HooksTest from './components/HooksTest'
import AntdFormTest from './components/AntdFormTest'
import LFormTest from './components/LFormTest';
import Dialog2, {Dialog} from './components/Dialog';

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
          <AntdFormTest/>
          <LFormTest/>
          <Dialog>弹框组件</Dialog>
          <Dialog2>弹框组件2</Dialog2>
      </div>
    </div>
  );
}

export default App;
