import { useState } from 'react';

export default function SectionFilter({ column }) {
  let optionList;
  //console.log('test', column.accessor);
  column.Header === 'Bat.(%)'
    ? (optionList = [
        ['', 'all'],
        ['100', '100'],
        ['90', '90'],
        ['80', '80'],
        ['70', '70'],
        ['60', '60'],
        ['50', '50'],
        ['40', '40'],
        ['30', '30'],
        ['20', '20'],
      ])
    : (optionList = [
        ['', 'both'],
        ['0', '0'],
        ['1', '1'],
      ]);

  const { setFilter } = column;
  const selectOption = e => {
    setFilter(e.target.value);
  };

  return (
    <>
      <select onChange={selectOption}>
        {optionList.map(optionValue => {
          return (
            <option key={optionValue[0]} value={optionValue[0]}>
              {optionValue[1]}
            </option>
          );
        })}
      </select>
    </>
  );
}
