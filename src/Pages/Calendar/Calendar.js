import styles from './Calendar.module.scss';
import DetailCalendar from './DetailCalendar';
import Calendar from 'react-calendar';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getThingspeak } from '../Graph/Api';
import 'react-calendar/dist/Calendar.css';
import Gragh from '../Graph/Graph.js';

function CalendarPage({
  current,
  setCurrent,
  clickIcon,
  // selectedDate: { day, month, year },
  // setSelectedDate,
  setModal,
}) {
  const [value, onChange] = useState(new Date());
  const calendar = useRef(null);

  console.log(value);
  const [addMonth, setAddMonth] = useState(0);

  return (
    <div
      className={styles.calendar_container}
      ref={calendar}
      onClick={e => {
        if (calendar.current === e.target) {
          setModal(false);
        }
      }}
    >
      <button
        onClick={() => {
          setModal(false);
        }}
      >
        X
      </button>
      <Calendar
        calendarType="US"
        onChange={e => {
          clickIcon(e);
        }}
        value={value}
        // onClick={dateChange}
      />
      {/* <p>{value.toDateString()}</p> */}
      <div className="text-center"></div>
      {/* <DetailCalendar date={value} DetailData={data} /> */}
    </div>
  );
}

export default CalendarPage;
