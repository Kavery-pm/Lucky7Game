import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lucky7 from './components/Lucky7'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Lucky7/>
    </>
  )
}

export default App
