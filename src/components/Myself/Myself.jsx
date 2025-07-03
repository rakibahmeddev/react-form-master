import React from 'react';
import Special from '../Special/Special';

const Myself = () => {
    return (
        <div className='p-6 rounded-lg shadow-md border-orange-300 border my-2'>
            <h3>My Self</h3> 
            <div className='flex gap-4 mt-2'>
                <Special></Special>
            </div>
        </div>
    );
};

export default Myself;