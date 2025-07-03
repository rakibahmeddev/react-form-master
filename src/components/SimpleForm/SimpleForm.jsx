import React from 'react';

const SimpleForm = ({formTitle}) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        console.log(e.target.date.value)
        console.log('Form submitted successfully');
        e.target.reset(); // Reset the form fields after submission
    }


    return (
        <div >
            <h2 className='text-2xl font-bold mt-10'>{formTitle}</h2>
            {/* Simple form with controlled inputs */}
           <form onSubmit={handleOnSubmit}  className='flex flex-col gap-y-2'>
                <input className='border px-2' type="text" name="name" placeholder='james cameron'/>

                <input className='border px-2'  type="email" name="email"  placeholder='email address'/>

                <input className='border px-2'  type="password" name="password"  placeholder='password'/>
            
                <input className='border px-2' type="date" name="date" />


                <input className='bg-green-500' type="submit" value="Submit" />
           </form>
        </div>
    );
};

export default SimpleForm;