import useInputState from '../../assets/hooks/useInputState';

const CustomHookForm = () => {
    const nameInput = useInputState('');
    const emailInput = useInputState('');
    const passwordInput = useInputState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();

        console.log('Name:', nameInput.value);
        console.log('Email:', emailInput.value);
        console.log('Password:', passwordInput.value);
        }
    return (
        <div>
               <form onSubmit={handleOnSubmit}  className='flex flex-col gap-y-2'>
                <input {...nameInput}  className='border px-2' type="text" name="name" placeholder='james cameron' required/>

                <input {...emailInput} className='border px-2'  type="email" name="email"  placeholder='email address' required/>

                <input {...passwordInput} className='border px-2'  type="password" name="password"  placeholder='password' required/>  
        

                <input className='bg-green-500' type="submit" value="Submit" />

           </form>
        </div>
    );
};

export default CustomHookForm;