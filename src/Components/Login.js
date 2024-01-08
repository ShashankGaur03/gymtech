import React, { useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Login = ()=>{

    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setRegisterPassword] = useState("");
    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");
    const [user,setUser] = useState({});

    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
    },[])

    const register = async ()=>{
        try{
            const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
            console.log(user);
            navigate("/",{replace:true});
        } catch(error){
            console.log(error);
        }

    }

    const login = async ()=>{
        try{
            const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
            console.log(user);
            navigate("/",{replace:true});
            
        } catch(error){
            console.log(error);
        }
    }

    const logout = async ()=>{
        await signOut(auth);
    }

    const navigate = useNavigate();

    return (
        <div>
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

            <h4>User Logged In:</h4>
            {user?.email}
            <button onClick={logout}>Log out</button>

        </div>
    )
}

export default Login;