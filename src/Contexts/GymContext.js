import { createContext, useState } from "react";
export const gymContext = createContext();
export const GymState = (props)=>{

    const [arr,setArr] = useState([]);
    const [cp,setCp] = useState(0);
    const [jp,setJp] = useState(0);
    const [rg,setRg] = useState(0);
    const [gg,setGg] = useState(0);
    const [pt,setPt] = useState(0);
    const [dw,setDw] = useState(0);
    const [rh,setRh] = useState(0);
    const [sk,setSk] = useState(0);
    const [hk,setHk] = useState(0);

    return (
        <gymContext.Provider value={{arr,setArr,cp,setCp,jp,setJp,rg,setRg,gg,setGg,pt,setPt,dw,setDw,rh,setRh,sk,setSk,hk,setHk}}>
            {props.children}
        </gymContext.Provider>
    )
}