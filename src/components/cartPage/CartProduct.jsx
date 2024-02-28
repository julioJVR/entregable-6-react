import React from 'react';
import './styles/cartProduct.css';
import { deleteCartThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const CartProduct = ({prod}) => {

    const dispatch = useDispatch();

    console.log(prod);

    const handleRemove = () => {
        dispatch(deleteCartThunk(prod.id));
    }

  return (
    <div className='cartProduct'>
        <figure>
            <img src={prod.product.images[0].url} alt="product image" />
        </figure>
        <div>
            <h2>{prod.product.title}</h2>
            <button>-</button>
            <span>{prod.quantity}</span>
            <button>+</button>
            <h3>Price Product: $ {prod.product.price}</h3>
        </div>
        <button onClick={handleRemove}>Delete</button>
    </div>
  )
}

export default CartProduct;