import React from "react";
import "./ExpenseItem.css";
import DateItem from "./DateItem";
const ExpenseItem = ({ title, price, date }) => {
  return (
    <div className="expense-item">
      <DateItem date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
