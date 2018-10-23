import React, { Component } from 'react';
import Login from './page/login';
import Home from './page/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        {/*<header className="App-header">*/}

          {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*</header>*/}
          {/*<Login/>*/}
          {/*<Home/>*/}
          {this.props.children}
      </div>
    );
  }
}

export default App;
