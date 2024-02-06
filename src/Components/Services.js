import React from 'react';
import './Portfolio.css';
import Card from './Card'
import {motion} from 'framer-motion'
const Services = () => {
  const transition={duration:'1',type:'spring'}
  return (
    <div className='services'>
        <div className='awesome'>
           <span>My Awesome </span>
           <span>services</span>
           <span>Lorum Isum is simply dummy text of printing of printing Lorum
            <br />
            Ispum is simply text of printing 
           </span>
           <button className='button s-button'>Download CV</button>
           <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
        </div>
        <div className='cards'>
          <div 
          // whileInView={{left:'14rem'}}
          // initial={{left:'25rem'}}
          // transition={transition}
          style={{left:'-13rem'}}>
            <Card emoji='/heartemoji.png' heading='Design' detail='Figma,Sketch,Photoshop,Adobe,AdobeXD' />
          </div>
          <div style={{left:'-33rem',top:'12rem'}}>
            <Card emoji='/glasses.png' heading='Developer' detail='React,Angular,Node,Express' />
          </div>
          <div style={{left:'-17rem',top:'21rem'}}>
            <Card emoji='/humble.png' heading='UI/UX' detail='Figma,Angular,Node,Express' />
          </div>
          <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>
        </div>
      
    </div>
  )
}

export default Services
