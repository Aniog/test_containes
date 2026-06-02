import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Timer, RotateCcw, Lightbulb, CheckCircle, Trophy, ChevronDown } from 'lucide-react';
import SudokuBoard from './SudokuBoard';
import NumberPad from './NumberPad';
import { generatePuzzle, getConflicts, checkComplete, DIFFICULTIES } from '../../utils/sudoku';

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const SudokuGame = () => {
  const [difficulty, setDifficulty] = useState('medium');
  const [puzzle, setPuzzle] = useState(null);
  const [solution, setSolution] = useState(null);
  const [board, setBoard] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  const [conflicts, setConflicts] = useState(new Set());
  const [notes, setNotes] = useState({});
  const [noteMode, setNoteMode] = useState(false);
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [hints, setHints] = useState(3);
  const [showDiffMenu, setShowDiffMenu] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [history, setHistory] = useState([]);
  const timerRef = useRef(null);

  const startNewGame = useCallback((diff = difficulty) => {
    const { puzzle: p, solution: s } = generatePuzzle(diff);
    setPuzzle(p);
    setSolution(s);
    setBoard(p.map(r => [...r]));
    setSelectedCell(null);
    setConflicts(new Set());
    setNotes({});
    setNoteMode(false);
    setTimer(0);
    setRunning(true);
    setCompleted(false);
    setMistakes(0);
    setHints(3);
    setShowComplete(false);
    setHistory([]);
  }, [difficulty]);

  useEffect(() => {
    startNewGame();
  }, []);

  useEffect(() => {
    if (running && !completed) {
      timerRef.current = setInterval(() => setTimer(t => t + 1), 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [running, completed]);

  const handleCellClick = (row, col) => {
    setSelectedCell([row, col]);
  };

  const handleNumber = useCallback((num) => {
    if (!selectedCell || completed) return;
    const [row, col] = selectedCell;
    if (puzzle[row][col] !== 0) return;

    if (noteMode) {
      setNotes(prev => {
        const key = `${row}-${col}`;
        const existing = new Set(prev[key] || []);
        if (existing.has(num)) existing.delete(num);
        else existing.add(num);
        return { ...prev, [key]: existing };
      });
      return;
    }

    // Save history
    setHistory(prev => [...prev, { board: board.map(r => [...r]), notes: JSON.parse(JSON.stringify(notes, (k, v) => v instanceof Set ? [...v] : v)) }]);

    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = num;

    // Check if wrong
    if (solution[row][col] !== num) {
      setMistakes(m => m + 1);
    }

    // Clear notes for this cell
    setNotes(prev => {
      const next = { ...prev };
      delete next[`${row}-${col}`];
      return next;
    });

    const newConflicts = getConflicts(newBoard);
    setConflicts(newConflicts);
    setBoard(newBoard);

    if (checkComplete(newBoard, solution)) {
      setCompleted(true);
      setRunning(false);
      setTimeout(() => setShowComplete(true), 300);
    }
  }, [selectedCell, puzzle, solution, board, notes, noteMode, completed]);

  const handleDelete = useCallback(() => {
    if (!selectedCell || completed) return;
    const [row, col] = selectedCell;
    if (puzzle[row][col] !== 0) return;

    if (noteMode) {
      setNotes(prev => {
        const next = { ...prev };
        delete next[`${row}-${col}`];
        return next;
      });
      return;
    }

    setHistory(prev => [...prev, { board: board.map(r => [...r]), notes: JSON.parse(JSON.stringify(notes, (k, v) => v instanceof Set ? [...v] : v)) }]);

    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = 0;
    setBoard(newBoard);
    setConflicts(getConflicts(newBoard));
  }, [selectedCell, puzzle, board, notes, noteMode, completed]);

  const handleUndo = useCallback(() => {
    if (history.length === 0) return;
    const last = history[history.length - 1];
    setBoard(last.board);
    // Restore notes
    const restoredNotes = {};
    for (const [k, v] of Object.entries(last.notes)) {
      restoredNotes[k] = new Set(v);
    }
    setNotes(restoredNotes);
    setConflicts(getConflicts(last.board));
    setHistory(prev => prev.slice(0, -1));
  }, [history]);

  const handleHint = useCallback(() => {
    if (hints <= 0 || !selectedCell || completed) return;
    const [row, col] = selectedCell;
    if (puzzle[row][col] !== 0 || board[row][col] === solution[row][col]) return;

    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = solution[row][col];
    setBoard(newBoard);
    setConflicts(getConflicts(newBoard));
    setHints(h => h - 1);

    // Clear notes for this cell
    setNotes(prev => {
      const next = { ...prev };
      delete next[`${row}-${col}`];
      return next;
    });

    if (checkComplete(newBoard, solution)) {
      setCompleted(true);
      setRunning(false);
      setTimeout(() => setShowComplete(true), 300);
    }
  }, [hints, selectedCell, puzzle, board, solution, completed]);

  // Keyboard support
  useEffect(() => {
    const handleKey = (e) => {
      if (completed) return;
      const key = e.key;
      if (key >= '1' && key <= '9') {
        handleNumber(parseInt(key));
      } else if (key === 'Backspace' || key === 'Delete' || key === '0') {
        handleDelete();
      } else if (key === 'ArrowUp' && selectedCell) {
        setSelectedCell([Math.max(0, selectedCell[0] - 1), selectedCell[1]]);
      } else if (key === 'ArrowDown' && selectedCell) {
        setSelectedCell([Math.min(8, selectedCell[0] + 1), selectedCell[1]]);
      } else if (key === 'ArrowLeft' && selectedCell) {
        setSelectedCell([selectedCell[0], Math.max(0, selectedCell[1] - 1)]);
      } else if (key === 'ArrowRight' && selectedCell) {
        setSelectedCell([selectedCell[0], Math.min(8, selectedCell[1] + 1)]);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleNumber, handleDelete, selectedCell, completed]);

  const currentDiff = DIFFICULTIES.find(d => d.key === difficulty);

  if (!board) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500 text-lg">正在生成题目...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-black text-lg leading-none">数</span>
            </div>
            <div>
              <h1 className="text-xl font-black text-gray-900 leading-tight">数独</h1>
              <p className="text-xs text-gray-400 leading-tight">Sudoku Puzzle</p>
            </div>
          </div>

          {/* Difficulty selector */}
          <div className="relative">
            <button
              onClick={() => setShowDiffMenu(v => !v)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold ${currentDiff.bg} ${currentDiff.color} border border-current/20`}
            >
              {currentDiff.label}
              <ChevronDown size={14} />
            </button>
            {showDiffMenu && (
              <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-10 min-w-[100px]">
                {DIFFICULTIES.map(d => (
                  <button
                    key={d.key}
                    onClick={() => {
                      setDifficulty(d.key);
                      setShowDiffMenu(false);
                      startNewGame(d.key);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium hover:bg-gray-50 ${d.color} ${difficulty === d.key ? 'bg-gray-50' : ''}`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-gray-600">
              <Timer size={15} className="text-blue-500" />
              <span className="font-mono font-semibold text-sm">{formatTime(timer)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <span className="text-xs text-gray-400">错误</span>
              <span className={`font-bold text-sm ${mistakes > 0 ? 'text-red-500' : 'text-gray-400'}`}>{mistakes}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleHint}
              disabled={hints <= 0 || !selectedCell}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all
                ${hints > 0 && selectedCell
                  ? 'bg-amber-50 text-amber-600 hover:bg-amber-100 border border-amber-200'
                  : 'bg-gray-50 text-gray-300 border border-gray-100 cursor-not-allowed'
                }`}
            >
              <Lightbulb size={13} />
              提示 ×{hints}
            </button>
            <button
              onClick={handleUndo}
              disabled={history.length === 0}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all
                ${history.length > 0
                  ? 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                  : 'bg-gray-50 text-gray-300 border border-gray-100 cursor-not-allowed'
                }`}
            >
              <RotateCcw size={13} />
              撤销
            </button>
            <button
              onClick={() => startNewGame()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 transition-all"
            >
              新游戏
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 gap-6">
        {/* Board */}
        <SudokuBoard
          board={board}
          puzzle={puzzle}
          solution={solution}
          selectedCell={selectedCell}
          onCellClick={handleCellClick}
          conflicts={conflicts}
          notes={notes}
          noteMode={noteMode}
          completed={completed}
        />

        {/* Number pad */}
        {!completed && (
          <NumberPad
            onNumber={handleNumber}
            onDelete={handleDelete}
            onToggleNote={() => setNoteMode(v => !v)}
            noteMode={noteMode}
            board={board}
            selectedCell={selectedCell}
          />
        )}

        {/* Keyboard hint */}
        <p className="text-xs text-gray-400 text-center">
          点击格子选中 · 键盘数字键输入 · 方向键移动
        </p>
      </main>

      {/* Completion modal */}
      {showComplete && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy size={40} className="text-emerald-500" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-1">恭喜完成！</h2>
            <p className="text-gray-500 mb-5 text-sm">你成功解出了这道数独题</p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-lg font-black text-gray-900">{formatTime(timer)}</div>
                <div className="text-xs text-gray-400 mt-0.5">用时</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className={`text-lg font-black ${mistakes === 0 ? 'text-emerald-600' : 'text-red-500'}`}>{mistakes}</div>
                <div className="text-xs text-gray-400 mt-0.5">错误</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className={`text-lg font-black ${currentDiff.color}`}>{currentDiff.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">难度</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowComplete(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                查看答案
              </button>
              <button
                onClick={() => startNewGame()}
                className="flex-1 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm"
              >
                再来一局
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SudokuGame;
