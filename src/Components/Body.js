import React from "react";
import dumbell from "../Images/dumbell.webp"
import yoga from "../Images/yoga.jpg"
import zumba from "../Images/zumba.webp"
import gymtech from "../Images/GymTech.jpg"

const Body = ()=>{
    return (
        <>
    <section className="section-1">
        <div className="section-1-item">
            <div className="items-details"><p>Gym</p></div>
            <img src={dumbell} alt="dubmell" />
        </div>
        <div className="section-1-item">
            <div className="items-details"><p>Yoga</p></div>
            <img src={yoga} alt="yoga" />
        </div>
        <div className="section-1-item">
            <div className="items-details"><p>Zumba

            </p></div>
            <img src={zumba} alt="zumba" />
        </div>
    </section>

    <section className="section-2">
        <div className="section-2-heading">
            <p>Popular localities in and around Delhi NCR</p>
        </div>
        <div className="section-2-container">
            <div className="section-2-items">
                <div className="section-2-item">
                    <p className="item-head">Cannaught Place</p>
                    <p className="item-subhead">38 Gyms</p>
                </div>
                <div className="section-2-item">
                    <p className="item-head">Janakpuri</p>
                    <p className="item-subhead">64 Gyms</p>
                </div>
                <div className="section-2-item">
                    <p className="item-head">Rajouri Garden</p>
                    <p className="item-subhead">49 gyms</p>
                </div>
                <div className="section-2-item">
                    <p className="item-head">Gurgaon</p>
                    <p className="item-subhead">114 gyms</p>
                </div>
                <div className="section-2-item">
                    <p className="item-head">Pitampura</p>
                    <p className="item-subhead">61 gyms</p>
                </div>
                <div className="section-2-item">
                    <p className="item-head">Dwarka</p>
                    <p className="item-subhead">53 gyms</p>
                </div>
                <div className="section-2-item">
                    <p className="item-head">Rohini</p>
                    <p className="item-subhead">97 gyms</p>
                </div>
                <div className="section-2-item">
                    <p className="item-head">Saket</p>
                    <p className="item-subhead">39 gyms</p>
                </div>
                <div className="section-2-item">
                    <p className="item-head">Hauz Khas</p>
                    <p className="item-subhead">86 gyms</p>
                </div>
            </div>
        </div>
    </section>

    <section className="section-3">
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

export default Body;