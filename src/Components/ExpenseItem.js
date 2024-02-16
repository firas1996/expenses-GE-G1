import React, { useState } from "react";
import "./ExpenseItem.css";
import DateItem from "./DateItem";
const ExpenseItem = ({ title, price, date }) => {
  // const [newTitle, setNewTitle] = useState(title);
  // const update = () => {
  //   console.log(newTitle);
  //   setNewTitle("New Title !!!!!");
  //   console.log(newTitle);
  // };
  //   console.log(newTitle);
  return (
    <div className="expense-item">
      <DateItem date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* <button onClick={update}>Update Title</button> */}
        <div className="expense-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
