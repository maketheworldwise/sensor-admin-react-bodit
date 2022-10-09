import { useEffect, useState } from 'react';
import { getThingspeak } from './Api';
import { BsCalendarMonth } from 'react-icons/bs';
import styles from './Graph.module.scss';
import TempChart from './Temp';
import HumidityChart from './Humidity';
import Pressure from './Pressure';
import Calendar from '../Calendar/Calendar';
import moment from 'moment';

function Graph() {
  const [data, setData] = useState({});
  const [current, setCurrent] = useState(new Date());
  const [modal, setModal] = useState(false);

  const selecedDate = moment(current).format('YYYY-MM-DD');
  const selecedDateNext = moment(selecedDate)
    .add(1, 'days')
    .format('YYYY-MM-DD');

  const clickIcon = date => {
    setCurrent(date);
    if (date) {
      setModal(!modal);
    }
  };

  useEffect(() => {
    getThingspeak(selecedDate, selecedDateNext).then(json => setData(json));
  }, [selecedDate]);

  return (
    <div className={styles.graph_container}>
      {modal && (
        <Calendar
          current={current}
          setCurrent={setCurrent}
          setModal={setModal}
          clickIcon={clickIcon}
        />
      )}
      <div className={styles.graph_title}>
        <h2>{selecedDate}</h2>
        <p>
          <BsCalendarMonth onClick={clickIcon} />
        </p>
      </div>

      <ul className={styles.graph_wrap_title}>
        <li>기온</li>
        <li>습도</li>
        <li>기압</li>
      </ul>

      <ul className={styles.graph_wrap}>
        <li>
          <TempChart TempData={data} />
        </li>
        <li>
          <HumidityChart HumidityData={data} />
        </li>
        <li>
          <Pressure PressureData={data} />
        </li>
      </ul>
    </div>
  );
}

export default Graph;
