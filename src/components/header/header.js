import React from 'react';
import './header.css';



const Img = ({ alt,className, src}) => {
    return (
        <header className="topLogin">
            <img alt={alt} className={className} src={src}></img>
        </header>
    );
};
export default Img;
