import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import ChartData from "./Chart/ChartData";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpensesContainer = ({ expensesData }) => {
  const years = new Set(
    expensesData.map((item) => item.date.getFullYear()).sort()
  );
  const [selectedYear, setSelectedYear] = useState([...years][0]);
  console.log("ss", selectedYear);
  return (
    <div className="expenses">
      <ExpensesFilter setSelectedYear={setSelectedYear} years={[...years]} />
      <ChartData expensesData={expensesData} />
      {expensesData.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
