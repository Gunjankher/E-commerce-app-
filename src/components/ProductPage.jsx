import React, { useEffect, useState } from 'react'
import { callAPI } from '../utilis/CallApi.js'
import { useParams } from 'react-router-dom'
import ProductDetails from './ProductDetails.jsx'

function ProductPage() {
  const {id} = useParams()
const[product,setProduct] =useState(null)


const getProduct = () => {
  callAPI(`data/products.json`).then((productResults) => {
    setProduct(productResults[id]);
  });
};


useEffect(()=>{
getProduct()
},[])


if(!product?.title)return <h1>loading............</h1>

  return (product && 
    (
<div className='h-screen bg-amazonclone-background'>
  <div className='max-w-[1600px] min-w-[1000px]'>
    <div className='grid grid-cols-10'>
{/* left     */}
<div className='col-span-3 bg-white m-auto p-8'>
  <img src={`${product.image}`}  />
</div>
{/* middle */}
<div className='col-span-5'>
<ProductDetails product={product} ratings={true} />
</div>
{/* right */}
<div className='col-span-2 bg-blue-400'>
b
</div>


    </div>
  </div>

</div>
    )
  )
}

export default ProductPage