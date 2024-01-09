import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='bg-green-400 text-black rounded-xl p-2'>Learn How to use Props</h1>
      <div className='cards'>
     <Cards username="Alpha" btntext="click me"/>
     <Cards username="Beta" btntext="just click"/>
     <Cards username="Gama" btntext="pls click"/>

      </div>

    </>
  )
}

export default App
