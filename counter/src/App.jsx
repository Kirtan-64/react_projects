import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const Increment = () => {
    if (count < 20)
    {
      count = count + 1
      setCount(count)
      console.log("Count increased to " + count)
    }
  }

  const Decrement = () => {
    if (count > 0)
    {
      count = count - 1
      setCount(count)
      console.log("Count decreased to " + count)
    }
  }
  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={Increment}>Increase</button>
      <br /><br />
      <button onClick={Decrement}>Decrease</button>
    </>
  )
}

export default App
