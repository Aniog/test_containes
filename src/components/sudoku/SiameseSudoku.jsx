import { useState, useCallback, useEffect } from 'react';
import {
  generateSiameseSudoku,
  getErrors,
  isBoardComplete,
  calculateScore,
} from '../../utils/sudokuEngine';
import { useTimer, useGame } from '../../utils/gameContext';
import { GameHeader, NumberPad, WinModal, DifficultySelector } from './GameUI';

const SIZE = 4;
const BOX_ROWS = 2;
const BOX_COLS = 2;

// Shared region: A[0][2], A[0][3], A[1][2], A[1][3] = B[0][0], B[0][1], B[1][0], B[1][1]
const SHARED_A = [[0, 2], [0, 3], [1, 2], [1, 3]];
const SHARED_B = [[0, 0], [0, 1], [1, 0], [1, 1]];

function isSharedA(r, c) {
  return SHARED_A.some(([sr, sc]) => sr === r && sc === c);
}
function isSharedB(r, c) {
  return SHARED_B.some(([sr, sc]) => sr === r && sc === c);
}

function MiniBoard({ puzzle, solution, board, selectedCell, setSelectedCell, errors, label, isA, sharedHighlight }) {
  const isHighlighted = (r, c) => {
    if (!selectedCell) return false;
    const [sr, sc] = selectedCell;
    if (r === sr || c === sc) return true;
    const boxR = Math.floor(sr / BOX_ROWS);
    const boxC = Math.floor(sc / BOX_COLS);
    return Math.floor(r / BOX_ROWS) === boxR && Math.floor(c / BOX_COLS) === boxC;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-xs font-semibold text-slate-500 mb-1">{label}</div>
      <div className="inline-block border-2 border-slate-700 rounded-lg overflow-hidden shadow-md">
        {Array.from({ length: SIZE }, (_, r) => (
          <div key={r} className="flex">
            {Array.from({ length: SIZE }, (_, c) => {
              const isGiven = puzzle[r][c] !== 0;
              const isSelected = selectedCell?.[0] === r && selectedCell?.[1] === c;
              const isError = errors.has(`${r}-${c}`);
              const highlighted = isHighlighted(r, c);
              const val = board[r][c];
              const isShared = isA ? isSharedA(r, c) : isSharedB(r, c);

              let bgClass = 'bg-white';
              if (isSelected) bgClass = 'bg-blue-200';
              else if (isError) bgClass = 'bg-red-100';
              else if (isShared) bgClass = 'bg-purple-100';
              else if (highlighted) bgClass = 'bg-slate-100';
              else if (isGiven) bgClass = 'bg-slate-100';

              let textClass = '';
              if (isGiven) textClass = 'font-bold text-slate-800';
              else if (isError) textClass = 'font-semibold text-red-600';
              else if (val !== 0) textClass = 'font-semibold text-blue-600';

              const borderLeft = c % BOX_COLS === 0 && c !== 0 ? 'border-l-2 border-l-slate-700' : 'border-l border-l-slate-300';
              const borderTop = r % BOX_ROWS === 0 && r !== 0 ? 'border-t-2 border-t-slate-700' : 'border-t border-t-slate-300';

              return (
                <div
                  key={c}
                  className={`sudoku-cell w-14 h-14 text-xl ${bgClass} ${textClass} ${borderLeft} ${borderTop} transition-colors`}
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
    </div>
  );
}

export default function SiameseSudokuGame({ onBack }) {
  const { addScore } = useGame();
  const [difficulty, setDifficulty] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [boardA, setBoardA] = useState(null);
  const [boardB, setBoardB] = useState(null);
  const [activeGrid, setActiveGrid] = useState('A'); // 'A' or 'B'
  const [selectedCellA, setSelectedCellA] = useState(null);
  const [selectedCellB, setSelectedCellB] = useState(null);
  const [errorsA, setErrorsA] = useState(new Set());
  const [errorsB, setErrorsB] = useState(new Set());
  const [errorCount, setErrorCount] = useState(0);
  const [won, setWon] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const { seconds, reset: resetTimer } = useTimer(!!gameData && !won);

  const initGame = useCallback(() => {
    const data = generateSiameseSudoku();
    setGameData(data);
    setBoardA(data.puzzleA.map(r => [...r]));
    setBoardB(data.puzzleB.map(r => [...r]));
    setSelectedCellA(null);
    setSelectedCellB(null);
    setErrorsA(new Set());
    setErrorsB(new Set());
    setErrorCount(0);
    setWon(false);
    setFinalScore(0);
    resetTimer();
  }, [resetTimer]);

  const handleDifficulty = useCallback((diff) => {
    setDifficulty(diff);
    initGame();
  }, [initGame]);

  // Sync shared cells between grids
  const syncShared = useCallback((newBoardA, newBoardB) => {
    const syncedA = newBoardA.map(r => [...r]);
    const syncedB = newBoardB.map(r => [...r]);
    for (let i = 0; i < SHARED_A.length; i++) {
      const [ar, ac] = SHARED_A[i];
      const [br, bc] = SHARED_B[i];
      if (syncedA[ar][ac] !== 0) syncedB[br][bc] = syncedA[ar][ac];
      else if (syncedB[br][bc] !== 0) syncedA[ar][ac] = syncedB[br][bc];
    }
    return [syncedA, syncedB];
  }, []);

  const handleNumber = useCallback((num) => {
    if (!gameData || won) return;
    const isA = activeGrid === 'A';
    const selectedCell = isA ? selectedCellA : selectedCellB;
    if (!selectedCell) return;
    const [r, c] = selectedCell;
    const puzzle = isA ? gameData.puzzleA : gameData.puzzleB;
    if (puzzle[r][c] !== 0) return;

    let newBoardA = boardA.map(row => [...row]);
    let newBoardB = boardB.map(row => [...row]);

    if (isA) newBoardA[r][c] = num;
    else newBoardB[r][c] = num;

    [newBoardA, newBoardB] = syncShared(newBoardA, newBoardB);
    setBoardA(newBoardA);
    setBoardB(newBoardB);

    const newErrA = getErrors(newBoardA, gameData.solA, SIZE);
    const newErrB = getErrors(newBoardB, gameData.solB, SIZE);
    const prevTotal = errorsA.size + errorsB.size;
    setErrorsA(newErrA);
    setErrorsB(newErrB);
    if (newErrA.size + newErrB.size > prevTotal) setErrorCount(prev => prev + 1);

    if (isBoardComplete(newBoardA, SIZE) && isBoardComplete(newBoardB, SIZE) &&
        newErrA.size === 0 && newErrB.size === 0) {
      const score = calculateScore(seconds, errorCount, SIZE, difficulty || 'medium') * 2;
      setFinalScore(score);
      setWon(true);
      addScore(score, 'siamese-4', seconds);
    }
  }, [gameData, won, activeGrid, selectedCellA, selectedCellB, boardA, boardB, errorsA, errorsB, seconds, errorCount, difficulty, addScore, syncShared]);

  const handleErase = useCallback(() => {
    if (!gameData || won) return;
    const isA = activeGrid === 'A';
    const selectedCell = isA ? selectedCellA : selectedCellB;
    if (!selectedCell) return;
    const [r, c] = selectedCell;
    const puzzle = isA ? gameData.puzzleA : gameData.puzzleB;
    if (puzzle[r][c] !== 0) return;

    let newBoardA = boardA.map(row => [...row]);
    let newBoardB = boardB.map(row => [...row]);
    if (isA) newBoardA[r][c] = 0;
    else newBoardB[r][c] = 0;

    [newBoardA, newBoardB] = syncShared(newBoardA, newBoardB);
    setBoardA(newBoardA);
    setBoardB(newBoardB);
    setErrorsA(getErrors(newBoardA, gameData.solA, SIZE));
    setErrorsB(getErrors(newBoardB, gameData.solB, SIZE));
  }, [gameData, won, activeGrid, selectedCellA, selectedCellB, boardA, boardB, syncShared]);

  const handleSelectA = useCallback((cell) => {
    setActiveGrid('A');
    setSelectedCellA(cell);
    setSelectedCellB(null);
  }, []);

  const handleSelectB = useCallback((cell) => {
    setActiveGrid('B');
    setSelectedCellB(cell);
    setSelectedCellA(null);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      const num = parseInt(e.key);
      if (num >= 1 && num <= SIZE) handleNumber(num);
      if (e.key === 'Backspace' || e.key === 'Delete') handleErase();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleNumber, handleErase]);

  if (!difficulty) return <DifficultySelector onSelect={handleDifficulty} />;
  if (!gameData) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <GameHeader
        title="四宫连体数独"
        seconds={seconds}
        score={finalScore}
        errors={errorCount}
        onRefresh={initGame}
        onBack={onBack}
        difficulty={difficulty}
      />

      <div className="flex-1 flex flex-col items-center justify-center p-4 gap-4">
        <div className="text-xs text-slate-500 text-center">
          紫色区域为两个数独的共享格子
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div
            className={`cursor-pointer rounded-xl p-2 transition-all ${activeGrid === 'A' ? 'ring-2 ring-blue-400 bg-blue-50' : 'bg-transparent'}`}
            onClick={() => setActiveGrid('A')}
          >
            <MiniBoard
              puzzle={gameData.puzzleA}
              solution={gameData.solA}
              board={boardA}
              selectedCell={selectedCellA}
              setSelectedCell={handleSelectA}
              errors={errorsA}
              label="数独 A"
              isA={true}
            />
          </div>

          <div className="text-2xl text-slate-400 font-bold hidden sm:block">⟺</div>
          <div className="text-2xl text-slate-400 font-bold sm:hidden">⟺</div>

          <div
            className={`cursor-pointer rounded-xl p-2 transition-all ${activeGrid === 'B' ? 'ring-2 ring-blue-400 bg-blue-50' : 'bg-transparent'}`}
            onClick={() => setActiveGrid('B')}
          >
            <MiniBoard
              puzzle={gameData.puzzleB}
              solution={gameData.solB}
              board={boardB}
              selectedCell={selectedCellB}
              setSelectedCell={handleSelectB}
              errors={errorsB}
              label="数独 B"
              isA={false}
            />
          </div>
        </div>

        <div className="flex gap-2 text-sm">
          <button
            onClick={() => setActiveGrid('A')}
            className={`px-4 py-1.5 rounded-full font-medium transition-colors ${activeGrid === 'A' ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-600'}`}
          >
            编辑 A
          </button>
          <button
            onClick={() => setActiveGrid('B')}
            className={`px-4 py-1.5 rounded-full font-medium transition-colors ${activeGrid === 'B' ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-600'}`}
          >
            编辑 B
          </button>
        </div>

        <NumberPad maxNum={SIZE} onNumber={handleNumber} onErase={handleErase} />
      </div>

      <WinModal
        show={won}
        score={finalScore}
        time={seconds}
        errors={errorCount}
        gameType="四宫连体数独"
        onPlayAgain={initGame}
        onBack={onBack}
      />
    </div>
  );
}
