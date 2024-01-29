import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gymContext } from "../Contexts/GymContext";
import _ from "lodash";
import Card from "./Card";

const Gyms = ()=>{

    const [arr,setArr] = useState([]);
    const [city,setCity] = useState("");
    const params = useParams();
    const a = useContext(gymContext);

    useEffect(()=>{
        setArr(a.arr.filter((e)=>{
            if(city==="" && _.kebabCase(e.city)===params.city) setCity(e.city);
            return _.kebabCase(e.city)===params.city;
        }));
        // eslint-disable-next-line
    },[a]);

    return (
        <>
            <h1>Gyms in {city}</h1>
            <div className="gyms">
            {arr.map((e,i)=>{
                return (
                    <Card 
                        key={i}
                        gymName={e.gymName}
                        fullName={e.fullName}
                        contact={e.contact}
                        address={e.address}
                        url={e.url}
                        website={e.website}
                    />
                )
            })}
            </div>
        </>
    )
}

export default Gyms;