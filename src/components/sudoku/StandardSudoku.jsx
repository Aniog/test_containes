import { useState, useCallback, useEffect } from 'react';
import {
  generateStandardSudoku,
  getErrors,
  isBoardComplete,
  calculateScore,
} from '../../utils/sudokuEngine';
import { useTimer, useGame } from '../../utils/gameContext';
import { GameHeader, NumberPad, WinModal, DifficultySelector } from './GameUI';

// Compute border classes for box boundaries
function getBorderClasses(row, col, size, boxRows, boxCols) {
  const classes = [];
  if (col % boxCols === 0 && col !== 0) classes.push('border-l-2 border-l-slate-700');
  if (row % boxRows === 0 && row !== 0) classes.push('border-t-2 border-t-slate-700');
  return classes.join(' ');
}

function StandardBoard({ puzzle, solution, board, setBoard, size, boxRows, boxCols, selectedCell, setSelectedCell, errors }) {
  const cellSize = size === 9 ? 'w-9 h-9 text-base sm:w-10 sm:h-10' :
                   size === 6 ? 'w-11 h-11 text-lg sm:w-12 sm:h-12' :
                                'w-14 h-14 text-xl sm:w-16 sm:h-16';

  const isHighlighted = (r, c) => {
    if (!selectedCell) return false;
    const [sr, sc] = selectedCell;
    if (r === sr || c === sc) return true;
    const boxR = Math.floor(sr / boxRows);
    const boxC = Math.floor(sc / boxCols);
    return Math.floor(r / boxRows) === boxR && Math.floor(c / boxCols) === boxC;
  };

  const isSameValue = (r, c) => {
    if (!selectedCell) return false;
    const [sr, sc] = selectedCell;
    const val = board[sr][sc];
    return val !== 0 && board[r][c] === val;
  };

  return (
    <div
      className="inline-block border-2 border-slate-700 rounded-lg overflow-hidden shadow-lg"
      style={{ lineHeight: 0 }}
    >
      {Array.from({ length: size }, (_, r) => (
        <div key={r} className="flex">
          {Array.from({ length: size }, (_, c) => {
            const isGiven = puzzle[r][c] !== 0;
            const isSelected = selectedCell?.[0] === r && selectedCell?.[1] === c;
            const isError = errors.has(`${r}-${c}`);
            const highlighted = isHighlighted(r, c);
            const sameVal = isSameValue(r, c);
            const val = board[r][c];

            let bgClass = 'bg-white';
            if (isSelected) bgClass = 'bg-blue-200';
            else if (isError) bgClass = 'bg-red-100';
            else if (sameVal) bgClass = 'bg-blue-100';
            else if (highlighted) bgClass = 'bg-slate-100';
            else if (isGiven) bgClass = 'bg-slate-100';

            let textClass = '';
            if (isGiven) textClass = 'font-bold text-slate-800';
            else if (isError) textClass = 'font-semibold text-red-600';
            else if (val !== 0) textClass = 'font-semibold text-blue-600';

            const borderClass = getBorderClasses(r, c, size, boxRows, boxCols);
            const borderRight = c < size - 1 ? 'border-r border-slate-300' : '';
            const borderBottom = r < size - 1 ? 'border-b border-slate-300' : '';

            return (
              <div
                key={c}
                className={`sudoku-cell ${cellSize} ${bgClass} ${textClass} ${borderClass} ${borderRight} ${borderBottom} transition-colors`}
                onClick={() => !isGiven && setSelectedCell([r, c])}
                onMouseDown={e => e.preventDefault()}
              >
                {val !== 0 ? val : ''}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default function StandardSudokuGame({ size, boxRows, boxCols, title, gameType, onBack }) {
  const { addScore } = useGame();
  const [difficulty, setDifficulty] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [board, setBoard] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  const [errors, setErrors] = useState(new Set());
  const [errorCount, setErrorCount] = useState(0);
  const [won, setWon] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const { seconds, reset: resetTimer } = useTimer(!!gameData && !won);

  const initGame = useCallback((diff) => {
    const data = generateStandardSudoku(size, boxRows, boxCols, diff);
    setGameData(data);
    setBoard(data.puzzle.map(r => [...r]));
    setSelectedCell(null);
    setErrors(new Set());
    setErrorCount(0);
    setWon(false);
    setFinalScore(0);
    resetTimer();
  }, [size, boxRows, boxCols, resetTimer]);

  const handleDifficulty = useCallback((diff) => {
    setDifficulty(diff);
    initGame(diff);
  }, [initGame]);

  const handleNumber = useCallback((num) => {
    if (!selectedCell || !gameData || won) return;
    const [r, c] = selectedCell;
    if (gameData.puzzle[r][c] !== 0) return;

    const newBoard = board.map(row => [...row]);
    newBoard[r][c] = num;
    setBoard(newBoard);

    const newErrors = getErrors(newBoard, gameData.solution, size);
    const prevErrorCount = errors.size;
    setErrors(newErrors);
    if (newErrors.size > prevErrorCount) {
      setErrorCount(prev => prev + 1);
    }

    if (isBoardComplete(newBoard, size) && newErrors.size === 0) {
      const score = calculateScore(seconds, errorCount + (newErrors.size > prevErrorCount ? 1 : 0), size, difficulty);
      setFinalScore(score);
      setWon(true);
      addScore(score, gameType, seconds);
    }
  }, [selectedCell, gameData, won, board, errors, size, seconds, errorCount, difficulty, gameType, addScore]);

  const handleErase = useCallback(() => {
    if (!selectedCell || !gameData || won) return;
    const [r, c] = selectedCell;
    if (gameData.puzzle[r][c] !== 0) return;
    const newBoard = board.map(row => [...row]);
    newBoard[r][c] = 0;
    setBoard(newBoard);
    setErrors(getErrors(newBoard, gameData.solution, size));
  }, [selectedCell, gameData, won, board, size]);

  const handleHint = useCallback(() => {
    if (!selectedCell || !gameData || won) return;
    const [r, c] = selectedCell;
    if (gameData.puzzle[r][c] !== 0) return;
    const newBoard = board.map(row => [...row]);
    newBoard[r][c] = gameData.solution[r][c];
    setBoard(newBoard);
    setErrors(getErrors(newBoard, gameData.solution, size));
    setErrorCount(prev => prev + 2); // hint costs 2 error points
  }, [selectedCell, gameData, won, board, size]);

  const handleRefresh = useCallback(() => {
    if (difficulty) initGame(difficulty);
    else setDifficulty(null);
  }, [difficulty, initGame]);

  useEffect(() => {
    const handleKey = (e) => {
      const num = parseInt(e.key);
      if (num >= 1 && num <= size) handleNumber(num);
      if (e.key === 'Backspace' || e.key === 'Delete') handleErase();
      if (e.key === 'ArrowUp' && selectedCell) setSelectedCell([Math.max(0, selectedCell[0] - 1), selectedCell[1]]);
      if (e.key === 'ArrowDown' && selectedCell) setSelectedCell([Math.min(size - 1, selectedCell[0] + 1), selectedCell[1]]);
      if (e.key === 'ArrowLeft' && selectedCell) setSelectedCell([selectedCell[0], Math.max(0, selectedCell[1] - 1)]);
      if (e.key === 'ArrowRight' && selectedCell) setSelectedCell([selectedCell[0], Math.min(size - 1, selectedCell[1] + 1)]);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleNumber, handleErase, selectedCell, size]);

  if (!difficulty) {
    return <DifficultySelector onSelect={handleDifficulty} />;
  }

  if (!gameData) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <GameHeader
        title={title}
        seconds={seconds}
        score={finalScore}
        errors={errorCount}
        onRefresh={handleRefresh}
        onBack={onBack}
        onHint={handleHint}
        difficulty={difficulty}
      />

      <div className="flex-1 flex flex-col items-center justify-center p-4 gap-4">
        <StandardBoard
          puzzle={gameData.puzzle}
          solution={gameData.solution}
          board={board}
          setBoard={setBoard}
          size={size}
          boxRows={boxRows}
          boxCols={boxCols}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
          errors={errors}
        />
        <NumberPad maxNum={size} onNumber={handleNumber} onErase={handleErase} />
      </div>

      <WinModal
        show={won}
        score={finalScore}
        time={seconds}
        errors={errorCount}
        gameType={title}
        onPlayAgain={() => initGame(difficulty)}
        onBack={onBack}
      />
    </div>
  );
}
