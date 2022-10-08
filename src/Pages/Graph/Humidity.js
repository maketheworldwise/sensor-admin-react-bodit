import React from 'react';
import { Chart as ChartJs, LineElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
ChartJs.register(LineElement);

const HumidityChart = ({ HumidityData }) => {
  const data = {
    labels: HumidityData?.feeds?.map(
      date =>
        `${new Date(date.created_at).getUTCHours()}시 ${new Date(
          date.created_at
        ).getUTCMinutes()}분`
    ),
    datasets: [
      {
        label: 'Humidity',
        data: HumidityData?.feeds?.map(feed => feed.field2),
        backgroundColor: ['rgb(193, 212, 240, 0.3)'],
        borderColor: ['rgb(193, 212, 240)'],
        borderWidth: 1,
      },
    ],
  };

  let options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div>
      <Line type="line" data={data} options={options} height={400} />
    </div>
  );
};

export default HumidityChart;
