import { useState, useCallback, useEffect } from 'react';
import {
  generateGreaterThanSudoku,
  getErrors,
  isBoardComplete,
  calculateScore,
} from '../../utils/sudokuEngine';
import { useTimer, useGame } from '../../utils/gameContext';
import { GameHeader, NumberPad, WinModal, DifficultySelector } from './GameUI';

const SIZE = 6;
const BOX_ROWS = 2;
const BOX_COLS = 3;

function GreaterThanBoard({ puzzle, solution, board, selectedCell, setSelectedCell, errors, hConstraints, vConstraints }) {
  const isHighlighted = (r, c) => {
    if (!selectedCell) return false;
    const [sr, sc] = selectedCell;
    if (r === sr || c === sc) return true;
    const boxR = Math.floor(sr / BOX_ROWS);
    const boxC = Math.floor(sc / BOX_COLS);
    return Math.floor(r / BOX_ROWS) === boxR && Math.floor(c / BOX_COLS) === boxC;
  };

  const isSameValue = (r, c) => {
    if (!selectedCell) return false;
    const [sr, sc] = selectedCell;
    const val = board[sr][sc];
    return val !== 0 && board[r][c] === val;
  };

  const getHConstraint = (r, c) => hConstraints.find(h => h.row === r && h.col === c);
  const getVConstraint = (r, c) => vConstraints.find(v => v.row === r && v.col === c);

  return (
    <div className="inline-block">
      {Array.from({ length: SIZE }, (_, r) => (
        <div key={r} className="flex items-center">
          {Array.from({ length: SIZE }, (_, c) => {
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

            // Box borders
            const borderLeft = c % BOX_COLS === 0 ? 'border-l-2 border-l-slate-700' : 'border-l border-l-slate-300';
            const borderTop = r % BOX_ROWS === 0 ? 'border-t-2 border-t-slate-700' : 'border-t border-t-slate-300';
            const borderRight = c === SIZE - 1 ? 'border-r-2 border-r-slate-700' : '';
            const borderBottom = r === SIZE - 1 ? 'border-b-2 border-b-slate-700' : '';

            const hc = getHConstraint(r, c);
            const vc = getVConstraint(r, c);

            return (
              <div key={c} className="flex items-center">
                <div
                  className={`sudoku-cell w-11 h-11 text-lg ${bgClass} ${textClass} ${borderLeft} ${borderTop} ${borderRight} ${borderBottom} transition-colors`}
                  onClick={() => !isGiven && setSelectedCell([r, c])}
                  onMouseDown={e => e.preventDefault()}
                >
                  {val !== 0 ? val : ''}
                </div>
                {/* Horizontal constraint symbol */}
                {c < SIZE - 1 && hc && (
                  <div className="w-4 flex items-center justify-center text-xs font-bold text-orange-600 select-none">
                    {hc.dir === '>' ? '>' : '<'}
                  </div>
                )}
              </div>
            );
          })}
          {/* Vertical constraint row */}
          {r < SIZE - 1 && (
            <div className="absolute" style={{ display: 'none' }} />
          )}
        </div>
      ))}
      {/* Vertical constraints overlay - rendered as a separate pass */}
      <div className="relative">
        {vConstraints.map((vc, i) => (
          <div
            key={i}
            className="absolute text-xs font-bold text-orange-600 select-none flex items-center justify-center"
            style={{
              left: `${vc.col * 48 + 16}px`,
              top: `${vc.row * 44 + 36}px`,
              width: '16px',
              height: '8px',
            }}
          >
            {vc.dir === 'v' ? '∨' : '∧'}
          </div>
        ))}
      </div>
    </div>
  );
}

