import styles from './Calendar.module.scss';
import DetailCalendar from './DetailCalendar';
import Calendar from 'react-calendar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getThingspeak } from '../Graph/Api';
import 'react-calendar/dist/Calendar.css';
import Gragh from '../Graph/Graph.js';

function CalendarPage() {
  const [value, onChange] = useState(new Date());
  const [data, setData] = useState({});
  // console.log(value);

  const feedsData = {
    channel: data?.feeds?.map(feed => feed.created_at),
  };
  console.log(feedsData);

  const today = () => {
    value.toISOString();
  };
  useEffect(() => {
    getThingspeak().then(json => setData(json));
    const feedsData = {
      channel: data?.feeds?.map(feed => feed.created_at),
    };
  }, []);
  // console.log(data);

  const onClickDay = () => {
    <Link to={`/Gragh/${feedsData.created_at}`} />;
  };

  return (
    <div className={styles.calendar_container}>
      Calendar
      <Calendar
        calendarType="US"
        onClickDay={onClickDay}
        onChange={onChange}
        value={value}
        onSelect={onClickDay}
      />
      <p className="text-center">
        <span className="bold">Selected Date:</span>{' '}
        {value.toString().slice(8, 10)}일
      </p>
      {/* <DetailCalendar date={value} DetailData={data} /> */}
    </div>
  );
}

export default CalendarPage;
