import React, { useEffect, useState } from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { callAPI } from '../utilis/CallApi'
import { useNavigate,createSearchParams} from 'react-router-dom'

function Search() {
const [suggestion , setSuggestion] = useState(null)
const [searchTerm , setSearchTerm] = useState("")
const [category,setCategory] = useState("All")
const navigate = useNavigate()



const onHandleSubmit = (e)=>{
e.preventDefault()



navigate({
  pathname: "search",
  search: `${createSearchParams({
    category: `${category}`,
    searchTerm: `${searchTerm}`,
  })}`,
});

setSearchTerm("");
setCategory("All");
}

const getSuggestion = ()=>{
callAPI(`/data/suggestion.json`)
.then((suggestionResult)=>{
setSuggestion(suggestionResult)
})
}


useEffect(()=>{
  getSuggestion()
},[])


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
value={searchTerm}
onChange={(e)=> setSearchTerm(e.target.value)}
placeholder='   search in the Amazon'
/>
<button 
className='w-[45px]'
onClick={onHandleSubmit}
>
    <MagnifyingGlassIcon   className="h-[27px] m-auto stroke-slate-900"/>
</button>

        </div>
{suggestion && 
<div className="bg-white text-black w-[60%] z-40 absolute text-left">
{
  suggestion
  .filter((suggestion)=>{
const currentSearchTerm = searchTerm.toLowerCase()
const title = suggestion.title.toLowerCase()
  return (
    currentSearchTerm &&
    title.startsWith(currentSearchTerm) &&
    title !== currentSearchTerm
  );

  })
  .slice(0,10)
  .map((suggestion)=>
<div 
className='cursor-pointer'
  key={suggestion.id}
  onClick={() => setSearchTerm(suggestion.title)}
>
  {suggestion.title}
</div>
  )
}


</div>

}


    </div>
  )
}

export default Search