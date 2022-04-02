import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';


const Spetial = () => {
    const [house, setHouse] = useContext(RingContext)
    

    return (
        <div>
            <h5>Spetial</h5>
            <p>{house}</p>
            <button onClick={()=>setHouse(house * 2)}>Add House</button>
        </div>
    );
};

export default Spetial;