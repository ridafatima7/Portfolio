import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Autoplay,Scrollbar, A11y,EffectCoverflow  } from 'swiper/modules';
import 'swiper/css/pagination';

const Testimonials = () => {
    const clients=[
      {
         img:'/profile1.jpg',
         review:
      'Lorum ispum dolor, sit amet consecteteur elit Ex official quad tempora ,cumqa error WebTransportBidirectionalStreamiu',
      },
      {
         img:'/profile2.jpg',
         review:
      'Lorum ispum dolor, sit amet consecteteur elit Ex official quad tempora ,cumqa error WebTransportBidirectionalStreamiu',
      },
      {
         img:'/profile3.jpg',
         review:
      'Lorum ispum dolor, sit amet consecteteur elit Ex official quad tempora ,cumqa error WebTransportBidirectionalStreamiu',
      },
      {
         img:'/profile4.jpg',
         review:
      'Lorum ispum dolor, sit amet consecteteur elit Ex official quad tempora ,cumqa error WebTransportBidirectionalStreamiu',
      },
      {
         img:'/profile5.jpg',
         review:
      'Lorum ispum dolor, sit amet consecteteur elit Ex official quad tempora ,cumqa error WebTransportBidirectionalStreamiu',
      },
      {
         img:'/profile6.jpg',
         review:
      'Lorum ispum dolor, sit amet consecteteur elit Ex official quad tempora ,cumqa error WebTransportBidirectionalStreamiu',
      },
     
    ]
  return (
    <div className='t-wrapper'>
      <div className='t-heading'>
          <span>Clients always get</span>
          <span>Exceptional Work</span>
          <span>for me...</span>
          <div className='blur tblur1' style={{background:'var(--purple)'}}></div>
          <div className='blur tblur2' style={{background:'skyblue)'}}></div>
      </div>
      <Swiper
      SlidesPerView={1}
      modules={[Navigation, Pagination, A11y]}
      navigation={false}
      pagination={{ clickable: true, el: '' }}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        {clients.map((clients,index)=>{
          return(
            <SwiperSlide>
              <div className='Testimonial'>
              <img src={clients.img} alt='' />
              <span>{clients.review}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonials
