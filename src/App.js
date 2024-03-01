import ExpensesContainer from "./Components/ExpensesContainer/ExpensesContainer";

function App() {
  const expensesData = [
    {
      id: 1,
      title: "Food",
      price: 5400,
      date: new Date(2024, 2, 9),
    },
    {
      id: 2,
      title: "New PC",
      price: 3000,
      date: new Date(2023, 7, 29),
    },
    {
      id: 3,
      title: "Education",
      price: 7200,
      date: new Date(2023, 9, 15),
    },
    {
      id: 4,
      title: "Voyage",
      price: 2500,
      date: new Date(2025, 3, 10),
    },
  ];
  return (
    <div>
      <ExpensesContainer expensesData={expensesData} />
    </div>
  );
}

export default App;
