import React, { useEffect, useState } from "react";
import img1 from "../Images/best-luxury-gyms-london-1577449934.jpg";
import gymtech from "../Images/GymTech.jpg"
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";
import { onAuthStateChanged , signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const Header = ()=>{

    const [user,setUser] = useState({});

    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
    },[])

    const logout = async ()=>{
        await signOut(auth);
    }

    return (
        <header>
        <div className="nav">
            <div>
                <p>Get The App</p>
            </div>
            <ul className="nav-bar">
                <li>
                    <Link to="section-1" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                {!user && <li>
                    <NavLink to="/login">
                        Add Gym
                    </NavLink>
                </li>}
                {user && <li>
                    <NavLink to="/addgym">
                        Add Gym
                    </NavLink>
                </li>}
                {!user && <li>
                    <NavLink to="/login">
                        Log in/Sign up
                    </NavLink>
                </li>}
                {user && <>
                <li>
                    {user.email}
                </li>
                <button onClick={logout}>Logout</button>
                </>
                }
            </ul>
        </div>
        <div className="head">
            <img className="logo" src={gymtech} alt="logo"/>
            <h3>Discover the best Gyms in Delhi NCR</h3>
            <div className="search">
                <div className="search-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Ymca, 1, Ashoka Rd, Hanu</p>
                </div>
                <div className="search-item">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search for Gym near you" />
                </div>
            </div>
        </div>
        <div className="header-image">
            <img src={img1} alt="" />
        </div>
    </header>
    )
}

export default Header;