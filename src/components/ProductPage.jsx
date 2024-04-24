import React, { useEffect, useState } from 'react'
import { callAPI } from '../utilis/CallApi'
 
function ProductPage() {
  const [product,SetProduct]= useState(null)

  const getProduct = ()=>{
    callApi(`data/products.json`)
    .then((productResult)=>{
SetProduct(productResult[id])
    })
  }

useEffect(()=>{
getProduct()
},[])

if(!product?.title)return <h1>loading....</h1>
  return (

<div className='h-screen bg-amazonclone-background'>
    <div className='grid grid-cols-10' >
{/* left */}
<div className='col-span-5 bg-red-400'>
  <img src={`${product.image}`} />
</div>
{/* middle */}
<div className='col-span-3 bg-green-400'>
g
</div>
{/* right */}
<div className='col-span-2 bg-blue-400'>
  b
</div>

    </div>
</div>
  )
}

export default ProductPage