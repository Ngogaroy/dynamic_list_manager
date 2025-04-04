import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Adds a new item if the input is not empty
  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  // Deletes an item by filtering out the item at the given index
  const handleDeleteItem = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  // Edits an item by showing a prompt and updating its value if not empty
  const handleEditItem = (indexToEdit) => {
    const currentValue = items[indexToEdit];
    const newValue = prompt('Edit item:', currentValue);
    if (newValue !== null && newValue.trim() !== '') {
      const newItems = [...items];
      newItems[indexToEdit] = newValue.trim();
      setItems(newItems);
    }
  };

  // Clears all items from the list
  const handleClearAll = () => {
    setItems([]);
  };

  return (
    <div className="container">
      <h2>Dynamic List Manager</h2>
      
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      {items.length > 0 && (
        <div className="clear-all-container">
          <button className="clear-all-btn" onClick={handleClearAll}>
            Clear All
          </button>
        </div>
      )}

      <div className="list-container">
        {items.length === 0 ? (
          <p className="empty-list">No items yet...</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <span className="item-text">{item}</span>
                <div className="item-buttons">
                  <button onClick={() => handleEditItem(index)}>Edit</button>
                  <button onClick={() => handleDeleteItem(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
