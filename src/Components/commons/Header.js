import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail, MdOutlineEmail } from "react-icons/md";


const Header = () => {
  return (
    <div className='text-white p-10 pt-5 pb-5 flex justify-between text-[20px]' >
      <div>
        <p>Naseefu</p>
      </div>
      <div className='flex gap-5'>
        <p className='cursor-pointer'><FaLinkedin/></p>
        <p className='cursor-pointer'><FaGithub/></p>
        <p className='cursor-pointer'><MdAlternateEmail /></p>
        <p className='cursor-pointer'><FaInstagram /></p>
      </div>
    </div>
  )
}

export default Header
