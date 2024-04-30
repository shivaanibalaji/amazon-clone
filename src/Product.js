import React from 'react'
import "./Product.css";
function Product({id,title,image,price}) {
  return (
    <div className="product">
        <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        
        </div>
        <img src={image} alt="book"/>
        <button>Add to Basket</button>
        
    </div>
  )
}

export default Product