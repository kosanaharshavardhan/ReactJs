import { useContext } from "react";
import { mysecondcontext } from "../contexts/Secondcontext";
import { mytheme } from "../contexts/Theme";
import style from '../styles/nav.module.css'
const Separate= ()=>{
    const sepdata=useContext(mytheme);
    const sepsec=useContext(mysecondcontext)
    return(
        <>
        <div className={style.div}>{sepdata}</div>
        <div className={style.div}>{sepsec}</div>
        </>
    )
}
export default Separate