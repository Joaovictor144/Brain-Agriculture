import { Chart } from "react-google-charts";

interface IChart {
  data: (string | number)[][],
  options: {
    title: string;
  }
  width: string;
  height: string;
}


export const Charts = ({data, height, options, width}:IChart)=> {
  return (
    <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={width}
    height={height}
  />
  );
}