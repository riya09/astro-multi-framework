import { useState } from "react"

export default function ReactCounter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>React Counter</h2>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}
