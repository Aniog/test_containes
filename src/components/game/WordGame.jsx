import React, { useState, useCallback, useEffect, useRef } from "react";
import { LEVELS, buildGridMap, getGridDimensions } from "../../data/levels";
import GameGrid from "./GameGrid";
import LetterWheel from "./LetterWheel";
import WordDisplay from "./WordDisplay";

// All valid English words for bonus detection (subset)
const VALID_WORDS = new Set([
  "OWL","WOLF","FOWL","SOW","LOW","FLO","SOL","OWS","OWE","OWN","WOE","WOL",
  "CAT","CAR","CATS","SCAR","CART","STAR","RATS","ARTS","ARC","TAR","RAT",
  "SAT","ACT","ACTS","CARS","TARS","ARCS","TSAR","SCAT","CAST","SCAT",
  "PIN","PINE","PINES","SPIN","SNIP","PENS","NIPS","PEN","NIE","SIP","SIN",
  "INS","PIES","SINE","PEIN","PEINS","SNIPE","SPINE",
  "BLUE","BLUES","LUBE","LUBES","SLUE","BUS","SUB","ELS","USE","SLUB",
  "GOLD","GOLDEN","LONG","LONE","LEND","NODE","DONE","OGLE","GOD","DOG",
  "LOG","ODE","GEL","LEG","OLD","EON","ONE","NOD","DON","END","GLEN","LOGE",
  "DOLE","LODE","NOEL","ENOL","DONG","GELD","GLED","OGLED","LONGED","OLDEN",
]);

