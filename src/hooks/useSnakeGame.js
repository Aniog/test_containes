import { useState, useEffect, useCallback, useRef } from 'react';

const GRID_SIZE = 20;
const INITIAL_SPEED = 150;
const SPEED_INCREMENT = 5;

const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

const KEY_MAP = {
  ArrowUp: 'UP',
  ArrowDown: 'DOWN',
  ArrowLeft: 'LEFT',
  ArrowRight: 'RIGHT',
  w: 'UP',
  s: 'DOWN',
  a: 'LEFT',
  d: 'RIGHT',
  W: 'UP',
  S: 'DOWN',
  A: 'LEFT',
  D: 'RIGHT',
};

const OPPOSITE = { UP: 'DOWN', DOWN: 'UP', LEFT: 'RIGHT', RIGHT: 'LEFT' };

function randomCell(snake) {
  let cell;
  do {
    cell = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((s) => s.x === cell.x && s.y === cell.y));
  return cell;
}

function randomSpecialFood(snake, food) {
  let cell;
  do {
    cell = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (
    snake.some((s) => s.x === cell.x && s.y === cell.y) ||
    (food && cell.x === food.x && cell.y === food.y)
  );
  return cell;
}

const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
];

export function useSnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 15, y: 10 });
  const [specialFood, setSpecialFood] = useState(null);
  const [direction, setDirection] = useState('RIGHT');
  const [gameState, setGameState] = useState('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    try { return parseInt(localStorage.getItem('snakeHighScore') || '0', 10); } catch { return 0; }
  });
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [level, setLevel] = useState(1);

  const directionRef = useRef(direction);
  const nextDirectionRef = useRef(direction);
  const gameStateRef = useRef(gameState);
  const snakeRef = useRef(snake);
  const foodRef = useRef(food);
  const specialFoodRef = useRef(specialFood);
  const scoreRef = useRef(score);
  const specialFoodTimerRef = useRef(null);

  directionRef.current = direction;
  gameStateRef.current = gameState;
  snakeRef.current = snake;
  foodRef.current = food;
  specialFoodRef.current = specialFood;
  scoreRef.current = score;

  const resetGame = useCallback(() => {
    const initSnake = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
    setSnake(initSnake);
    setFood(randomCell(initSnake));
    setSpecialFood(null);
    setDirection('RIGHT');
    nextDirectionRef.current = 'RIGHT';
    setScore(0);
    setSpeed(INITIAL_SPEED);
    setLevel(1);
    if (specialFoodTimerRef.current) clearTimeout(specialFoodTimerRef.current);
  }, []);

  const startGame = useCallback(() => {
    resetGame();
    setGameState('playing');
  }, [resetGame]);

  const pauseGame = useCallback(() => {
    setGameState((prev) => (prev === 'playing' ? 'paused' : 'playing'));
  }, []);

  const changeDirection = useCallback((newDir) => {
    if (OPPOSITE[directionRef.current] !== newDir) {
      nextDirectionRef.current = newDir;
    }
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      const dir = KEY_MAP[e.key];
      if (dir) {
        e.preventDefault();
        if (gameStateRef.current === 'playing') {
          changeDirection(dir);
        }
      }
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (gameStateRef.current === 'idle' || gameStateRef.current === 'over') {
          startGame();
        } else if (gameStateRef.current === 'playing' || gameStateRef.current === 'paused') {
          pauseGame();
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [changeDirection, startGame, pauseGame]);

  const spawnSpecialFood = useCallback(() => {
    if (specialFoodRef.current) return;
    const sf = randomSpecialFood(snakeRef.current, foodRef.current);
    setSpecialFood(sf);
    if (specialFoodTimerRef.current) clearTimeout(specialFoodTimerRef.current);
    specialFoodTimerRef.current = setTimeout(() => {
      setSpecialFood(null);
    }, 8000);
  }, []);

  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      const currentDir = nextDirectionRef.current;
      directionRef.current = currentDir;
      setDirection(currentDir);

      const currentSnake = snakeRef.current;
      const head = currentSnake[0];
      const delta = DIRECTIONS[currentDir];
      const newHead = { x: head.x + delta.x, y: head.y + delta.y };

      if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
        setGameState('over');
        setHighScore((prev) => {
          const newHigh = Math.max(prev, scoreRef.current);
          try { localStorage.setItem('snakeHighScore', String(newHigh)); } catch {}
          return newHigh;
        });
        return;
      }

      if (currentSnake.some((s) => s.x === newHead.x && s.y === newHead.y)) {
        setGameState('over');
        setHighScore((prev) => {
          const newHigh = Math.max(prev, scoreRef.current);
          try { localStorage.setItem('snakeHighScore', String(newHigh)); } catch {}
          return newHigh;
        });
        return;
      }

      const currentFood = foodRef.current;
      const currentSpecial = specialFoodRef.current;
      let ateFood = false;
      let ateSpecial = false;

      if (newHead.x === currentFood.x && newHead.y === currentFood.y) ateFood = true;
      if (currentSpecial && newHead.x === currentSpecial.x && newHead.y === currentSpecial.y) ateSpecial = true;

      let newSnake;
      if (ateFood || ateSpecial) {
        newSnake = [newHead, ...currentSnake];
      } else {
        newSnake = [newHead, ...currentSnake.slice(0, -1)];
      }

      setSnake(newSnake);

      if (ateFood) {
        const newScore = scoreRef.current + 10;
        setScore(newScore);
        setFood(randomCell(newSnake));
        const newLevel = Math.floor(newScore / 50) + 1;
        setLevel(newLevel);
        setSpeed(Math.max(60, INITIAL_SPEED - (newLevel - 1) * SPEED_INCREMENT));
        if (newScore % 50 === 0) spawnSpecialFood();
      }

      if (ateSpecial) {
        setScore((prev) => prev + 30);
        setSpecialFood(null);
        if (specialFoodTimerRef.current) clearTimeout(specialFoodTimerRef.current);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [gameState, speed, spawnSpecialFood]);

  return {
    snake,
    food,
    specialFood,
    direction,
    gameState,
    score,
    highScore,
    level,
    gridSize: GRID_SIZE,
    startGame,
    pauseGame,
    changeDirection,
    resetGame,
  };
}
