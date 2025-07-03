import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sisiter/Sister';

const Dad = ({asset}) => {
    return (
        <div className='p-10 rounded-lg shadow-md text-center border-orange-300 border'>
            <h2>Dad</h2>
                <div className='flex gap-4'>
                    <Myself asset={asset}></Myself>
                    <Brother></Brother>
                    <Sister></Sister>
                </div>
        </div>
    );
};

export default Dad;