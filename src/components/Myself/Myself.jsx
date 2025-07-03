import React from 'react';
import Special from '../Special/Special';

const Myself = ({asset}) => {
    return (
        <div className='p-2 rounded-lg shadow-md border-orange-300 border my-2'>
            <h3>My Self</h3> 
            <div className='flex gap-2 mt-2'>
                <Special asset={asset}></Special>
            </div>
        </div>
    );
};

export default Myself;