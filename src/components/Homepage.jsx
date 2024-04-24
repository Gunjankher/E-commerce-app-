import React from 'react'
import Carousel from './Carousel'
import CarouselProduct from './CarouselProduct'
import Navbar from './Navbar'

function Homepage() {
  return (
    <div className='bg-amazonclone-background'>
      <Navbar />
    <Carousel />
    <CarouselProduct />

     </div>
  )
}

export default Homepage