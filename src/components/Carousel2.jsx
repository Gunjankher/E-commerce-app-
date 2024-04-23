import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

function Carousel2() {

  return (
    <div>
      <Swiper
        className='p-2'
        slidesPerView={4}
        spaceBetween={0}
        navigation={true}
      >
        {Array.from({ length: 4 }, (_, i) => (
          <SwiperSlide key={i}>
            <img
              className="w-[100px] h-[100px]"
              src={`images/product/mobiles/apple_small${i}.jpg`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel2;
