import React from 'react';
import Spetial from '../Spetial/Spetial';

const MySelf = ({house, ornamet}) => {
    return (
        <div>
            <h5>Me</h5>
            <p>{house}</p>
            <Spetial ornamet={ornamet}></Spetial>
        </div>
    );
};

export default MySelf;