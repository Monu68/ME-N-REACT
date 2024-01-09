import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    counter = counter + 1;
      setCounter(counter)

  }

  const removeValue = () =>{
    if(counter >0)
    {counter = counter -1
      setCounter(counter)
    }
    
  }

  return (
  <>
  <h1>Chai aur React</h1>
  <h2>counter value {counter}</h2>
  <div className='buttons'>
  <button className='btn1' onClick={addValue}>Add value</button>
  <button className='btn2' onClick={removeValue}>remove value</button>
  </div>
  
  </>
    
  )
}

export default App