const SHUFFLE_COST = 0;
const HINT_COST = 500;

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const WordGame = () => {
  const [levelIndex, setLevelIndex] = useState(0);
  const [coins, setCoins] = useState(1000);
  const [score, setScore] = useState(0);
  const [foundWords, setFoundWords] = useState(new Set());
  const [revealedWordIndices, setRevealedWordIndices] = useState(new Set());
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [currentWord, setCurrentWord] = useState("");
  const [wordStatus, setWordStatus] = useState("idle"); // idle | correct | error | bonus
  const [shuffledLetters, setShuffledLetters] = useState([]);
  const [hintCells, setHintCells] = useState(new Set());
  const [levelComplete, setLevelComplete] = useState(false);
  const [showBonus, setShowBonus] = useState(null);
  const [particles, setParticles] = useState([]);
  const statusTimer = useRef(null);

  const level = LEVELS[levelIndex];
  const gridMap = buildGridMap(level);
  const { rows, cols } = getGridDimensions(gridMap);

  // Initialize shuffled letters when level changes
  useEffect(() => {
    setShuffledLetters(shuffleArray(level.letters));
    setFoundWords(new Set());
    setRevealedWordIndices(new Set());
    setSelectedIndices([]);
    setCurrentWord("");
    setWordStatus("idle");
    setHintCells(new Set());
    setLevelComplete(false);
    setShowBonus(null);
  }, [levelIndex]);

  // Check level completion
  useEffect(() => {
    if (level.targetWords.every(w => foundWords.has(w))) {
      setTimeout(() => setLevelComplete(true), 600);
    }
  }, [foundWords, level.targetWords]);

  const handleLetterSelect = useCallback((letterIdx) => {
    setSelectedIndices(prev => {
      if (prev.includes(letterIdx)) return prev;
      const next = [...prev, letterIdx];
      setCurrentWord(next.map(i => shuffledLetters[i]).join(""));
      return next;
    });
  }, [shuffledLetters]);

  const spawnParticles = (x, y) => {
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: 50 + Math.random() * 60 - 30,
      y: 50 + Math.random() * 40 - 20,
      angle: (i / 8) * 360,
      color: ["#FFD700", "#FF6B35", "#4CAF50", "#2196F3"][Math.floor(Math.random() * 4)],
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 800);
  };

  const handleLetterRelease = useCallback(() => {
    if (currentWord.length < 2) {
      setSelectedIndices([]);
      setCurrentWord("");
      return;
    }

    const word = currentWord.toUpperCase();

    if (statusTimer.current) clearTimeout(statusTimer.current);

    if (foundWords.has(word)) {
      // Already found
      setWordStatus("error");
      statusTimer.current = setTimeout(() => {
        setWordStatus("idle");
        setSelectedIndices([]);
        setCurrentWord("");
      }, 600);
      return;
    }

    // Check if it's a target word
    const targetIdx = level.targetWords.indexOf(word);
    if (targetIdx >= 0) {
      setWordStatus("correct");
      setFoundWords(prev => new Set([...prev, word]));
      setScore(prev => prev + word.length * 100);
      spawnParticles();

      // Find which grid entries this word fills
      const newRevealed = new Set(revealedWordIndices);
      level.grid.forEach((entry, idx) => {
        if (entry.word === word) newRevealed.add(idx);
      });
      setRevealedWordIndices(newRevealed);

      statusTimer.current = setTimeout(() => {
        setWordStatus("idle");
        setSelectedIndices([]);
        setCurrentWord("");
      }, 700);
      return;
    }

    // Check bonus words
    if (VALID_WORDS.has(word) || level.bonusWords?.includes(word)) {
      setWordStatus("bonus");
      setFoundWords(prev => new Set([...prev, word]));
      setScore(prev => prev + word.length * 50);
      setCoins(prev => prev + 50);
      setShowBonus(`+50 coins! "${word}"`);
      setTimeout(() => setShowBonus(null), 2000);

      statusTimer.current = setTimeout(() => {
        setWordStatus("idle");
        setSelectedIndices([]);
        setCurrentWord("");
      }, 700);
      return;
    }

    // Invalid word
    setWordStatus("error");
    statusTimer.current = setTimeout(() => {
      setWordStatus("idle");
      setSelectedIndices([]);
      setCurrentWord("");
    }, 600);
  }, [currentWord, foundWords, level, revealedWordIndices]);

  const handleShuffle = () => {
    setShuffledLetters(shuffleArray(level.letters));
    setSelectedIndices([]);
    setCurrentWord("");
  };

  const handleHint = () => {
    if (coins < HINT_COST) return;
    // Find first unrevealed target word and reveal one cell
    const unrevealedWord = level.targetWords.find(w => !foundWords.has(w));
    if (!unrevealedWord) return;

    setCoins(prev => prev - HINT_COST);

    // Find cells for this word and reveal one random unrevealed cell
    const wordCells = [];
    Object.entries(gridMap).forEach(([key, cell]) => {
      if (!hintCells.has(key) && !cell.wordIndices.some(wi => revealedWordIndices.has(wi))) {
        // Check if this cell belongs to the unrevealed word
        const wordIdx = level.grid.findIndex(g => g.word === unrevealedWord);
        if (wordIdx >= 0 && cell.wordIndices.includes(wordIdx)) {
          wordCells.push(key);
        }
      }
    });

    if (wordCells.length > 0) {
      const randomCell = wordCells[Math.floor(Math.random() * wordCells.length)];
      setHintCells(prev => new Set([...prev, randomCell]));
    }
  };

  const handleNextLevel = () => {
    if (levelIndex < LEVELS.length - 1) {
      setLevelIndex(prev => prev + 1);
    } else {
      // Restart from level 1
      setLevelIndex(0);
      setScore(0);
      setCoins(1000);
    }
  };

  const progress = level.targetWords.filter(w => foundWords.has(w)).length;
  const total = level.targetWords.length;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-700 overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-sm">
        <div className="bg-amber-600 border-b-4 border-amber-800 px-4 py-3 text-center shadow-lg">
          <h1 className="text-3xl font-black text-white tracking-wider drop-shadow-lg"
            style={{ textShadow: "2px 2px 0 #7c3a00, -1px -1px 0 #7c3a00" }}>
            SHARPEN YOUR MIND
          </h1>
        </div>

        {/* Score bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-blue-600/80 backdrop-blur-sm">
          <div className="flex items-center gap-1">
            <span className="text-yellow-300 font-bold text-sm">⭐ {score}</span>
          </div>
          <div className="text-white font-bold text-sm">{level.title}</div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-300 text-lg">🪙</span>
            <span className="text-yellow-300 font-bold text-sm">{coins}</span>
          </div>
        </div>
      </div>

      {/* Game area */}
      <div className="w-full max-w-sm flex-1 flex flex-col items-center px-3 py-2 gap-3">

        {/* Progress */}
        <div className="w-full flex items-center gap-2">
          <div className="flex-1 bg-white/20 rounded-full h-2">
            <div
              className="bg-amber-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(progress / total) * 100}%` }}
            />
          </div>
          <span className="text-white text-xs font-bold">{progress}/{total}</span>
        </div>

        {/* Crossword grid */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 w-full flex items-center justify-center"
          style={{ minHeight: 200 }}>
          {/* Decorative background */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 to-indigo-500/30" />
          </div>

          <div className="relative z-10">
            <GameGrid
              gridMap={gridMap}
              rows={rows}
              cols={cols}
              revealedWords={revealedWordIndices}
              hintCells={hintCells}
            />
          </div>

          {/* Particles */}
          {particles.map(p => (
            <div
              key={p.id}
              className="absolute pointer-events-none text-lg animate-bounce"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                color: p.color,
                transform: `rotate(${p.angle}deg)`,
              }}
            >
              ✦
            </div>
          ))}
        </div>

        {/* Word display */}
        <div className="w-full flex flex-col items-center gap-1">
          <WordDisplay
            word={currentWord}
            isError={wordStatus === "error"}
            isBonus={wordStatus === "bonus"}
          />
          {wordStatus === "correct" && (
            <div className="text-green-300 font-bold text-sm animate-bounce">
              ✓ Great! +{currentWord.length * 100} pts
            </div>
          )}
          {wordStatus === "error" && currentWord.length >= 2 && (
            <div className="text-red-300 font-bold text-sm">
              ✗ Not a valid word
            </div>
          )}
        </div>

        {/* Bonus notification */}
        {showBonus && (
          <div className="bg-purple-500/90 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
            🎉 Bonus! {showBonus}
          </div>
        )}

        {/* Letter wheel + controls */}
        <div className="relative w-full flex items-center justify-center">
          {/* Shuffle button */}
          <button
            onClick={handleShuffle}
            className="absolute left-0 w-14 h-14 rounded-full bg-amber-700 border-4 border-amber-900 shadow-lg flex flex-col items-center justify-center text-white hover:bg-amber-600 active:scale-95 transition-all z-10"
          >
            <span className="text-lg">🔀</span>
            <span className="text-xs font-bold">Shuffle</span>
          </button>

          {/* Wheel */}
          <LetterWheel
            letters={shuffledLetters}
            selectedIndices={selectedIndices}
            onLetterSelect={handleLetterSelect}
            onLetterRelease={handleLetterRelease}
          />

          {/* Hint button */}
          <button
            onClick={handleHint}
            disabled={coins < HINT_COST}
            className={`absolute right-0 w-14 h-14 rounded-full border-4 shadow-lg flex flex-col items-center justify-center text-white transition-all z-10
              ${coins >= HINT_COST
                ? "bg-amber-700 border-amber-900 hover:bg-amber-600 active:scale-95"
                : "bg-gray-500 border-gray-700 opacity-60 cursor-not-allowed"
              }`}
          >
            <span className="text-sm font-bold">Hint</span>
            <div className="flex items-center gap-0.5">
              <span className="text-yellow-300 text-xs">🪙</span>
              <span className="text-xs">{HINT_COST}</span>
            </div>
          </button>
        </div>

        {/* Found words list */}
        <div className="w-full">
          <div className="flex flex-wrap gap-1 justify-center">
            {level.targetWords.map(word => (
              <div
                key={word}
                className={`px-2 py-0.5 rounded-full text-xs font-bold border transition-all duration-300
                  ${foundWords.has(word)
                    ? "bg-green-400 border-green-600 text-green-900"
                    : "bg-white/20 border-white/30 text-white/60"
                  }`}
              >
                {foundWords.has(word) ? word : "•".repeat(word.length)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Level complete overlay */}
      {levelComplete && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-amber-400 to-amber-600 rounded-3xl p-8 text-center shadow-2xl border-4 border-amber-300 max-w-xs w-full">
            <div className="text-6xl mb-3">🎉</div>
            <h2 className="text-3xl font-black text-white mb-1"
              style={{ textShadow: "2px 2px 0 #7c3a00" }}>
              Level Complete!
            </h2>
            <p className="text-amber-100 mb-2">Score: {score}</p>
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3].map(i => (
                <span key={i} className="text-3xl">⭐</span>
              ))}
            </div>
            <button
              onClick={handleNextLevel}
              className="w-full py-3 bg-white text-amber-700 font-black text-xl rounded-2xl shadow-lg hover:bg-amber-50 active:scale-95 transition-all"
            >
              {levelIndex < LEVELS.length - 1 ? "Next Level →" : "Play Again 🔄"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordGame;
