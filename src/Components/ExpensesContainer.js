import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import ChartData from "./Chart/ChartData";
import ExpensesFilter from "./ExpensesFilter";

const ExpensesContainer = ({ expensesData }) => {
  const years = new Set(
    expensesData.map((item) => item.date.getFullYear()).sort()
  );
  return (
    <div className="expenses">
      <ExpensesFilter years={[...years]} />
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
