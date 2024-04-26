import React, { useEffect, useState } from 'react'
import { callAPI } from '../utilis/CallApi.js'
import { useParams,Link } from 'react-router-dom'
import ProductDetails from './ProductDetails.jsx'
import { GB_CURRENCY } from '../utilis/constants.js'
import { addToCart } from '../store/cartSlice.js'
import { useDispatch } from 'react-redux'

function ProductPage() {
  const dispatch = useDispatch()
  const {id} = useParams()
const[product,setProduct] =useState(null)
const [quantity, setQuantity] = useState("1");


const getProduct = () => {
  callAPI(`data/products.json`).then((productResults) => {
    setProduct(productResults[id]);
  });
};

const addQuantitytoProduct = ()=>{
  setProduct((product.quantity = quantity));
    return product;
}

useEffect(()=>{
getProduct()
},[])


if(!product?.title)return <h1>loading............</h1>

  return (product && 
    (
<div className='h-screen bg-amazonclone-background'>
  <div className='max-w-[1600px] min-w-[1000px]'>
    <div className='grid grid-cols-10 gap-x-3'>
{/* left     */}
<div className='col-span-3 bg-white m-auto p-8'>
  <img src={`${product.image}`}  />
</div>
{/* middle */}
<div className='col-span-5 bg-white p-4 roundded divide-y divide-gray-400'>
  <div className='mb-3'>
<ProductDetails product={product} ratings={true} />
  </div>
  <div className='text-base xl:text-lg mt-4'>
{product.description}
  </div>
</div>
{/* right */}
<div className='col-span-2 bg-white p-4 rounded'>

<div className='text-xl xl:text-2xl text-right font-semibold mr-4'>
 {GB_CURRENCY.format(product.price)}
</div>

<div className='text-base xl:text-lg text-gray-400 text-right font-semibold '>
  RRP :{" "}
  <span className='line-through'>
{GB_CURRENCY.format(product.oldPrice)}
  </span>
</div>

<div className='text-sm xl:text-base text-blue-500 font-semibold mt-1'>
Free Delivery 
</div>

<div className='text-base xl:text-lg text-green-700 font-semibold mt-1'>
  In Stock
</div>


<div className='text-base xl:text-lg mt-1'>
Quantity
<select
onChange={(e)=>setQuantity(e.target.value)}
className='p-2 mx-3 bg-white border rounded-md focus:border-indigo-600'

>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
</select>
</div>
<Link to={'/checkout'}>
<button
className='btn my-5 -mx-1 text-black border p-2 rounded-lg w-full bg-yellow-400'
onClick={()=>dispatch(addToCart(addQuantitytoProduct()))}
>
  Add to Cart
</button>
  </Link>

</div>


    </div>
  </div>

</div>
    )
  )
}

export default ProductPage