// Simpler layout: render grid with constraint symbols inline
function GreaterThanBoardV2({ puzzle, solution, board, selectedCell, setSelectedCell, errors, hConstraints, vConstraints }) {
  const isHighlighted = (r, c) => {
    if (!selectedCell) return false;
    const [sr, sc] = selectedCell;
    if (r === sr || c === sc) return true;
    const boxR = Math.floor(sr / BOX_ROWS);
    const boxC = Math.floor(sc / BOX_COLS);
    return Math.floor(r / BOX_ROWS) === boxR && Math.floor(c / BOX_COLS) === boxC;
  };

  const getHDir = (r, c) => {
    const hc = hConstraints.find(h => h.row === r && h.col === c);
    return hc ? hc.dir : null;
  };

  const getVDir = (r, c) => {
    const vc = vConstraints.find(v => v.row === r && v.col === c);
    return vc ? vc.dir : null;
  };

  const cellW = 40;
  const cellH = 40;
  const gapH = 14; // horizontal gap for constraint
  const gapV = 10; // vertical gap for constraint

  const totalW = SIZE * cellW + (SIZE - 1) * gapH;
  const totalH = SIZE * cellH + (SIZE - 1) * gapV;

  return (
    <div
      className="relative border-2 border-slate-700 rounded-lg overflow-visible"
      style={{ width: totalW, height: totalH }}
    >
      {Array.from({ length: SIZE }, (_, r) =>
        Array.from({ length: SIZE }, (_, c) => {
          const isGiven = puzzle[r][c] !== 0;
          const isSelected = selectedCell?.[0] === r && selectedCell?.[1] === c;
          const isError = errors.has(`${r}-${c}`);
          const highlighted = isHighlighted(r, c);
          const val = board[r][c];

          let bg = '#ffffff';
          if (isSelected) bg = '#bfdbfe';
          else if (isError) bg = '#fee2e2';
          else if (highlighted) bg = '#f1f5f9';
          else if (isGiven) bg = '#e2e8f0';

          let color = '#1e293b';
          if (isGiven) color = '#1e293b';
          else if (isError) color = '#dc2626';
          else if (val !== 0) color = '#2563eb';

          const x = c * (cellW + gapH);
          const y = r * (cellH + gapV);

          // Box borders
          const borderLeft = c % BOX_COLS === 0 ? 2 : 1;
          const borderTop = r % BOX_ROWS === 0 ? 2 : 1;
          const borderRight = (c + 1) % BOX_COLS === 0 || c === SIZE - 1 ? 2 : 1;
          const borderBottom = (r + 1) % BOX_ROWS === 0 || r === SIZE - 1 ? 2 : 1;

          return (
            <div
              key={`${r}-${c}`}
              style={{
                position: 'absolute',
                left: x,
                top: y,
                width: cellW,
                height: cellH,
                backgroundColor: bg,
                color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: isGiven ? 700 : 600,
                cursor: isGiven ? 'default' : 'pointer',
                borderLeft: `${borderLeft}px solid #475569`,
                borderTop: `${borderTop}px solid #475569`,
                borderRight: `${borderRight}px solid #475569`,
                borderBottom: `${borderBottom}px solid #475569`,
                userSelect: 'none',
                transition: 'background-color 0.15s',
              }}
              onClick={() => !isGiven && setSelectedCell([r, c])}
              onMouseDown={e => e.preventDefault()}
            >
              {val !== 0 ? val : ''}
            </div>
          );
        })
      )}

      {/* Horizontal constraint symbols */}
      {hConstraints.map((hc, i) => {
        const x = hc.col * (cellW + gapH) + cellW + 1;
        const y = hc.row * (cellH + gapV) + cellH / 2 - 8;
        return (
          <div
            key={`h-${i}`}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: gapH - 2,
              height: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              fontWeight: 700,
              color: '#ea580c',
              userSelect: 'none',
            }}
          >
            {hc.dir === '>' ? '›' : '‹'}
          </div>
        );
      })}

      {/* Vertical constraint symbols */}
      {vConstraints.map((vc, i) => {
        const x = vc.col * (cellW + gapH) + cellW / 2 - 8;
        const y = vc.row * (cellH + gapV) + cellH + 1;
        return (
          <div
            key={`v-${i}`}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: 16,
              height: gapV - 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 11,
              fontWeight: 700,
              color: '#ea580c',
              userSelect: 'none',
            }}
          >
            {vc.dir === 'v' ? '∨' : '∧'}
          </div>
        );
      })}
    </div>
  );
}

