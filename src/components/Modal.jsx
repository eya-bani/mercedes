import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

const Modal = () => {
  const[prix,setprix]=useState()
const[title,settitle]=useState()
let navigate=useNavigate()
const[image,setimage]=useState()
const adprod=(e)=>{
  e.preventDefault()
axios.post(`http://localhost:8000/prod/`,{title:title ,prix:prix , image:image})
.then((res)=>console.log(res.data))
navigate("/")

}
  return (
    <div className='modal'>
      <Navbar/>
      <div className='mo'>
      <h1>ADD NEW CARS</h1>
      <form  className='m1' onSubmit={adprod}>
<input type="text" placeholder='image'  onChange={(e)=>setimage(e.target.value)} />
<input type="text" placeholder='title'  onChange={(e)=>settitle(e.target.value)} />
<input type="text" placeholder='prix'  onChange={(e)=>setprix(e.target.value)} />
  <button type="submit" >aad</button>
  </form></div>
  <Footer/>
    </div>
  )
}

export default Modal
