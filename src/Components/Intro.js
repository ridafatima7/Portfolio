import React from 'react';
import './Portfolio.css'
import FloatingDiv from '../FloatingDiv.js/FloatingDiv';
import {motion} from 'framer-motion'
const Intro = () => {
  const transition={duration:'2',type:'spring'}
  return (
    <div className='intro'>
      <div className='i-left'>
        <div className='i-name'>
            <span>Hy! I am</span>
            <span>Andrew Thomas</span>
            <span>Frontend Developer with 
                high level of experience in web designing 
                and development, producting the quality
            </span>
            <button className='i-button button'>Hire Me</button>
            <div className='i-icons'>
                 <img src='/github.png' alt='' />
                 <img src='/linkedin.png' alt='' />
                 <img src='/instagram.png' alt='' />
            </div>
        </div>
      </div>
      <div className='i-right'>
       <img src='Vector1.png' alt='' />
       <img src='Vector2.png' alt='' />
       <img src='boy.png' alt='' />
       <motion.img
        initial={{left:'-1%'}}
        whileInView={{left:'-20%'}}
        transition={transition}
        className='floatingDiv'
        src='/glassesimoji.png' alt='' />
       <motion.div 
       initial={{left:'74%',top:'4%'}}
       whileInView={{left:'68%'}}
       transition={transition}
       className='floatingDiv'
       style={{top:'-4%',left:'60%'}}>
       <FloatingDiv  image='/crown.png' txt2='Developer' txt1='Web'/>
       </motion.div>
       <div style={{top:'18rem',left:'0rem'}}>
       <FloatingDiv  image='/thumbup.png' txt1='Best Design' txt2='Award'/>
       </div>
       <div className='blur' style={{background:'rgba(238 210 255)'}}>
       </div>
       <div className='blur' style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}>

       </div>
      </div>
    </div>
  )
}

export default Intro
