import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [bookedSeats, setBookedSeats] = useState([])
  const sectionsData = [
    { name: "VIP", rows: 5, seatsPerRow: 5 },
    { name: "General", rows: 6, seatsPerRow: 6 },
    { name: "Economy", rows: 8, seatsPerRow: 8 }
  ];
  const isBooked=(name,row,seat)=>{
    const data=`name:${name},row:${row},seat_index:${seat}`
    return bookedSeats.includes(data)
  }

  return (
    <div className='bg-zinc-100 p-10'>
      <h1>you can book only 5 tickets out of all sections</h1>
      {sectionsData.map((section,id)=>(
        <div key={id}className='wrapper min-w-[40%] max-w-[60%] mx-auto flex flex-col gap-10 '>
          <h1 className='text-3xl text-center font-semibold mt-10'>this is {section.name}</h1>
          {[...Array(section.rows)].map((row,row_index)=>(
            <div key={row_index} className="rows flex items-center justify-between gap-5"> {[...Array(section.seatsPerRow)].map((und,seat_index)=>(
              <div key={seat_index} className={`seats h-14 w-14 ${isBooked(section.name,row_index,seat_index)? "bg-red-700": "bg-emerald-600"}  rounded-md`}></div>
            ))}</div>
          ))}
        </div>

      ))}
      

    </div>
  )
}

export default App
