// components/ClassSelection.js
import React from "react";

import { useNavigate } from "react-router-dom";
import { usePlayer } from "../../contexts/PlayerContext";
import { useInventory } from "../../contexts/InventoryContext";

const ClassSelection = () => {
  const { classes, selectClass } = usePlayer();
  const { setInitialInventory } = useInventory();
  const navigate = useNavigate();

  const handleSelectClass = (classId) => {
    const selected = classes.find((cls) => cls.id === classId);
    selectClass(selected);
    setInitialInventory(selected.initialInventory);
    navigate("/initial-screen");
  };

  return (
    <div>
      <h2>Select Your Class</h2>
      <ul>
        {classes.map((cls) => (
          <li key={cls.id}>
            <h3>{cls.name}</h3>
            <p>Health: {cls.attributes.health}</p>
            <p>Strength: {cls.attributes.strength}</p>
            <p>Defense: {cls.attributes.defense}</p>
            <button onClick={() => handleSelectClass(cls.id)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassSelection;
