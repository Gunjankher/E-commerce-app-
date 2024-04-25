import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { callAPI } from '../utilis/callApi'
 
function ProductPage() {
  const [product,setProduct]= useState(null)
  const {id}= useParams()

  const getProduct = ()=>{
    callAPI(`data/products.json`)
    .then((productResult)=>{
setProduct(productResult[id])
    })
  }

useEffect(()=>{
getProduct()
},[])

if(product?.title) return <h1>loading......</h1>
  return (product &&
    <div> product page{product.title}</div>

  )
}

export default ProductPage