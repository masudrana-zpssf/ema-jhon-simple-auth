import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { product, handleRemoveProduct } = props
    const { name, price, shipping, quantity, img } = props.product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-items-details-container ">
                <div className="review-item-details">
                    <p className='product-name'>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>price : <span className='orange-color'>${price}</span></p>
                    <p><small>Shipping : ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon icon={faTrashAlt} className='delete-icon'></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;