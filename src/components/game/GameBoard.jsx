import { useState, useCallback, useEffect, useRef } from 'react';
import { PUZZLES, buildGrid, canFormWord } from '../../game/puzzles';
import CrosswordGrid from './CrosswordGrid';
import LetterWheel from './LetterWheel';

const HINT_COST = 100;
const WORD_POINTS = 50;
const BONUS_POINTS = 30;

export default function GameBoard() {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [revealedWordIndices, setRevealedWordIndices] = useState(new Set());
  const [score, setScore] = useState(0);
  const [hints, setHints] = useState(500);
  const [flashWordIndex, setFlashWordIndex] = useState(null);
  const [flashType, setFlashType] = useState(null);
  const [message, setMessage] = useState(null);
  const [foundBonusWords, setFoundBonusWords] = useState(new Set());
  const [shuffledLetters, setShuffledLetters] = useState(null);
  const [levelComplete, setLevelComplete] = useState(false);
  const [wheelDisabled, setWheelDisabled] = useState(false);
  const messageTimer = useRef(null);

  const puzzle = PUZZLES[puzzleIndex];
  const grid = buildGrid(puzzle.placements, puzzle.gridRows, puzzle.gridCols);
  const letters = shuffledLetters || puzzle.letters;
  const totalWords = puzzle.placements.length;

  // Check level completion
  useEffect(() => {
    if (revealedWordIndices.size === totalWords && totalWords > 0) {
      setTimeout(() => setLevelComplete(true), 600);
    }
  }, [revealedWordIndices.size, totalWords]);

  const showMessage = useCallback((text, duration = 1800) => {
    if (messageTimer.current) clearTimeout(messageTimer.current);
    setMessage(text);
    messageTimer.current = setTimeout(() => setMessage(null), duration);
  }, []);

  const handleWordSubmit = useCallback((word) => {
    if (wheelDisabled) return;
    const upperWord = word.toUpperCase();

    // Check if it can be formed from letters
    if (!canFormWord(upperWord, letters)) {
      showMessage('Invalid letters!');
      return;
    }

    if (upperWord.length < 2) {
      showMessage('Too short!');
      return;
    }

    // Check if it matches a grid word
    const matchIndex = puzzle.placements.findIndex(
      (p, i) => p.word === upperWord && !revealedWordIndices.has(i)
    );

    if (matchIndex >= 0) {
      // Correct grid word!
      setWheelDisabled(true);
      setFlashWordIndex(matchIndex);
      setFlashType('correct');
      setRevealedWordIndices(prev => new Set([...prev, matchIndex]));
      setScore(prev => prev + WORD_POINTS);
      showMessage(`+${WORD_POINTS} pts! Great!`, 1200);
      setTimeout(() => {
        setFlashWordIndex(null);
        setFlashType(null);
        setWheelDisabled(false);
      }, 900);
      return;
    }

    // Check if already found
    const alreadyFound = puzzle.placements.some(
      (p, i) => p.word === upperWord && revealedWordIndices.has(i)
    );
    if (alreadyFound) {
      showMessage('Already found!');
      return;
    }

    // Check bonus words
    if (puzzle.allValidWords.includes(upperWord) && !foundBonusWords.has(upperWord)) {
      setFoundBonusWords(prev => new Set([...prev, upperWord]));
      setScore(prev => prev + BONUS_POINTS);
      showMessage(`Bonus! +${BONUS_POINTS} pts`, 1500);
      return;
    }

    // Not a valid word
    showMessage('Not a word!');
  }, [wheelDisabled, letters, puzzle, revealedWordIndices, foundBonusWords, showMessage]);

  const handleShuffle = useCallback(() => {
    const arr = [...letters];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setShuffledLetters(arr);
  }, [letters]);

  const handleHint = useCallback(() => {
    if (hints < HINT_COST) {
      showMessage('Not enough coins!');
      return;
    }
    // Find first unrevealed word and reveal it
    const unrevealedIdx = puzzle.placements.findIndex((_, i) => !revealedWordIndices.has(i));
    if (unrevealedIdx >= 0) {
      setHints(prev => prev - HINT_COST);
      setRevealedWordIndices(prev => new Set([...prev, unrevealedIdx]));
      setFlashWordIndex(unrevealedIdx);
      setFlashType('hint');
      setScore(prev => prev + Math.floor(WORD_POINTS / 2));
      showMessage('Hint used!', 1200);
      setTimeout(() => {
        setFlashWordIndex(null);
        setFlashType(null);
      }, 900);
    } else {
      showMessage('All words found!');
    }
  }, [hints, puzzle, revealedWordIndices, showMessage]);

  const handleNextLevel = useCallback(() => {
    const nextIdx = (puzzleIndex + 1) % PUZZLES.length;
    setPuzzleIndex(nextIdx);
    setRevealedWordIndices(new Set());
    setFoundBonusWords(new Set());
    setShuffledLetters(null);
    setLevelComplete(false);
    setMessage(null);
    setFlashWordIndex(null);
    setFlashType(null);
  }, [puzzleIndex]);

  const progress = totalWords > 0 ? (revealedWordIndices.size / totalWords) * 100 : 0;

  return (
    <div
      className="min-h-screen flex flex-col items-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #87CEEB 0%, #4A90D9 40%, #2E6DB4 100%)',
        fontFamily: "'Nunito', 'Fredoka One', sans-serif",
        maxHeight: '100dvh',
      }}
    >
      {/* Header */}
      <div
        className="w-full flex items-center justify-between px-4 py-2 shadow-lg"
        style={{
          background: 'linear-gradient(180deg, #D4860A 0%, #A85F00 100%)',
          borderBottom: '3px solid #7A4500',
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="px-3 py-1 rounded-full text-sm font-bold text-amber-900"
            style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)' }}
          >
            {puzzle.levelLabel}
          </div>
          <span className="text-white font-bold text-base">{puzzle.title}</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Score */}
          <div className="flex items-center gap-1">
            <span className="text-yellow-300 text-lg">⭐</span>
            <span className="text-white font-bold text-base">{score}</span>
          </div>
          {/* Coins */}
          <div
            className="flex items-center gap-1 px-2 py-1 rounded-full"
            style={{ background: 'rgba(0,0,0,0.25)' }}
          >
            <span className="text-yellow-400 text-sm">🪙</span>
            <span className="text-yellow-300 font-bold text-sm">{hints}</span>
          </div>
        </div>
      </div>

      {/* Title banner */}
      <div
        className="w-full text-center py-1 px-4"
        style={{
          background: 'linear-gradient(180deg, #C47A00 0%, #A85F00 100%)',
          borderBottom: '2px solid #7A4500',
        }}
      >
        <h1
          className="text-2xl font-black uppercase tracking-wide"
          style={{
            color: '#FFE066',
            textShadow: '2px 2px 0 #7A4500, 0 0 20px rgba(255,200,0,0.4)',
            WebkitTextStroke: '1px #A85F00',
          }}
        >
          SHARPEN YOUR MIND
        </h1>
      </div>

      {/* Progress bar */}
      <div className="w-full px-4 py-1">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-3 rounded-full bg-black/20 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                boxShadow: '0 0 8px rgba(255,200,0,0.5)',
              }}
            />
          </div>
          <span className="text-white text-xs font-bold">
            {revealedWordIndices.size}/{totalWords}
          </span>
        </div>
      </div>

      {/* Main game area */}
      <div className="flex-1 flex flex-col items-center justify-between w-full max-w-md px-3 pb-1 overflow-hidden">

        {/* Crossword grid */}
        <div className="flex items-center justify-center w-full pt-1">
          <CrosswordGrid
            grid={grid}
            revealedWordIndices={revealedWordIndices}
            flashWordIndex={flashWordIndex}
            flashType={flashType}
          />
        </div>

        {/* Message toast */}
        <div className="h-6 flex items-center justify-center flex-shrink-0">
          {message && (
            <div
              className="px-5 py-1.5 rounded-full text-sm font-bold shadow-lg animate-bounce"
              style={{
                background: message.includes('+') ? 'rgba(34,197,94,0.9)' : 'rgba(239,68,68,0.85)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              {message}
            </div>
          )}
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between w-full px-2">
          {/* Shuffle button */}
          <button
            onClick={handleShuffle}
            className="flex flex-col items-center gap-1 w-14 h-14 rounded-full justify-center shadow-lg active:scale-95 transition-transform"
            style={{
              background: 'linear-gradient(135deg, #8B4513, #5C2A0A)',
              border: '3px solid #D4A017',
              color: 'white',
            }}
          >
            <span className="text-lg">🔀</span>
            <span className="text-xs font-bold text-amber-200">Shuffle</span>
          </button>

          {/* Letter wheel */}
          <LetterWheel
            letters={letters}
            onWordSubmit={handleWordSubmit}
            disabled={wheelDisabled || levelComplete}
          />

          {/* Hint button */}
          <button
            onClick={handleHint}
            className="flex flex-col items-center gap-1 w-14 h-14 rounded-full justify-center shadow-lg active:scale-95 transition-transform"
            style={{
              background: 'linear-gradient(135deg, #8B4513, #5C2A0A)',
              border: '3px solid #D4A017',
              color: 'white',
            }}
          >
            <span className="text-lg">💡</span>
            <span className="text-xs font-bold text-amber-200">Hint</span>
          </button>
        </div>

        {/* Bonus words found */}
        {foundBonusWords.size > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {[...foundBonusWords].map(w => (
              <span
                key={w}
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  background: 'rgba(255,215,0,0.2)',
                  border: '1px solid rgba(255,215,0,0.5)',
                  color: '#FFE066',
                }}
              >
                ✨ {w}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Level complete overlay */}
      {levelComplete && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
        >
          <div
            className="flex flex-col items-center gap-6 p-8 rounded-3xl shadow-2xl max-w-sm w-full mx-4"
            style={{
              background: 'linear-gradient(135deg, #D4860A, #A85F00)',
              border: '3px solid #FFD700',
            }}
          >
            <div className="text-6xl">🎉</div>
            <h2
              className="text-3xl font-black text-center uppercase"
              style={{ color: '#FFE066', textShadow: '2px 2px 0 #7A4500' }}
            >
              Level Complete!
            </h2>
            <p className="text-amber-100 text-lg font-bold">
              Score: <span className="text-yellow-300">{score}</span>
            </p>
            {foundBonusWords.size > 0 && (
              <p className="text-amber-200 text-sm text-center">
                Bonus words found: {foundBonusWords.size}
              </p>
            )}
            <button
              onClick={handleNextLevel}
              className="px-8 py-3 rounded-full text-lg font-black shadow-lg active:scale-95 transition-transform"
              style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                color: '#5C2A0A',
                border: '2px solid #FFE066',
              }}
            >
              Next Level →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
