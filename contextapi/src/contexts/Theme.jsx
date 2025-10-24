import { createContext } from "react";
export const mytheme=createContext();
const Theme=(props)=>{
    let data="Hello"
   return(
    <>
    
     <div>
        
        <mytheme.Provider value={data}>
             {props.children}    
        </mytheme.Provider>
       
    
    
    </div>
    </>
   )
}
export default Theme