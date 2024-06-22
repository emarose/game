// components/InitialScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { usePlayer } from "../../contexts/PlayerContext";

const InitialScreen = () => {
  const { selectedClass } = usePlayer();
  const navigate = useNavigate();

  const generateRandomEvent = () => {
    const events = ["/chest-event", "/enemy-encounter", "/friendly-npc"];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    navigate(randomEvent);
  };

  return (
    <div>
      <h2>Welcome, {selectedClass.name}!</h2>
      <p>You have chosen the {selectedClass.name} class.</p>
      <p>Health: {selectedClass.attributes.health}</p>
      <p>Strength: {selectedClass.attributes.strength}</p>
      <p>Defense: {selectedClass.attributes.defense}</p>
      <p>Initial Skills: {selectedClass.initialSkills.join(", ")}</p>
      <p>
        You awaken in a mysterious forest, surrounded by towering trees and the
        sound of distant creatures. As you stand up, you notice a faint trail
        leading deeper into the woods. Your adventure begins here.
      </p>
      <button onClick={generateRandomEvent}>Continue</button>
    </div>
  );
};

export default InitialScreen;
