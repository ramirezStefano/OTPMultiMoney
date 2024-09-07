import './App.css'
import { OPTForm } from './components/OTPForm/OTPForm'

function App() {
  return (
    <>
      <OPTForm formFieldAmount={4} expectedOTP={'1234'} />
    </>
  )
}

export default App
