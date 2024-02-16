import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import ChartData from "./Chart/ChartData";

const ExpensesContainer = ({ expensesData }) => {
  return (
    <div className="expenses">
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
