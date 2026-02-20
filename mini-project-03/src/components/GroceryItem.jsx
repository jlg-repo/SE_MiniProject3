import { useState } from "react";

const GroceryItem = ({ id, name, quantity, deleteItem }) => {
  return (
    <li >{name} (Quantity: {quantity}) <button onClick={() => deleteItem(id)}>Delete</button></li>
    // button to delete item, on click, call deleteItem function with id as argument
    // this only works if deleteItem is defined and called as a prop from App.jsx, which is the parent component that holds the state and logic for the grocery list
  );
};

export default GroceryItem;
