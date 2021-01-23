import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className="container">
      <div className="container">
          <div className="login-form">
              <h4>로그인 박스</h4>
              <label>ID</label>
              <input type="text" id="loginid" placeholder="ID를 입력하세요"></input>

              <label>Password</label>
              <input type="text" id="loginpw" placeholder="PW를 입력하세요"></input>
              
              <button type="submit" onclick="loginsubmit()">Login</button>
          </div>
      </div>
    </div>
  );
}

export default App;
