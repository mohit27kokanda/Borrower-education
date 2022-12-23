import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = (pieChartData) => {
  const datapoints = Object.values(pieChartData.pieChartData)
  const data = {
    datasets: [
      {
        label: 'EMI Overdue',
        data: datapoints,
        backgroundColor: ["#36cfc9",
          "#38c3d0",
          "#3bb2d1",
          "#3da1d3",
          "#4090d4",
          "#4280d5",
          "#4570d7",
          "#4760d8",
          "#4a50d9",
          "#574cda",
          "#6b4fdb",
          "#7f51dd",
          "#9254de"
        ],       
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        borderWidth: 1,
        outerWidth:200,
      },
    ],
  }
  const legend = {position: 'right', align: 'center'}
  return (<Pie data={data}/>)
};

export default Chart;
