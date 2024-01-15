import React, { useState } from "react";
import { storage , db } from "../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ref as dbRef , set} from "firebase/database";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const AddGym = ()=>{

    const [gymName,setGymName] = useState("");
    const [fullName, setFullName] = useState("");
    const [contact,setContact] = useState("");
    const [city,setCity] = useState("");
    const [address,setAddress] = useState("");
    const [image,setImage] = useState(null);
    const [flag,setFlag] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        setFlag(false);
        event.preventDefault();
        if(gymName===""){
            alert("Please enter a gym name.")
            setFlag(true);
            return;
        }
        if(fullName===""){
            alert("Please enter the owner's name.")
            setFlag(true);
            return;
        }
        if(contact===""){
            alert("Please enter the contact number.")
            setFlag(true);
            return;
        }
        if(city===""){
            alert("Please select a city.")
            setFlag(true);
            return;
        }
        if(address===""){
            alert("Please enter the gym address.")
            setFlag(true);
            return;
        }
        let ext = "";
        const len = image.name.length;
        for(let i=len-1 ; i>=0 ; i--){
            if(image.name[i]==='.') break;
            ext += image.name[i];
        }
        ext = ext.split("").reduce((acc,char)=>char+acc+"");
        if(ext!=="png" && ext!=="jpg" && ext!=="jpeg"){
            alert("Image is not of specified type");
            setFlag(true);
            return;
        }
        const imageRef = ref(storage,`${image.name+v4()}`);
        uploadBytes(imageRef,image).then((res)=>{
            getDownloadURL(res.ref).then((url)=>{
                set(dbRef(db,`${v4()}`),{
                    "gymName":gymName,
                    "fullName":fullName,
                    "contact":contact,
                    "city":city,
                    "address":address,
                    "url":url
                });
                navigate("/",{replace:true});
            }).catch((error)=>{
                setFlag(true);
                console.log(error);
            })
        }).catch((error)=>{
            setFlag(true);
            console.log(error);
        })
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
                            name="dropdown"
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
                        <label htmlFor="address">Gym Address</label>
                        <input type="text"
                            id="address"
                            name="address"
                            placeholder="Enter Gym Address"
                            onChange={(event)=>{
                                setAddress(event.target.value);
                            }}
                        />
                    </div>
                    <div className="user-input-box">
                        <label htmlFor="image">Upload an Image {"JPG/JPEG/PNG"}</label>
                        <input 
                            type="file" 
                            id="image"
                            name="image"
                            onChange={(event)=>{
                                setImage(event.target.files[0]);
                            }}
                        />
                    </div>
                </div>
                <div className="form-submit-btn">
                {flag && <input type="submit" value="Add" />}
                {!flag && <input type="submit" value="Add" disabled={true}/>}
                </div>
            </form>
            </div>
        </div>
    )
}

export default AddGym;