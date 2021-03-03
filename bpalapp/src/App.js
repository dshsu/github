import React, { Component } from 'react';
import './App.css';
import BPALApp from './components/BPALApp'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BPALApp />
      </div>
    );
  }
}

export default App;
