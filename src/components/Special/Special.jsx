import React from 'react';

const Special = ({asset}) => {
    return (
        <div className='p-6 rounded-lg shadow-md border-orange-300 border text-center'>
            <h3>Special</h3>
            <p>has: {asset}</p>
        </div>
    );
};

export default Special;