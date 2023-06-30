import React from 'react';
import './general.css';

function SelectInput({label, options, Multiple, className, value, setValue}) {
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  console.log(options);

  return (
    <div className={className}>
      <label>{label}</label>
      <select value={value} onChange={handleInput} multiple={Multiple}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
