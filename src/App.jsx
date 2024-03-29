
import FormWithState from './Components/FormWithState/FormWithState.jsx'
import HookForm from './Components/HookForm/HookForm.jsx'
import RefForm from './Components/RefForm/RefForm.jsx'
import SimpleForm from './Components/SimpleForm/SimpleForm.jsx'

function App() {


  return (
    <>
    <div className=' flex gap-12 justify-center items-center'>

    <SimpleForm />
    <FormWithState />
    <RefForm />
    <HookForm />
    </div>
    </>
  )
}

export default App
