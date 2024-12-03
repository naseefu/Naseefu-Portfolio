import React, { useEffect, useRef } from 'react'
import proj1 from '../Project1/1.png'
import proj2 from '../Project1/5.png'
import proj3 from '../Project1/8.png'
import proj4 from '../Project2/3.png'
import proj5 from '../Project2/5.png'
import proj6 from '../Project2/8.png'
import proj7 from '../Project3/pro1.png'
import proj8 from '../Project3/pro2.png'
import proj9 from '../Project3/pro3.png'
import proj10 from '../Project4/1.png'
import proj11 from '../Project4/10.png'
import proj12 from '../Project4/12.png'
import proj13 from '../Project4/f1.png'
import proj14 from '../Project4/f3.png'
import proj15 from '../Project4/f5.png'

import { GrGithub, GrMysql, GrReactjs } from 'react-icons/gr'
import { SiPostgresql, SiRailway, SiSpringboot, SiVercel } from 'react-icons/si'
import { BiLogoPostgresql, BiLogoSpringBoot } from 'react-icons/bi'
import { SiNetlify } from "react-icons/si";
import { Bot } from 'lucide-react'
import './project.css'
import { useNavigate } from 'react-router-dom'

const Project = () => {

  const sectionsRef = useRef([])
  const sectionsRef1 = useRef([])

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
    sectionsRef1.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      if (sectionsRef.current || sectionsRef1.current) {
        sectionsRef.current.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
        sectionsRef1.current.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      }
    };
  }, []);

  const navigate = useNavigate()

  return (
    <div className='projects'>
      <div className='p-10 lg:pr-[10vw] lg:pl-[10vw]'>
        <p ref={(el) => sectionsRef.current[0] = el} className='text-[3.5vw] md:text-[23px] text-gray-500'>My Projects</p>
        <p ref={(el) => sectionsRef.current[1] = el} className='mt-2 text-[4vw] md:text-[26px]'>Works that I've done</p>
      </div>
      <div className='project1 mt-5 '>
        <h1 ref={(el) => sectionsRef.current[2] = el} className='text-[4.8vw] md:text-[34px] w-[80%] pl-10 pr-10 lg:pr-[10vw] lg:pl-[10vw]'>Zervings — AI Recipe Genie</h1>
        <p  ref={(el) => sectionsRef.current[3] = el} className='mt-4 text-[3vw] md:text-[19px] text-gray-500 pl-10 pr-10 md:w-[90%] lg:pr-[10vw] lg:pl-[10vw]'>Effortlessly create personalized recipes with AI, tailored to your ingredients and taste preferences.</p>
        <div  className='mt-5 flex gap-3 pl-10 pr-10 lg:pr-[10vw] lg:pl-[10vw]' style={{flexWrap:"wrap"}}>
          <p  ref={(el) => sectionsRef.current[4] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><GrReactjs/></span>React</p>
          <p  ref={(el) => sectionsRef.current[5] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><BiLogoSpringBoot/></span>Spring Boot</p>
          <p  ref={(el) => sectionsRef.current[6] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><SiPostgresql/></span>PostgreSQL</p>
          <p  ref={(el) => sectionsRef.current[7] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><Bot/></span>CohereAI</p>
          <p ref={(el) => sectionsRef.current[8] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><SiNetlify/></span>Netlify</p>
          <p ref={(el) => sectionsRef.current[9] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><SiRailway /></span>Railway</p>
        </div>
        <div ref={(el) => sectionsRef.current[10] = el} className='images1 mt-[60px] pb-10 flex items-center justify-center gap-5'>
          <img className='max-h-[180px] md:max-h-[300px] xl:max-h-[400px]' style={{filter:"brightness(50%)"}} src={proj1} alt="Zervings"/>
          <img className='max-h-[250px] md:max-h-[350px] xl:max-h-[500px]' src={proj3} alt="Zervings"/>
          <img className='max-h-[180px] md:max-h-[300px] xl:max-h-[400px]' style={{filter:"brightness(50%)"}} src={proj2} alt="Zervings"/>
        </div>
      </div>

      <div className='project1 mt-10 '>
        <h1 ref={(el) => sectionsRef.current[11] = el} className='text-[4.8vw] md:text-[34px] w-[80%] pl-10 pr-10 lg:pr-[10vw] lg:pl-[10vw]'>PlotCraft — AI StoryCrafter</h1>
        <p ref={(el) => sectionsRef.current[12] = el} className='mt-4 text-[3vw] md:text-[19px]  text-gray-500 pl-10 pr-10 md:w-[90%] lg:pr-[10vw] lg:pl-[10vw]'>Create captivating, personalized stories with AI—your imagination, brought to life.</p>
        <div className='mt-5 flex gap-3 pl-10 pr-10 lg:pr-[10vw] lg:pl-[10vw]' style={{flexWrap:"wrap"}}>
          <p ref={(el) => sectionsRef.current[13] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><GrReactjs/></span>React</p>
          <p ref={(el) => sectionsRef.current[14] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><BiLogoSpringBoot/></span>Spring Boot</p>
          <p ref={(el) => sectionsRef.current[15] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><GrMysql/></span>MySQL</p>
          <p ref={(el) => sectionsRef.current[16] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><Bot/></span>CohereAI</p>
          <p ref={(el) => sectionsRef.current[17] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><SiVercel/></span>Vercel</p>
          <p ref={(el) => sectionsRef.current[18] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><SiRailway /></span>Railway</p>
        </div>
        <div ref={(el) => sectionsRef.current[19] = el} className='images1 mt-[60px] pb-10 flex items-center justify-center gap-5'>
          <img className='max-h-[180px] md:max-h-[300px] xl:max-h-[400px]' style={{filter:"brightness(50%)"}} src={proj5} alt="Zervings"/>
          <img className='max-h-[250px] md:max-h-[350px] xl:max-h-[500px]' src={proj4} alt="Zervings"/>
          <img className='max-h-[180px] md:max-h-[300px] xl:max-h-[400px]' style={{filter:"brightness(50%)"}} src={proj6} alt="Zervings"/>
        </div>
      </div>

        <div className='project1 mt-10 '>
        <h1 ref={(el) => sectionsRef.current[20] = el} className='text-[4.8vw] md:text-[34px] w-[80%] pl-10 pr-10 lg:pr-[10vw] lg:pl-[10vw]'>TaskFlow — Task Manager</h1>
        <p ref={(el) => sectionsRef.current[21] = el} className='mt-4 text-[3vw] md:text-[19px] text-gray-500 pl-10 pr-10 md:w-[90%] lg:pr-[10vw] lg:pl-[10vw]'>Streamline your workflow with an intuitive app for managing and tracking tasks effortlessly.</p>
        <div className='mt-5 flex gap-3 pl-10 pr-10 lg:pr-[10vw] lg:pl-[10vw]' style={{flexWrap:"wrap"}}>
          <p ref={(el) => sectionsRef.current[22] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><GrReactjs/></span>React</p>
          <p ref={(el) => sectionsRef.current[23] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><BiLogoSpringBoot/></span>Spring Boot</p>
          <p ref={(el) => sectionsRef.current[24] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><BiLogoPostgresql/></span>PostgreSQL</p>
          <p ref={(el) => sectionsRef.current[25] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><SiNetlify/></span>Netlify</p>
          <p ref={(el) => sectionsRef.current[26] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><SiRailway /></span>Railway</p>
        </div>
        <div ref={(el) => sectionsRef.current[27] = el} className='images1 mt-[60px] pb-10 flex items-center justify-center gap-5'>
          <img className='max-h-[180px] md:max-h-[300px] xl:max-h-[400px]' style={{filter:"brightness(50%)"}} src={proj7} alt="Zervings"/>
          <img className='max-h-[250px] md:max-h-[350px] xl:max-h-[500px]' src={proj8} alt="Zervings"/>
          <img className='max-h-[180px] md:max-h-[300px] xl:max-h-[400px]' style={{filter:"brightness(50%)"}} src={proj9} alt="Zervings"/>
        </div>
      </div>

      <div className='project1 mt-10 '>
        <h1 ref={(el) => sectionsRef.current[28] = el} className='text-[4.8vw] md:text-[34px] w-[80%] pl-10 pr-10 lg:pr-[10vw] lg:pl-[10vw]'>Eventura — Event Manager</h1>
        <p ref={(el) => sectionsRef.current[29] = el} className='mt-4 text-[3vw] md:text-[19px] text-gray-500 pl-10 pr-10 md:w-[90%] lg:pr-[10vw] lg:pl-[10vw]'>Seamlessly plan, organize, and manage events with an intuitive and efficient platform.</p>
        <div className='mt-5 flex gap-3 pl-10 pr-10 lg:pr-[10vw] lg:pl-[10vw]' style={{flexWrap:"wrap"}}>
          <p ref={(el) => sectionsRef.current[30] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><GrReactjs/></span>React</p>
          <p ref={(el) => sectionsRef.current[31] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><BiLogoSpringBoot/></span>Spring Boot</p>
          <p ref={(el) => sectionsRef.current[32] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><BiLogoPostgresql/></span>PostgreSQL</p>
          <p ref={(el) => sectionsRef.current[33] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><SiNetlify/></span>Netlify</p>
          <p ref={(el) => sectionsRef.current[34] = el} className='mt-4 flex items-center gap-2 border border-[2px] border-[rgb(60,60,60)] rounded-xl p-2 pr-4 pl-4 '><span><SiRailway /></span>Railway</p>
        </div>
        <div ref={(el) => sectionsRef.current[35] = el} className='images1 mt-[60px] pb-10 flex items-center justify-center gap-5'>
          <img className='max-h-[180px] md:max-h-[300px] xl:max-h-[400px]' style={{filter:"brightness(50%)"}} src={proj13} alt="Zervings"/>
          <img className='max-h-[230px] md:max-h-[350px] xl:max-h-[500px]' src={proj15} alt="Zervings"/>
          <img className='max-h-[180px] md:max-h-[300px] xl:max-h-[400px]' style={{filter:"brightness(50%)"}} src={proj14} alt="Zervings"/>
        </div>
      </div>
      <div className='p-10 lg:pr-0 lg:pl-0'>
        <h1 ref={(el) => sectionsRef.current[36] = el} className='text-[4.8vw] md:text-[34px] w-[80%] lg:pr-[10vw] lg:pl-[10vw]'>Explore More Projects</h1>
        <p ref={(el) => sectionsRef.current[37] = el} className='mt-4 text-[3vw] md:text-[19px] text-gray-500 md:w-[90%] lg:pr-[10vw] lg:pl-[10vw]'>Want to see more of my work? Check out my GitHub for a deeper dive into the projects I've built, 
          ranging from innovative web apps to complex full-stack solutions.</p>
        <a href='https://github.com/naseefu' target='/'><p ref={(el) => sectionsRef.current[38] = el} className='gitbtn mt-6 flex items-center gap-2 border border-[2px] border-[rgb(40,40,40)] 
        rounded-xl p-2 pr-4 pl-4 md:w-[50%] lg:mr-[10vw] lg:ml-[10vw] cursor-pointer hover:bg-[rgb(40,40,40)]'><span><GrGithub/></span>Visit My GitHub</p></a>
      </div>
      <div className='sectionpro flex gap-[114.5%]' style={{width:'fit-content'}}>
      <div ref={(el) => sectionsRef.current[39] = el} className='projimages primary flex gap-3 mt-10 pb-10 items-center' style={{minWidth:"fit-content"}}>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj1} alt='proj'/>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj2} alt='proj'/>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj3} alt='proj'/>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj4} alt='proj'/>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj5} alt='proj'/>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj6} alt='proj'/>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj7} alt='proj'/>
      </div>
      <div ref={(el) => sectionsRef.current[40] = el} className='projimages secondary flex gap-3 mt-10 pb-10 items-center' style={{minWidth:"fit-content"}}>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj1} alt='proj'/>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj2} alt='proj'/>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj3} alt='proj'/>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj4} alt='proj'/>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj5} alt='proj'/>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj6} alt='proj'/>
        <img className='h-[100px] md:h-[200px] lg:h-[250px] xl:h-[250px] min-w-[35%] max-w-[35%] rounded-sm' style={{objectFit:'cover',filter:"brightness(40%)"}} src={proj7} alt='proj'/>
      </div>
      
      </div>
    </div>
  )
}

export default Project
