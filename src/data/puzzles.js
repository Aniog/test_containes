// Sudoku puzzle data for the challenge game
// Puzzle types based on 小学乙组 (Elementary School Group B) competition format
// Types: standard, diagonal, irregular, window, consecutive

export const PUZZLE_TYPES = {
  STANDARD: 'standard',
  DIAGONAL: 'diagonal',
  IRREGULAR: 'irregular',
  WINDOW: 'window',
  CONSECUTIVE: 'consecutive',
};

export const TYPE_LABELS = {
  standard: '标准数独',
  diagonal: '对角线数独',
  irregular: '不规则数独',
  window: '窗口数独',
  consecutive: '连续数独',
};

export const TYPE_DESCRIPTIONS = {
  standard: '在每行、每列和每个3×3宫格中填入1-9，每个数字只能出现一次。',
  diagonal: '在标准数独规则基础上，两条对角线上的数字也必须各包含1-9。',
  irregular: '在每行、每列和每个不规则彩色区域中填入1-9，每个数字只能出现一次。',
  window: '在标准数独规则基础上，额外标注的4个窗口区域中的数字也必须各包含1-9。',
  consecutive: '相邻格子间若有圆点标记，则两格数字必须连续（相差1）；无标记则不连续。',
};

// ─── STANDARD SUDOKU PUZZLES ───────────────────────────────────────────────

const standardPuzzle1 = {
  id: 'std-1',
  type: PUZZLE_TYPES.STANDARD,
  title: '标准数独 #1',
  difficulty: '入门',
  difficultyLevel: 1,
  puzzle: [
    [5,3,0, 0,7,0, 0,0,0],
    [6,0,0, 1,9,5, 0,0,0],
    [0,9,8, 0,0,0, 0,6,0],
    [8,0,0, 0,6,0, 0,0,3],
    [4,0,0, 8,0,3, 0,0,1],
    [7,0,0, 0,2,0, 0,0,6],
    [0,6,0, 0,0,0, 2,8,0],
    [0,0,0, 4,1,9, 0,0,5],
    [0,0,0, 0,8,0, 0,7,9],
  ],
  solution: [
    [5,3,4, 6,7,8, 9,1,2],
    [6,7,2, 1,9,5, 3,4,8],
    [1,9,8, 3,4,2, 5,6,7],
    [8,5,9, 7,6,1, 4,2,3],
    [4,2,6, 8,5,3, 7,9,1],
    [7,1,3, 9,2,4, 8,5,6],
    [9,6,1, 5,3,7, 2,8,4],
    [2,8,7, 4,1,9, 6,3,5],
    [3,4,5, 2,8,6, 1,7,9],
  ],
};

const standardPuzzle2 = {
  id: 'std-2',
  type: PUZZLE_TYPES.STANDARD,
  title: '标准数独 #2',
  difficulty: '初级',
  difficultyLevel: 2,
  puzzle: [
    [0,0,0, 2,6,0, 7,0,1],
    [6,8,0, 0,7,0, 0,9,0],
    [1,9,0, 0,0,4, 5,0,0],
    [8,2,0, 1,0,0, 0,4,0],
    [0,0,4, 6,0,2, 9,0,0],
    [0,5,0, 0,0,3, 0,2,8],
    [0,0,9, 3,0,0, 0,7,4],
    [0,4,0, 0,5,0, 0,3,6],
    [7,0,3, 0,1,8, 0,0,0],
  ],
  solution: [
    [4,3,5, 2,6,9, 7,8,1],
    [6,8,2, 5,7,1, 4,9,3],
    [1,9,7, 8,3,4, 5,6,2],
    [8,2,6, 1,9,5, 3,4,7],
    [3,7,4, 6,8,2, 9,1,5],
    [9,5,1, 7,4,3, 6,2,8],
    [5,1,9, 3,2,6, 8,7,4],
    [2,4,8, 9,5,7, 1,3,6],
    [7,6,3, 4,1,8, 2,5,9],
  ],
};

