import React from 'react'

const DisplayTask = ({inputValue}) => {
  return (
   <div className=' bg-green-500 w-full'>
    <div className=' flex flex-col'>
        

       <div className='flex'> 
        <input type="checkbox"/>
         <p>{inputValue}</p> 
        </div> 

    </div>

   </div>


  )
}

export default DisplayTask