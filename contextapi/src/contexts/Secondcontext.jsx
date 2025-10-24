import { createContext } from "react";

export const  mysecondcontext=createContext()
const Secondcontext=(props)=>{
  
    return(
        <mysecondcontext.Provider value={"WEll hello there"}>
            {props.children}
        </mysecondcontext.Provider>
    )
}

export default Secondcontext