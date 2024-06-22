// components/EnemyEncounter.js
import React from "react";
import { usePlayer } from "../../contexts/PlayerContext";
import InventoryList from "../InventoryList/InventoryList";
import { useNavigate } from "react-router-dom";

const EnemyEncounter = () => {
  const { selectedClass } = usePlayer();
  const navigate = useNavigate();

  const enemy = {
    name: "Goblin",
    health: 30,
  };

  const handleCombat = () => {
    // Logic for combat
  };
  const generateRandomEvent = () => {
    const events = ["/chest-event", "/enemy-encounter", "/friendly-npc"];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    navigate(randomEvent);
  };
  return (
    <div>
      <h2>Enemy Encounter!</h2>
      <p>You are attacked by a {enemy.name}.</p>
      <p>Enemy Health: {enemy.health}</p>
      <p>Your Health: {selectedClass.attributes.health}</p>
      <button onClick={handleCombat}>Fight</button>
      <InventoryList />
      <button onClick={generateRandomEvent}>Continue</button>
    </div>
  );
};

export default EnemyEncounter;
