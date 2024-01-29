import React, { useState } from "react";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";
import { auth , provider } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Login = ()=>{

    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setRegisterPassword] = useState("");
    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");

    const register = async ()=>{
        try{
            await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
            navigate("/",{replace:true});
        } catch(error){
            console.log(error);
        }
    }

    const login = async ()=>{
        try{
            await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
            navigate("/",{replace:true});
        } catch(error){
            console.log(error);
        }
    }

    const signInWithGoogle = async ()=>{
        try{
            await signInWithPopup(auth,provider);
            navigate("/",{replace:true});
        } catch(error){
            console.log(error);
        }
    }

    const navigate = useNavigate();

    return (
        <div className="container-login">
        <div className="container">
          <h1 className="form-title">Create a new account</h1>
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="register-email">Email</label>
              <input
                className="input-field"
                type="text"
                placeholder="Email"
                name="register-email"
                id="register-email"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
              </div>
            <div className="user-input-box">
              <label htmlFor="register-password">Password</label>
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="register-password"
                id="register-password"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
            </div>
            <button className="action-button" onClick={register}>
              Create User
            </button>
          </div>
          <h1 className="form-title">Login</h1>
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="login-email">Email</label>
              <input
                className="input-field"
                type="text"
                placeholder="Email"
                name="login-email"
                id="login-email"
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="login-password">Password</label>
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="login-password"
                id="login-password"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
              />
            </div>
            <button className="action-button" onClick={login}>
              Login
            </button>
          </div>
          <button
            className="login-with-google-btn"
            type="button"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </button>
        </div>
        </div>
      );
}

export default Login;