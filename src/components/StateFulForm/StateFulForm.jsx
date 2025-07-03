import React, { useState } from 'react';

const StateFulForm = ({formTitle}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);

        if(password.length <6){
            setError('Password must be at least 6 characters long');
        }
        else{
            setError('');
            // Here you can handle the form submission, like sending data to a server
            console.log('Form submitted successfully');
        }
    
    }
   
    const handleNameChange = e => {
          setName(e.target.value);
        
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <h2 className='text-2xl font-bold mt-10'>{formTitle}</h2>
            <form onSubmit={handleOnSubmit}  className='flex flex-col gap-y-2'>
                <input onChange={handleNameChange} className='border px-2' type="text" name="name" placeholder='james cameron' required/>

                <input onChange={handleEmailChange} className='border px-2'  type="email" name="email"  placeholder='email address' required/>

                <input onChange={handlePasswordChange} className='border px-2'  type="password" name="password"  placeholder='password' required/> 
        

                <input className='bg-green-500' type="submit" value="Submit" />

                {error ? error : 'Form submitted successfully'} 
           </form>
        </div>
    );
};

export default StateFulForm;