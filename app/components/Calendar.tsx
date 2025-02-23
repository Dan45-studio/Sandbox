'use client'
// components/Calendar.tsx
import { useState, useEffect } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns";

interface Event {
  name: string;
  date: string;
}

const Calendar: React.FC<{ events: Event[] }> = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentMonthDays, setCurrentMonthDays] = useState<Date[]>([]);

  useEffect(() => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    setCurrentMonthDays(eachDayOfInterval({ start, end }));
  }, [currentMonth]);

  const handleMonthChange = (amount: number) => {
    setCurrentMonth((prevMonth) => {
      if (amount > 0) {
        return addMonths(prevMonth, 1);
      } else {
        return subMonths(prevMonth, 1);
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => handleMonthChange(-1)}
          className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded"
        >
          Previous
        </button>
        <h2 className="text-xl font-bold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={() => handleMonthChange(1)}
          className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded"
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
        {currentMonthDays.map((day) => {
          const dayEvents = events.filter((event) =>
            isSameDay(new Date(event.date), day)
          );

          return (
            <div key={day.toISOString()} className="border p-2">
              <div className="text-center">{format(day, "d")}</div>
              <div>
                {dayEvents.length > 0 ? (
                  dayEvents.map((event) => (
                    <div key={event.name}>{event.name}</div>
                  ))
                ) : (
                  <div>No events</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
