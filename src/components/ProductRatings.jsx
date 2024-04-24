import React from 'react'
import {StarIcon} from '@heroicons/react/24/outline'

function ProductRatings(props) {
  const starNumber = props.avgrating
  const ratingNumber = props.ratings
  return (
  <div>
{Array.from ({length : starNumber},(_,i)=>
<StarIcon key={i} className='"stroke-[#F1B61F] fill-[#F1B61F] h-[20px]"' />
)}

{Array.from({lenght : 5-starNumber},(_,i)=>
<StarIcon className='stroke-[#F1B61F] h-[20px]' />
)}

<span  className='ml-3 text-blue-500'>raings {ratingNumber}</span>

  </div>
  
  )
}

export default ProductRatings