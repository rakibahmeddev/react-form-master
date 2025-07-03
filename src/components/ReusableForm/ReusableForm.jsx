import React from 'react';

const ReusableForm = ({handleOnSubmit, formTitle, submitBtnText ='Submit', children}) => {
    const handleLocalOnSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };
       
        handleOnSubmit(data);
    }

    return (
        <div>
            <h2 className='text-2xl text-center mb-3'>{formTitle}</h2>
            {children}
            <form onSubmit={handleLocalOnSubmit}  className='flex flex-col gap-y-2 mb-6'>
                <input className='border px-2' type="text" name="name" placeholder='james cameron'/>

                <input className='border px-2'  type="email" name="email"  placeholder='email address'/>

                <input className='border px-2'  type="password" name="password"  placeholder='password'/>

                <input className='bg-green-500' type="submit" value={submitBtnText} />
           </form>
        </div>
    );
};

export default ReusableForm;