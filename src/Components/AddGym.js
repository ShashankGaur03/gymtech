import React, { useState } from "react";

const AddGym = ()=>{

    const [gymName,setGymName] = useState("");
    const [fullName, setFullName] = useState("");
    const [contact,setContact] = useState("");
    const [city,setCity] = useState("");
    const [address,setAddress] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        // if(gymName==""){
        //     alert("Please enter a gym name.")
        //     return;
        // }
        // if(fullName==""){
        //     alert("Please enter the owner's name.")
        //     return;
        // }
        // if(contact==""){
        //     alert("Please enter the contact number.")
        //     return;
        // }
        // if(city==""){
        //     alert("Please select a city.")
        //     return;
        // }
        // if(address==""){
        //     alert("Please enter the gym address.")
        //     return;
        // }
    }

    return (
        <div className="addgym">
            <div className="container">
            <h1 className="form-title">Add a new gym</h1>
            <form onSubmit={handleSubmit}>
                <div className="main-user-info">
                    <div className="user-input-box">
                        <label htmlFor="gymName">Gym Name</label>
                        <input type="text"
                            id="gymName"
                            name="gymName"
                            placeholder="Enter Gym Name"
                            onChange={(event)=>{
                                setGymName(event.target.value);
                            }}
                        />
                    </div>
                    <div className="user-input-box">
                        <label htmlFor="fullname">Owner's Name</label>
                        <input type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Enter Owner's Name"
                            onChange={(event)=>{
                                setFullName(event.target.value);
                            }}
                        />
                    </div>
                    <div className="user-input-box">
                        <label htmlFor="contact">Contact</label>
                        <input type="text"
                            id="contact"
                            name="contact"
                            placeholder="Enter Gym Contact No."
                            onChange={(event)=>{
                                setContact(event.target.value);
                            }}
                        />
                    </div>
                    <div className="user-input-box">
                        <label htmlFor="dropdown">Select City</label>
                        <select 
                            id="dropdown"
                            onChange={(event)=>{
                                setCity(event.target.value);
                            }}
                        >
                            <option value="">Select</option>
                            <option value="Connaught Place">Connaught Place</option>
                            <option value="Janakpuri">Janakpuri</option>
                            <option value="Rajouri Garden">Rajouri Garden</option>
                            <option value="Gurgaon">Gurgaon</option>
                            <option value="Pitampura">Pitampura</option>
                            <option value="Dwarka">Dwarka</option>
                            <option value="Rohini">Rohini</option>
                            <option value="Saket">Saket</option>
                            <option value="Hauz Khas">Hauz Khas</option>
                        </select>
                    </div>
                    <div className="user-input-box-full">
                        <label htmlFor="password">Gym Address</label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Gym Address"
                            onChange={(event)=>{
                                setAddress(event.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="form-submit-btn">
                <input type="submit" value="Add" />
                </div>
            </form>
            </div>
        </div>
    )
}

export default AddGym;