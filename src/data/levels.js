// Meowsodu levels
// Each level has an NxN grid where each cell has a color region index (0-based)
// Rules: one cat per row, one per column, one per color region, no adjacent cats

export const COLORS = [
  { bg: '#e8637a', light: '#f5a0ae', xColor: '#c44060', name: 'rose' },
  { bg: '#4db8c8', light: '#9adce6', xColor: '#2a8a9a', name: 'teal' },
  { bg: '#6bbf6b', light: '#a8dba8', xColor: '#3d8f3d', name: 'green' },
  { bg: '#e8c84a', light: '#f5e08a', xColor: '#b89820', name: 'yellow' },
  { bg: '#9b7ec8', light: '#c4a8e8', xColor: '#6a4ea0', name: 'purple' },
  { bg: '#c87840', light: '#e0b080', xColor: '#8a5020', name: 'brown' },
  { bg: '#e87840', light: '#f0b080', xColor: '#b85020', name: 'orange' },
  { bg: '#e878b8', light: '#f0a8d8', xColor: '#b84888', name: 'pink' },
];

// Level 1 - 6x6 grid with 6 colors
// Solution: row0->col2, row1->col4, row2->col0, row3->col5, row4->col3, row5->col1
export const LEVELS = [
  {
    id: 1,
    size: 6,
    numColors: 6,
    grid: [
      [0, 0, 0, 1, 1, 1],
      [0, 2, 2, 1, 1, 1],
      [2, 2, 2, 3, 3, 1],
      [2, 4, 3, 3, 3, 5],
      [4, 4, 4, 3, 5, 5],
      [4, 4, 3, 3, 5, 5],
    ],
    solution: [[0, 2], [1, 4], [2, 0], [3, 5], [4, 3], [5, 1]],
  },
  {
    id: 2,
    size: 7,
    numColors: 7,
    grid: [
      [0, 0, 0, 1, 1, 1, 1],
      [0, 0, 2, 2, 1, 1, 1],
      [0, 2, 2, 2, 3, 3, 1],
      [4, 2, 2, 3, 3, 3, 5],
      [4, 4, 6, 3, 3, 5, 5],
      [4, 4, 6, 6, 5, 5, 5],
      [4, 6, 6, 6, 6, 5, 5],
    ],
    solution: [[0, 3], [1, 6], [2, 1], [3, 5], [4, 0], [5, 4], [6, 2]],
  },
  {
    id: 3,
    size: 8,
    numColors: 8,
    grid: [
      [0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 2, 2, 1, 1, 1, 1],
      [0, 2, 2, 2, 3, 3, 1, 1],
      [4, 2, 2, 3, 3, 3, 5, 1],
      [4, 4, 6, 3, 3, 5, 5, 5],
      [4, 4, 6, 6, 5, 5, 5, 7],
      [4, 6, 6, 6, 6, 5, 7, 7],
      [6, 6, 6, 6, 7, 7, 7, 7],
    ],
    solution: [[0, 3], [1, 6], [2, 0], [3, 7], [4, 2], [5, 5], [6, 1], [7, 4]],
  },
];

export function validatePlacement(grid, cats) {
  const errors = new Set();
  const catList = [...cats];

  const rowCount = {};
  const colCount = {};
  const colorCount = {};

  catList.forEach(([r, c]) => {
    rowCount[r] = (rowCount[r] || 0) + 1;
    colCount[c] = (colCount[c] || 0) + 1;
    const color = grid[r][c];
    colorCount[color] = (colorCount[color] || 0) + 1;
  });

  catList.forEach(([r, c]) => {
    const color = grid[r][c];
    if (rowCount[r] > 1 || colCount[c] > 1 || colorCount[color] > 1) {
      errors.add(`${r},${c}`);
    }
  });

  // Adjacency check
  for (let i = 0; i < catList.length; i++) {
    for (let j = i + 1; j < catList.length; j++) {
      const [r1, c1] = catList[i];
      const [r2, c2] = catList[j];
      if (Math.abs(r1 - r2) <= 1 && Math.abs(c1 - c2) <= 1) {
        errors.add(`${r1},${c1}`);
        errors.add(`${r2},${c2}`);
      }
    }
  }

  return errors;
}

export function checkWin(grid, cats, size) {
  if (cats.size !== size) return false;
  const errors = validatePlacement(grid, [...cats]);
  if (errors.size > 0) return false;

  const catList = [...cats];
  const rows = new Set(catList.map(([r]) => r));
  const cols = new Set(catList.map(([, c]) => c));
  const colors = new Set(catList.map(([r, c]) => grid[r][c]));

  return rows.size === size && cols.size === size && colors.size === size;
}
