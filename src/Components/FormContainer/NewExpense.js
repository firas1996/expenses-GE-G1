import { useState } from "react";
import "./NewExpense.css";

const NewExpense = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(title);
    console.log(price);
    console.log(date);
    setTitle("");
    setPrice("");
    setDate("");
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitForm}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              value={title}
              required
              placeholder="Title"
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              required
              placeholder="Price"
              type="number"
              min="0"
              value={price}
              onChange={priceChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={date}
              onChange={dateChangeHandler}
              required
              type="date"
              min="2022-01-01"
              max="2025-12-31"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
