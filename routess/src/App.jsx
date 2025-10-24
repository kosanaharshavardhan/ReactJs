import './App.css'
import { Route,Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
const App=()=>{
  return (
    <>
  <Nav/>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </>
  )
}
export default App

