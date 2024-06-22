// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PlayerProvider } from "./contexts/PlayerContext";
import { InventoryProvider } from "./contexts/InventoryContext";
import ClassSelection from "./components/ClassSelection/ClassSelection";
import InitialScreen from "./components/InitialScreen/InitialScreen";
import Home from "./components/Home/Home";
import FriendlyNPC from "./components/FriendlyNPC/FriendlyNPC";
import EnemyEncounter from "./components/EnemyEncounter/EnemyEncounter";
import ChestEvent from "./components/ChestEvent/ChestEvent";

const App = () => {
  return (
    <Router>
      <PlayerProvider>
        <InventoryProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select-class" element={<ClassSelection />} />
            <Route path="/initial-screen" element={<InitialScreen />} />
            <Route path="/chest-event" element={<ChestEvent />} />
            <Route path="/enemy-encounter" element={<EnemyEncounter />} />
            <Route path="/friendly-npc" element={<FriendlyNPC />} />
            {/* Add more routes as needed */}
          </Routes>
        </InventoryProvider>
      </PlayerProvider>
    </Router>
  );
};

export default App;
