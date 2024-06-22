import { useCombat } from "../../contexts/CombatContext";

const CombatPanel = () => {
  const {
    playerHP,
    enemyHP,
    combatLog,
    handlePlayerAttack,
    handleEnemyAttack,
  } = useCombat();

  return (
    <div>
      <h2>Combat Panel</h2>
      <div>
        <p>Player HP: {playerHP}</p>
        <p>Enemy HP: {enemyHP}</p>
      </div>
      <button onClick={handlePlayerAttack}>Attack</button>
      <button onClick={handleEnemyAttack} disabled={enemyHP <= 0}>
        Enemy Attack
      </button>
      <div>
        <h3>Combat Log</h3>
        <ul>
          {combatLog.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CombatPanel;
