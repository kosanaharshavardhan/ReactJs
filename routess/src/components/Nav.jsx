import { Link } from "react-router-dom";
const Nav=()=>{
 return(
    <>
        THis is NAv bar <br />
     <Link to='/'>Home </Link>
     <Link to='/contact'>Contact</Link>
     <Link to='/products'> Product</Link>
    
    </>
 )
}
export default Nav;