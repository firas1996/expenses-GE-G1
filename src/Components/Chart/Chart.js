import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ data }) => {
  return (
    <div className="chart">
      {data.map((item) => {
        return <ChartBar month={item.month} value={item.value} />;
      })}
    </div>
  );
};

export default Chart;
