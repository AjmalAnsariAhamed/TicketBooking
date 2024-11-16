import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bookedSeats, setBookedSeats] = useState({})
  const sectionsData = [
    { name: "VIP", rows: 5, seatsPerRow: 5 },
    { name: "General", rows: 6, seatsPerRow: 6 },
    { name: "Economy", rows: 8, seatsPerRow: 8 }
  ];

  return (
    <div>

    </div>
  )
}

export default App
