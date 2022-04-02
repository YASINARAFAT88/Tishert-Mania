import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export const RingContext = createContext('Ring')

/**
 * Context Api
 * 1. Call create a context with Default value
 * 2. set a variable of the context with uppercase
 * 3. Make sure you export the context to use it in other places
 * 4. Wrap you Child Content using meaningFull.Provider
 * 5. Provide a value
 * 6.  to consume the context from Child components
 * 7. useContext hook and will you need to pass contextName
 * 8. Make Sure You take Notes...  
 * 
 */

const GrandPa = () => {
    const [house, setHouse] = useState(1)
    const ornamet = 'Diamond Ring';

    const handleBuyHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h3>Grandpa</h3>

                <p><button onClick={() => handleBuyHouse()}>Buy a House </button> House: {house}</p>
                <section className='GC'>
                    <Father house={house} ornamen={ornamet}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;