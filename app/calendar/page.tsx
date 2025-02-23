import React from 'react'
import Calendar from '../components/Calendar';


const events = [
  { name: "Meeting with John", date: "2024-01-15" },
  { name: "Birthday Party", date: "2024-01-28" },
  // ... more events
];

const page = () => {
  return (
    <div className="container mx-auto p-4 pt-12">
        <Calendar events={events}/>
    </div>
  )
}

export default page