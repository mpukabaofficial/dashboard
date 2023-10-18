import React from "react";
import "./Calendar.css";

const Calendar = () => {
  // You can add your schedule data here
  const scheduleData = [
    {
      time: "08:00 AM",
      event: "Applied statistics",
      Bulding: "Olds Upton",
      classNum: 234,
    },
    {
      time: "10:00 AM",
      event: "Advanced Software Development",
      Bulding: "Dewing",
      classNum: 300,
    },
    // Add more schedule items as needed
  ];

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h1>Daily Schedule</h1>
      </div>
      <div className="calendar-body">
        <div className="schedule-column">
          {scheduleData.map((item, index) => (
            <div className="schedule-item" key={index}>
              <div className="time-event">
                <div className="time">{item.time}</div>
                <div className="event">{item.event}</div>
              </div>
              <div className="location">
                <div className="building">{item.Bulding}</div>
                <div className="classNum">{item.classNum}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
