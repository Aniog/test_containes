import { useState } from 'react';
import { GameProvider } from './utils/gameContext';
import HomePage from './pages/HomePage';
import StandardSudokuGame from './components/sudoku/StandardSudoku';
import GreaterThanSudokuGame from './components/sudoku/GreaterThanSudoku';
import SiameseSudokuGame from './components/sudoku/SiameseSudoku';
import ArithmeticSudokuGame from './components/sudoku/ArithmeticSudoku';

function GameRouter({ gameId, onBack }) {
  if (gameId === 'sudoku-4') {
    return (
      <StandardSudokuGame
        size={4} boxRows={2} boxCols={2}
        title="四宫数独" gameType="sudoku-4"
        onBack={onBack}
      />
    );
  }
  if (gameId === 'sudoku-6') {
    return (
      <StandardSudokuGame
        size={6} boxRows={2} boxCols={3}
        title="六宫数独" gameType="sudoku-6"
        onBack={onBack}
      />
    );
  }
  if (gameId === 'sudoku-9') {
    return (
      <StandardSudokuGame
        size={9} boxRows={3} boxCols={3}
        title="九宫数独" gameType="sudoku-9"
        onBack={onBack}
      />
    );
  }
  if (gameId === 'greater-than') {
    return <GreaterThanSudokuGame onBack={onBack} />;
  }
  if (gameId === 'siamese') {
    return <SiameseSudokuGame onBack={onBack} />;
  }
  if (gameId === 'arithmetic') {
    return <ArithmeticSudokuGame onBack={onBack} />;
  }
  return null;
}

function App() {
  const [currentGame, setCurrentGame] = useState(null);

  return (
    <GameProvider>
      {currentGame ? (
        <GameRouter
          gameId={currentGame}
          onBack={() => setCurrentGame(null)}
        />
      ) : (
        <HomePage onSelectGame={setCurrentGame} />
      )}
    </GameProvider>
  );
}

export default App;

