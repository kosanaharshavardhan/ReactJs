import { useState , useEffect} from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  // useEffect(()=>{
  // contetn()
  // }) // runs for every renreder

useEffect(()=>{
  contetn()
  },[]) // runs for once   
  // [a] runs only when a changes
  //[b] runs only when b changes

 
function contetn(){
  console.log("use effect")
}
  return (
    <>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button  onClick={function(){
          setCount(count-1)
        }}>decreased count {count}</button>
       </div>
    </>
  )
}

export default App
