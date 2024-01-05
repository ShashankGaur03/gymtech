import React from "react";
import img1 from "../Images/best-luxury-gyms-london-1577449934.jpg";
import gymtech from "../Images/GymTech.jpg"

const Header = ()=>{
    return (
        <header>
        <div className="nav">
            <div>
                <p>Get The App</p>
            </div>
            <ul className="nav-bar">
                <li>Add Gym</li>
                <li>Log in</li>
                <li>Sign up</li>
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