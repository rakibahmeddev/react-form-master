import React, { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';

const Special = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div className='p-6 rounded-lg shadow-md border-orange-300 border text-center'>
            <h3>Special</h3>
            <p>has: {asset}</p>
            <p>also has: {gift}</p>
        </div>
    );
};

export default Special;