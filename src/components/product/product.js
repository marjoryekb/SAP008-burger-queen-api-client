import React from 'react';
import './product.css';


const Product = ({alt,className, src}) => {
    return (
       <div className='cards'>
       <img alt={alt} className={className} src={src}></img>
       </div>
    );
};
export default Product;
