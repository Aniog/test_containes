// Sudoku puzzle generator and solver

export const DIFFICULTIES = {
  EASY: { name: 'EASY', clues: 46 },
  MEDIUM: { name: 'MEDIUM', clues: 36 },
  HARD: { name: 'HARD', clues: 28 },
  EXPERT: { name: 'EXPERT', clues: 22 },
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) return false;
    if (board[i][col] === num) return false;
  }
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let r = boxRow; r < boxRow + 3; r++) {
    for (let c = boxCol; c < boxCol + 3; c++) {
      if (board[r][c] === num) return false;
    }
  }
  return true;
}

function solve(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        for (const num of nums) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solve(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function countSolutions(board, limit = 2) {
  let count = 0;
  function bt() {
    if (count >= limit) return;
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num;
              bt();
              board[row][col] = 0;
            }
          }
          return;
        }
      }
    }
    count++;
  }
  bt();
  return count;
}

export function generatePuzzle(difficulty = 'EXPERT') {
  const solution = Array.from({ length: 9 }, () => Array(9).fill(0));
  solve(solution);

  const puzzle = solution.map(row => [...row]);
  const cells = shuffle(Array.from({ length: 81 }, (_, i) => i));
  const targetClues = DIFFICULTIES[difficulty]?.clues ?? 22;
  let removed = 0;
  const toRemove = 81 - targetClues;

  for (const idx of cells) {
    if (removed >= toRemove) break;
    const row = Math.floor(idx / 9);
    const col = idx % 9;
    const backup = puzzle[row][col];
    puzzle[row][col] = 0;

    const copy = puzzle.map(r => [...r]);
    if (countSolutions(copy, 2) === 1) {
      removed++;
    } else {
      puzzle[row][col] = backup;
    }
  }

  return { puzzle, solution };
}

export function isValidMove(board, row, col, num) {
  return isValid(board, row, col, num);
}

export function isBoardComplete(board, solution) {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] !== solution[r][c]) return false;
    }
  }
  return true;
}

export function getHighlightType(selectedRow, selectedCol, row, col, board) {
  if (selectedRow === null || selectedCol === null) return 'none';
  if (row === selectedRow && col === selectedCol) return 'selected';
  const sameBox =
    Math.floor(row / 3) === Math.floor(selectedRow / 3) &&
    Math.floor(col / 3) === Math.floor(selectedCol / 3);
  if (row === selectedRow || col === selectedCol || sameBox) return 'related';
  const selectedVal = board[selectedRow][selectedCol];
  if (selectedVal !== 0 && board[row][col] === selectedVal) return 'same-number';
  return 'none';
}
