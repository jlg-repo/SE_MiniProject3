import "./App.css";
import { useState } from "react";
import GroceryItem from "./components/GroceryItem";


const App = () => {
  // contains grocery list state
  const [groceryList, setGroceryList] = useState([]);

  // contains input field state
  const [inputValue, setInputValue] = useState(""); 
  // this ordering almost seems inverted but it is correct. the grocery list state is the main state of the app, while the input value is just a temporary state for the input field.

  const [quantity, setQuantity] = useState(1); // state for quantity, default is 1
  // function to handle adding items to the grocery list

  const [error, setError] = useState("");


  
  const addItem = () => {
    if (inputValue.trim() !== "") {
      setGroceryList([...groceryList, {id: Date.now(), name: inputValue, quantity: quantity}]); // dictionary with id and name, id is generated using Date.now() to ensure uniqueness
      setInputValue("");
      setQuantity(1); 
      // reset quantity to 1 after adding item
      setError("");
      // clear any previous error messages
    } else {
      setError("Please enter an item name.");
    }
  };

  const editItem = (id, newName, newQuantity) => {
    setGroceryList(groceryList.map(item => item.id === id ? {...item, name: newName, quantity: newQuantity} : item));
    // map through grocery list, if item id matches the id of the item to edit, return a new object with the updated name and quantity, otherwise return the original item
  }

  const deleteItem = (id) => {
    setGroceryList(groceryList.filter(item => item.id !== id));
    // item => means for each item in the list, evaluate this expression: item.id !== id, if true, keep the item in the list, if false, filter it out.
// filter out the item with the matching id and update the grocery list state with the new filtered list  
// it's !== instead of != because Javascript's type system is weird, "loose" equality doesn't work here, we don't want type differences to cause bugs like 1 != "1"
    // take grocery list and filter out item with matching id, then update new grocery list state with new filtered list
  }

  const totalItems = groceryList.reduce((acc, item) => acc + item.quantity, 0);


  return (
    <div className="app">
      <h1>Grocery List</h1>
      <p>Total Items: {totalItems}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e)=> {if (e.key === "Enter") addItem()}} 
        // allows user to press enter to add item
        placeholder="Enter an item"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
        onKeyDown={(e)=> {if (e.key === "Enter") addItem()}} 

        placeholder="Quantity"
      />

      {error && <p className="error">{error}</p>}
      <button onClick={addItem}>Add</button>
      <ul>
        {groceryList.map((item) => (
          <GroceryItem key={item.id} id={item.id} name={item.name} quantity={item.quantity || 1 } deleteItem={deleteItem} editItem={editItem}/>
        ))}
      </ul>
    </div>
  );




};

export default App;
