import React, { useEffect, useRef } from 'react'
import { BiLogoSpringBoot } from "react-icons/bi";
import './hom.css'
import { HiArrowLongDown, HiOutlineArrowLongDown } from "react-icons/hi2";
import { FaGitSquare, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiApachemaven, SiPostgresql, SiCloudinary, SiSocketdotio } from "react-icons/si";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { Bot, BotMessageSquare } from 'lucide-react';
import './tech.css'

const TechStack = () => {

  const sectionsRef = useRef([])

  useEffect(() => {

    const options = {
      threshold: 0.1,
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
    <div className='stack p-10 pt-5 text-[4vw] md:text-[26px] lg:pr-[10vw] lg:pl-[10vw]'>
        <div className='stack1 '>
        <p ref={(el) => sectionsRef.current[0] = el} className='text-gray-500 text-[3.5vw] md:text-[23px]'>Tech Stack</p>
        </div>
        <div className='stack2 mt-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-xl' style={{gap:'3rem'}}>
        <p ref={(el) => sectionsRef.current[1] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span className='' style={{color:'grey'}}><IoLogoReact /></span>React</p>
        <p ref={(el) => sectionsRef.current[2] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span><FaJava /></span>Java</p>
        <p ref={(el) => sectionsRef.current[3] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span><BiLogoSpringBoot /></span>Spring Boot</p>
        <p ref={(el) => sectionsRef.current[4] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span><FaPython /></span>Python</p>
        <p ref={(el) => sectionsRef.current[5] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span><IoLogoJavascript/></span>JavaScript</p>
        <p ref={(el) => sectionsRef.current[6] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span><FaNodeJs /></span>NodeJs</p>
        <p ref={(el) => sectionsRef.current[7] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span><SiPostgresql /></span>PostgreSQL</p>
        <p ref={(el) => sectionsRef.current[8] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span><GrMysql /></span>MySQL</p>
        <p ref={(el) => sectionsRef.current[9] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span><BotMessageSquare /></span>CohereAI</p>
        <p ref={(el) => sectionsRef.current[10] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span><Bot /></span>ChatGPT</p>
        <p ref={(el) => sectionsRef.current[11] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span><FaGitSquare /></span>Git</p>
        <p ref={(el) => sectionsRef.current[12] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span><SiApachemaven /></span>Maven</p>
        <p ref={(el) => sectionsRef.current[12] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span><SiCloudinary /></span>Cloudinary</p>
        <p ref={(el) => sectionsRef.current[12] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[grey] rounded-xl p-2 pr-4 pl-4 '><span><SiSocketdotio /></span>WebSocket</p>
        </div>
      </div>
  )
}

export default TechStack
