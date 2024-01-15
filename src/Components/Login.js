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
            Login page
            <div>
                <h3>Register User</h3>
                <input 
                    placeholder="Email" 
                    onChange={(event)=>{
                        setRegisterEmail(event.target.value);
                    }}
                />
                <input 
                    type="password"
                    placeholder="Password" 
                    onChange={(event)=>{
                        setRegisterPassword(event.target.value);
                    }}
                />
                <button onClick={register}>Create User</button>
            </div>

            <div>
                <h3>Login</h3>
                <input 
                    placeholder="Email" 
                    onChange={(event)=>{
                        setLoginEmail(event.target.value);
                    }}
                />
                <input 
                    type="password"
                    placeholder="Password" 
                    onChange={(event)=>{
                        setLoginPassword(event.target.value);
                    }}
                />
                <button onClick={login}>Login</button>
            </div>
            <button type="button" class="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default Login;