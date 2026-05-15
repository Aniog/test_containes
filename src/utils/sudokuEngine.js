// Core Sudoku generation and validation engine

// Shuffle array in place
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Check if placing num at (row, col) is valid in a standard NxN grid
function isValidPlacement(grid, row, col, num, size, boxRows, boxCols) {
  // Check row
  for (let c = 0; c < size; c++) {
    if (grid[row][c] === num) return false;
  }
  // Check column
  for (let r = 0; r < size; r++) {
    if (grid[r][col] === num) return false;
  }
  // Check box
  const startRow = Math.floor(row / boxRows) * boxRows;
  const startCol = Math.floor(col / boxCols) * boxCols;
  for (let r = startRow; r < startRow + boxRows; r++) {
    for (let c = startCol; c < startCol + boxCols; c++) {
      if (grid[r][c] === num) return false;
    }
  }
  return true;
}

// Solve a grid using backtracking, returns true if solved
function solveGrid(grid, size, boxRows, boxCols) {
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (grid[row][col] === 0) {
        const nums = shuffle([...Array(size).keys()].map(i => i + 1));
        for (const num of nums) {
          if (isValidPlacement(grid, row, col, num, size, boxRows, boxCols)) {
            grid[row][col] = num;
            if (solveGrid(grid, size, boxRows, boxCols)) return true;
            grid[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

// Count solutions (up to 2 to check uniqueness)
function countSolutions(grid, size, boxRows, boxCols, limit = 2) {
  let count = 0;
  function solve(g) {
    if (count >= limit) return;
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (g[row][col] === 0) {
          for (let num = 1; num <= size; num++) {
            if (isValidPlacement(g, row, col, num, size, boxRows, boxCols)) {
              g[row][col] = num;
              solve(g);
              g[row][col] = 0;
            }
          }
          return;
        }
      }
    }
    count++;
  }
  const copy = grid.map(r => [...r]);
  solve(copy);
  return count;
}

// Generate a complete valid grid
function generateCompleteGrid(size, boxRows, boxCols) {
  const grid = Array.from({ length: size }, () => Array(size).fill(0));
  solveGrid(grid, size, boxRows, boxCols);
  return grid;
}

// Remove cells to create a puzzle with unique solution
function createPuzzle(solution, size, boxRows, boxCols, clues) {
  const puzzle = solution.map(r => [...r]);
  const cells = [];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      cells.push([r, c]);
    }
  }
  shuffle(cells);

  let removed = 0;
  const target = size * size - clues;

  for (const [r, c] of cells) {
    if (removed >= target) break;
    const backup = puzzle[r][c];
    puzzle[r][c] = 0;
    if (countSolutions(puzzle, size, boxRows, boxCols) === 1) {
      removed++;
    } else {
      puzzle[r][c] = backup;
    }
  }
  return puzzle;
}

// Standard sudoku generator
export function generateStandardSudoku(size, boxRows, boxCols, difficulty = 'medium') {
  const cluesMap = {
    4: { easy: 12, medium: 10, hard: 8 },
    6: { easy: 24, medium: 20, hard: 16 },
    9: { easy: 40, medium: 32, hard: 26 },
  };
  const clues = cluesMap[size]?.[difficulty] ?? Math.floor(size * size * 0.5);
  const solution = generateCompleteGrid(size, boxRows, boxCols);
  const puzzle = createPuzzle(solution, size, boxRows, boxCols, clues);
  return { puzzle, solution };
}

// Validate a completed board
export function validateBoard(board, solution, size) {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (board[r][c] !== 0 && board[r][c] !== solution[r][c]) {
        return false;
      }
    }
  }
  return true;
}

// Check if board is fully filled
export function isBoardComplete(board, size) {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (board[r][c] === 0) return false;
    }
  }
  return true;
}

// Get errors: cells where user input doesn't match solution
export function getErrors(board, solution, size) {
  const errors = new Set();
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (board[r][c] !== 0 && board[r][c] !== solution[r][c]) {
        errors.add(`${r}-${c}`);
      }
    }
  }
  return errors;
}

// ============================================================
// Six-cell Greater-Than Sudoku (大小数数独)
// Cells must satisfy neighbor inequality constraints
// ============================================================
export function generateGreaterThanSudoku() {
  const size = 6;
  const boxRows = 2;
  const boxCols = 3;
  const solution = generateCompleteGrid(size, boxRows, boxCols);

  // Generate horizontal constraints (right > left or left > right)
  const hConstraints = []; // [row, col, direction] direction: '>' means grid[r][c] > grid[r][c+1]
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size - 1; c++) {
      hConstraints.push({
        row: r, col: c,
        dir: solution[r][c] > solution[r][c + 1] ? '>' : '<'
      });
    }
  }

  // Generate vertical constraints
  const vConstraints = [];
  for (let r = 0; r < size - 1; r++) {
    for (let c = 0; c < size; c++) {
      vConstraints.push({
        row: r, col: c,
        dir: solution[r][c] > solution[r + 1][c] ? 'v' : '^'
      });
    }
  }

  // Create puzzle with fewer clues since constraints help
  const puzzle = createPuzzle(solution, size, boxRows, boxCols, 14);
  return { puzzle, solution, hConstraints, vConstraints };
}

