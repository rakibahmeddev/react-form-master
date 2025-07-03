import React, { createContext, useState } from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const AssetContext = createContext('asset');
export const MoneyContext = createContext('money');

const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'diamond';
    return (
        <div className='px-10 py-10 rounded-lg shadow-md border-orange-300 border-2 '>
            <h2 className='text-4xl text-center mb-6'>Grandpa</h2>
            <h3 className='text-center mb-3'>Net Money: {money}</h3>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value={'gold'}>
                <div className='flex gap-6'>
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </div>
            </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;