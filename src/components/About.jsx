import React from 'react'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'
import about from "/src/assets/about.jpeg"
const About = () => {
  return (
    <div className='about' >
      <Navbar/>
      <div className="ab">
      <div className="a1">
      <h1>Hi MERCEDES I'M EYA BANI</h1>
      <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo tempore doloremque consequuntur fugiat aut culpa minima labore aliquid incidunt, iste, perspiciatis fuga temporibus eligendi obcaecati? Culpa hic ad eius! ipsum dolor, sit amet consectetur adipisicing elit. Mollitia at officiis deleniti illum quos! Rem est doloremque sed porro sit saepe officia tempora. Aperiam laborum commodi necessitatibus nihil autem repellat?</p>
  </div> 
  <div className='a2'>
  <img className='mer' src={about} alt="" /></div>
  </div> 
  <Footer/> </div>
  )
}

export default About

