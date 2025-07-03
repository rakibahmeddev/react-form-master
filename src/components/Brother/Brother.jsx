import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div className='p-6 rounded-lg shadow-md border-orange-300 border my-2'>
            <h3>Brother</h3>
            <p>Grandpa: {money}</p>
        </div>
    );
};

export default Brother;