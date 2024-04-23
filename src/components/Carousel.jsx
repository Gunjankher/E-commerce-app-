import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import "swiper/css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

function Carousel() {
  return (
    <div className=''>
        <Swiper 
        className=''
        loop= {true}
        modules={[Autoplay,Navigation,Pagination]}
        pagination = {{
            clickable : true
        }}
        centeredSlides = {true}
        spaceBetween={30}
        navigation = {true}
        autoplay = {{
            delay : 3000
        }}
        >
<SwiperSlide><img  className= "w-full" src="../images/Carousel/carousel_1.JPEG" alt="" /></SwiperSlide>
<SwiperSlide><img  className= "w-full"src="../images/Carousel/carousel_2.JPEG" alt="" /></SwiperSlide>
<SwiperSlide><img className= "w-full" src="../images/Carousel/carousel_3.JPEG" alt="" /></SwiperSlide>
<SwiperSlide><img className= "w-full" src="../images/Carousel/carousel_4.JPEG" alt="" /></SwiperSlide>
<SwiperSlide><img  className= "w-full"src="../images/Carousel/carousel_5.JPEG" alt="" /></SwiperSlide>
<SwiperSlide><img className= "w-full" src="../images/Carousel/carousel_6.JPEG" alt="" /></SwiperSlide>
<SwiperSlide><img className= "w-full" src="../images/Carousel/carousel_7.JPEG" alt="" /></SwiperSlide>
<SwiperSlide><img className= "w-full" src="../images/Carousel/carousel_8.JPEG" alt="" /></SwiperSlide>




        </Swiper>



    </div>
  )
}

export default Carousel