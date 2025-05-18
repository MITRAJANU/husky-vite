import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function increment(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setCounter(counter + 1)
  }
  function decrement(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setCounter(counter - 1)
  }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <button onClick={increment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Increment
        </button>
        <h1>{counter}</h1>
        <button onClick={decrement} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
          Decrement
        </button>

        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </div>
    </>
  )
}

export default App
