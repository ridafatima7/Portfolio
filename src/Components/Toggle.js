import React,{useContext} from 'react';
import { themeContext } from '../Context';
import {FiSun} from 'react-icons/fi';
import {IoMoon} from 'react-icons/io5';
const Toggle = () => {
    const handleClick=()=>{
          theme.dispatch({type:'toggle'})
    }
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className='toggle' onClick={handleClick}>
        <FiSun />
        <IoMoon />
      <div onClick={handleClick} className='t-button' style={darkMode ? {left:'2px'} : {right:'2px'}}></div>
    </div>
  )
}

export default Toggle
