import { useEffect, useState } from 'react';
import { getThingspeak } from './Api';
import { BsCalendarMonth } from 'react-icons/bs';
import styles from './Graph.module.scss';
import TempChart from './Temp';
import HumidityChart from './Humidity';
import Pressure from './Pressure';

function Graph() {
  const [data, setData] = useState({});
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  useEffect(() => {
    getThingspeak().then(json => setData(json));
  }, []);
  console.log(data);
  return (
    <div className={styles.graph_container}>
      <div className={styles.graph_title}>
        <p>{date}</p>
        <p>
          <BsCalendarMonth />
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
