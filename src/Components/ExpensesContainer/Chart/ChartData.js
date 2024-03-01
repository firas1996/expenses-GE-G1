import React from "react";
import Chart from "./Chart";
import ChartBar from "./ChartBar";

const ChartData = ({ expensesData }) => {
  const data = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jui", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];
  for (const expense of expensesData) {
    data[expense.date.getMonth()].value += expense.price;
  }
  const values = data.map((item) => item.value);
  const max = Math.max(...values);
  const total = values.reduce((a, b) => {
    return a + b;
  });
  console.log(total);
  return <Chart data={data} max={max} total={total} />;
};

export default ChartData;
