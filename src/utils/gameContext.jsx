import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [totalScore, setTotalScore] = useState(() => {
    const saved = localStorage.getItem('sudoku_total_score');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [gamesPlayed, setGamesPlayed] = useState(() => {
    const saved = localStorage.getItem('sudoku_games_played');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [bestTimes, setBestTimes] = useState(() => {
    const saved = localStorage.getItem('sudoku_best_times');
    return saved ? JSON.parse(saved) : {};
  });

  const addScore = useCallback((points, gameType, timeSeconds) => {
    setTotalScore(prev => {
      const next = prev + points;
      localStorage.setItem('sudoku_total_score', String(next));
      return next;
    });
    setGamesPlayed(prev => {
      const next = prev + 1;
      localStorage.setItem('sudoku_games_played', String(next));
      return next;
    });
    setBestTimes(prev => {
      const key = gameType;
      const updated = { ...prev };
      if (!updated[key] || timeSeconds < updated[key]) {
        updated[key] = timeSeconds;
      }
      localStorage.setItem('sudoku_best_times', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const resetStats = useCallback(() => {
    setTotalScore(0);
    setGamesPlayed(0);
    setBestTimes({});
    localStorage.removeItem('sudoku_total_score');
    localStorage.removeItem('sudoku_games_played');
    localStorage.removeItem('sudoku_best_times');
  }, []);

  return (
    <GameContext.Provider value={{ totalScore, gamesPlayed, bestTimes, addScore, resetStats }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}

// Timer hook
export function useTimer(running) {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const reset = useCallback(() => setSeconds(0), []);

  return { seconds, reset };
}

export function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
