import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

const Idprod = () => {
  const {id}=useParams()
  const[prix,setprix]=useState()
  const[title,settitle]=useState()
  const[image,setimage]=useState()
  const[prod,setprod]=useState({})
  let navigate= useNavigate()
  const[ope,setope]=useState(false)
  const[upid,setupid]=useState()
  const oneget=()=>{

axios.get(`http://localhost:8000/prod/${id}`).then((res)=>{setprod(res.data);console.log(res.data)})



  }
  useEffect(()=>{
  oneget();
},[])
const delprod=(id)=>{
  axios.delete(`http://localhost:8000/prod/${id}`).then((res)=>alert("the article is deleted"))
navigate("/")
  }
  const upprod=(id)=>{

    axios.put(`http://localhost:8000/prod/${upid}`,{image:image  ,title:title, prix:prix })
    .then((res)=>console.log("the article is updated"));window.location.reload()
    
    }
  return (


    <div   className='idprod'>
      <Navbar/>
      <div className="id1">
    <div className='id2'> <img src={prod.image} alt="" /></div>

<div className="id22">
<div className="pr1">
      <h1>{prod.title}</h1>
    <h1>{prod.prix}</h1></div>
  <p>Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa suscipit minus quisquam delectus commodi! Libero reiciendis totam quo a nobis! Architecto veritatis optio corrupti, ratione recusandae repellendus culpa fuga quo! sit amet consectetur adipisicing elit. Repellendus nisi a harum possimus veritatis consequuntur voluptas iusto hic nam, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus impedit laboriosam autem nemo eum quaerat reprehenderit necessitatibus voluptatibus accusantium, quos, sint culpa similique molestiae suscipit consequuntur voluptates enim repellendus quo. sapiente maiores amet quibusdam temporibus aperiam cum. Soluta corrupti eligendi numquam.</p>

  <div className="pr2">
<button onClick={()=>delprod(prod.id)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></button>
<button  onClick={()=>{setope(true);setimage(prod.image);settitle(prod.title);setprix(prod.prix);setupid(prod.id)}} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg></button></div>
<div  className={`forma ${ope ? "open" :""} `}>
  <form  className='fff' onSubmit={()=>upprod(upid)}>
  <h1>update form</h1>
  <div  className='x'  onClick={()=>setope(false)}>X</div>
  <input type="text"  value={image}     onChange={(id)=>setimage(id.target.value)}   />
  <input type="text"  value={prix}     onChange={(id)=>setprix(id.target.value)}   />
  <input type="text"  value={title}     onChange={(id)=>settitle(id.target.value)}   />
  <button type="submit">upp</button>
</form>
</div>

</div>

</div>

<Footer/>
    </div>
  )
}

export default Idprod
