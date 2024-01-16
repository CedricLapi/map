import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Iteration from './components/Iteration'
import Groceries from './components/Groceries'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Iteration /> 
    <Groceries />
    < Header firstName={"Cedric"} lastName={"Lapi"} age={30} haircolor={"black"} />
    < Header firstName={"Karl"} lastName={"Moutome"} />
    <button onclick={ () => alert("This button has been clicked!")}>Click Me</button>
    </>
  )
}

export default App
