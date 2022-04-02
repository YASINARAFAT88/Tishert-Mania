import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import './Father.css'

const Father = ({house, ornamet}) => {
    return (
        <div>
            <h3>Father</h3>
            <p>house: {house}</p>
            <div className='Father'>
            <MySelf house={house} ornamet={ornamet}></MySelf>
            <Sister house={house}></Sister>
            <Brother house={house}></Brother>
            </div>
        </div>
    );
};

export default Father;