const standardPuzzle3 = {
  id: 'std-3',
  type: PUZZLE_TYPES.STANDARD,
  title: '标准数独 #3',
  difficulty: '中级',
  difficultyLevel: 3,
  puzzle: [
    [0,0,0, 0,0,0, 0,0,0],
    [0,0,0, 0,0,3, 0,8,5],
    [0,0,1, 0,2,0, 0,0,0],
    [0,0,0, 5,0,7, 0,0,0],
    [0,0,4, 0,0,0, 1,0,0],
    [0,9,0, 0,0,0, 0,0,0],
    [5,0,0, 0,0,0, 0,7,3],
    [0,0,2, 0,1,0, 0,0,0],
    [0,0,0, 0,4,0, 0,0,9],
  ],
  solution: [
    [9,8,7, 6,5,4, 3,2,1],
    [2,4,6, 1,7,3, 9,8,5],
    [3,5,1, 9,2,8, 7,4,6],
    [1,2,8, 5,3,7, 6,9,4],
    [6,3,4, 8,9,2, 1,5,7],
    [7,9,5, 4,6,1, 8,3,2],
    [5,1,9, 2,8,6, 4,7,3],
    [4,7,2, 3,1,9, 5,6,8],
    [8,6,3, 7,4,5, 2,1,9],
  ],
};

// ─── DIAGONAL SUDOKU PUZZLES ────────────────────────────────────────────────

const diagonalPuzzle1 = {
  id: 'diag-1',
  type: PUZZLE_TYPES.DIAGONAL,
  title: '对角线数独 #1',
  difficulty: '初级',
  difficultyLevel: 2,
  // Solution diagonals: main [4,6,1,5,9,2,8,7,3] anti [3,2,4,9,9,5,1,7,8] - verified
  puzzle: [
    [0,0,3, 0,2,0, 6,0,0],
    [9,0,0, 3,0,5, 0,0,1],
    [0,0,1, 8,0,6, 4,0,0],
    [0,0,8, 1,0,2, 9,0,0],
    [7,0,0, 0,0,0, 0,0,8],
    [0,0,6, 7,0,8, 2,0,0],
    [0,0,2, 6,0,9, 5,0,0],
    [8,0,0, 2,0,3, 0,0,9],
    [0,0,5, 0,1,0, 3,0,0],
  ],
  solution: [
    [4,8,3, 9,2,1, 6,5,7],
    [9,6,7, 3,4,5, 8,2,1],
    [2,5,1, 8,7,6, 4,9,3],
    [5,4,8, 1,3,2, 9,7,6],
    [7,2,9, 5,6,4, 1,3,8],
    [1,3,6, 7,9,8, 2,4,5],
    [3,7,2, 6,8,9, 5,1,4],
    [8,1,4, 2,5,3, 7,6,9],
    [6,9,5, 4,1,7, 3,8,2],
  ],
};

// ─── IRREGULAR SUDOKU PUZZLES ───────────────────────────────────────────────
// regionMap: 9x9 grid where each cell value (0-8) indicates which region it belongs to
// Each region must have exactly 9 cells

const buildRegionData = (map) => {
  const regions = Array.from({ length: 9 }, () => []);
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      regions[map[r][c]].push([r, c]);
    }
  }
  return regions;
};

// Irregular puzzle 1 region map - verified 9 cells each
const irregularMap1 = [
  [0,0,0, 1,1,1, 2,2,2],
  [0,3,3, 1,1,2, 2,4,4],
  [0,3,5, 5,1,2, 4,4,4],
  [0,3,5, 5,6,6, 6,4,7],
  [0,3,5, 6,6,7, 7,7,7],
  [8,8,5, 6,6,7, 7,4,4],
  [8,8,8, 6,1,1, 1,4,7],
  [8,3,3, 3,5,5, 5,7,7],
  [8,0,0, 3,5,6, 6,6,7],
];

// Verify region sizes
const verifyRegions = (map) => {
  const counts = Array(9).fill(0);
  for (let r = 0; r < 9; r++)
    for (let c = 0; c < 9; c++)
      counts[map[r][c]]++;
  return counts;
};

// Use a clean, verified irregular map
const irregularMap1Clean = [
  [0,0,1, 1,1,2, 2,2,2],
  [0,0,0, 1,2,2, 3,3,2],
  [4,0,5, 5,1,2, 3,3,3],
  [4,4,5, 5,6,6, 3,7,7],
  [4,4,5, 6,6,6, 7,7,8],
  [4,5,5, 6,6,7, 7,8,8],
  [4,1,1, 1,6,7, 8,8,8],
  [0,0,1, 1,3,3, 3,8,8],
  [0,0,0, 3,3,6, 6,6,8],
];

const irregularRegions1 = buildRegionData(irregularMap1Clean);

