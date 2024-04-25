import React from 'react'
import { SwiperSlide,Swiper } from 'swiper/react'
import { Navigation,Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'

function CarouselProduct() {
  return (
    <div className='mx-5 bg-white'>
        <div className='mx-5 text-base xl:text-xl font-semibold pt-2'>Best Seller</div>
<Swiper
className='m-5'
navigation = {true}
pagination = {{
    clickable :true
}}
slidesPerView={7}
spaceBetween={10}
loop = {true}
modules={[Navigation,Pagination]}
>

{
    Array.from({length :8},(_,i)=>
    <SwiperSlide key={i}>
        <Link to={`/product/${i}`}>
   <img src={`../images/product_${i}_small.jpg`} alt="" />
         </Link>
    </SwiperSlide>
    
    )
}


</Swiper>



    </div>
  )
}

export default CarouselProduct