export default function GreaterThanSudokuGame({ onBack }) {
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

  const initGame = useCallback(() => {
    const data = generateGreaterThanSudoku();
    setGameData(data);
    setBoard(data.puzzle.map(r => [...r]));
    setSelectedCell(null);
    setErrors(new Set());
    setErrorCount(0);
    setWon(false);
    setFinalScore(0);
    resetTimer();
  }, [resetTimer]);

  const handleDifficulty = useCallback((diff) => {
    setDifficulty(diff);
    initGame();
  }, [initGame]);

  const handleNumber = useCallback((num) => {
    if (!selectedCell || !gameData || won) return;
    const [r, c] = selectedCell;
    if (gameData.puzzle[r][c] !== 0) return;

    const newBoard = board.map(row => [...row]);
    newBoard[r][c] = num;
    setBoard(newBoard);

    const newErrors = getErrors(newBoard, gameData.solution, SIZE);
    const prevSize = errors.size;
    setErrors(newErrors);
    if (newErrors.size > prevSize) setErrorCount(prev => prev + 1);

    if (isBoardComplete(newBoard, SIZE) && newErrors.size === 0) {
      const score = calculateScore(seconds, errorCount, SIZE, difficulty || 'medium');
      setFinalScore(score);
      setWon(true);
      addScore(score, 'greater-than-6', seconds);
    }
  }, [selectedCell, gameData, won, board, errors, seconds, errorCount, difficulty, addScore]);

  const handleErase = useCallback(() => {
    if (!selectedCell || !gameData || won) return;
    const [r, c] = selectedCell;
    if (gameData.puzzle[r][c] !== 0) return;
    const newBoard = board.map(row => [...row]);
    newBoard[r][c] = 0;
    setBoard(newBoard);
    setErrors(getErrors(newBoard, gameData.solution, SIZE));
  }, [selectedCell, gameData, won, board]);

  const handleHint = useCallback(() => {
    if (!selectedCell || !gameData || won) return;
    const [r, c] = selectedCell;
    if (gameData.puzzle[r][c] !== 0) return;
    const newBoard = board.map(row => [...row]);
    newBoard[r][c] = gameData.solution[r][c];
    setBoard(newBoard);
    setErrors(getErrors(newBoard, gameData.solution, SIZE));
    setErrorCount(prev => prev + 2);
  }, [selectedCell, gameData, won, board]);

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
        title="六宫大小数数独"
        seconds={seconds}
        score={finalScore}
        errors={errorCount}
        onRefresh={initGame}
        onBack={onBack}
        onHint={handleHint}
        difficulty={difficulty}
      />

      <div className="flex-1 flex flex-col items-center justify-center p-4 gap-4">
        <div className="text-xs text-slate-500 text-center mb-1">
          箭头表示相邻格子的大小关系 › ‹ ∨ ∧
        </div>
        <div className="overflow-x-auto">
          <GreaterThanBoardV2
            puzzle={gameData.puzzle}
            solution={gameData.solution}
            board={board}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            errors={errors}
            hConstraints={gameData.hConstraints}
            vConstraints={gameData.vConstraints}
          />
        </div>
        <NumberPad maxNum={SIZE} onNumber={handleNumber} onErase={handleErase} />
      </div>

      <WinModal
        show={won}
        score={finalScore}
        time={seconds}
        errors={errorCount}
        gameType="六宫大小数数独"
        onPlayAgain={initGame}
        onBack={onBack}
      />
    </div>
  );
}
