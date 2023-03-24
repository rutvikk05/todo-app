import React, { useState } from 'react';

const DisplayTask = ({ tasks }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event, index) => {
    setCheckedItems({ ...checkedItems, [index]: event.target.checked });
  };

  return (
    <div className="flex flex-col items-start mt-4 w-full">
      <div className= " shadow-md overflow-hidden w-full justify-self-center">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center px-4 py-3 border-b border-gray-300">
            <input type="checkbox" className="mr-4 form-checkbox h-5 w-5" checked={checkedItems[index]} onChange={(event) => handleChange(event, index)} />
            <p className={checkedItems[index] ? "line-through text-white" : "text-white "}>{task}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayTask;
