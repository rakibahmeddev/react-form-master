import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div className='p-10 rounded-lg shadow-md  border-orange-300 border text-center'>
            <h2>Uncle</h2>
            <div className='flex gap-4'>
                <Cousin name={'Rafsan'}></Cousin>
                <Cousin name={'Sohana'}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;