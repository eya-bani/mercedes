import React from 'react'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'
import Hall from './Hall'


import Show from './Show'

const Allpages = () => {
  return (
    <div  className='allall'>
      <Navbar/>
    <Hall/>
      <Show/>
      <Footer/>
    </div>
  )
}

export default Allpages
