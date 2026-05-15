import { useState, useCallback, useEffect } from 'react';
import {
  generateArithmeticSudoku,
  validateCage,
  getErrors,
  isBoardComplete,
  calculateScore,
} from '../../utils/sudokuEngine';
import { useTimer, useGame } from '../../utils/gameContext';
import { GameHeader, NumberPad, WinModal, DifficultySelector } from './GameUI';

const SIZE = 4;
const BOX_ROWS = 2;
const BOX_COLS = 2;

// Get cage for a cell
function getCageForCell(cages, r, c) {
  return cages.find(cage => cage.cells.some(([cr, cc]) => cr === r && cc === c));
}

// Get cage border style for a cell
function getCageBorders(cage, r, c, cages) {
  const inCage = (row, col) => cage.cells.some(([cr, cc]) => cr === row && cc === col);
  const sameCage = (row, col) => {
    const other = getCageForCell(cages, row, col);
    return other && other === cage;
  };

  return {
    borderTop: !sameCage(r - 1, c),
    borderBottom: !sameCage(r + 1, c),
    borderLeft: !sameCage(r, c - 1),
    borderRight: !sameCage(r, c + 1),
  };
}

// Assign cage colors
const CAGE_COLORS = [
  '#fef3c7', '#dbeafe', '#dcfce7', '#fce7f3',
  '#ede9fe', '#ffedd5', '#f0fdf4', '#fdf2f8',
  '#ecfdf5', '#eff6ff', '#fefce8', '#fdf4ff',
  '#f0f9ff', '#fff7ed', '#f7fee7', '#fdf2f8',
];

