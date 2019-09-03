import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
// import Login from './components/Login';
import Facebook from './components/Facebook';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Offsets</h3>
      <Facebook />
      </div>
    );
  }
}

export default App;