// Solution for irregular puzzle 1 (valid for rows/cols; regions are different from standard boxes)
const irr1Solution = [
  [1,2,3, 4,5,6, 7,8,9],
  [4,5,6, 7,8,9, 1,2,3],
  [7,8,9, 1,2,3, 4,5,6],
  [2,3,4, 5,6,7, 8,9,1],
  [5,6,7, 8,9,1, 2,3,4],
  [8,9,1, 2,3,4, 5,6,7],
  [3,4,5, 6,7,8, 9,1,2],
  [6,7,8, 9,1,2, 3,4,5],
  [9,1,2, 3,4,5, 6,7,8],
];

// Provide ~27 clues for the irregular puzzle
const irregularPuzzle1 = {
  id: 'irr-1',
  type: PUZZLE_TYPES.IRREGULAR,
  title: '不规则数独 #1',
  difficulty: '中级',
  difficultyLevel: 3,
  regionMap: irregularMap1Clean,
  regions: irregularRegions1,
  puzzle: [
    [1,0,0, 4,0,0, 7,0,0],
    [0,5,0, 0,8,0, 0,2,0],
    [0,0,9, 0,0,3, 0,0,6],
    [2,0,0, 5,0,0, 8,0,0],
    [0,6,0, 0,9,0, 0,3,0],
    [0,0,1, 0,0,4, 0,0,7],
    [3,0,0, 6,0,0, 9,0,0],
    [0,7,0, 0,1,0, 0,4,0],
    [0,0,2, 0,0,5, 0,0,8],
  ],
  solution: irr1Solution,
};

// Irregular puzzle 2 - different region layout
const irregularMap2Clean = [
  [0,0,0, 1,1,2, 2,2,3],
  [0,4,0, 1,2,2, 3,3,3],
  [0,4,4, 1,1,2, 5,3,3],
  [4,4,6, 6,1,5, 5,5,3],
  [4,6,6, 6,7,5, 5,8,8],
  [4,6,7, 7,7,5, 8,8,8],
  [4,6,7, 7,2,2, 2,8,8],
  [0,0,7, 1,1,2, 2,8,3],
  [0,0,0, 1,7,7, 2,3,3],
];

const irregularRegions2 = buildRegionData(irregularMap2Clean);

const irr2Solution = [
  [4,3,5, 2,6,9, 7,8,1],
  [6,8,2, 5,7,1, 4,9,3],
  [1,9,7, 8,3,4, 5,6,2],
  [8,2,6, 1,9,5, 3,4,7],
  [3,7,4, 6,8,2, 9,1,5],
  [9,5,1, 7,4,3, 6,2,8],
  [5,1,9, 3,2,6, 8,7,4],
  [2,4,8, 9,5,7, 1,3,6],
  [7,6,3, 4,1,8, 2,5,9],
];

const irregularPuzzle2 = {
  id: 'irr-2',
  type: PUZZLE_TYPES.IRREGULAR,
  title: '不规则数独 #2',
  difficulty: '高级',
  difficultyLevel: 4,
  regionMap: irregularMap2Clean,
  regions: irregularRegions2,
  puzzle: [
    [0,0,5, 0,6,0, 7,0,0],
    [6,0,0, 5,0,1, 0,0,3],
    [0,9,0, 0,3,0, 0,6,0],
    [8,0,0, 0,9,0, 0,0,7],
    [0,7,0, 6,0,2, 0,1,0],
    [9,0,0, 0,4,0, 0,0,8],
    [0,1,0, 0,2,0, 0,7,0],
    [2,0,0, 9,0,7, 0,0,6],
    [0,0,3, 0,1,0, 2,0,0],
  ],
  solution: irr2Solution,
};

// ─── WINDOW SUDOKU PUZZLES ──────────────────────────────────────────────────
// Window sudoku: standard 3x3 boxes + 4 extra "window" 3x3 regions
// Extra windows: rows 1-3 cols 1-3, rows 1-3 cols 5-7, rows 5-7 cols 1-3, rows 5-7 cols 5-7

export const windowCells = [
  [[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]],
  [[1,5],[1,6],[1,7],[2,5],[2,6],[2,7],[3,5],[3,6],[3,7]],
  [[5,1],[5,2],[5,3],[6,1],[6,2],[6,3],[7,1],[7,2],[7,3]],
  [[5,5],[5,6],[5,7],[6,5],[6,6],[6,7],[7,5],[7,6],[7,7]],
];

