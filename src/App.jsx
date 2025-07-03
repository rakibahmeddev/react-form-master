
import './App.css'
import CustomHookForm from './components/CustomHookForm/CustomHookForm'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {


    const handleSignUpSubmit = (data) => {
      console.log('Sign Up Data:', data);
    }
    const handleProfileUpdateSubmit = (data) => {
      console.log('Profile Update Data:', data);
    }


  return (
    <div className='flex flex-col items-center bg-gray-100'>
      <h1 className='text-4xl font-bold my-10'>Welcome to React Form Learning</h1>
      {/* <SimpleForm></SimpleForm> */}

      {/* <h2 className='text-2xl font-bold mt-10'>Stateful Form</h2> */}
      {/* <StateFulForm></StateFulForm> */}

      {/* <h2 className='text-2xl font-bold mt-10'>Reff Form</h2> */}
      {/* <RefForm></RefForm> */}
     
    {/* <h2 className='text-2xl font-bold mt-10'>Custom Hook Form</h2> */}
    {/* <CustomHookForm></CustomHookForm> */}


    <ReusableForm 
    formTitle="Singn Up Form"
     submitBtnText="Sign Up" handleOnSubmit={handleSignUpSubmit}>
      <p className='text-center'>Please sign up from react default children props</p>
     </ReusableForm>

    <ReusableForm 
    formTitle="Profile Update Form"
     submitBtnText='Update' handleOnSubmit={handleProfileUpdateSubmit}>
      <p className="text-center">Keep your profile always updated</p>
     </ReusableForm>



    </div>
  )
}

export default App
