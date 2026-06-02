// Sudoku generator and solver utilities

/**
 * Check if placing num at (row, col) is valid
 */
export function isValid(board, row, col, num) {
  // Check row
  for (let c = 0; c < 9; c++) {
    if (board[row][c] === num) return false;
  }
  // Check column
  for (let r = 0; r < 9; r++) {
    if (board[r][col] === num) return false;
  }
  // Check 3x3 box
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let r = boxRow; r < boxRow + 3; r++) {
    for (let c = boxCol; c < boxCol + 3; c++) {
      if (board[r][c] === num) return false;
    }
  }
  return true;
}

/**
 * Solve the board using backtracking, returns true if solved
 */
export function solveSudoku(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (const num of nums) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

/**
 * Count solutions (up to 2 to check uniqueness)
 */
function countSolutions(board, limit = 2) {
  let count = 0;
  function solve(b) {
    if (count >= limit) return;
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (b[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(b, row, col, num)) {
              b[row][col] = num;
              solve(b);
              b[row][col] = 0;
            }
          }
          return;
        }
      }
    }
    count++;
  }
  const copy = board.map(r => [...r]);
  solve(copy);
  return count;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Generate a complete valid Sudoku solution
 */
function generateSolution() {
  const board = Array.from({ length: 9 }, () => Array(9).fill(0));
  solveSudoku(board);
  return board;
}

/**
 * Difficulty settings: number of cells to remove
 */
const DIFFICULTY_SETTINGS = {
  easy: { remove: 35, label: '简单' },
  medium: { remove: 45, label: '中等' },
  hard: { remove: 52, label: '困难' },
  expert: { remove: 58, label: '专家' },
};

/**
 * Generate a puzzle with given difficulty
 * Returns { puzzle, solution }
 */
export function generatePuzzle(difficulty = 'medium') {
  const solution = generateSolution();
  const puzzle = solution.map(r => [...r]);

  const { remove } = DIFFICULTY_SETTINGS[difficulty] || DIFFICULTY_SETTINGS.medium;

  // Get all positions and shuffle
  const positions = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      positions.push([r, c]);
    }
  }
  const shuffled = shuffle(positions);

  let removed = 0;
  for (const [r, c] of shuffled) {
    if (removed >= remove) break;
    const backup = puzzle[r][c];
    puzzle[r][c] = 0;
    // Ensure unique solution
    if (countSolutions(puzzle) !== 1) {
      puzzle[r][c] = backup;
    } else {
      removed++;
    }
  }

  return { puzzle, solution };
}

/**
 * Check if the current board matches the solution
 */
export function checkComplete(board, solution) {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] !== solution[r][c]) return false;
    }
  }
  return true;
}

/**
 * Get all conflicting cells for a given board state
 */
export function getConflicts(board) {
  const conflicts = new Set();
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === 0) continue;
      // Check row
      for (let cc = 0; cc < 9; cc++) {
        if (cc !== c && board[r][cc] === val) {
          conflicts.add(`${r}-${c}`);
          conflicts.add(`${r}-${cc}`);
        }
      }
      // Check col
      for (let rr = 0; rr < 9; rr++) {
        if (rr !== r && board[rr][c] === val) {
          conflicts.add(`${r}-${c}`);
          conflicts.add(`${rr}-${c}`);
        }
      }
      // Check box
      const br = Math.floor(r / 3) * 3;
      const bc = Math.floor(c / 3) * 3;
      for (let rr = br; rr < br + 3; rr++) {
        for (let cc = bc; cc < bc + 3; cc++) {
          if ((rr !== r || cc !== c) && board[rr][cc] === val) {
            conflicts.add(`${r}-${c}`);
            conflicts.add(`${rr}-${cc}`);
          }
        }
      }
    }
  }
  return conflicts;
}

export const DIFFICULTIES = [
  { key: 'easy', label: '简单', color: 'text-green-600', bg: 'bg-green-100' },
  { key: 'medium', label: '中等', color: 'text-yellow-600', bg: 'bg-yellow-100' },
  { key: 'hard', label: '困难', color: 'text-orange-600', bg: 'bg-orange-100' },
  { key: 'expert', label: '专家', color: 'text-red-600', bg: 'bg-red-100' },
];
