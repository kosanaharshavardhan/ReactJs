// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


// export default App
// import nav from './components/nav'
// import Box from './components/box'




// const App=()=>{
//   return(
//     <>
//     {nav()}
//     <Box class="red"/>
//     {/* <Box /> // only components allows capital letters */}
//     <Box class = "blue"/>
//     <Box class = "green"/>
//     <Box class = "yellow"/>
//     <Box class = "purple"/>
  

   
//     {/* <h1>My first react render</h1>
//     <h2>Learn react</h2>
//     <button>CLick Me</button> */}
//     </>
//   )
// }

import './App.css'  

import Fakedbfetch from './components/fakedbfetch';

const App =()=>{

  const data= [
  { name: "Arjun", branch: "CSE", class: "red" },
  { name: "Priya", branch: "ECE", class: "blue" },
  { name: "Rohan", branch: "CSM", class: "green" },
  { name: "Sneha", branch: "EEE", class: "yellow" },
  { name: "Karan", branch: "Civil", class: "purple" },
  { name: "Anika", branch: "MECH", class: "red" },
  { name: "Vikram", branch: "CSD", class: "blue" },
  { name: "Isha", branch: "CSE", class: "green" },
  { name: "Aditya", branch: "ECE", class: "yellow" },
  { name: "Meera", branch: "Civil", class: "purple" },
];


  return(
    <div className="parent">
      {data.map((Element,index)=>{
        return (
        <div key={index}>
          <Fakedbfetch class={Element.class} name={Element.name} branch={Element.branch}/>
        </div>
        )
      })}
    </div>

  )
}
export default App