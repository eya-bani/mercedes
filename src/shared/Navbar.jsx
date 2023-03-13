import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "/src/assets/logo.jpeg"
const Navbar = () => {
let navigate=useNavigate()



  return (
    <div className='nav'>
      <div className="part1">
        <div className="p1">
<h6>adresse</h6>
<h6>telephone</h6>
</div>
<div className="p2">
  <img  onClick={()=>navigate("/")} className='logo' src={logo} alt="" />
  <h4>eyabni</h4>
</div>
<div className="p3">
  <h6>rechercher</h6>
  <h6>toggler</h6>
</div>
      </div>

      <div className="part2">
        <ul>
          <li  onClick={()=>navigate("/home")} >home</li>
          <li  onClick={()=>navigate("/about")} >about</li>
          <li  onClick={()=>navigate("/product")} >product</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
