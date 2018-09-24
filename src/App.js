import React, { Component } from 'react';
import home from './home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <br></br>
        <div className="box-login">  
            <br></br> 
            <img src ='https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3176472/580/390/m1/fpnw/wm0/1-.png?1504000065&s=e9ced1ccd1d91c45aa61478a69a98d18'/> 
            <h1>Please enter your name</h1>
            <input></input><br></br><br></br>  

            <div className="button">
            <a href="home">Sign-in</a>
            </div>

            <br></br> 
            <br></br> 
        </div>


      <br></br>
      </div>
    );
  }
}

export default App;
