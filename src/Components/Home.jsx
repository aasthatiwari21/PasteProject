import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPaste } from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get('pasteId');
    const allPastes = useSelector((state)=> state.paste.pastes)
    const dispatch = useDispatch();

    function createMyPaste(){
      const paste = {
        title: title,
        desc: value,
        _id: pasteId || Date.now().toString(),
        created_at: new Date().toString()
      }

      if(pasteId)
      {
        //update
        dispatch(updateToPaste(paste))
      }
      else
      {
        // create
        dispatch(addToPastes(paste))
      }
      
      
      setTitle('');
      setValue('');
      setSearchParams({});
    }

    useEffect(() => {
      if(pasteId){
        const paste = allPastes.find((p)=> p._id===pasteId) 
        setTitle(paste.title)
        setValue(paste.desc)
        updateToPaste(paste)
      } 
    }, [pasteId])
  return (
    <div className='pt-10'>
    <div className='flex flex-row gap-7 place-content-between mt-9'>
        <input className='pl-3 rounded-2xl border-2 mr-3 w-[1500px] items-center	ml-20'
        type='text' placeholder='Enter Title Here' value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <button className='p-3 rounded-2xl mr-19 border-2 bg-blue-700 text-white	'
          onClick={createMyPaste}
        >
          { pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
    </div>
    <div className='flex flex-row gap-2 place-content-between ml-20 mt-8'>
        <textarea className='rounded-2xl border-2 ml-0 w-[1500px] items-center pl-3 pt-3' 
          value={value}
          placeholder='Enter content here'
          onChange={(e)=> setValue(e.target.value)}
          rows={20}
          
        />
    </div>
    </div>
  )
}

export default Home