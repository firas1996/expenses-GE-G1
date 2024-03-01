import "./ChartBar.css";

const ChartBar = ({ month, value, max, total }) => {
  let h = "0%";
  if (max > 0) {
    h = Math.round((value / max) * 100);
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: `${h}%` }}></div>
      </div>
      <p className="chart-bar__label">{month}</p>
    </div>
  );
};

export default ChartBar;
