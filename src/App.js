import React, { Component } from 'react';
import r from './r-architecture-MAnVoJlQUvg-unsplash.jpg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={r} className="App-logo" alt="logo" />
          <h2>Welcome to my mansion!</h2>
          <button type='button' onClick={buttonclicked}>Click Me!</button>
        </div>
        <p className="App-intro">
         
        </p>
      </div>
    );
  }
}

function buttonclicked(){
  alert('you clicked me');
}

export default App;
