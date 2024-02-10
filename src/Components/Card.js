import React from "react";

const Card = (props)=>{
    return (
        <div className="gym-card">
            <img src={props.url} alt={`${props.gymName} Gym`} className="gym-image" />
            <div className="gym-details">
                <h2 className="gym-name">{props.gymName} {props.website && <span>
                <a href={props.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                </span>}</h2>
                <p className="contact-name">Contact: {props.fullName}</p>
                <p className="contact-number">Phone: {props.contact}</p>
                <p className="address">Address: {props.address}</p>
            </div>
        </div>
    )
}

export default Card;