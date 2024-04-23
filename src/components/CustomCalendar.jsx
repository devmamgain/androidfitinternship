import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default calendar styles

const CustomCalendar = () => {

  return (
    <>
 <style>
        {`
          /* Custom CSS to display only the first row of days */
          .custom-calendar .react-calendar__month-view__days {
            display: grid;
            grid-template-columns: repeat(7, 1fr); /* Display 7 days in a row */
          }
          .custom-calendar .react-calendar__month-view__days__day {
            display: none; /* Hide all days initially */
          }
          .custom-calendar .react-calendar__month-view__days__day:nth-child(-n+7) {
            display: block; /* Display only the first row of days */
          }
          .custom-calendar .react-calendar {
            border: none; /* Remove border around the calendar */
            font-size: 18px; /* Increase font size of the calendar */
          }
          /* Hide navigation arrows for previous year and next year */
          .custom-calendar .react-calendar__navigation--previous2,
          .custom-calendar .react-calendar__navigation--next2 {
            display: none !important; /* Hide navigation arrows */
          }
        `}
      </style>
      <div className="custom-calendar">

      <Calendar tileClassName="text-3xl text-black "/>
      </div>

    </>
 
  );
};

export default CustomCalendar;
