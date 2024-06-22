// components/ChestEvent.js
import React, { useEffect, useState } from "react";
import InventoryList from "../InventoryList/InventoryList";
import { useInventory } from "../../contexts/InventoryContext";
import { generateChatCompletion } from "../../utils/generateChatCompletion";

const ChestEvent = () => {
  const { addItem } = useInventory();
  const [loot, setLoot] = useState(null);

  useEffect(() => {
    const fetchLoot = async () => {
      const lootQuery = await generateChatCompletion(
        "Provide a random item, weapon, armor, or usable. it should look like this as example: {id: Date.now(), name: 'Magic Sword', type: 'Weapon', stats: { damage: 15}}. Dont give any additional intro"
      );

      try {
        const correctedLootText = lootQuery
          .replace(/(\w+):/g, '"$1":') // Add quotes around property names
          .replace(/'/g, '"'); // Replace single quotes with double quotes

        const parsedLoot = JSON.parse(correctedLootText);
        setLoot(parsedLoot);
      } catch (error) {
        console.error("Failed to parse loreText:", error);
      }
    };

    fetchLoot();
  }, []);

  const handleAddLoot = () => {
    if (loot) {
      addItem(loot);
    }
  };

  return (
    <div>
      <h2>You found a chest!</h2>
      {loot ? (
        <>
          <p>Inside the chest, you find {loot.name}.</p>
          <button onClick={handleAddLoot}>Take Loot</button>
        </>
      ) : (
        <p>Loading loot...</p>
      )}
      <InventoryList />
    </div>
  );
};

export default ChestEvent;
