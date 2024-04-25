import React, { useEffect, useState } from 'react'
import { callAPI } from '../utilis/CallApi.js'
import { useParams } from 'react-router-dom'

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

      <div>{product.title}

        <img src={`${product.image}`} alt="" />
      </div>
    )
  )
}

export default ProductPage