import React from 'react'

function clearAll(){
  localStorage.clear();
  window.location.reload();
}

const InputTask = ({onInputChange, onBtnClick}) => {
  return (
    <div className='p-8 flex items-center justify-between ' >
         <input type="text" className= "outline-none rounded py-3 px-3 bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:shadow-outline" placeholder="new entry" onChange={onInputChange} /> 
    <button className='rounded-md bg-blue-500 px-4 py-1 h-[45px] hover:bg-blue-600 duration-300 ml-3 ' onClick={onBtnClick}>
   <p className=' text-white  text-2xl font-semibold flex mb-2'> + </p> 
   </button>    
   <button className='rounded-md bg-red-500 px-4 py-1 h-[45px] hover:bg-red-600 duration-300 ml-3' onClick={clearAll}> <p className=' text-white font-semibold flex'> Clear All </p>  </button>
        </div>
  )
}

export default InputTask