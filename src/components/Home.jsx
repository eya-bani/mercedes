import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

const Home = () => {
  let navigate=useNavigate()
  return (
    <div className='home'>
   <Navbar/>
   
      <div className="desc">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quidem velit placeat et voluptate, fuga incidunt eum repellat, est sit iste maiores a blanditiis nisi accusamus culpa. Alias, eveniet quos!</p>
      <button onClick={()=>navigate("/product")}>show collection</button></div>
      <Footer/>
    </div>
  )
}

export default Home
