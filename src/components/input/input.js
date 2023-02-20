import React from 'react';
import './input.css';

const Input = ({type,name,className,placeholder,handleOnChang,value}) => {
    return(
        <div className='inputReusable'>
        <input
            type={type}
            name={name}
            id={name}
            className={className}
            placeholder={placeholder}
            onChange={handleOnChang}
            value={value}

        />
        
</div>
    )
}

export default Input;