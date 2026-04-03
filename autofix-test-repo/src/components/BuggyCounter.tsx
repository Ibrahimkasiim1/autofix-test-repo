import { useState } from 'react'

export default function BuggyCounter() {
  const [count, setCount] = useState(0)

  // Increment function
  const handleIncrement = () => {
    setCount(count + 1);
  }

  // Reset function
  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="p-4 border border-red-500">
      <h3>Test Counter</h3>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement} className="bg-blue-500 text-white p-2">
        Increment
      </button>
      <button onClick={handleReset} className="bg-red-500 text-white p-2 ml-2">
        Reset
      </button>
    </div>
  )
}