import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const schedule = [
    { date: 'Oct 15, 2025', event: 'Rock Jam Session' },
    { date: 'Oct 20, 2025', event: 'Open Mic Night' },
    { date: 'Oct 25, 2025', event: 'Battle of the Bands' },
  ]

  return (
    <>
      <h1>Rock GNV</h1>
    </>
  )
}

export default App