import { useMemo } from 'react';

export default function GameBoard({ snake, food, specialFood, gridSize, gameState }) {
  const snakeSet = useMemo(() => {
    const set = new Set();
    snake.forEach((s) => set.add(`${s.x},${s.y}`));
    return set;
  }, [snake]);

  const headKey = snake.length > 0 ? `${snake[0].x},${snake[0].y}` : '';

  const cells = useMemo(() => {
    const result = [];
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const key = `${x},${y}`;
        const isHead = key === headKey;
        const isSnake = snakeSet.has(key);
        const isFood = food && food.x === x && food.y === y;
        const isSpecial = specialFood && specialFood.x === x && specialFood.y === y;
        result.push({ x, y, key, isHead, isSnake, isFood, isSpecial });
      }
    }
    return result;
  }, [snake, food, specialFood, gridSize, snakeSet, headKey]);

  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: '1 / 1' }}
    >
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          gap: '1px',
          backgroundColor: '#e5e7eb',
        }}
      >
        {cells.map(({ key, isHead, isSnake, isFood, isSpecial }) => (
          <Cell
            key={key}
            isHead={isHead}
            isSnake={isSnake}
            isFood={isFood}
            isSpecial={isSpecial}
          />
        ))}
      </div>

      {/* Grid overlay lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: `${100 / gridSize}% ${100 / gridSize}%`,
        }}
      />
    </div>
  );
}

function Cell({ isHead, isSnake, isFood, isSpecial }) {
  if (isHead) {
    return (
      <div
        className="relative flex items-center justify-center"
        style={{
          backgroundColor: '#16a34a',
          boxShadow: '0 1px 4px rgba(22,163,74,0.4)',
          borderRadius: '3px',
        }}
      >
        <div
          style={{
            width: '30%',
            height: '30%',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
          }}
        />
      </div>
    );
  }

  if (isSnake) {
    return (
      <div
        style={{
          backgroundColor: '#22c55e',
          borderRadius: '2px',
          opacity: 0.85,
        }}
      />
    );
  }

  if (isSpecial) {
    return (
      <div
        className="animate-pulse flex items-center justify-center"
        style={{
          backgroundColor: '#f59e0b',
          boxShadow: '0 1px 6px rgba(245,158,11,0.5)',
          borderRadius: '50%',
          fontSize: '70%',
        }}
      >
        ⭐
      </div>
    );
  }

  if (isFood) {
    return (
      <div
        className="animate-pulse"
        style={{
          backgroundColor: '#ef4444',
          boxShadow: '0 1px 6px rgba(239,68,68,0.4)',
          borderRadius: '50%',
        }}
      />
    );
  }

  return (
    <div
      style={{
        backgroundColor: '#f9fafb',
      }}
    />
  );
}
