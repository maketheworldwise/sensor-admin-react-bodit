import React from 'react';
import { Chart as ChartJs, LineElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(...registerables, zoomPlugin);
ChartJs.register(LineElement);

function TempChart({ TempData }) {
  const data = {
    labels: TempData?.feeds?.map(x => x.created_at),
    datasets: [
      {
        label: 'Temp',
        data: TempData?.feeds?.map(x => x.field1),
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgb(255, 99, 132)'],
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
    responsive: true,
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
        },
        zoom: {
          wheel: {
            enabled: true,
            mode: 'x',
          },
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} height={400} />
    </div>
  );
}
export default TempChart;
