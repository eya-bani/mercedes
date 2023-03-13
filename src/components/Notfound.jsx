import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "/src/assets/logo.jpeg"
const Notfound = () => {
  let navigate=useNavigate()
  return (
    <div  className='notfound'>
      <marquee>   SOORY THIS PAGE IS NOT FOUND</marquee>
 <img className='noi'    onClick={()=>navigate("/")} src={logo} alt="" />
  
  <h1>clic here <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg></h1>
    </div>
  )
}

export default Notfound
