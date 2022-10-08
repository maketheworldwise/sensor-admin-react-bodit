import ColumnFilter from '../../Components/Filter/ColumnFilter';

export const COLUMNS = [
  {
    Header: '#',
    id: 'index',
    accessor: (_row, i) => i + 1,
    Filter: ColumnFilter,
  },
  {
    Header: 'Sensor ID',
    accessor: 'thingName',
    Filter: ColumnFilter,
  },
  {
    Header: 'Bat.(%)',
    accessor: 'shadow.batLvl',
    Filter: ColumnFilter,
  },
  {
    Header: 'Connected At',
    accessor: 'shadow.connAt',
    Filter: ColumnFilter,
  },
  {
    Header: 'Disconnected At',
    accessor: 'shadow.disconnAt',
    Filter: ColumnFilter,
  },
  {
    Header: 'Reason',
    accessor: 'shadow.disconnReason',
    Filter: ColumnFilter,
  },
  {
    Header: 'Card No.',
    accessor: 'shadow.connCardNum',
    Filter: ColumnFilter,
  },
  {
    Header: 'Gateway',
    accessor: 'shadow.connGW',
    Filter: ColumnFilter,
  },
  {
    Header: 'Raw sent',
    accessor: 'shadow.rawSentCnt',
    Filter: ColumnFilter,
  },
  {
    Header: 'Remain',
    accessor: 'shadow.remainData',
    Filter: ColumnFilter,
  },
  {
    Header: 'RSSI',
    accessor: 'shadow.rssi',
    Filter: ColumnFilter,
  },
  {
    Header: 'F/W ver.',
    accessor: 'shadow.hwVer',
    Filter: ColumnFilter,
  },
  {
    Header: 'H/W ver.',
    accessor: 'shadow.fwVer',
    Filter: ColumnFilter,
  },
];
