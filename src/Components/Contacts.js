import React from 'react';

const Contacts = () => {
  return (
    <div className='contact-form'>
      <div className='c-left'>
         <div className='awesome'>
          <span>Get in touch</span>
          <span>Contact me</span>
          <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
         </div>
      </div>
      <div className='c-right'>
        <form>
          <input type='text' name='user-name' className='user' placeholder='Name'></input>
          <input type='email' name='user-email' className='user' placeholder='Email'></input>
          <textarea  name='user-message' className='user' placeholder='Message'></textarea>
          <input type='submit' value='Send-Message' className='button' ></input>
          <div className='blur c-blur1' style={{background:'var(--purple)'}}></div>
        </form>
      </div>
    </div>
  )
}

export default Contacts
