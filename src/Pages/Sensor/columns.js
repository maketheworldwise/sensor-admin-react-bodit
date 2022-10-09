import SectionFilter from '../../Components/Filter/SectionFilter';

export const COLUMNS = [
  {
    Header: '#',
    id: 'index',
    accessor: (_row, i) => i + 1,
    disableFilters: true,
  },
  {
    Header: 'Sensor ID',
    accessor: 'thingName',
  },
  {
    Header: 'Bat.(%)',
    accessor: 'shadow.batLvl',
    Filter: SectionFilter,
  },
  {
    Header: 'Connected At',
    accessor: 'shadow.connAt',
  },
  {
    Header: 'Disconnected At',
    accessor: 'shadow.disconnAt',
  },
  {
    Header: 'Reason',
    accessor: 'shadow.disconnReason',
  },
  {
    Header: 'Card No.',
    accessor: 'shadow.connCardNum',
    Filter: SectionFilter,
  },
  {
    Header: 'Gateway',
    accessor: 'shadow.connGW',
  },
  {
    Header: 'Raw sent',
    accessor: 'shadow.rawSentCnt',
  },
  {
    Header: 'Remain',
    accessor: 'shadow.remainData',
  },
  {
    Header: 'RSSI',
    accessor: 'shadow.rssi',
  },
  {
    Header: 'F/W ver.',
    accessor: 'shadow.hwVer',
  },
  {
    Header: 'H/W ver.',
    accessor: 'shadow.fwVer',
  },
];
