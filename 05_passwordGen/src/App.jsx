import { useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numallowed, setnumallowed] = useState(8)
  return (
    <>
      <h1 className="text-4xl text-center text-white"> Password Generator</h1>
    </>

  )
}

export default App
