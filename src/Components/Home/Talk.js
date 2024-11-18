import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

const Talk = () => {
  return (
    <div className='p-10 flex flex-col gap-5 lg:pl-[10vw] lg:pr-[10vw]'>
      <h1 className='text-[4.8vw] md:text-[36px]'>Let's talk</h1>
      <p className='text-gray-500 mb-5 text-[3vw] md:text-[19px]'>Whether you have a question, a project idea, or just want to say hi, feel free to reachout. 
        You can contact me through mail or connect with me on linkedin.</p>
      <div className='flex gap-10 items-center justify-center text-[18px] md:text-[19px]'>
        <a href='https://www.linkedin.com/in/naseefu-rahman-karumannil/' target='/'><p className='cursor-pointer'><FaLinkedin/></p></a>
        <a href='https://github.com/naseefu' target='/'><p className='cursor-pointer'><FaGithub/></p></a>
        <a href='mailto:naseefrahman90@gmail.com' target='/'><p className='cursor-pointer'><MdAlternateEmail /></p></a>
        <a href='https://www.instagram.com/_naseef____?igsh=ZTVpaGVwbjVxenow&utm_source=qr' target='/'><p className='cursor-pointer'><FaInstagram /></p></a>
      </div>
    </div>
  )
}

export default Talk
