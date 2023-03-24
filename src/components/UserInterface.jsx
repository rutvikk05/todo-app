import React, { useState } from 'react'
import DisplayTask from './DisplayTask'
import InputTask from './InputTask'

const UserInterface = () => {
  
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);


  
    const handleInputChange = (event) => {
        setInputValue((event.target.value));
      };

    const handleClick = () => {
        setTasks([...tasks, inputValue]);
        setShowInput(true);         
    }

    return (
    <div className='flex flex-col items-center justify-center bg-black w-[100vw] h-[100vh]'>
      <h1 className='text-white text-3xl mb-[50px] font-bold text-center '> Todo App </h1>
     <InputTask onInputChange = {handleInputChange} onBtnClick = {handleClick} />
  
  { showInput && (
  <DisplayTask tasks={tasks} />
)}

  
    </div>
  )
}

export default UserInterface