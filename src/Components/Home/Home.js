import React, { useEffect, useRef } from 'react'
import img1 from '../../images/dp.JPG'
import Header from '../commons/Header'
import { BiLogoSpringBoot } from "react-icons/bi";
import './hom.css'
import { HiArrowLongDown, HiOutlineArrowLongDown } from "react-icons/hi2";
import { FaGitSquare, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiApachemaven, SiPostgresql } from "react-icons/si";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { Bot, BotMessageSquare } from 'lucide-react';
import TechStack from './TechStack';
import Project from '../Projects/Project';
import dp from '../Project4/dp.JPG'
import Talk from './Talk';

const Home = () => {

  const sectionsRef = useRef([]);

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
    <div className='fullhome relative bg-black min-h-screen text-left text-gray-200 flex flex-col'>
      <div className='absolute w-full lg:pr-[10vw] lg:pl-[10vw]' style={{position:'fixed',top:'0',zIndex:'5'}}>
        <Header/>
      </div>
      <div className='pt-[65px] '>
        <div className='named p-10 flex items-center lg:pr-[10vw] lg:pl-[10vw]' style={{minHeight:'80vh'}}>
          <h1 className='text-[9.3vw] text-gray-200 leading-[1.3] md:text-[60px] md:w-[70%]' style={{fontWeight:'lighter'}}>I'm Naseefu — a FullStack Developer crafting 
          seamless web solutions with expertise in both frontend and backend technologies.</h1>
        </div>
        <div className='p-10 pt-5 min-h-[200px] lg:pr-[10vw] lg:pl-[10vw]' style={{display:'flex',alignItems:'center',justifyContent:'end',fontWeight:'lighter'}}>
          {/* <img src={dp} alt='dp' className='h-[130px] ' style={{borderRadius:"250px"}}/> */}
          <p><HiOutlineArrowLongDown className='text-grey' style={{fontSize:"60px",fontWeight:"lighter",color:"rgba(255,255,255,0.4)"}}/></p>
        </div>
      </div>
      <div className='tech p-10 pr-5 text-[4.6vw] md:text-[30px] md:w-[70%] leading-[1.4] flex flex-col gap-10 lg:pr-[10vw] lg:pl-[10vw]'>
        <p ref={(el) => sectionsRef.current[0] = el}>I'm passionate about creating impactful software solutions, skilled in Java, Spring Boot, React, PostgreSQL, and AI. I aim to leverage cutting-edge 
          technologies to solve real-world challenges and build efficient, scalable, and user-focused applications.</p>
        <p ref={(el) => sectionsRef.current[1] = el}>With a strong full-stack development background, I've designed and implemented various projects, from web apps to AI platforms, 
          focusing on seamless user experiences and optimizing backend performance and scalability.</p>
        <p ref={(el) => sectionsRef.current[2] = el}>I excel in collaborative settings, embracing innovation to integrate AI for dynamic features and 
          refine algorithms, solving challenges that drive meaningful progress and impactful solutions.</p>
        <p ref={(el) => sectionsRef.current[3] = el}>Beyond technical expertise, I am committed to continuous learning and growth. I actively stay updated with emerging technologies like Tailwind CSS 
          for modern UI design and advancements in AI tools to enhance application efficiency and user engagement.</p>
        <p ref={(el) => sectionsRef.current[4] = el}>A Computer Science graduate from NSS College of Engineering, Palakkad, Kerala, 
          I am passionate about leveraging my academic foundation to create impactful software solutions.</p>
        <p ref={(el) => sectionsRef.current[5] = el}>Based in Malappuram, Kerala, I draw inspiration from a vibrant tech community and a passion for impactful software development.</p>
      </div>
      <div  className='experience p-10 pt-5 text-[4vw] md:text-[26px] lg:pr-[10vw] lg:pl-[10vw]'>
        <p ref={(el) => sectionsRef.current[6] = el} className='text-gray-500 text-[3.5vw] md:text-[23px]'>Experiece</p>
        <p ref={(el) => sectionsRef.current[7] = el} className='mt-4'>Jr. Full Stack Developer Intern</p>
        <p ref={(el) => sectionsRef.current[8] = el}>Inmakes Infotech</p>
        <p ref={(el) => sectionsRef.current[9] = el}>Nov 2023 - Feb 2024</p>
      </div>
      <div>
        <TechStack/>
      </div>
      <div>
        <Project/>
      </div>
      <div>
        <Talk/>
      </div>
    </div>
  )
}

export default Home
