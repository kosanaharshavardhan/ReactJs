// import './App.css'
const App=()=>{

  function printevent(ee){
    console.log(":( --> :)")
    console.log(ee)
  }


  return <>
    {/* <div class="border-amber-600  border-2 h-full inline-block">App</div>
     */}
     <button onClick={function(e){
      printevent(e)
     }}>ClickMe</button>
  </>
}

export default App