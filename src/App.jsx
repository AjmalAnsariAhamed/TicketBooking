import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [bookedSeats, setBookedSeats] = useState([]);
  const [cancel, setCancel] = useState(false);
  const [box, setBox] = useState(false);
  const sectionsData = [
    { name: "VIP", rows: 5, seatsPerRow: 5 },
    { name: "General", rows: 6, seatsPerRow: 6 },
    { name: "Economy", rows: 8, seatsPerRow: 8 },
  ];

  const frBooking = (name, row, seat_index) => {
    const data = `name:${name},row:${row},seat_index:${seat_index}`;
    console.log(data, "it is data bariable");
    if (bookedSeats.length > 5) {
      alert("you have booked all seats");
      return;
    }
    if (isBooked(name, row, seat_index)) {
      setBox(!box);
      frCancel(data)
     
      
    } else {
      setBookedSeats([...bookedSeats, data]);
      
    }
  };
  const frCancel =(data)=>{
   if (cancel){
    setBookedSeats(prev=> prev.filter(data=> data!==data))
    setCancel(prev=>!prev)
   }
  }
  useEffect(()=>{
    frCancel()
  },[cancel])
  const isBooked = (name, row, seat) => {
    const data = `name:${name},row:${row},seat_index:${seat}`;
    return bookedSeats.includes(data);
  };
  const total=()=>{
    
  }

  return (
    <div className="bg-zinc-100 p-10 w-full h-full relative overflow-x-hidden">
      {box && (
        <div className="box w-44 h-32 p-2 mx-auto fixed flex flex-col gap-3 items-center justify-center left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-emerald-700 rounded-lg">
          <h1 className="text-center">are you sure you want to cancel it</h1>
          <div className="flex items-center gap-3">
            {" "}
            <button onClick={()=> setBox(!box)} className="bg-zinc-700 text-emerald-600 rounded-sm font-semibold px-2 py-1">
              back
            </button>{" "}
            <button
              onClick={() => {
                setCancel(!cancel);
                setBox(!box);
              
              }}
              className="bg-zinc-700 text-emerald-600 rounded-sm font-semibold px-2 py-1"
            >
              cancel
            </button>
          </div>
        </div>
      )}

      <h1>you can book only 5 tickets out of all sections</h1>
      {sectionsData.map((section, id) => (
        <div
          key={id}
          className="wrapper min-w-[40%] max-w-[60%] mx-auto flex flex-col gap-10 "
        >
          <h1 className="text-3xl text-center font-semibold mt-10">
            this is {section.name}
          </h1>
          {[...Array(section.rows)].map((row, row_index) => (
            <div
              key={row_index}
              className="rows flex items-center justify-between gap-5"
            >
              {" "}
              {[...Array(section.seatsPerRow)].map((und, seat_index) => (
                <div
                  onClick={() =>
                    frBooking(section.name, row_index + 1, seat_index + 1)
                  }
                  key={seat_index}
                  className={`seats h-14 w-14 ${
                    isBooked(section.name, row_index + 1, seat_index + 1)
                      ? "bg-red-700"
                      : "bg-emerald-600"
                  }  rounded-md`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
