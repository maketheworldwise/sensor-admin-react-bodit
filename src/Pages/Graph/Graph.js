import { useEffect, useState } from 'react';
import { getThingspeak } from './Api';
import { BsCalendarMonth } from 'react-icons/bs';
import styles from './Graph.module.scss';
import TempChart from './Temp';

function Graph() {
  const [data, setData] = useState({});
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  useEffect(() => {
    getThingspeak().then(json => setData(json));
  }, []);

  return (
    <div className={styles.graph_container}>
      <div className={styles.graph_title}>
        <p>{date}</p>
        <p>
          <BsCalendarMonth />
        </p>
      </div>

      <ul className={styles.graph_wrap}>
        <li>
          <TempChart TempData={data} />
        </li>
        <li>{/* 컴포넌트 */}</li>
        <li>{/* 컴포넌트 */}</li>
      </ul>
    </div>
  );
}

export default Graph;
