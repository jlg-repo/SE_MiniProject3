import { useState } from "react";

const GroceryItem = ({ id, name, quantity, deleteItem, editItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editQuantity, setEditQuantity] = useState(quantity);

  const handleSave = () => {
    if (editName.trim() !== "" && editQuantity > 0) {
      editItem(id, editName, editQuantity);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditName(name);
    setEditQuantity(quantity);
    setIsEditing(false);
  };


    if (isEditing) {
        return (
          <li>
            <input value= {editName} onChange={(e) => setEditName(e.target.value)} />
            <input type="number" value={editQuantity} onChange={(e) => setEditQuantity(parseInt(e.target.value) || 1)} />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
            </li>
        );

  }


  return (
    <li >{name} (Quantity: {quantity})
    <button onClick={() => setIsEditing(true)}>Edit</button>
     <button onClick={() => deleteItem(id)}>Delete</button></li>
  );
};

export default GroceryItem;
