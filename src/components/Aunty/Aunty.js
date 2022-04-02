import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = ({house}) => {
    const [ornamet] = useContext(RingContext)
    return (
        <div>
            <h4>Aunty</h4>
            <p>house: {house}</p>
            <p>{ornamet}</p>
        </div>
    );
};

export default Aunty;