import styles from './Calendar.module.scss';
import Calendar from 'react-calendar';
import { useState, useRef } from 'react';
import 'react-calendar/dist/Calendar.css';

function CalendarPage({ clickIcon, setModal }) {
  const [value, onChange] = useState(new Date());
  const calendar = useRef(null);

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
        value={value}
        onChange={e => {
          clickIcon(e);
          onChange();
        }}
      />
    </div>
  );
}

export default CalendarPage;
