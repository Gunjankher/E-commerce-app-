import React from 'react'
import Carousel from './Carousel'

function Homepage() {
  return (
    <div className='#F1F2F4'>

    <div className='min-w-[1000px] max-w-[1600px]  bg-blue-500'> navbar</div>
    <div className='min-w-[1000px] max-w-[1600px] bg-gray-500'> categories</div>

    <Carousel />
    <img  className = "w-[100px]"src="../images/Carousel/banner.png" alt="" />
    </div>
  )
}

export default Homepage