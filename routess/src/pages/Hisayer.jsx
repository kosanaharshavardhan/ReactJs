import { useParams } from "react-router-dom"

const Hisayer=()=>{
const params=useParams();
return(
    <>
    <div>`HI  {params.userid}`</div>
    
    </>
)
}
export default Hisayer