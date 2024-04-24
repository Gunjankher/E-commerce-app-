import { Input } from 'postcss'
import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

function Search() {
  return (
    <div className='w-[60%] mt-2 '>
        <div className='flex items-center  h-10 bg-amazonclone-yellow rounded'>
<select 
className='text-black p-2 bg-gray-300 border text-xs xl:text-sm'
>

<option>All</option>
<option>Deals</option>
<option>Amazon</option>
<option>Fashion</option>
<option>Computers</option>
<option>Home</option>
<option>Mobiles</option>
</select>
<input
className='flex grow items-center h-[100%] text-black rounded'
type='text'
placeholder='   search in the Amazon'
/>
<button 
className='w-[45px]'
>
    <MagnifyingGlassIcon   className="h-[27px] m-auto stroke-slate-900"/>
</button>

        </div>



    </div>
  )
}

export default Search