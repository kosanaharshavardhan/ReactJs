import { useState } from 'react'

import './App.css'
import NAV from './components/NAV'

function App() {
 const[theme ,setTheme]=useState("light");
 return(
  <>
  <NAV theme={theme} setTheme={setTheme}></NAV>
  </>
 )
}

export default App
