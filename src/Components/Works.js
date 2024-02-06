import React from 'react';
import {motion} from 'framer-motion';

const Works = () => {
  return (
    <div className='work'>
      <div className='awesome'>
         <span>Works for all these</span>
         <span>Brands & Clients</span>
         <span>
            Lorum Ispum is simply dummy text  of printing  of printing Lorum
            <br />
            ispum is simply dummy text of printing
            Lorum Ispum is simply dummy text  of printing  of printing Lorum
            <br />
            ispum is simply dummy text of printing
         </span>
         <button className='button s-button'>Hire Me</button>
      </div>
      <div className='w-right'>
        <motion.div
        initial={{rotate:'45'}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={{duration:5.5,type:'spring'}}
        className='w-mainCircle'>
            <div className='w-circleSection'>
               <img src='/fiverr.png' alt='' />
            </div> 
            <div className='w-circleSection'>
               <img src='/Shopify.png' alt='' />
            </div>   
            <div className='w-circleSection'>
               <img src='/amazon.png' alt='' />
            </div> 
            <div className='w-circleSection'>
               <img src='/github.png' alt='' />
            </div>
            <div className='w-circleSection'>
               <img src='/Facebook.png' alt='' />
            </div>
        </motion.div>
        <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
      </div>
    </div>
  )
}

export default Works
