import React, { Component } from 'react';
import Header from './Header/Header';
import Crypto from './Crypto/Crypto';
import './css/style.css';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
            <Header/>
            <div className="container"><Crypto/></div>  
      </div>
    );
  }
}

export default App;
