import React from 'react'
import { SlCloudDownload } from "react-icons/sl";

const Resume = () => {
  return (
    <div className='p-10 flex flex-col gap-5 lg:pl-[10vw] lg:pr-[10vw]'>
      <h1 className='text-[4.8vw] md:text-[36px]'>Resume</h1>
      <p className='text-gray-500 mb-1 text-[3vw] md:text-[19px]'>Looking to know more about me<span style={{fontFamily:"sans-serif"}}>?</span> Download my resume to explore my skills, experiences, and achievements.</p>
      <a href='/Naseefu-Rahman-Karumannil-Resume.pdf' download='Naseef_Rahman_Resume.pdf'><p className='gitbtn flex items-center gap-2 border border-[2px] border-[rgb(40,40,40)] 
        rounded-xl p-2 pr-4 pl-4 md:w-[50%] cursor-pointer hover:bg-[rgb(40,40,40)] transition-colors duration-300 ease'><span><SlCloudDownload /></span>Download Resume</p></a>
    </div>
  )
}

export default Resume
