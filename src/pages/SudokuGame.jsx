import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Lightbulb, PenLine, Eraser, Clock, Trophy, X } from 'lucide-react';
import SudokuBoard from '@/components/sudoku/SudokuBoard';
import { getPuzzleById, LEVELS, TYPE_LABELS, TYPE_DESCRIPTIONS, DIFFICULTY_BG, PUZZLE_TYPES } from '@/data/puzzles';
import { cn } from '@/lib/utils';

const createEmptyGrid = () => Array.from({ length: 9 }, () => Array(9).fill(0));
const createEmptyNotes = () => Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => new Set()));

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const findConflicts = (puzzle, userGrid, puzzleType, regionMap, windowCells, consecutivePairs) => {
  const conflicts = [];
  const getValue = (r, c) => userGrid[r][c] || puzzle[r][c];

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = getValue(r, c);
      if (val === 0) continue;

      // Check row
      for (let cc = 0; cc < 9; cc++) {
        if (cc !== c && getValue(r, cc) === val) {
          conflicts.push([r, c]);
          break;
        }
      }
      if (conflicts.some(([cr, cc]) => cr === r && cc === c)) continue;

      // Check column
      for (let rr = 0; rr < 9; rr++) {
        if (rr !== r && getValue(rr, c) === val) {
          conflicts.push([r, c]);
          break;
        }
      }
      if (conflicts.some(([cr, cc]) => cr === r && cc === c)) continue;

      // Check standard 3x3 box (for non-irregular)
      if (puzzleType !== PUZZLE_TYPES.IRREGULAR) {
        const boxR = Math.floor(r / 3) * 3;
        const boxC = Math.floor(c / 3) * 3;
        let boxConflict = false;
        for (let dr = 0; dr < 3 && !boxConflict; dr++) {
          for (let dc = 0; dc < 3 && !boxConflict; dc++) {
            const nr = boxR + dr, nc = boxC + dc;
            if ((nr !== r || nc !== c) && getValue(nr, nc) === val) {
              boxConflict = true;
            }
          }
        }
        if (boxConflict) { conflicts.push([r, c]); continue; }
      }

      // Check diagonal
      if (puzzleType === PUZZLE_TYPES.DIAGONAL) {
        const onMainDiag = r === c;
        const onAntiDiag = r + c === 8;
        if (onMainDiag) {
          for (let i = 0; i < 9; i++) {
            if (i !== r && getValue(i, i) === val) { conflicts.push([r, c]); break; }
          }
        }
        if (conflicts.some(([cr, cc]) => cr === r && cc === c)) continue;
        if (onAntiDiag) {
          for (let i = 0; i < 9; i++) {
            if (i !== r && getValue(i, 8 - i) === val) { conflicts.push([r, c]); break; }
          }
        }
        if (conflicts.some(([cr, cc]) => cr === r && cc === c)) continue;
      }

      // Check irregular regions
      if (puzzleType === PUZZLE_TYPES.IRREGULAR && regionMap) {
        const myRegion = regionMap[r][c];
        for (let rr = 0; rr < 9; rr++) {
          for (let cc = 0; cc < 9; cc++) {
            if ((rr !== r || cc !== c) && regionMap[rr][cc] === myRegion && getValue(rr, cc) === val) {
              conflicts.push([r, c]);
            }
          }
        }
        if (conflicts.some(([cr, cc]) => cr === r && cc === c)) continue;
      }

      // Check window cells
      if (puzzleType === PUZZLE_TYPES.WINDOW && windowCells) {
        for (const window of windowCells) {
          const inWindow = window.some(([wr, wc]) => wr === r && wc === c);
          if (inWindow) {
            for (const [wr, wc] of window) {
              if ((wr !== r || wc !== c) && getValue(wr, wc) === val) {
                conflicts.push([r, c]);
                break;
              }
            }
          }
          if (conflicts.some(([cr, cc]) => cr === r && cc === c)) break;
        }
      }
    }
  }
  return conflicts;
};

const checkComplete = (puzzle, userGrid) => {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (puzzle[r][c] === 0 && userGrid[r][c] === 0) return false;
    }
  }
  return true;
};

const checkCorrect = (solution, userGrid, puzzle) => {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = puzzle[r][c] !== 0 ? puzzle[r][c] : userGrid[r][c];
      if (val !== solution[r][c]) return false;
    }
  }
  return true;
};

