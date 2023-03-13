import React from 'react'
import { useNavigate } from 'react-router-dom'
const Hall = () => {

  let navigate=useNavigate()

  return (
    <div className='hall' >
        <div className="desc">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quidem velit placeat et voluptate, fuga incidunt eum repellat, est sit iste maiores a blanditiis nisi accusamus culpa. Alias, eveniet quos!</p>
      <button onClick={()=>navigate("/product")}>show collection</button></div>
    </div>
  )
}

export default Hall
