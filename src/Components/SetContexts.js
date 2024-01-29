import React, { useContext, useEffect } from "react";
import { gymContext } from "../Contexts/GymContext";
import { db } from "../firebase-config";
import { ref as dbRef, get } from "firebase/database";

const SetContexts = ()=>{

    const a = useContext(gymContext);

    useEffect(()=>{
        if(a.length>0) return;
        get(dbRef(db)).then((snapshot)=>{
            if(!snapshot.val()) return;
            const temp = [];
            // let cp,jp,rg,gg,pt,dw,rh,sk,hk;
            // cp=jp=rg=gg=pt=dw=rh=sk=hk=0;
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
        <div />
    )
}

export default SetContexts;