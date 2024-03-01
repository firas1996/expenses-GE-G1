import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ChartData from "./Chart/ChartData";

const ExpensesContainer = ({ expensesData }) => {
  const years = [
    "All",
    ...new Set(expensesData.map((item) => item.date.getFullYear()).sort()),
  ];
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const filtredExpenses = expensesData.filter((item) => {
    return selectedYear == "All"
      ? true
      : item.date.getFullYear() == selectedYear;
  });
  return (
    <div className="expenses">
      <ExpensesFilter setSelectedYear={setSelectedYear} years={years} />
      <ChartData expensesData={filtredExpenses} />
      {filtredExpenses.map((expense) => {
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
