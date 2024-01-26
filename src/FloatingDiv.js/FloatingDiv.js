import React from 'react';

const FloatingDiv = ({image,txt1,txt2}) => {
  return (
    <div className='floatingDiv'> 
    <img src={image} alt='' />
    <span>{txt1}<br />{txt2}</span>
      <div>

      </div>
    </div>
  )
}

export default FloatingDiv
