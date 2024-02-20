import React from "react";
import gymtech from "../Images/GymTech.jpg"

const Footer = ()=>{
    return (
        <>
            <section id="section-3">
            <div className="section-3-container">
                <div className="section-3-img">
                    <img src={gymtech} alt="gymtech" />
                </div>
                <div className="section-3-content">
                    <h1>Get the GymTech App</h1>
                    <p>
                        Download the app from
                    </p>
                    <div className="section-3-download">
                        <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="google play" />    
                        <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="app store" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer;