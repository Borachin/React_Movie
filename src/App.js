import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';

function App() {

  return(
    // <div className="App">
    //   <div className="container">
    //       <div className="login-form">
    //           <h4>로그인 박스</h4>
    //           <label>ID</label>
    //           <input type="text" id="loginid" placeholder="ID를 입력하세요"></input>

    //           <label>Password</label>
    //           <input type="text" id="loginpw" placeholder="PW를 입력하세요"></input>
              
    //           <button type="submit" onclick="loginsubmit()">Login</button>
    //       </div>
    //   </div>
    // </div>
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <switch>
          <Router path="/Dashboard">
            <Dashboard/>
          </Router>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
