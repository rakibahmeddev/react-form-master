import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sisiter/Sister';

const Dad = ({asset}) => {
    return (
        <div className='p-10 rounded-lg shadow-md text-center border-orange-300 border'>
            <h2>Dad</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10'>
                    <Myself asset={asset}></Myself>
                    <Brother></Brother>
                    <Sister></Sister>
                </div>
        </div>
    );
};

export default Dad;