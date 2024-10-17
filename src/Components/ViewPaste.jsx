import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPaste } from '../redux/pasteSlice';

const ViewPaste = () => {
 const {id} = useParams();

 const allPastes = useSelector((state)=> state.paste.pastes)

 const paste = allPastes.filter((e)=> e._id===id)[0]

 console.log(paste)
  return (
    <div className='bg-stone-200'>
        <div className='flex flex-row gap-7 place-content-between mt-4 pt-10'>
        <input className='p-3 rounded-2xl m-auto border-2 w-[27%] border-black	' disabled
        type='text' placeholder='Enter Title Here' value={paste.title} onChange={(e)=> setTitle(e.target.value)}/>
      
    </div>
    <div className='mt-5 '>
        <textarea className='mt-3 min-w-[500px] p-3 border-2 border-black rounded-xl' 
          disabled
          value={paste.desc}
          rows={20}
          onChange={(e)=> setTitle(e.target.value)}
        />
    </div>
    </div>
  )
}

export default ViewPaste