import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'
import { Navigation, Pagination, Autoplay,Scrollbar, A11y,EffectCoverflow  } from 'swiper/modules';
const Portfolio = () => {
  return (
    <div className='portfolio'>
      <span>React Projects</span>
      {/* <span>Portfolio</span> */}
      <Swiper
      spaceBetween={10}
      slidePerView={3}
      grabCursor={true}
      className='portfolio-slider'
       modules={[Navigation, Pagination, A11y]}
      navigation={false}
      pagination={{ clickable: true, el: '' }}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        <SwiperSlide>
            <img src='/sidebar.png' alt='' />
            <img src='/ecommerce.png' alt='' />
            <img src='/musicapp.png' alt='' />
            <img src='/hoc.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
            <img src='/ecommerce.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
            <img src='/musicapp.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
            <img src='/hoc.png' alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