export default function ArithmeticSudokuGame({ onBack }) {
  const { addScore } = useGame();
  const [difficulty, setDifficulty] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [board, setBoard] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  const [errors, setErrors] = useState(new Set());
  const [cageErrors, setCageErrors] = useState(new Set());
  const [errorCount, setErrorCount] = useState(0);
  const [won, setWon] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const { seconds, reset: resetTimer } = useTimer(!!gameData && !won);

  const initGame = useCallback(() => {
    const data = generateArithmeticSudoku();
    setGameData(data);
    // Pre-fill given cells
    const newBoard = data.puzzle.map(r => [...r]);
    for (const cage of data.cages) {
      if (cage.given) {
        const [[r, c]] = cage.cells;
        newBoard[r][c] = cage.target;
      }
    }
    setBoard(newBoard);
    setSelectedCell(null);
    setErrors(new Set());
    setCageErrors(new Set());
    setErrorCount(0);
    setWon(false);
    setFinalScore(0);
    resetTimer();
  }, [resetTimer]);

  const handleDifficulty = useCallback((diff) => {
    setDifficulty(diff);
    initGame();
  }, [initGame]);

  const checkCageErrors = useCallback((newBoard, cages) => {
    const errs = new Set();
    cages.forEach((cage, i) => {
      const result = validateCage(cage, newBoard);
      if (result === false) errs.add(i);
    });
    return errs;
  }, []);

  const handleNumber = useCallback((num) => {
    if (!selectedCell || !gameData || won) return;
    const [r, c] = selectedCell;
    // Check if cell is a given
    const cage = getCageForCell(gameData.cages, r, c);
    if (cage?.given) return;

    const newBoard = board.map(row => [...row]);
    newBoard[r][c] = num;
    setBoard(newBoard);

    const newErrors = getErrors(newBoard, gameData.solution, SIZE);
    const prevSize = errors.size;
    setErrors(newErrors);
    if (newErrors.size > prevSize) setErrorCount(prev => prev + 1);

    const newCageErrors = checkCageErrors(newBoard, gameData.cages);
    setCageErrors(newCageErrors);

    if (isBoardComplete(newBoard, SIZE) && newErrors.size === 0) {
      const score = calculateScore(seconds, errorCount, SIZE, difficulty || 'medium') * 1.5;
      setFinalScore(Math.round(score));
      setWon(true);
      addScore(Math.round(score), 'arithmetic-4', seconds);
    }
  }, [selectedCell, gameData, won, board, errors, seconds, errorCount, difficulty, addScore, checkCageErrors]);

  const handleErase = useCallback(() => {
    if (!selectedCell || !gameData || won) return;
    const [r, c] = selectedCell;
    const cage = getCageForCell(gameData.cages, r, c);
    if (cage?.given) return;
    const newBoard = board.map(row => [...row]);
    newBoard[r][c] = 0;
    setBoard(newBoard);
    setErrors(getErrors(newBoard, gameData.solution, SIZE));
    setCageErrors(checkCageErrors(newBoard, gameData.cages));
  }, [selectedCell, gameData, won, board, checkCageErrors]);

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

  const cellSize = 64;
  const gap = 2;
  const totalSize = SIZE * cellSize + (SIZE - 1) * gap;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <GameHeader
        title="四宫加减数独"
        seconds={seconds}
        score={finalScore}
        errors={errorCount}
        onRefresh={initGame}
        onBack={onBack}
        difficulty={difficulty}
      />

      <div className="flex-1 flex flex-col items-center justify-center p-4 gap-4">
        <div className="text-xs text-slate-500 text-center">
          每个区域内的数字满足左上角的运算结果
        </div>

        <div
          className="relative border-2 border-slate-700 rounded-lg overflow-hidden shadow-lg"
          style={{ width: totalSize + 4, height: totalSize + 4 }}
        >
          {Array.from({ length: SIZE }, (_, r) =>
            Array.from({ length: SIZE }, (_, c) => {
              const cage = getCageForCell(gameData.cages, r, c);
              const cageIdx = gameData.cages.indexOf(cage);
              const isGiven = cage?.given;
              const isSelected = selectedCell?.[0] === r && selectedCell?.[1] === c;
              const isError = errors.has(`${r}-${c}`);
              const val = board[r][c];
              const isCageError = cageErrors.has(cageIdx);
              const isFirstInCage = cage?.cells[0][0] === r && cage?.cells[0][1] === c;

              const cageColor = CAGE_COLORS[cageIdx % CAGE_COLORS.length];

              let bg = cageColor;
              if (isSelected) bg = '#bfdbfe';
              else if (isError) bg = '#fee2e2';
              else if (isCageError) bg = '#fef3c7';

              let color = '#1e293b';
              if (isGiven) color = '#1e293b';
              else if (isError) color = '#dc2626';
              else if (val !== 0) color = '#2563eb';

              const x = c * (cellSize + gap);
              const y = r * (cellSize + gap);

              // Cage borders
              const borders = cage ? getCageBorders(cage, r, c, gameData.cages) : { borderTop: true, borderBottom: true, borderLeft: true, borderRight: true };

              // Box borders (thicker)
              const boxBorderLeft = c % BOX_COLS === 0 ? 2 : 0;
              const boxBorderTop = r % BOX_ROWS === 0 ? 2 : 0;

              return (
                <div
                  key={`${r}-${c}`}
                  style={{
                    position: 'absolute',
                    left: x + 2,
                    top: y + 2,
                    width: cellSize,
                    height: cellSize,
                    backgroundColor: bg,
                    color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 22,
                    fontWeight: isGiven ? 700 : 600,
                    cursor: isGiven ? 'default' : 'pointer',
                    borderTop: borders.borderTop ? `2px dashed #6b7280` : `1px solid #d1d5db`,
                    borderBottom: borders.borderBottom ? `2px dashed #6b7280` : `1px solid #d1d5db`,
                    borderLeft: borders.borderLeft ? `2px dashed #6b7280` : `1px solid #d1d5db`,
                    borderRight: borders.borderRight ? `2px dashed #6b7280` : `1px solid #d1d5db`,
                    userSelect: 'none',
                    transition: 'background-color 0.15s',
                    boxSizing: 'border-box',
                  }}
                  onClick={() => !isGiven && setSelectedCell([r, c])}
                  onMouseDown={e => e.preventDefault()}
                >
                  {isFirstInCage && cage && (
                    <span
                      style={{
                        position: 'absolute',
                        top: 2,
                        left: 3,
                        fontSize: 10,
                        fontWeight: 700,
                        color: '#374151',
                        lineHeight: 1,
                      }}
                    >
                      {cage.label}
                    </span>
                  )}
                  {val !== 0 ? val : ''}
                </div>
              );
            })
          )}

          {/* Box grid lines overlay */}
          {[1, 2, 3].map(i => (
            <div
              key={`vl-${i}`}
              style={{
                position: 'absolute',
                left: i * (cellSize + gap) + 2,
                top: 2,
                width: i % BOX_COLS === 0 ? 2 : 1,
                height: totalSize,
                backgroundColor: i % BOX_COLS === 0 ? '#334155' : '#cbd5e1',
                pointerEvents: 'none',
              }}
            />
          ))}
          {[1, 2, 3].map(i => (
            <div
              key={`hl-${i}`}
              style={{
                position: 'absolute',
                top: i * (cellSize + gap) + 2,
                left: 2,
                height: i % BOX_ROWS === 0 ? 2 : 1,
                width: totalSize,
                backgroundColor: i % BOX_ROWS === 0 ? '#334155' : '#cbd5e1',
                pointerEvents: 'none',
              }}
            />
          ))}
        </div>

        <NumberPad maxNum={SIZE} onNumber={handleNumber} onErase={handleErase} />
      </div>

      <WinModal
        show={won}
        score={finalScore}
        time={seconds}
        errors={errorCount}
        gameType="四宫加减数独"
        onPlayAgain={initGame}
        onBack={onBack}
      />
    </div>
  );
}
