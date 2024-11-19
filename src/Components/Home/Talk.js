import React, { useEffect, useRef } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import './resume.css'

const Talk = () => {

  const sectionsRef = useRef([])

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-section');
        } else {
          // entry.target.classList.remove('show-section');
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // Cleanup the observer on component unmount
      if (sectionsRef.current) {
        sectionsRef.current.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      }
    };
  }, []);

  return (
    <div className='resume p-10 flex flex-col gap-5 lg:pl-[10vw] lg:pr-[10vw]'>
      <h1 ref={(el)=>sectionsRef.current[0]=el} className='text-[4.8vw] md:text-[36px]'>Let's talk</h1>
      <p ref={(el)=>sectionsRef.current[1]=el} className='text-gray-500 mb-5 text-[3vw] md:text-[19px]'>Whether you have a question, a project idea, or just want to say hi, feel free to reachout. 
        You can contact me through mail or connect with me on linkedin.</p>
      <div className='flex gap-10 items-center justify-center text-[18px] md:text-[19px]'>
        <a href='https://www.linkedin.com/in/naseefu-rahman-karumannil/' target='/'><p ref={(el)=>sectionsRef.current[2]=el} className='cursor-pointer'><FaLinkedin/></p></a>
        <a href='https://github.com/naseefu' target='/'><p ref={(el)=>sectionsRef.current[3]=el} className='cursor-pointer'><FaGithub/></p></a>
        <a href='mailto:naseefrahman90@gmail.com' target='/'><p ref={(el)=>sectionsRef.current[4]=el} className='cursor-pointer'><MdAlternateEmail /></p></a>
        <a href='https://www.instagram.com/_naseef____?igsh=ZTVpaGVwbjVxenow&utm_source=qr' target='/'><p ref={(el)=>sectionsRef.current[5]=el} className='cursor-pointer'><FaInstagram /></p></a>
      </div>
    </div>
  )
}

export default Talk
