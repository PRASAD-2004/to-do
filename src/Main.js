import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null); 

  const addItem = () => {
    if (newItem.trim() !== '') { 
      setItems([...items, newItem]); 
      setNewItem(''); 
    }
  };

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleMouseHover = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleDelete = (index) => {
    const updatedItems = [...items]; 
    updatedItems.splice(index, 1); 
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input 
        type="text" 
        placeholder="Add item..." 
        value={newItem} 
        onChange={handleChange} 
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li 
            key={index} 
            onMouseEnter={() => handleMouseHover(index)} 
            onMouseLeave={handleMouseLeave} 
            style={{ 
              backgroundColor: hoveredIndex === index ? 'lightgray' : 'white' 
            }}
          > 
            {item}
            {hoveredIndex === index && ( 
              <span style={{ marginLeft: '10px' }}> 
                <button onClick={() => handleDelete(index)}>Delete</button> 
              </span>
            )}
          </li> 
        ))}
      </ul>
    </div>
  );
}

export default App;