// contexts/CombatContext.js
import React, { createContext, useContext, useState } from "react";

const CombatContext = createContext();

export const CombatProvider = ({ children }) => {
  const [playerHP, setPlayerHP] = useState(100); // Initial player HP
  const [enemyHP, setEnemyHP] = useState(50); // Initial enemy HP
  const [combatLog, setCombatLog] = useState([]); // Combat log for displaying actions

  const handlePlayerAttack = () => {
    const damage = Math.floor(Math.random() * 10) + 1; // Random damage between 1 to 10
    setEnemyHP((prevHP) => Math.max(prevHP - damage, 0)); // Reduce enemy HP by damage dealt

    // Log the attack
    const logEntry = `Player attacked for ${damage} damage.`;
    setCombatLog((prevLog) => [...prevLog, logEntry]);

    // Check if enemy HP drops to 0
    if (enemyHP <= damage) {
      handleEnemyDeath();
    }
  };

  const handleEnemyAttack = () => {
    const damage = Math.floor(Math.random() * 8) + 1; // Random damage between 1 to 8
    setPlayerHP((prevHP) => Math.max(prevHP - damage, 0)); // Reduce player HP by damage dealt

    // Log the attack
    const logEntry = `Enemy attacked for ${damage} damage.`;
    setCombatLog((prevLog) => [...prevLog, logEntry]);

    // Check if player HP drops to 0
    if (playerHP <= damage) {
      handlePlayerDeath();
    }
  };

  const handleEnemyDeath = () => {
    // Handle gaining experience and looting
    const experienceGained = 50;
    const loot = { id: 1, name: "Gold Coin", quantity: 10 };

    // Example: Dispatch action to update player state with gained experience and loot
    // You can use these values in your game logic or dispatch actions to other contexts
    console.log(`Player gained ${experienceGained} experience.`);
    console.log(`Player received loot: ${loot.name}`);

    // Reset enemy HP for next encounter
    setEnemyHP(50); // Reset enemy HP

    // Log enemy death
    const logEntry = `Enemy defeated. Player gained ${experienceGained} experience and received loot.`;
    setCombatLog((prevLog) => [...prevLog, logEntry]);
  };

  const handlePlayerDeath = () => {
    // Handle losing the game (to be implemented)
    console.log("Player has been defeated. Game over.");
    // Example: Dispatch action to handle game over scenario
  };

  return (
    <CombatContext.Provider
      value={{
        playerHP,
        enemyHP,
        combatLog,
        handlePlayerAttack,
        handleEnemyAttack,
      }}
    >
      {children}
    </CombatContext.Provider>
  );
};

export const useCombat = () => useContext(CombatContext);
