import { useState } from "react";
import "./NewExpense.css";

let id = 5;
const NewExpense = ({ getData }) => {
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
    // const { name, value } = target;
    setOneState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    getData({
      title: oneState.title,
      price: +oneState.price,
      date: new Date(oneState.date),
      id: id,
    });
    id++;
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
              name="title"
              value={oneState.title}
              onChange={inputChanger}
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              required
              placeholder="Price"
              type="number"
              min="0"
              name="price"
              value={oneState.price}
              onChange={inputChanger}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={oneState.date}
              onChange={inputChanger}
              required
              type="date"
              name="date"
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