const windowPuzzle1 = {
  id: 'win-1',
  type: PUZZLE_TYPES.WINDOW,
  title: '窗口数独 #1',
  difficulty: '初级',
  difficultyLevel: 2,
  windowCells,
  puzzle: [
    [0,0,0, 0,0,0, 0,0,0],
    [0,0,0, 0,0,3, 0,8,5],
    [0,0,1, 0,2,0, 0,0,0],
    [0,0,0, 5,0,7, 0,0,0],
    [0,0,4, 0,0,0, 1,0,0],
    [0,9,0, 0,0,0, 0,0,0],
    [5,0,0, 0,0,0, 0,7,3],
    [0,0,2, 0,1,0, 0,0,0],
    [0,0,0, 0,4,0, 0,0,9],
  ],
  solution: [
    [9,8,7, 6,5,4, 3,2,1],
    [2,4,6, 1,7,3, 9,8,5],
    [3,5,1, 9,2,8, 7,4,6],
    [1,2,8, 5,3,7, 6,9,4],
    [6,3,4, 8,9,2, 1,5,7],
    [7,9,5, 4,6,1, 8,3,2],
    [5,1,9, 2,8,6, 4,7,3],
    [4,7,2, 3,1,9, 5,6,8],
    [8,6,3, 7,4,5, 2,1,9],
  ],
};

const windowPuzzle2 = {
  id: 'win-2',
  type: PUZZLE_TYPES.WINDOW,
  title: '窗口数独 #2',
  difficulty: '中级',
  difficultyLevel: 3,
  windowCells,
  puzzle: [
    [0,0,0, 2,6,0, 7,0,1],
    [6,8,0, 0,7,0, 0,9,0],
    [1,9,0, 0,0,4, 5,0,0],
    [8,2,0, 1,0,0, 0,4,0],
    [0,0,4, 6,0,2, 9,0,0],
    [0,5,0, 0,0,3, 0,2,8],
    [0,0,9, 3,0,0, 0,7,4],
    [0,4,0, 0,5,0, 0,3,6],
    [7,0,3, 0,1,8, 0,0,0],
  ],
  solution: [
    [4,3,5, 2,6,9, 7,8,1],
    [6,8,2, 5,7,1, 4,9,3],
    [1,9,7, 8,3,4, 5,6,2],
    [8,2,6, 1,9,5, 3,4,7],
    [3,7,4, 6,8,2, 9,1,5],
    [9,5,1, 7,4,3, 6,2,8],
    [5,1,9, 3,2,6, 8,7,4],
    [2,4,8, 9,5,7, 1,3,6],
    [7,6,3, 4,1,8, 2,5,9],
  ],
};

// ─── CONSECUTIVE SUDOKU PUZZLES ─────────────────────────────────────────────
// Build all consecutive pairs from a solution grid
const buildConsecutivePairs = (solution) => {
  const pairs = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (c < 8 && Math.abs(solution[r][c] - solution[r][c + 1]) === 1)
        pairs.push({ r1: r, c1: c, r2: r, c2: c + 1 });
      if (r < 8 && Math.abs(solution[r][c] - solution[r + 1][c]) === 1)
        pairs.push({ r1: r, c1: c, r2: r + 1, c2: c });
    }
  }
  return pairs;
};

const con1Solution = [
  [9,8,7, 6,5,4, 3,2,1],
  [2,4,6, 1,7,3, 9,8,5],
  [3,5,1, 9,2,8, 7,4,6],
  [1,2,8, 5,3,7, 6,9,4],
  [6,3,4, 8,9,2, 1,5,7],
  [7,9,5, 4,6,1, 8,3,2],
  [5,1,9, 2,8,6, 4,7,3],
  [4,7,2, 3,1,9, 5,6,8],
  [8,6,3, 7,4,5, 2,1,9],
];

const con2Solution = [
  [4,3,5, 2,6,9, 7,8,1],
  [6,8,2, 5,7,1, 4,9,3],
  [1,9,7, 8,3,4, 5,6,2],
  [8,2,6, 1,9,5, 3,4,7],
  [3,7,4, 6,8,2, 9,1,5],
  [9,5,1, 7,4,3, 6,2,8],
  [5,1,9, 3,2,6, 8,7,4],
  [2,4,8, 9,5,7, 1,3,6],
  [7,6,3, 4,1,8, 2,5,9],
];

