import React from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const Grandpa = () => {
    const asset = 'diamond';
    return (
        <div className='px-10 py-10 rounded-lg shadow-md border-orange-300 border-2 '>
            <h2 className='text-4xl text-center mb-6'>Grandpa</h2>
            <div className='flex gap-6'>
                <Dad asset={asset}></Dad>
                <Uncle asset={asset}></Uncle>
                <Aunty></Aunty>
             </div>
        </div>
    );
};

export default Grandpa;