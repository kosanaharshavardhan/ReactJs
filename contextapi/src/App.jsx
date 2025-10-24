
import './App.css'
import {mytheme}  from './contexts/Theme'
import { useContext } from 'react'

import { mysecondcontext } from './contexts/Secondcontext';
import Separate from './components/separate';
function App() {
  const data=useContext(mytheme);
  const seconddata=useContext(mysecondcontext)
  return (
    <>
    <div>{data}</div>
    <div>{seconddata}</div>
    <br />
    <Separate></Separate>
    </>
  );
}

export default App
