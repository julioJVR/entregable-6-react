import React, { useState } from 'react';
import { postCartThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const InfoProduct = ({productId}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleLess = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handlePlus = () => {
        setQuantity(quantity + 1);
    }

    const handleAddCart = () => {
        dispatch(postCartThunk({
            quantity: quantity,
            productId: productId.id,
        }));
    }

  return (
    <div>
        <div>
            <h2 className='product__title'>{productId?.brand}</h2>
            <h3 className='product__title'>{productId?.title}</h3>
            <p className='product__description'>{productId?.description}</p>
        </div>
        <div>
            <ul>
                <li>Price</li>
                <li>$ {productId?.price}</li>
            </ul>
        </div>
        <div>
            <p>Quantity</p>
            <button onClick={handleLess}>-</button>
            <span>{quantity}</span>
            <button onClick={handlePlus}>+</button>
        </div>
        <button onClick={handleAddCart}>Add to cart</button>
    </div>
  )
}

export default InfoProduct;