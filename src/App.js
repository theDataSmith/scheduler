import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import Header from './components/Header'
class App extends Component {
  render() {
    return (
      <div className="App">
		  <div className="SideBar">
			<Header/>
		  </div>
		  <div className="Body">
			  <Header />
		  </div>
      </div>
    );
  }
}


export default connect(
	(state) => ({

	}),
	(dispatch) => ({

	})
)(App)
