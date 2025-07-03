import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='p-10 rounded-lg shadow-md  border-orange-300 border text-center'>
            <h2>Aunty</h2>
            <div className='flex gap-4 mb-2'>
                <Cousin name={'Jamshed'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
            </div>

            <p>Money: {money}</p>
            <button className='bg-orange-500 rounded-2xl text-white px-6 py-2 cursor-pointer font-bold mt-2 ' onClick={() => setMoney(money + 1000)}>Add 1000 Tk</button>
        </div>
    );
};

export default Aunty;