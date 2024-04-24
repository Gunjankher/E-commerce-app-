import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import Search from './Search'


function Navbar() {
  return (
 <header className='min-w-[1000px] text-center'>
<div className='bg-amazonclone h-[60px]'>

<div className='flex'>
    {/* left */}
<div className='flex items-center mt-2 pl-5'>
    <img className='w-[100px]' src="../images/amazon.png" alt="" />

<div className='text-white pl-4 pr-4'>
    <div className='text-xs xl:text-sm"'>Deliver to</div>
    <div className='text-sm xl:text-base font-bold'>Ahemdabad</div>
</div>

</div>


    {/* middle */}
<div className='text-white grow relative'></div>
<Search />
{/* right */}
<div className='flex items-center pl-4'>

<div className='text-white pl-4 pr-4'>
<div className='text-sm xl:text-lg'>Hello</div>
<div>Sign in </div>
</div>

<div className='text-white pl-4 pr-4 '>
    <div>Return</div>
    <div>&Orders</div>
</div>

<div>

</div>
<div className="flex pr-3 pl-3 text-white">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">0
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
</div>



</div>

</div>

 </header>
  )
}

export default Navbar