import styles from './Calendar.module.scss';
import Calendar from 'react-calendar';
import Moment from 'react-moment';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getThingspeak } from '../Graph/Api';
import 'react-calendar/dist/Calendar.css';

function CalendarPage() {
  const { CHANNEL_ID } = useParams();
  const [value, onChange] = useState(new Date());
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const onClickDay = () => {
    // navigate('/');
  };

  const fetchdata = () => {};

  useEffect(() => {
    getThingspeak(CHANNEL_ID).then(json => setData(json.data));
    console.log(data);
  }, []);

  return (
    <div className={styles.calendar_container}>
      Calendar
      <Calendar onClickDay={onClickDay} onChange={onChange} value={value} />
      {/* <div> {moment(value).format('YYYY년 MM월 DD일')}</div> */}
      {data}
    </div>
  );
}

export default CalendarPage;
