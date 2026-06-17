import { useState } from 'react';
import './App.css';
import LevelSelect from './pages/LevelSelect';
import GameBoard from './components/game/GameBoard';

function App() {
  const [currentLevel, setCurrentLevel] = useState(null);
  const [completedLevels, setCompletedLevels] = useState([]);

  const handleSelectLevel = (level) => {
    setCurrentLevel(level);
  };

  const handleBack = () => {
    setCurrentLevel(null);
  };

  const handleWin = () => {
    if (currentLevel && !completedLevels.includes(currentLevel.id)) {
      setCompletedLevels(prev => [...prev, currentLevel.id]);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F0EBE3' }}>
      {currentLevel ? (
        <GameBoard
          level={currentLevel}
          onBack={handleBack}
          onWin={handleWin}
        />
      ) : (
        <LevelSelect
          onSelectLevel={handleSelectLevel}
          completedLevels={completedLevels}
        />
      )}
    </div>
  );
}

export default App;
