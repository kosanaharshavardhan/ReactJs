import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
const Product=()=>{
 return(
    <>
    {/* <div> us here</div> */}
    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1SBSeWMjluX_VmFoJUDFmww2te5LStu21A&s" alt="" /> */}
    <br />
    <Link to='/products/men'>mEN</Link>
    <Link to='/products/women'>WomEN</Link>

     <Outlet/>
    </>
 )
}
export default Product