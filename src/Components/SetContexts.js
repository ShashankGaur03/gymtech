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
            let cp,jp,rg,gg,pt,dw,rh,sk,hk;
            cp=jp=rg=gg=pt=dw=rh=sk=hk=0;
            Object.keys(snapshot.val()).map((key)=>{
                temp.push(snapshot.val()[key]);
                const s = snapshot.val()[key].city;
                if(s==="Connaught Place") cp++;
                else if(s==="Janakpuri") jp++;
                else if(s==="Rajouri Garden") rg++;
                else if(s==="Gurgaon") gg++;
                else if(s==="Pitampura") pt++;
                else if(s==="Dwarka") dw++;
                else if(s==="Rohini") rh++;
                else if(s==="Saket") sk++;
                else hk++;
                a.setCp(cp);
                a.setJp(jp);
                a.setRg(rg);
                a.setGg(gg);
                a.setPt(pt);
                a.setDw(dw);
                a.setRh(rh);
                a.setSk(sk);
                a.setHk(hk);
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