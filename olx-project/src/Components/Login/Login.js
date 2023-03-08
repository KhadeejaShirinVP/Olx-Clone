import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import "firebase/compat/auth"

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext);
  const navigate=useNavigate()
  const handleLogin=(e)=>{
      e.preventDefault()
      firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        navigate('/')
      }).catch((error)=>{
        alert(error.message)
      })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='login'></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;