import React from 'react'
import Logo from '../../assets/rentyard.png'

const Navbar = () => {
  return ( 
    <header className='flex justify-between items-center p-4 shadow'>
        <img src={Logo} alt="" className='cursor-pointer' />
        <button className='w-15 p-1 border-1 border-gray-200 rounded-sm cursor-pointer'>Exit</button>
    </header>
  )
}

export default Navbar