// ============================================================
// Siamese / Butterfly Sudoku (连体数独) - two overlapping 4x4 grids
// ============================================================
export function generateSiameseSudoku() {
  // Two 4x4 grids sharing a 2x2 corner region
  // Grid A: rows 0-3, cols 0-3
  // Grid B: rows 0-3, cols 2-5 (sharing cols 2-3 of grid A)
  // The shared region is rows 0-1, cols 2-3 (top-right of A = top-left of B)

  const size = 4;
  const boxRows = 2;
  const boxCols = 2;

  // Generate grid A
  const solA = generateCompleteGrid(size, boxRows, boxCols);

  // Grid B must have the shared region match grid A's top-right 2x2
  // Shared: rows 0-1, cols 2-3 of A = rows 0-1, cols 0-1 of B
  let solB = null;
  let attempts = 0;
  while (!solB && attempts < 100) {
    attempts++;
    const candidate = Array.from({ length: size }, () => Array(size).fill(0));
    // Pre-fill shared region
    candidate[0][0] = solA[0][2];
    candidate[0][1] = solA[0][3];
    candidate[1][0] = solA[1][2];
    candidate[1][1] = solA[1][3];
    if (solveGrid(candidate, size, boxRows, boxCols)) {
      solB = candidate;
    }
  }

  if (!solB) {
    solB = generateCompleteGrid(size, boxRows, boxCols);
  }

  const puzzleA = createPuzzle(solA, size, boxRows, boxCols, 8);
  const puzzleB = createPuzzle(solB, size, boxRows, boxCols, 8);

  // Sync shared region in puzzles
  // Shared cells: A[0][2], A[0][3], A[1][2], A[1][3] = B[0][0], B[0][1], B[1][0], B[1][1]
  const sharedPairs = [
    [[0, 2], [0, 0]],
    [[0, 3], [0, 1]],
    [[1, 2], [1, 0]],
    [[1, 3], [1, 1]],
  ];

  for (const [[ar, ac], [br, bc]] of sharedPairs) {
    if (puzzleA[ar][ac] !== 0) {
      puzzleB[br][bc] = puzzleA[ar][ac];
    } else if (puzzleB[br][bc] !== 0) {
      puzzleA[ar][ac] = puzzleB[br][bc];
    }
  }

  return { puzzleA, solA, puzzleB, solB, sharedPairs };
}

// ============================================================
// Arithmetic Sudoku (加减数独) - 4x4 with cage constraints
// ============================================================
export function generateArithmeticSudoku() {
  const size = 4;
  const boxRows = 2;
  const boxCols = 2;
  const solution = generateCompleteGrid(size, boxRows, boxCols);

  // Create cages: groups of 2-3 adjacent cells with sum/difference target
  const cages = buildCages(solution, size);
  const puzzle = Array.from({ length: size }, () => Array(size).fill(0));

  return { puzzle, solution, cages };
}

function buildCages(solution, size) {
  const assigned = Array.from({ length: size }, () => Array(size).fill(false));
  const cages = [];

  const allCells = [];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      allCells.push([r, c]);
    }
  }
  shuffle(allCells);

  for (const [r, c] of allCells) {
    if (assigned[r][c]) continue;

    // Try to form a cage of 2 cells
    const neighbors = [];
    if (c + 1 < size && !assigned[r][c + 1]) neighbors.push([r, c + 1]);
    if (r + 1 < size && !assigned[r + 1][c]) neighbors.push([r + 1, c]);

    if (neighbors.length > 0) {
      const [nr, nc] = neighbors[Math.floor(Math.random() * neighbors.length)];
      const v1 = solution[r][c];
      const v2 = solution[nr][nc];

      // Randomly choose + or -
      const useAdd = Math.random() > 0.4;
      let op, target;
      if (useAdd) {
        op = '+';
        target = v1 + v2;
      } else {
        op = '-';
        target = Math.abs(v1 - v2);
      }

      cages.push({
        cells: [[r, c], [nr, nc]],
        op,
        target,
        label: `${target}${op}`,
      });
      assigned[r][c] = true;
      assigned[nr][nc] = true;
    } else {
      // Single cell cage - reveal the value
      cages.push({
        cells: [[r, c]],
        op: '=',
        target: solution[r][c],
        label: `${solution[r][c]}`,
        given: true,
      });
      assigned[r][c] = true;
    }
  }

  return cages;
}

// Validate arithmetic cage
export function validateCage(cage, board) {
  const values = cage.cells.map(([r, c]) => board[r][c]);
  if (values.some(v => v === 0)) return null; // incomplete

  if (cage.op === '+') {
    return values.reduce((a, b) => a + b, 0) === cage.target;
  }
  if (cage.op === '-') {
    return Math.abs(values[0] - values[1]) === cage.target;
  }
  if (cage.op === '=') {
    return values[0] === cage.target;
  }
  return false;
}

// Score calculation
export function calculateScore(timeSeconds, errors, size, difficulty) {
  const baseScore = { 4: 100, 6: 200, 9: 400 }[size] ?? 200;
  const diffMultiplier = { easy: 1, medium: 1.5, hard: 2 }[difficulty] ?? 1;
  const timeBonus = Math.max(0, 300 - timeSeconds);
  const errorPenalty = errors * 20;
  return Math.max(10, Math.round((baseScore + timeBonus - errorPenalty) * diffMultiplier));
}
