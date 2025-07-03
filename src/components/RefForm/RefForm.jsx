import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    useEffect(() => {
        nameRef.current.focus()
    }, []);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value); 
    }

    return (
        <div>
             <h2 className='text-2xl font-bold mt-10'>Reff Form</h2>
              <form onSubmit={handleOnSubmit}  className='flex flex-col gap-y-2'>
                <input ref={nameRef} className='border px-2' type="text" name="name" placeholder='james cameron' required/>

                <input ref={emailRef} className='border px-2'  type="email" name="email"  placeholder='email address' required/>

                <input ref={passwordRef} className='border px-2'  type="password" name="password"  placeholder='password' required/>  
        

                <input className='bg-green-500' type="submit" value="Submit" />

           </form>
        </div>
    );
};

export default RefForm;