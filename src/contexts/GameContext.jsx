// GameContext.js
import React, { createContext, useReducer } from "react";

const initialState = {
  player: {
    health: 100,
    magic: 50,
    inventory: {
      weapons: [],
      armor: [],
      items: [],
    },
  },
  settings: {
    soundEnabled: true,
    difficulty: "normal",
  },
};

export const GameContext = createContext();

const gameReducer = (state, action) => {
  switch (action.type) {
    case "EQUIP_ARMOR":
      // Implement logic to equip armor
      return { ...state };
    case "USE_ITEM":
      // Implement logic to use an item
      return { ...state };
    // Other cases for updating game state
    default:
      return state;
  }
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
