import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Show = () => {
    const[prod,setprod]=useState([])
let navigate=useNavigate()
    const showprod=()=>{
        axios.get("http://localhost:8000/prod").then((res)=>{setprod(res.data);console.log(res.data)})
    }
    useEffect(()=>{
        showprod()
    },[])
  return (
    
    <div className='show'>
      <h1 style={{paddingBottom:"4rem"}} >discover our range</h1>
      <div className="s1">
      {prod && prod.map((el)=>(
<div className="cards" key={el.id}>
  <div className='cover' ><img src={el.image} alt="" /></div>
   <button onClick={()=>navigate("/product/"+el.id)}>VIEW MORE</button></div>

      ) )}</div>
    </div>
  )
}

export default Show
