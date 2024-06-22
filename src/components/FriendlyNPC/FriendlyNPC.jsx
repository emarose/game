// components/FriendlyNPC.js
import React, { useEffect, useState } from "react";
import InventoryList from "../InventoryList/InventoryList";
import { useNavigate } from "react-router-dom";
import { generateChatCompletion } from "../../utils/generateChatCompletion";

const FriendlyNPC = () => {
  const navigate = useNavigate();
  const [lore, setLore] = useState("");

  useEffect(() => {
    const fetchLore = async () => {
      const loreText = await generateChatCompletion(
        "historia corta para juego rpg tradicional. encuentro con npc. 3 lineas"
      );
      setLore(loreText);
    };

    fetchLore();
  }, []);

  const generateRandomEvent = () => {
    const events = ["/chest-event", "/enemy-encounter", "/friendly-npc"];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    navigate(randomEvent);
  };

  return (
    <div style={{ paddingInline: 200 }}>
      <h2>You meet a friendly NPC!</h2>
      <p>{lore}</p>
      <InventoryList />
      <button onClick={generateRandomEvent}>Continue</button>
    </div>
  );
};

export default FriendlyNPC;
