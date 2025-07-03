
import './App.css'
import CustomHookForm from './components/CustomHookForm/CustomHookForm'
import Grandpa from './components/Grandpa/Grandpa'
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
    <div className='max-w-full w-full flex flex-col items-center'>
      <h1 className='text-4xl font-bold my-10'>Welcome to React Form Learning</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-10'>
          <SimpleForm formTitle={'Simple Form'}></SimpleForm>
          <StateFulForm formTitle={'Stateful Form'}></StateFulForm>
          <RefForm></RefForm>
          <CustomHookForm formTitle={'Custom Hook Form'}></CustomHookForm>

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


  


     <Grandpa></Grandpa>



    </div>
  )
}

export default App
