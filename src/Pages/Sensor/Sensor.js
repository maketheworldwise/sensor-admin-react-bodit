import { useEffect, useMemo, useState } from 'react';
import { useSortBy, useTable } from 'react-table';
import { getSensorList } from './Api';
import { COLUMNS } from './columns';

import styles from './Sensor.module.scss';

function Sensor() {
  const columns = useMemo(() => COLUMNS, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    getSensorList().then(json => setData(json));
  }, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className={styles.sensor_container}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => {
                  return (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' ⬇️'
                            : ' ⬆️'
                          : ''}
                      </span>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  let isBatteryLowThan20 = false;
                  if (cell.column.Header === 'Bat.(%)') {
                    if (Number(cell.value) <= 20) {
                      isBatteryLowThan20 = true;
                    }
                  }
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={
                        isBatteryLowThan20
                          ? { backgroundColor: 'red', color: 'white' }
                          : null
                      }
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Sensor;
