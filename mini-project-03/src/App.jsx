import "./App.css";
import { useState } from "react";
import GroceryItem from "./components/GroceryItem";


const App = () => {
  // contains grocery list state
  const [groceryList, setGroceryList] = useState([]);

  // contains input field state
  const [inputValue, setInputValue] = useState(""); // this ordering almost seems inverted but it is correct. the grocery list state is the main state of the app, while the input value is just a temporary state for the input field.

  // function to handle adding items to the grocery list
  const addItem = () => {
    if (inputValue.trim() !== "") {
      setGroceryList([...groceryList, {id: Date.now(), name: inputValue}]); // dictionary with id and name, id is generated using Date.now() to ensure uniqueness
      setInputValue("");
    }
  };

  return (
    <div className="app">
      <h1>Grocery List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e)=> {if (e.key === "Enter") addItem()}} // allows user to press enter to add item
        placeholder="Enter an item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {groceryList.map((item) => (
          <GroceryItem key={item.id} id={item.id} name={item.name}/>
        ))}
      </ul>
    </div>
  );




};

export default App;
