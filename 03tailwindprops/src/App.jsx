import { useState } from 'react'
import Card from './Components/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username : "Ruchit",
    age : 20
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">TailWind Test</h1>
      <Card username="Ukani" btnText="click me"/>
      <Card username="Ruchit" />
    </>
  )
}

export default App
