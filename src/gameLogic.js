// Game logic utilities

/**
 * Check if two cells are adjacent (including diagonally)
 */
export function areAdjacent(r1, c1, r2, c2) {
  return Math.abs(r1 - r2) <= 1 && Math.abs(c1 - c2) <= 1 && !(r1 === r2 && c1 === c2);
}

/**
 * Given current cat placements, compute which cells are blocked (X marks)
 * A cell is blocked if:
 * - It shares a row with a cat
 * - It shares a column with a cat
 * - It is adjacent (including diagonal) to a cat
 * - Its color region already has a cat
 */
export function computeBlockedCells(cats, gridColors, size = 8) {
  const blocked = Array.from({ length: size }, () => Array(size).fill(false));

  cats.forEach(({ row, col, color }) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (r === row && c === col) continue;
        // Same row or column
        if (r === row || c === col) {
          blocked[r][c] = true;
        }
        // Adjacent (including diagonal)
        if (areAdjacent(row, col, r, c)) {
          blocked[r][c] = true;
        }
        // Same color region
        if (gridColors[r][c] === color) {
          blocked[r][c] = true;
        }
      }
    }
  });

  return blocked;
}

/**
 * Check if placing a cat at (row, col) is valid given existing cats
 */
export function isValidPlacement(row, col, cats, gridColors) {
  const color = gridColors[row][col];

  for (const cat of cats) {
    // Same row
    if (cat.row === row) return false;
    // Same column
    if (cat.col === col) return false;
    // Adjacent
    if (areAdjacent(row, col, cat.row, cat.col)) return false;
    // Same color region
    if (cat.color === color) return false;
  }

  return true;
}

/**
 * Check if the puzzle is solved
 */
export function checkWin(cats, gridColors, numColors) {
  if (cats.length !== numColors) return false;

  // Check all colors are represented
  const colorSet = new Set(cats.map(c => c.color));
  if (colorSet.size !== numColors) return false;

  // Check all placements are valid
  for (let i = 0; i < cats.length; i++) {
    const otherCats = cats.filter((_, idx) => idx !== i);
    if (!isValidPlacement(cats[i].row, cats[i].col, otherCats, gridColors)) {
      return false;
    }
  }

  return true;
}

/**
 * Get color counts in the grid
 */
export function getColorCounts(gridColors) {
  const counts = {};
  for (const row of gridColors) {
    for (const color of row) {
      counts[color] = (counts[color] || 0) + 1;
    }
  }
  return counts;
}
