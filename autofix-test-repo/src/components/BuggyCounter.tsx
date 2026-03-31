import { useState } from 'react'

export default function BuggyCounter() {
  const [count, setCount] = useState(0)

  // BUG: This function should increment by 1, but it's empty!
  const handleIncrement = () => {
    // Missing logic
  }

  return (
    <div className="p-4 border border-red-500">
      <h3>Test Counter</h3>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement} className="bg-blue-500 text-white p-2">
        Increment
      </button>
    </div>
  )
}