import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Iteration from './components/Iteration'
import Groceries from './components/Groceries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Iteration />
    <Groceries />
    </>
  )
}

export default App
