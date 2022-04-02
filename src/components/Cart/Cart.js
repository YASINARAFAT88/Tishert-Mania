import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    //conditional rendaring
    // 1. selement variable
    // 2. Ternary Operator Conditional Chining
    // 3. && Operator Condition (Shorthand)
    // 4. || Operator Condition
    let command;
    if(cart.length === 0){
        command = <p>plz add atleast One items</p>
    }else if(cart.length === 1){
        command = <p>Aro lisu add koren...</p>
    }
    else{
        command = <p><small>thanks for addimh items</small></p>
    }
    return (
        <div>
            <h2>Length : {cart.length}</h2>
           
            {
                cart.map(tshirt=> <p>{tshirt.name} 
                <button onClick={()=>handleRemoveFromCart(tshirt)}>X</button></p>)
                    
            }
            {cart.length === 0 || <p className='orange'>Yay!! Your Buyng..</p>}
            {cart.length === 3 && <div className='orange'>
                <h2>Trigonal</h2>
                <p>Tin jon ke ki gift Diba</p>
                </div>}
             <p>{command}</p>
             {cart.length !== 4 ? <p>Keep adding</p> : <button>Review all</button>}
        </div>
    );
};

export default Cart;