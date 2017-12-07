import React, {Component} from 'react';
import OnThisDay from './OnThisDay';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="logo">On This Day</h1>
        <OnThisDay/>
      </div>);
  }
}

export default App;
