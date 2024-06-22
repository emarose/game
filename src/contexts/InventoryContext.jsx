// contexts/InventoryContext.js
import React, { createContext, useContext, useState } from "react";

// Create Inventory Context
const InventoryContext = createContext();

// Inventory Provider Component
export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);

  const addItem = (item) => {
    setInventory((prevInventory) => [...prevInventory, item]);
  };

  const removeItem = (itemId) => {
    setInventory((prevInventory) =>
      prevInventory.filter((item) => item.id !== itemId)
    );
  };

  const setInitialInventory = (items) => {
    setInventory(items);
  };

  return (
    <InventoryContext.Provider
      value={{ inventory, addItem, removeItem, setInitialInventory }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

// Custom hook to use the Inventory Context
export const useInventory = () => useContext(InventoryContext);
