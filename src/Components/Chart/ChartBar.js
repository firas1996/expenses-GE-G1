import "./ChartBar.css";

const ChartBar = ({ month, value }) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
      </div>
      <p className="chart-bar__label">{month}</p>
    </div>
  );
};

export default ChartBar;
