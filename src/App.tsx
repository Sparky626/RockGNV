import './App.css'

function App() {
  const schedule = [
    { date: 'Oct 15, 2025', event: 'GNOTH GNITE - @ - ThE cLubhousE' },
    { date: 'Oct 20, 2025', event: 'OPEN MIc niGHT' },
    { date: 'Oct 25, 2025', event: 'BATTLE OF THE BANDS' },
  ]

  return (
    <div className="app-container">
      <div>
        <h1>rOck</h1>
        <h2>Gnv</h2>
      </div>
      
      <div className="card">
        <h3>UPCOMING SHOWS</h3>
        <ul className="event-list">
          {schedule.map((item, index) => (
            <li key={index} className="event-item">
              <span className="event-date">{item.date}</span>
              <span className="event-name">{item.event}</span>
            </li>
          ))}
        </ul>
        <p className="read-the-docs">
          NO RULES. NO LIMITS. JUST ROCK!
        </p>
      </div>
    </div>
  )
}

export default App