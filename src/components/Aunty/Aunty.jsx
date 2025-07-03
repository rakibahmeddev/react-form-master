import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div className='p-10 rounded-lg shadow-md  border-orange-300 border text-center'>
            <h2>Aunty</h2>
            <div className='flex gap-4'>
                <Cousin name={'Jamshed'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
            </div>
        </div>
    );
};

export default Aunty;