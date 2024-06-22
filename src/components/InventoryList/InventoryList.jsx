// components/InventoryList.js
import React from "react";
import { useInventory } from "../../contexts/InventoryContext";

const InventoryList = () => {
  const { inventory } = useInventory();

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
