import { useState, useEffect, useCallback, useRef } from 'react';
import { generatePuzzle, isBoardComplete } from '@/lib/sudoku';
import SudokuBoard from '@/components/sudoku/SudokuBoard';
import NumberPad from '@/components/sudoku/NumberPad';
import ActionBar from '@/components/sudoku/ActionBar';
import GameHeader from '@/components/sudoku/GameHeader';
import SettingsModal from '@/components/sudoku/SettingsModal';
import WinModal from '@/components/sudoku/WinModal';

function initGame(diff) {
  const { puzzle, solution } = generatePuzzle(diff);
  return {
    puzzle,
    solution,
    board: puzzle.map(r => [...r]),
    notes: {},
    errors: new Set(),
    history: [],
    time: 0,
  };
}

const SudokuGame = () => {
  const [difficulty, setDifficulty] = useState('EXPERT');
  const [gameState, setGameState] = useState(() => initGame('EXPERT'));
  const [selected, setSelected] = useState(null);
  const [notesMode, setNotesMode] = useState(false);
  const [running, setRunning] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const timerRef = useRef(null);

  const { puzzle, solution, board, notes, errors, history, time } = gameState;

  const startNewGame = useCallback((diff = difficulty) => {
    clearInterval(timerRef.current);
    setShowSettings(false);
    setShowWin(false);
    setSelected(null);
    setNotesMode(false);
    setDifficulty(diff);
    setGameState(initGame(diff));
    setRunning(true);
  }, [difficulty]);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setGameState(gs => ({ ...gs, time: gs.time + 1 }));
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [running]);

  const handleSelect = (row, col) => setSelected({ row, col });

  const handleNumber = useCallback((num) => {
    if (!selected) return;
    const { row, col } = selected;
    if (puzzle[row][col] !== 0) return;

    if (notesMode) {
      setGameState(gs => {
        const key = `${row}-${col}`;
        const cellNotes = new Set(gs.notes[key] || []);
        if (cellNotes.has(num)) cellNotes.delete(num);
        else cellNotes.add(num);
        return { ...gs, notes: { ...gs.notes, [key]: cellNotes } };
      });
      return;
    }

    setGameState(gs => {
      const prevBoard = gs.board.map(r => [...r]);
      const newBoard = gs.board.map(r => [...r]);
      newBoard[row][col] = num;

      const newErrors = new Set(gs.errors);
      const key = `${row}-${col}`;
      let newNotes = { ...gs.notes };

      if (gs.solution[row][col] !== num) {
        newErrors.add(key);
      } else {
        newErrors.delete(key);
        delete newNotes[key];
        for (let i = 0; i < 9; i++) {
          const rk = `${row}-${i}`, ck = `${i}-${col}`;
          if (newNotes[rk]) { const s = new Set(newNotes[rk]); s.delete(num); newNotes[rk] = s; }
          if (newNotes[ck]) { const s = new Set(newNotes[ck]); s.delete(num); newNotes[ck] = s; }
        }
        const br = Math.floor(row / 3) * 3, bc = Math.floor(col / 3) * 3;
        for (let r = br; r < br + 3; r++) {
          for (let c = bc; c < bc + 3; c++) {
            const bk = `${r}-${c}`;
            if (newNotes[bk]) { const s = new Set(newNotes[bk]); s.delete(num); newNotes[bk] = s; }
          }
        }
      }

      const newHistory = [...gs.history, { board: prevBoard, notes: gs.notes, errors: gs.errors }];
      const newState = { ...gs, board: newBoard, notes: newNotes, errors: newErrors, history: newHistory };

      if (isBoardComplete(newBoard, gs.solution)) {
        setRunning(false);
        setTimeout(() => setShowWin(true), 400);
      }

      return newState;
    });
  }, [selected, puzzle, notesMode]);

  const handleHint = useCallback(() => {
    if (!selected) return;
    const { row, col } = selected;
    if (puzzle[row][col] !== 0) return;

    setGameState(gs => {
      const prevBoard = gs.board.map(r => [...r]);
      const newBoard = gs.board.map(r => [...r]);
      newBoard[row][col] = gs.solution[row][col];
      const newErrors = new Set(gs.errors);
      newErrors.delete(`${row}-${col}`);
      const newNotes = { ...gs.notes };
      delete newNotes[`${row}-${col}`];
      const newHistory = [...gs.history, { board: prevBoard, notes: gs.notes, errors: gs.errors }];
      const newState = { ...gs, board: newBoard, notes: newNotes, errors: newErrors, history: newHistory };

      if (isBoardComplete(newBoard, gs.solution)) {
        setRunning(false);
        setTimeout(() => setShowWin(true), 400);
      }
      return newState;
    });
  }, [selected, puzzle]);

  const handleUndo = useCallback(() => {
    setGameState(gs => {
      if (gs.history.length === 0) return gs;
      const prev = gs.history[gs.history.length - 1];
      return { ...gs, board: prev.board, notes: prev.notes, errors: prev.errors, history: gs.history.slice(0, -1) };
    });
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (!selected) return;
    const num = parseInt(e.key);
    if (num >= 1 && num <= 9) {
      handleNumber(num);
    } else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === '0') {
      if (puzzle[selected.row][selected.col] !== 0) return;
      setGameState(gs => {
        const prevBoard = gs.board.map(r => [...r]);
        const newBoard = gs.board.map(r => [...r]);
        newBoard[selected.row][selected.col] = 0;
        const newErrors = new Set(gs.errors);
        newErrors.delete(`${selected.row}-${selected.col}`);
        return { ...gs, board: newBoard, errors: newErrors, history: [...gs.history, { board: prevBoard, notes: gs.notes, errors: gs.errors }] };
      });
    } else if (e.key === 'ArrowUp') setSelected(s => s && s.row > 0 ? { ...s, row: s.row - 1 } : s);
    else if (e.key === 'ArrowDown') setSelected(s => s && s.row < 8 ? { ...s, row: s.row + 1 } : s);
    else if (e.key === 'ArrowLeft') setSelected(s => s && s.col > 0 ? { ...s, col: s.col - 1 } : s);
    else if (e.key === 'ArrowRight') setSelected(s => s && s.col < 8 ? { ...s, col: s.col + 1 } : s);
  }, [selected, puzzle, handleNumber]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start">
      <div className="w-full max-w-[420px] flex flex-col" style={{ minHeight: '100dvh' }}>
        <GameHeader
          time={time}
          difficulty={difficulty}
          onSettings={() => setShowSettings(true)}
        />

        {/* Board fills full width */}
        <div className="w-full flex-shrink-0">
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

        {/* Number pad + action bar fill remaining space */}
        <div className="flex-1 flex flex-col justify-between">
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
