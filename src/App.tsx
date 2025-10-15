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
    <div className="app-container">
      <h1>Rock GNV</h1>
      <div className="card">
        <h2>Upcoming Events</h2>
        <ul className="event-list">
          {schedule.map((item, index) => (
            <li key={index} className="event-item">
              <span className="event-date">{item.date}</span>: {item.event}
            </li>
          ))}
        </ul>
        <p className="read-the-docs">
          Get ready to rock Gainesville!
        </p>
      </div>
    </div>
  )
}

export default App