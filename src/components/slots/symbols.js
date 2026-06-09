export const SYMBOLS = [
  { id: 'lemon',    emoji: '🍋', name: 'Lemon',     value: 2,   color: '#fbbf24', weight: 20 },
  { id: 'pearl',    emoji: '🫧', name: 'Pearl',     value: 3,   color: '#e2e8f0', weight: 18 },
  { id: 'crystal',  emoji: '💎', name: 'Crystal',   value: 5,   color: '#67e8f9', weight: 15 },
  { id: 'coin',     emoji: '🪙', name: 'Coin',      value: 5,   color: '#f59e0b', weight: 15 },
  { id: 'heart',    emoji: '❤️', name: 'Heart',     value: 8,   color: '#f87171', weight: 12 },
  { id: 'gem',      emoji: '💍', name: 'Gem',       value: 10,  color: '#f472b6', weight: 10 },
  { id: 'moneybag', emoji: '💰', name: 'Money Bag', value: 15,  color: '#4ade80', weight: 6  },
  { id: 'hat',      emoji: '🎩', name: 'Top Hat',   value: 20,  color: '#a78bfa', weight: 4  },
  { id: 'bomb',     emoji: '💣', name: 'Wild',      value: 25,  color: '#94a3b8', weight: 3, isWild: true },
  { id: 'star',     emoji: '⭐', name: 'Jackpot',   value: 100, color: '#ffd700', weight: 2, isJackpot: true },
];

export const SYMBOL_MAP = Object.fromEntries(SYMBOLS.map(s => [s.id, s]));

const WEIGHTED_POOL = SYMBOLS.flatMap(s => Array(s.weight).fill(s.id));

export const getRandomSymbol = () =>
  WEIGHTED_POOL[Math.floor(Math.random() * WEIGHTED_POOL.length)];

export const getSymbol = (id) => SYMBOL_MAP[id];

export const PAYLINES = [
  { id: 1, rows: [1, 1, 1, 1, 1], label: '1', color: '#f5a623' },
  { id: 2, rows: [0, 0, 0, 0, 0], label: '2', color: '#ec4899' },
  { id: 3, rows: [2, 2, 2, 2, 2], label: '3', color: '#06b6d4' },
  { id: 4, rows: [0, 1, 2, 1, 0], label: '4', color: '#10b981' },
  { id: 5, rows: [2, 1, 0, 1, 2], label: '5', color: '#a78bfa' },
  { id: 6, rows: [0, 0, 1, 2, 2], label: '6', color: '#f87171' },
  { id: 7, rows: [2, 2, 1, 0, 0], label: '7', color: '#fbbf24' },
  { id: 8, rows: [1, 0, 0, 0, 1], label: '8', color: '#34d399' },
];

export const checkWin = (grid, activePaylinesCount = 8) => {
  const wins = [];
  const activePaylines = PAYLINES.slice(0, activePaylinesCount);

  for (const payline of activePaylines) {
    const symbolsOnLine = payline.rows.map((row, col) => grid[col][row]);
    const firstId = symbolsOnLine[0];
    const firstData = getSymbol(firstId);
    if (!firstData) continue;

    let matchCount = 1;
    for (let i = 1; i < symbolsOnLine.length; i++) {
      const sym = getSymbol(symbolsOnLine[i]);
      if (symbolsOnLine[i] === firstId || sym?.isWild || firstData?.isWild) {
        matchCount++;
      } else {
        break;
      }
    }

    if (matchCount >= 3) {
      const multiplier = matchCount === 3 ? 1 : matchCount === 4 ? 3 : 10;
      wins.push({
        paylineId: payline.id,
        symbol: firstId,
        count: matchCount,
        multiplier,
        cells: payline.rows.slice(0, matchCount).map((row, col) => ({ col, row })),
        color: payline.color,
      });
    }
  }

  return wins;
};

export const calculateWinAmount = (wins, bet) =>
  wins.reduce((total, win) => {
    const symbol = getSymbol(win.symbol);
    return total + symbol.value * win.multiplier * bet;
  }, 0);

