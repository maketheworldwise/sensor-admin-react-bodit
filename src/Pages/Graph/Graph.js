import { useEffect, useState } from 'react';
import { getThingspeak } from './Api';

import styles from './Graph.module.scss';

function Graph() {
  const [data, setData] = useState({});

  useEffect(() => {
    getThingspeak().then(json => setData(json));
  }, []);

  return <div className={styles.graph_container}>Graph</div>;
}

export default Graph;
