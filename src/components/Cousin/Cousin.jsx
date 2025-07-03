import React from 'react';
import Special from '../Special/Special';

const Cousin = ({name, asset}) => {
    return (
        <div className='p-6 rounded-lg shadow-md border-orange-300 border my-2'>
            <h2>Cousin</h2>
              <h3>{name}</h3>
              <div>
                {asset ? <Special asset={asset}></Special> : ''}
              </div>
        </div>
    );
};

export default Cousin;