export default function SudokuGame() {
  const { levelId } = useParams();
  const navigate = useNavigate();

  const level = LEVELS.find(l => l.id === parseInt(levelId));
  const puzzleData = level ? getPuzzleById(level.puzzleId) : null;

  const [userGrid, setUserGrid] = useState(createEmptyGrid);
  const [notes, setNotes] = useState(createEmptyNotes);
  const [selectedCell, setSelectedCell] = useState(null);
  const [notesMode, setNotesMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [conflicts, setConflicts] = useState([]);
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!puzzleData) return;
    setUserGrid(createEmptyGrid());
    setNotes(createEmptyNotes());
    setSelectedCell(null);
    setHistory([]);
    setConflicts([]);
    setTimer(0);
    setRunning(true);
    setCompleted(false);
    setShowSuccess(false);
    setHintsUsed(0);
    setMistakes(0);
  }, [puzzleData?.id]);

  useEffect(() => {
    if (running && !completed) {
      timerRef.current = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [running, completed]);

  const updateConflicts = useCallback((grid) => {
    if (!puzzleData) return;
    const c = findConflicts(
      puzzleData.puzzle, grid,
      puzzleData.type, puzzleData.regionMap,
      puzzleData.windowCells, puzzleData.consecutivePairs
    );
    setConflicts(c);
  }, [puzzleData]);

  const handleCellClick = (r, c) => {
    setSelectedCell([r, c]);
  };

  const handleNumberInput = useCallback((num) => {
    if (!selectedCell || !puzzleData) return;
    const [r, c] = selectedCell;
    if (puzzleData.puzzle[r][c] !== 0) return; // given cell

    if (notesMode && num !== 0) {
      const newNotes = notes.map(row => row.map(cell => new Set(cell)));
      const cellNotes = newNotes[r][c];
      if (cellNotes.has(num)) cellNotes.delete(num);
      else cellNotes.add(num);
      setNotes(newNotes);
      return;
    }

    // Save history
    setHistory(h => [...h, {
      grid: userGrid.map(row => [...row]),
      notes: notes.map(row => row.map(cell => new Set(cell))),
    }]);

    const newGrid = userGrid.map(row => [...row]);
    newGrid[r][c] = num;
    setUserGrid(newGrid);

    // Clear notes for this cell
    const newNotes = notes.map(row => row.map(cell => new Set(cell)));
    newNotes[r][c] = new Set();
    setNotes(newNotes);

    updateConflicts(newGrid);

    // Check if wrong
    if (num !== 0 && puzzleData.solution[r][c] !== num) {
      setMistakes(m => m + 1);
    }

    // Check completion
    if (checkComplete(puzzleData.puzzle, newGrid)) {
      if (checkCorrect(puzzleData.solution, newGrid, puzzleData.puzzle)) {
        setCompleted(true);
        setRunning(false);
        setShowSuccess(true);
        // Save progress
        const saved = JSON.parse(localStorage.getItem('sudoku-progress') || '{}');
        saved[level.id] = { completed: true, time: timer, hints: hintsUsed, mistakes };
        // Unlock next level
        if (level.id < LEVELS.length) {
          saved[`unlocked-${level.id + 1}`] = true;
        }
        localStorage.setItem('sudoku-progress', JSON.stringify(saved));
      }
    }
  }, [selectedCell, puzzleData, notesMode, notes, userGrid, updateConflicts, timer, hintsUsed, mistakes, level]);

  const handleUndo = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setUserGrid(prev.grid);
    setNotes(prev.notes);
    setHistory(h => h.slice(0, -1));
    updateConflicts(prev.grid);
  };

  const handleErase = () => {
    if (!selectedCell || !puzzleData) return;
    const [r, c] = selectedCell;
    if (puzzleData.puzzle[r][c] !== 0) return;
    handleNumberInput(0);
  };

  const handleHint = () => {
    if (!selectedCell || !puzzleData) return;
    const [r, c] = selectedCell;
    if (puzzleData.puzzle[r][c] !== 0) return;
    const correct = puzzleData.solution[r][c];
    setHintsUsed(h => h + 1);
    handleNumberInput(correct);
  };

  const handleReset = () => {
    setUserGrid(createEmptyGrid());
    setNotes(createEmptyNotes());
    setHistory([]);
    setConflicts([]);
    setTimer(0);
    setRunning(true);
    setCompleted(false);
    setShowSuccess(false);
    setMistakes(0);
    setHintsUsed(0);
  };

  // Keyboard support
  useEffect(() => {
    const handler = (e) => {
      if (e.key >= '1' && e.key <= '9') handleNumberInput(parseInt(e.key));
      if (e.key === '0' || e.key === 'Backspace' || e.key === 'Delete') handleNumberInput(0);
      if (e.key === 'n' || e.key === 'N') setNotesMode(m => !m);
      if (e.key === 'z' && (e.ctrlKey || e.metaKey)) handleUndo();
      if (e.key === 'ArrowUp' && selectedCell) setSelectedCell([Math.max(0, selectedCell[0]-1), selectedCell[1]]);
      if (e.key === 'ArrowDown' && selectedCell) setSelectedCell([Math.min(8, selectedCell[0]+1), selectedCell[1]]);
      if (e.key === 'ArrowLeft' && selectedCell) setSelectedCell([selectedCell[0], Math.max(0, selectedCell[1]-1)]);
      if (e.key === 'ArrowRight' && selectedCell) setSelectedCell([selectedCell[0], Math.min(8, selectedCell[1]+1)]);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleNumberInput, handleUndo, selectedCell]);

  if (!puzzleData || !level) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-slate-400 text-lg">关卡不存在</div>
      </div>
    );
  }

  const stars = hintsUsed === 0 && mistakes === 0 ? 3 : hintsUsed <= 1 && mistakes <= 2 ? 2 : 1;

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1 text-slate-400 hover:text-slate-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">返回</span>
        </button>

        <div className="flex flex-col items-center">
          <span className="text-white font-bold text-base">{level.name}</span>
          <span className={cn('text-xs px-2 py-0.5 rounded-full', DIFFICULTY_BG[level.difficulty])}>
            {TYPE_LABELS[puzzleData.type]}
          </span>
        </div>

        <div className="flex items-center gap-1 text-amber-400 font-mono font-bold">
          <Clock className="w-4 h-4" />
          <span>{formatTime(timer)}</span>
        </div>
      </div>

      {/* Rule description */}
      <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
        <p className="text-xs text-slate-400 text-center">{TYPE_DESCRIPTIONS[puzzleData.type]}</p>
      </div>

      {/* Stats bar */}
      <div className="flex items-center justify-center gap-6 px-4 py-2">
        <div className="flex items-center gap-1 text-sm">
          <span className="text-slate-400">错误:</span>
          <span className="text-red-400 font-bold">{mistakes}</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-slate-400">提示:</span>
          <span className="text-amber-400 font-bold">{hintsUsed}</span>
        </div>
      </div>

      {/* Board */}
      <div className="flex-1 flex items-center justify-center px-2 py-2">
        <SudokuBoard
          puzzle={puzzleData.puzzle}
          solution={puzzleData.solution}
          userGrid={userGrid}
          notes={notes}
          selectedCell={selectedCell}
          onCellClick={handleCellClick}
          puzzleType={puzzleData.type}
          regionMap={puzzleData.regionMap}
          windowCells={puzzleData.windowCells}
          consecutivePairs={puzzleData.consecutivePairs}
          conflicts={conflicts}
        />
      </div>

      {/* Controls */}
      <div className="px-4 pb-4 space-y-3">
        {/* Number pad */}
        <div className="grid grid-cols-9 gap-1">
          {[1,2,3,4,5,6,7,8,9].map(n => (
            <button
              key={n}
              onClick={() => handleNumberInput(n)}
              className="h-10 rounded-lg bg-slate-700 hover:bg-blue-600 text-slate-100 text-lg font-bold transition-colors active:scale-95"
            >
              {n}
            </button>
          ))}
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={handleUndo}
            disabled={history.length === 0}
            className="flex flex-col items-center gap-1 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <RotateCcw className="w-5 h-5 text-slate-300" />
            <span className="text-xs text-slate-400">撤销</span>
          </button>

          <button
            onClick={handleErase}
            className="flex flex-col items-center gap-1 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 transition-colors"
          >
            <Eraser className="w-5 h-5 text-slate-300" />
            <span className="text-xs text-slate-400">清除</span>
          </button>

          <button
            onClick={() => setNotesMode(m => !m)}
            className={cn(
              'flex flex-col items-center gap-1 py-2 rounded-xl transition-colors',
              notesMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-700 hover:bg-slate-600'
            )}
          >
            <PenLine className="w-5 h-5 text-slate-300" />
            <span className="text-xs text-slate-400">笔记{notesMode ? ' ✓' : ''}</span>
          </button>

          <button
            onClick={handleHint}
            className="flex flex-col items-center gap-1 py-2 rounded-xl bg-slate-700 hover:bg-amber-600 transition-colors"
          >
            <Lightbulb className="w-5 h-5 text-amber-400" />
            <span className="text-xs text-slate-400">提示</span>
          </button>
        </div>

        {/* Reset button */}
        <button
          onClick={handleReset}
          className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 text-sm transition-colors border border-slate-700"
        >
          重新开始
        </button>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl p-6 w-full max-w-sm border border-slate-600 shadow-2xl">
            <div className="flex justify-end">
              <button onClick={() => setShowSuccess(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center space-y-4">
              <div className="text-5xl">🎉</div>
              <h2 className="text-2xl font-bold text-white">恭喜完成！</h2>

              <div className="flex justify-center gap-1 text-3xl">
                {[1,2,3].map(i => (
                  <span key={i} className={i <= stars ? 'text-amber-400' : 'text-slate-600'}>★</span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 py-2">
                <div className="bg-slate-700 rounded-xl p-3">
                  <div className="text-amber-400 font-mono font-bold text-lg">{formatTime(timer)}</div>
                  <div className="text-slate-400 text-xs mt-1">用时</div>
                </div>
                <div className="bg-slate-700 rounded-xl p-3">
                  <div className="text-red-400 font-bold text-lg">{mistakes}</div>
                  <div className="text-slate-400 text-xs mt-1">错误</div>
                </div>
                <div className="bg-slate-700 rounded-xl p-3">
                  <div className="text-blue-400 font-bold text-lg">{hintsUsed}</div>
                  <div className="text-slate-400 text-xs mt-1">提示</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-100 font-semibold transition-colors"
                >
                  再玩一次
                </button>
                {level.id < LEVELS.length && (
                  <button
                    onClick={() => navigate(`/game/${level.id + 1}`)}
                    className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
                  >
                    下一关
                  </button>
                )}
              </div>

              <button
                onClick={() => navigate('/')}
                className="w-full py-2 text-slate-400 hover:text-slate-200 text-sm transition-colors"
              >
                返回关卡选择
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
