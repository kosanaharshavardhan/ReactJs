import './App.css'
import { Route,Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
const App=()=>{
  return (
    <>
  <Nav/>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Product/>}>
          <Route path='men' element={<Men/>}></Route>
          <Route path='women' element={<Women/>}></Route>
      </Route>
      {/* <Route path='*'></Route> // no route is there 404 */}
  </Routes>
  </>
  )
}

export default App

