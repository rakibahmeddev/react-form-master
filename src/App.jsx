
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {


  return (
    <div className='flex flex-col items-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold my-10'>Welcome to React Form Learning</h1>
      <SimpleForm></SimpleForm>

      <h2 className='text-2xl font-bold mt-10'>Stateful Form</h2>
      <StateFulForm></StateFulForm>
     
    </div>
  )
}

export default App
