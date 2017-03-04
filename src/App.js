import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="SideBar">
              <input type="Text" className="SearchBar"/>
              <div className="SidePane">
                Foobar
              </div>
          </div>
          <div className="ContentPane">
          </div>
      </div>
    );
  }
}

export default App;
