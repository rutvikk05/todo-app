import React, { useState } from 'react'
import DisplayTask from './DisplayTask'
import InputTask from './InputTask'

const UserInterface = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
        setInputValue((event.target.value));
      };

    const handleClick = () => {
     setShowInput(true)     
    }

    return (
    <div className='flex flex-col items-center justify-center bg-green-200 w-[100vw] h-[100vh]'>
     <InputTask onInputChange = {handleInputChange} onBtnClick = {handleClick} />
      
     { showInput && inputValue (
  <DisplayTask inputValue={inputValue}
                      />
)}

    </div>
  )
}

export default UserInterface