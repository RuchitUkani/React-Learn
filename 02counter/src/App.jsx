import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(5);
  let [lastcounter,setLastCounter] = useState(counter);

  
  const addValue = () =>{
    if(counter>=0){
        setLastCounter(counter)
        setCounter(counter+1)
    }
    
  }
  const removeValue = () =>{
    if(counter>0){
      setLastCounter(counter)
    setCounter(counter-1)
  }

  }

  return (
    <>
    <h1>Counter Program</h1>
    <h2>Counter :{counter}</h2>
    <h3>Last Value : {lastcounter}</h3>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
