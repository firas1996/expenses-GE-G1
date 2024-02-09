import React from "react";
import "./ExpenseItem.css";
const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>date</div>
      <h2>title</h2>
      <div className="expense-item__price">price</div>
    </div>
  );
};

export default ExpenseItem;
