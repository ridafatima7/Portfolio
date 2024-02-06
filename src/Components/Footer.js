import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className='footer' style={{width:'100%'}}>
      <img src='/wave.png' alt='' />
      <div className='contact-content'>
        <span>Rida.bsse3962@iiu.edu.pk</span>
        <div className='f-icons'>
           <BsInstagram size='3rem' color='white' />
           <BsFacebook size='3rem' color='white' />
        </div>
      </div>
    </div>
  )
}

export default Footer
