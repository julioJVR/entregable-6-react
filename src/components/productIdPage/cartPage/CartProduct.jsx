import React from 'react';
import './styles/cartProduct.css';

const CartProduct = ({prod}) => {

    console.log(prod);

  return (
    <div className='cartProduct'>
        <figure>
            <img src={prod.productimages[0].url} alt="product" />
        </figure>
    </div>
  )
}

export default CartProduct;