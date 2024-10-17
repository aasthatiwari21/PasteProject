import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPaste, updateToPaste } from '../redux/pasteSlice';
import toast from "react-hot-toast"

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  console.log(pastes)
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = pastes.filter((paste)=> paste.title.toLowerCase().includes(searchTerm.toLowerCase()))

  function handleDelete(pasteId){
    dispatch(removeFromPaste(pasteId))
  }

  function handleUpdate(paste){
    dispatch(updateToPaste(paste))
  }

  function handleShare(paste) {
    const url = `${window.location.origin}/pastes/${paste._id}`;
    navigator.clipboard.writeText(url)
      .then(() => {
        toast.success('URL copied to clipboard!');
      })
      .catch((error) => {
        console.error('Error copying URL: ', error);
        toast.error('Failed to copy URL');
      });
  }


  return (
    <div>
       <input className='pl-3 p-2 rounded-xl border-2	 w-[1000px] items-center mt-8' 
       type="text" placeholder='Search Here' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
       <div className='grid grid-cols-3 gap-4 pt-10 flex-wrap '>
          {
            filteredData.length>0 && 
            filteredData.map((paste)=> {
              return <div className=' mt-4 ml-20 border-2 bg-slate-200 rounded-lg' key={paste?._id}>
                  <div className='border-2 m-1 p-3 '>
                    {paste.title}
                  </div>
                  <div className='border-2 p-3'>
                    {paste.desc}
                  </div>
                  

                  <div className='place-content-evenly flex flex-row border-spacing-2 p-4 mt-3'>
                    <button onClick={()=> handleUpdate(paste)}><a href={`/?pasteId=${paste?._id}`}>Edit</a></button>
                    <button><a href={`/paste/${paste?._id}`}>View</a></button>
                    <button onClick={()=> handleDelete(paste._id)}>Delete</button>
                    <button onClick={()=>{navigator.clipboard.writeText(paste?.desc).then(()=> toast("Copied Successfully")) }}>Copy</button>
                    <button onClick={()=>handleShare(paste)}>Share</button>
                  </div>
              </div>
            })
          }
       </div>
    </div>
  )
}

export default Paste