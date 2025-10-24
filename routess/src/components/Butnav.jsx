import { useNavigate } from "react-router-dom"
const Butnav=()=>{
    const navi=useNavigate();
   return(
    <>
     <button onClick={()=>{
        navi('/') // goes to home
    }}>Return to Home</button>

    <button onClick={()=>{
        navi(-1) // history goes to previous visited page
    }}>Back</button>

    <button onClick={()=>{
        navi(+1) 
    }}>Next</button>

    <button onClick={()=>{
        navi(1) // same as +1
    }}>Hmm</button>
    </>
   )

}
export default Butnav