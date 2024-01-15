import React, { useContext, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { gymContext } from "../Contexts/GymContext";
import { db } from "../firebase-config";
import { ref as dbRef, get } from "firebase/database";

const Home = ()=>{

    const a = useContext(gymContext);

    useEffect(()=>{
        get(dbRef(db)).then((snapshot)=>{
            const temp = [];
            Object.keys(snapshot.val()).map((key)=>{
                temp.push(snapshot.val()[key]);
                const s = snapshot.val()[key].city;
                if(s==="Connaught Place"){
                    a.setCp((prev)=>{
                        return prev+1;
                    })
                }
                else if(s==="Janakpuri"){
                    a.setJp((prev)=>{
                        return prev+1;
                    })
                }
                else if(s==="Rajouri Garden"){
                    a.setRg((prev)=>{
                        return prev+1;
                    })
                }
                else if(s==="Gurgaon"){
                    a.setGg((prev)=>{
                        return prev+1;
                    })
                }
                else if(s==="Pitampura"){
                    a.setPt((prev)=>{
                        return prev+1;
                    })
                }
                else if(s==="Dwarka"){
                    a.setDw((prev)=>{
                        return prev+1;
                    })
                }
                else if(s==="Rohini"){
                    a.setRh((prev)=>{
                        return prev+1;
                    })
                }
                else if(s==="Saket"){
                    a.setSk((prev)=>{
                        return prev+1;
                    })
                }
                else{
                    a.setHk((prev)=>{
                        return prev+1;
                    })
                }
                return 0;
            });
            a.setArr(temp);
        });
        // eslint-disable-next-line
    },[]);

    return (
        <>
            <Header />
            <button onClick={()=>console.log(a)}>Click me</button>
            <Body />
            <Footer />
        </>
    )
}

export default Home;