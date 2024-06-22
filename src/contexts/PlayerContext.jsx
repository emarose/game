// contexts/PlayerContext.js
import React, { createContext, useContext, useState } from "react";

// Sample data for player classes
const initialClasses = [
  {
    id: 1,
    name: "Warrior",
    attributes: {
      health: 100,
      strength: 20,
      defense: 15,
    },
    initialSkills: ["Slash", "Block"],
    initialInventory: [
      { id: 1, name: "Iron Sword" },
      { id: 2, name: "Shield" },
    ],
  },
  {
    id: 2,
    name: "Mage",
    attributes: {
      health: 70,
      strength: 10,
      defense: 5,
    },
    initialSkills: ["Fireball", "Teleport"],
    initialInventory: [
      { id: 3, name: "Magic Staff" },
      { id: 4, name: "Spellbook" },
    ],
  },
  // Add more classes as needed
];

// Create Player Context
const PlayerContext = createContext();

// Player Provider Component
export const PlayerProvider = ({ children }) => {
  const [selectedClass, setSelectedClass] = useState(null);

  const selectClass = (playerClass) => {
    setSelectedClass(playerClass);
  };

  return (
    <PlayerContext.Provider
      value={{ classes: initialClasses, selectedClass, selectClass }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

// Custom hook to use the Player Context
export const usePlayer = () => useContext(PlayerContext);
