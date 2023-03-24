import React from 'react'

const InputTask = ({onInputChange, onBtnClick}) => {
  return (
    <div className='p-8 flex items-center justify-between bg-yellow-200' >
         <input type="text" className= "outline-none rounded py-3 px-3 bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:shadow-outline" placeholder="new entry" onChange={onInputChange} /> 
    <button className='rounded-md bg-blue-500 px-4 py-1 h-[45px] hover:bg-blue-600 duration-300 ml-3 ' onClick={onBtnClick}>
   <p className=' text-white  text-2xl font-semibold flex mb-2'> + </p> </button>    
        </div>
  )
}

export default InputTask