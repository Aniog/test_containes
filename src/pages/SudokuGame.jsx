import { useState, useEffect, useCallback, useRef } from 'react';
import { generatePuzzle, isBoardComplete } from '@/lib/sudoku';
import SudokuBoard from '@/components/sudoku/SudokuBoard';
import NumberPad from '@/components/sudoku/NumberPad';
import ActionBar from '@/components/sudoku/ActionBar';
import GameHeader from '@/components/sudoku/GameHeader';
import SettingsModal from '@/components/sudoku/SettingsModal';
import WinModal from '@/components/sudoku/WinModal';

const SudokuGame = () => {
  const [difficulty, setDifficulty] = useState('EXPERT');
  const [puzzle, setPuzzle] = useState(null);
  const [solution, setSolution] = useState(null);
  const [board, setBoard] = useState(null);
  const [selected, setSelected] = useState(null);
  const [notes, setNotes] = useState({});
  const [notesMode, setNotesMode] = useState(false);
  const [errors, setErrors] = useState(new Set());
  const [history, setHistory] = useState([]);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const [loading, setLoading] = useState(true);
  const timerRef = useRef(null);

  const startNewGame = useCallback((diff = difficulty) => {
    setLoading(true);
    setShowSettings(false);
    setShowWin(false);
    setSelected(null);
    setNotes({});
    setNotesMode(false);
    setErrors(new Set());
    setHistory([]);
    setTime(0);
    setRunning(false);

    setTimeout(() => {
      const { puzzle: p, solution: s } = generatePuzzle(diff);
      setPuzzle(p);
      setSolution(s);
      setBoard(p.map(row => [...row]));
      setDifficulty(diff);
      setLoading(false);
      setRunning(true);
    }, 50);
  }, [difficulty]);

  useEffect(() => {
    startNewGame('EXPERT');
  }, []);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => setTime(t => t + 1), 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [running]);

  const handleSelect = (row, col) => {
    setSelected({ row, col });
  };

  const handleNumber = (num) => {
    if (!selected || !board || !puzzle) return;
    const { row, col } = selected;
    if (puzzle[row][col] !== 0) return;

    if (notesMode) {
      const key = `${row}-${col}`;
      setNotes(prev => {
        const cellNotes = new Set(prev[key] || []);
        if (cellNotes.has(num)) cellNotes.delete(num);
        else cellNotes.add(num);
        return { ...prev, [key]: cellNotes };
      });
      return;
    }

    const prevBoard = board.map(r => [...r]);
    const prevNotes = { ...notes };
    const prevErrors = new Set(errors);

    setHistory(h => [...h, { board: prevBoard, notes: prevNotes, errors: prevErrors }]);

    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = num;

    const newErrors = new Set(errors);
    const key = `${row}-${col}`;
    if (solution[row][col] !== num) {
      newErrors.add(key);
    } else {
      newErrors.delete(key);
      // Clear notes in same row, col, box
      const newNotes = { ...notes };
      delete newNotes[key];
      for (let i = 0; i < 9; i++) {
        const rKey = `${row}-${i}`;
        const cKey = `${i}-${col}`;
        if (newNotes[rKey]) { const s = new Set(newNotes[rKey]); s.delete(num); newNotes[rKey] = s; }
        if (newNotes[cKey]) { const s = new Set(newNotes[cKey]); s.delete(num); newNotes[cKey] = s; }
      }
      const br = Math.floor(row / 3) * 3;
      const bc = Math.floor(col / 3) * 3;
      for (let r = br; r < br + 3; r++) {
        for (let c = bc; c < bc + 3; c++) {
          const bKey = `${r}-${c}`;
          if (newNotes[bKey]) { const s = new Set(newNotes[bKey]); s.delete(num); newNotes[bKey] = s; }
        }
      }
      setNotes(newNotes);
    }

    setErrors(newErrors);
    setBoard(newBoard);

    if (isBoardComplete(newBoard, solution)) {
      setRunning(false);
      setTimeout(() => setShowWin(true), 400);
    }
  };

  const handleHint = () => {
    if (!selected || !board || !solution || !puzzle) return;
    const { row, col } = selected;
    if (puzzle[row][col] !== 0) return;

    const prevBoard = board.map(r => [...r]);
    const prevNotes = { ...notes };
    const prevErrors = new Set(errors);
    setHistory(h => [...h, { board: prevBoard, notes: prevNotes, errors: prevErrors }]);

    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = solution[row][col];

    const newErrors = new Set(errors);
    newErrors.delete(`${row}-${col}`);
    setErrors(newErrors);

    const newNotes = { ...notes };
    delete newNotes[`${row}-${col}`];
    setNotes(newNotes);
    setBoard(newBoard);

    if (isBoardComplete(newBoard, solution)) {
      setRunning(false);
      setTimeout(() => setShowWin(true), 400);
    }
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setBoard(prev.board);
    setNotes(prev.notes);
    setErrors(prev.errors);
    setHistory(h => h.slice(0, -1));
  };

  const handleKeyDown = useCallback((e) => {
    if (!selected) return;
    const num = parseInt(e.key);
    if (num >= 1 && num <= 9) {
      handleNumber(num);
    } else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === '0') {
      if (!puzzle || puzzle[selected.row][selected.col] !== 0) return;
      const prevBoard = board.map(r => [...r]);
      setHistory(h => [...h, { board: prevBoard, notes: { ...notes }, errors: new Set(errors) }]);
      const newBoard = board.map(r => [...r]);
      newBoard[selected.row][selected.col] = 0;
      const newErrors = new Set(errors);
      newErrors.delete(`${selected.row}-${selected.col}`);
      setErrors(newErrors);
      setBoard(newBoard);
    } else if (e.key === 'ArrowUp' && selected.row > 0) {
      setSelected(s => ({ ...s, row: s.row - 1 }));
    } else if (e.key === 'ArrowDown' && selected.row < 8) {
      setSelected(s => ({ ...s, row: s.row + 1 }));
    } else if (e.key === 'ArrowLeft' && selected.col > 0) {
      setSelected(s => ({ ...s, col: s.col - 1 }));
    } else if (e.key === 'ArrowRight' && selected.col < 8) {
      setSelected(s => ({ ...s, col: s.col + 1 }));
    }
  }, [selected, board, puzzle, notes, errors]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (loading || !board || !puzzle || !solution) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-500 font-medium">Generating puzzle...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start">
      <div className="w-full max-w-sm flex flex-col min-h-screen">
        <GameHeader
          time={time}
          difficulty={difficulty}
          onSettings={() => setShowSettings(true)}
        />

        <div className="px-0 flex-shrink-0">
          <SudokuBoard
            board={board}
            puzzle={puzzle}
            solution={solution}
            selected={selected}
            onSelect={handleSelect}
            notes={notes}
            errors={errors}
          />
        </div>

        <div className="flex-1 flex flex-col justify-between py-2">
          <NumberPad
            onNumber={handleNumber}
            onHint={handleHint}
            notesMode={notesMode}
          />

          <ActionBar
            onNewGame={() => setShowSettings(true)}
            onToggleNotes={() => setNotesMode(m => !m)}
            onUndo={handleUndo}
            notesMode={notesMode}
          />
        </div>
      </div>

      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
          onNewGame={startNewGame}
          currentDifficulty={difficulty}
        />
      )}

      {showWin && (
        <WinModal
          time={time}
          difficulty={difficulty}
          onNewGame={() => startNewGame(difficulty)}
        />
      )}
    </div>
  );
};

export default SudokuGame;
