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
        <a href='https://www.linkedin.com/in/naseefu-rahman-karumannil/' target='/'><p className='cursor-pointer'><FaLinkedin/></p></a>
        <a href='https://github.com/naseefu' target='/'><p className='cursor-pointer'><FaGithub/></p></a>
        <a href='mailto:naseefrahman90@gmail.com' target='/'><p className='cursor-pointer'><MdAlternateEmail /></p></a>
        <a href='https://www.instagram.com/_naseef____?igsh=ZTVpaGVwbjVxenow&utm_source=qr' target='/'><p className='cursor-pointer'><FaInstagram /></p></a>
      </div>
    </div>
  )
}

export default Header
