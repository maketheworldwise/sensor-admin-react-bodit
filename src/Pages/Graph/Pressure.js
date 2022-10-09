import React from 'react';
import { Chart as ChartJs, LineElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
ChartJs.register(LineElement);

const PressureChart = ({ PressureData }) => {
  const data = {
    labels: PressureData?.feeds?.map(
      date =>
        `${new Date(date.created_at).getUTCHours()}시 ${new Date(
          date.created_at
        ).getUTCMinutes()}분`
    ),
    datasets: [
      {
        label: 'Pressure',
        data: PressureData?.feeds?.map(feed => feed.field3),
        backgroundColor: ['rgb(193, 212, 100, 0.3)'],
        borderColor: ['rgb(193, 212, 100)'],
        borderWidth: 1,
      },
    ],
  };

  let options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },

    // scales: {
    // axis: 'y', // x축(가로축)인지 y축(세로축)인지 표시합니다.
    // max: '100',
    // min: '10',
    // position: 'top',
    // ticks: {
    //   beginAtZero: false,
    //   steps: 10,
    //   stepValue: 5,
    //   min: 1000,
    //   max: 1200,
    // },
    // },
  };

  return (
    <div>
      <Line type="line" data={data} options={options} height={400} />
    </div>
  );
};

export default PressureChart;
