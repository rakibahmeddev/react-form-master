import React from 'react';

const Cousin = ({name}) => {
    return (
        <div className='p-6 rounded-lg shadow-md border-orange-300 border my-2'>
            <h2>Cousin</h2>
              <h3>{name}</h3>
        </div>
    );
};

export default Cousin;