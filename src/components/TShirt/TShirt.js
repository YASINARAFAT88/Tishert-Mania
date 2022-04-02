import React from 'react';
import './TShirt.css'

const TShirt = ({handleAddToCart, tshirt}) => {
    const {name, price, picture} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=> handleAddToCart(tshirt)}>add to cart</button>
        </div>
    );
};

export default TShirt;