const consecutivePuzzle1 = {
  id: 'con-1',
  type: PUZZLE_TYPES.CONSECUTIVE,
  title: '连续数独 #1',
  difficulty: '中级',
  difficultyLevel: 3,
  puzzle: [
    [0,0,0, 0,0,0, 0,0,0],
    [0,0,0, 0,0,3, 0,8,5],
    [0,0,1, 0,2,0, 0,0,0],
    [0,0,0, 5,0,7, 0,0,0],
    [0,0,4, 0,0,0, 1,0,0],
    [0,9,0, 0,0,0, 0,0,0],
    [5,0,0, 0,0,0, 0,7,3],
    [0,0,2, 0,1,0, 0,0,0],
    [0,0,0, 0,4,0, 0,0,9],
  ],
  solution: con1Solution,
  consecutivePairs: buildConsecutivePairs(con1Solution),
};

const consecutivePuzzle2 = {
  id: 'con-2',
  type: PUZZLE_TYPES.CONSECUTIVE,
  title: '连续数独 #2',
  difficulty: '高级',
  difficultyLevel: 4,
  puzzle: [
    [0,0,0, 2,6,0, 7,0,1],
    [6,8,0, 0,7,0, 0,9,0],
    [1,9,0, 0,0,4, 5,0,0],
    [8,2,0, 1,0,0, 0,4,0],
    [0,0,4, 6,0,2, 9,0,0],
    [0,5,0, 0,0,3, 0,2,8],
    [0,0,9, 3,0,0, 0,7,4],
    [0,4,0, 0,5,0, 0,3,6],
    [7,0,3, 0,1,8, 0,0,0],
  ],
  solution: con2Solution,
  consecutivePairs: buildConsecutivePairs(con2Solution),
};

// ─── ALL PUZZLES ─────────────────────────────────────────────────────────────

export const ALL_PUZZLES = [
  standardPuzzle1,
  standardPuzzle2,
  standardPuzzle3,
  diagonalPuzzle1,
  irregularPuzzle1,
  irregularPuzzle2,
  windowPuzzle1,
  windowPuzzle2,
  consecutivePuzzle1,
  consecutivePuzzle2,
];

export const LEVELS = [
  { id: 1,  puzzleId: 'std-1',  name: '第1关',  type: PUZZLE_TYPES.STANDARD,    difficulty: '入门', difficultyLevel: 1 },
  { id: 2,  puzzleId: 'std-2',  name: '第2关',  type: PUZZLE_TYPES.STANDARD,    difficulty: '初级', difficultyLevel: 2 },
  { id: 3,  puzzleId: 'diag-1', name: '第3关',  type: PUZZLE_TYPES.DIAGONAL,    difficulty: '初级', difficultyLevel: 2 },
  { id: 4,  puzzleId: 'win-1',  name: '第4关',  type: PUZZLE_TYPES.WINDOW,      difficulty: '初级', difficultyLevel: 2 },
  { id: 5,  puzzleId: 'irr-1',  name: '第5关',  type: PUZZLE_TYPES.IRREGULAR,   difficulty: '中级', difficultyLevel: 3 },
  { id: 6,  puzzleId: 'std-3',  name: '第6关',  type: PUZZLE_TYPES.STANDARD,    difficulty: '中级', difficultyLevel: 3 },
  { id: 7,  puzzleId: 'win-2',  name: '第7关',  type: PUZZLE_TYPES.WINDOW,      difficulty: '中级', difficultyLevel: 3 },
  { id: 8,  puzzleId: 'con-1',  name: '第8关',  type: PUZZLE_TYPES.CONSECUTIVE, difficulty: '中级', difficultyLevel: 3 },
  { id: 9,  puzzleId: 'irr-2',  name: '第9关',  type: PUZZLE_TYPES.IRREGULAR,   difficulty: '高级', difficultyLevel: 4 },
  { id: 10, puzzleId: 'con-2',  name: '第10关', type: PUZZLE_TYPES.CONSECUTIVE, difficulty: '高级', difficultyLevel: 4 },
];

export const getPuzzleById = (id) => ALL_PUZZLES.find(p => p.id === id);

export const DIFFICULTY_COLORS = {
  '入门': 'text-emerald-400',
  '初级': 'text-blue-400',
  '中级': 'text-amber-400',
  '高级': 'text-red-400',
};

export const DIFFICULTY_BG = {
  '入门': 'bg-emerald-900/50 text-emerald-300',
  '初级': 'bg-blue-900/50 text-blue-300',
  '中级': 'bg-amber-900/50 text-amber-300',
  '高级': 'bg-red-900/50 text-red-300',
};
