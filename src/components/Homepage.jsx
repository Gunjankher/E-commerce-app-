import React from 'react'
import Carousel from './Carousel'
import Carousel2 from './Carousel2'

function Homepage() {
  return (
    <div className='#F1F2F4'>

    <div className='min-w-[1000px] max-w-[1600px]  bg-blue-500'> navbar</div>
    <div className='min-w-[1000px] max-w-[1600px] bg-gray-500'> categories</div>
    <Carousel />
    <div className='bg-slate-600'>hi</div>
    <div>
<Carousel2 />

    </div>
    </div>
  )
}

export default Homepage