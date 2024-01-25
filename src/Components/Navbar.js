import React from 'react';
import './Portfolio.css'
const Navbar = () => {
  return (
    <div className='n-wrapper'>
       <div className='n-left'>
         <div className='n-name'>Andrew Joseph</div>
         <span>toggle</span>
       </div>
       <div className='n-right'>
         <div className='n-list'>
            <ul style={{listStyleType:'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Experiences</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
            </ul>
         </div>
         <button className='button n-button'>Contact Us</button>
       </div>
    </div>
  )
}

export default Navbar
