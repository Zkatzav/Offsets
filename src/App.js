import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { observer, inject } from 'mobx-react'
import Facebook from './components/Facebook';
import Signup from './components/Signup';
import SelectOffsets from './components/SelectOffset'
import Offset from './components/Offset';


@inject("user")
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Router>
        <Route path="/" exact render={() => <Facebook app={this} />} />
        <Route path="/signup" exact render={() => <Signup />} />
        <Route path="/select-offsets" exact render={() => <SelectOffsets />} />
        <Route path="/offset" exact render={() => <Offset />} />
      </Router>
      </div>
    );
  }
}

export default App;
