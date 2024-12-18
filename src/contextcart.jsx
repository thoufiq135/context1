import { createContext } from "react";
import { useState } from "react";
export const Countercontext=createContext()

export const CountProvider=((p)=>{
    let[quantity,setquantity]=useState({1:0,2:0,3:0,4:0})
let[total,settotal]=useState(0)
let[item,setitem]=useState([])
    return(
        <Countercontext.Provider value={{name:"Thoufiq",quantity,setquantity,total,settotal,item,setitem}}>
        {p.children}
    </Countercontext.Provider>
    )
})
