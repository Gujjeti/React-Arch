import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between flex-wrap border-b p-5'>
   <h1 className="text-3xl font-bold ">
   Logo
  </h1>


  <ul className='flex gap-10'>
    <li>
      <Link to={'/'}>Home</Link>
      
    </li>
     <li>
    <Link to={'/about'}>About us</Link>
    </li>
    <li>
      <Link to={'/products'}>Products</Link>
      </li>
        <li>
      <Link to={'/contact'}>Contact us</Link>
      </li>
  </ul>
    </div>
  )
}

export default Header