// Color region definitions for the 8x8 grid
// Each cell is assigned a color region ID
// Colors: 0=pink, 1=teal, 2=green, 3=yellow, 4=brown, 5=purple, 6=orange, 7=lavender

export const COLORS = {
  0: { name: 'pink',   bg: '#e8748a', xColor: '#c45070', light: '#f5b8c4' },
  1: { name: 'teal',   bg: '#5bbccc', xColor: '#3a9aaa', light: '#a8dde6' },
  2: { name: 'green',  bg: '#7cc87a', xColor: '#5aaa58', light: '#b8e4b6' },
  3: { name: 'yellow', bg: '#e8c96a', xColor: '#c8a840', light: '#f5e4a8' },
  4: { name: 'brown',  bg: '#b8956a', xColor: '#9a7448', light: '#d8bfa0' },
  5: { name: 'purple', bg: '#9b8ec4', xColor: '#7a6aaa', light: '#c8bfe0' },
  6: { name: 'rose',   bg: '#e87aaa', xColor: '#c85888', light: '#f5b8d4' },
  7: { name: 'sand',   bg: '#d4b896', xColor: '#b89870', light: '#ecdcc8' },
};

// 8x8 grid color region map (row by row)
// Based on the image layout
export const GRID_COLORS = [
  [0, 0, 0, 0, 1, 1, 1, 1],
  [2, 2, 2, 2, 0, 1, 1, 4],
  [2, 5, 3, 1, 1, 1, 3, 4],
  [2, 3, 3, 1, 4, 4, 4, 4],
  [2, 3, 3, 3, 6, 3, 3, 4],
  [2, 2, 3, 3, 6, 6, 3, 4],
  [2, 3, 3, 3, 3, 6, 3, 4],
  [2, 2, 2, 2, 3, 3, 3, 4],
];

// Number of colors/regions = number of cats to place
export const NUM_COLORS = Object.keys(COLORS).length; // 8

// Levels configuration
export const LEVELS = [
  {
    id: 31,
    gridColors: GRID_COLORS,
    totalCats: 8,
    solution: [
      // [row, col] for each cat placement (one per color region)
      [0, 2], // pink
      [0, 6], // teal
      [7, 0], // green
      [4, 5], // yellow (cat shown in image)
      [3, 7], // brown
      [2, 1], // purple (cat shown in image)
      [5, 3], // rose/pink2
      [6, 6], // sand
    ],
  },
];

export const DEFAULT_LEVEL = LEVELS[0];
