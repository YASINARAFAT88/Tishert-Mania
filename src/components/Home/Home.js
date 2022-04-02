import React, { useState } from 'react';
import useTishirt from '../../hooks/useTishirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tishirt, setTshirt] = useTishirt()
    const [cart, setCart] = useState([]);
    
    const handleAddToCart = (selectedItem)=>{
        console.log(selectedItem)
        const exist = cart.find(tshirt => tshirt.id === selectedItem.id);
        if(!exist){
        const newCart = [...cart, selectedItem];
        setCart(newCart)
        }else{
            alert('Bhag Shala')
        }
        
    }

    const handleRemoveFromCart = (selectedItem) =>{
       const rest = cart.filter(tshirt => tshirt.id !== selectedItem.id);
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="tishirt-container">
            {
                tishirt.map(tshirt => <TShirt
                key={tshirt.id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
                ></TShirt>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;