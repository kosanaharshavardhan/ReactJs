import { useState } from "react";
const App=()=>{
  // two way binding js change ui change and ui change js change
  // one way binding js change ui change but not vice versa
  const [val,setVal]=useState('');
  return(
    <form>
      Name<input type="text" name="name" id="nameid" value={val} onChange={(e)=>{
          setVal(e.target.value)
      }} />
      <button onClick={(e)=>{
        e.preventDefault()
        console.log(`submitted by ${val}`)
        setVal('')
      }} >Submit</button>
    </form>
  )
  
}

export default App