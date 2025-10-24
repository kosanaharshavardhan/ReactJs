const NAV=(props)=>{
   return(
    <>
     <div>
        `The theme is {props.theme}`
    </div>
    <button onClick={
        ()=>{
            props.setTheme("dark");
        }
    }>Make dark</button>
    </>
   )
}
export default NAV;