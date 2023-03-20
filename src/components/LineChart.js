import React from "react";
import Label from "./Label";
import '../Stylesheets/linechart.css'
import { Line } from "react-chartjs-2";
import {
  Chart as chartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  CategoryScale,
} from "chart.js";

chartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
    maintainAspectRatio:false,
  scales: {
    y: {
        ticks:{
            display:false
        },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};



const dataLabels = [23, 29, 58, 75, 33, 20, 73, 49];

const data = {
  labels: dataLabels.map((num) => `${num}%`),
  datasets: [
    {
      label: "Upcoming Hours percentage",
      data: [...dataLabels, 0, 100],
      backgroundColor: "#5C9CE5",
      fill: true,
      tension: 0.2,
    },
  ],
};

const timeLabel=['Now','11:00','12:00','13:00','14:00','15:00','16:00','17:00']

const LineChart = () => {
  return (
    <div className="MainChart">
        <div className="Top">
        <h3>Upcoming Hours </h3>
        <div className="LeftDrops">
            <select>
                <option value='Rain preception'>Rain preception</option>
                <option value='Humidity'>Humidity</option>
                <option value='UV Index'>UV Index</option>
            </select>
            <p>Next Days &ensp;&gt;</p>
        </div>
        </div>

        <div className="IconsLabels">
            {timeLabel.map((time)=>{
                return <Label val={time}/>
            })}
        </div>
        <div className="LineChart">
      <Line  data={data} options={options} />
        </div>
    </div>
  );
};

export default LineChart;
