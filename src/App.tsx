import './App.css'
import { OTPForm } from './components/OTPForm/OTPForm'

function App() {
  return (
    <>
      <OTPForm formFieldAmount={4} expectedOTP={'1234'} />
    </>
  )
}

export default App
