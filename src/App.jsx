import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Allpages from './components/Allpages'
import Home from './components/Home'
import Idprod from './components/Idprod'
import Modal from './components/Modal'
import Notfound from './components/Notfound'
import Product from './components/Product'

function App() {

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route  path='*'  element={<Notfound/>} ></Route>
      <Route  path=''  element={<Allpages/>} ></Route>
      <Route  path='/home'  element={<Home/>} ></Route>
      <Route  path='/product'  element={<Product/>} ></Route>
      <Route  path='/about'  element={<About/>} ></Route>
      <Route  path='/modal'  element={<Modal/>} ></Route>
      <Route  path='/product/:id'  element={<Idprod/>} ></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
