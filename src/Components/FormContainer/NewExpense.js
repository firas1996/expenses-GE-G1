import { useState } from "react";
import "./NewExpense.css";

const NewExpense = () => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  const [oneState, setOneState] = useState({
    title: "",
    price: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    // setTitle(event.target.value);
    // setOneState({ ...oneState, title: event.target.value });
    setOneState((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const priceChangeHandler = (event) => {
    // setPrice(event.target.value);
    setOneState({ ...oneState, price: event.target.value });
  };
  const dateChangeHandler = (event) => {
    // setDate(event.target.value);
    setOneState({ ...oneState, date: event.target.value });
  };
  const inputChanger = (event) => {
    setOneState((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(oneState);
    setOneState({
      title: "",
      price: "",
      date: "",
    });
    // console.log(title);
    // console.log(price);
    // console.log(date);
    // setTitle("");
    // setPrice("");
    // setDate("");
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitForm}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              required
              placeholder="Title"
              value={oneState.title}
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
              value={oneState.price}
              onChange={priceChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={oneState.date}
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
