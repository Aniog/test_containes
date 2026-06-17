// Color definitions
export const COLORS = {
  pink:      { bg: '#E8748A', border: '#C85070', name: 'pink' },
  teal:      { bg: '#4BBFBF', border: '#2A9090', name: 'teal' },
  green:     { bg: '#6BBF6B', border: '#4A9A4A', name: 'green' },
  yellow:    { bg: '#E8C86A', border: '#C8A040', name: 'yellow' },
  purple:    { bg: '#9B7FD4', border: '#7A5FB0', name: 'purple' },
  brown:     { bg: '#C4956A', border: '#A07040', name: 'brown' },
  magenta:   { bg: '#E87AB0', border: '#C85090', name: 'magenta' },
  darkbrown: { bg: '#A07850', border: '#805830', name: 'darkbrown' },
  orange:    { bg: '#E89050', border: '#C87030', name: 'orange' },
  blue:      { bg: '#5090D0', border: '#3070B0', name: 'blue' },
  red:       { bg: '#D05050', border: '#B03030', name: 'red' },
  lime:      { bg: '#90C840', border: '#70A820', name: 'lime' },
};

// Each level: grid is NxN, colorMap[row][col] = colorKey
// solution: array of [row, col] for each cat placement (one per color)
export const LEVELS = [
  // Level 1 - 6x6
  {
    id: 1,
    size: 6,
    colors: ['pink', 'teal', 'green', 'yellow', 'purple', 'brown'],
    colorMap: [
      ['pink',   'pink',   'teal',   'teal',   'teal',   'teal'],
      ['pink',   'pink',   'green',  'teal',   'teal',   'teal'],
      ['pink',   'green',  'green',  'green',  'yellow', 'yellow'],
      ['purple', 'green',  'green',  'yellow', 'yellow', 'yellow'],
      ['purple', 'purple', 'brown',  'yellow', 'yellow', 'yellow'],
      ['purple', 'purple', 'brown',  'brown',  'brown',  'brown'],
    ],
    solution: [[0,1],[1,4],[2,0],[3,3],[4,2],[5,5]],
  },
  // Level 2 - 7x7
  {
    id: 2,
    size: 7,
    colors: ['pink', 'teal', 'green', 'yellow', 'purple', 'brown', 'magenta'],
    colorMap: [
      ['pink',   'pink',   'pink',   'teal',   'teal',   'teal',   'teal'],
      ['pink',   'pink',   'green',  'green',  'teal',   'teal',   'teal'],
      ['pink',   'green',  'green',  'green',  'yellow', 'teal',   'teal'],
      ['purple', 'green',  'green',  'yellow', 'yellow', 'yellow', 'brown'],
      ['purple', 'purple', 'magenta','yellow', 'yellow', 'brown',  'brown'],
      ['purple', 'purple', 'magenta','magenta','brown',  'brown',  'brown'],
      ['purple', 'purple', 'magenta','magenta','magenta','brown',  'brown'],
    ],
    solution: [[0,2],[1,5],[2,0],[3,3],[4,6],[5,1],[6,4]],
  },
  // Level 3 - 8x8 (similar to screenshot)
  {
    id: 3,
    size: 8,
    colors: ['pink', 'teal', 'green', 'yellow', 'purple', 'brown', 'magenta', 'darkbrown'],
    colorMap: [
      ['pink',      'pink',      'pink',      'teal',      'teal',      'teal',      'teal',      'teal'],
      ['pink',      'pink',      'green',     'green',     'pink',      'teal',      'teal',      'teal'],
      ['green',     'purple',    'green',     'green',     'yellow',    'yellow',    'teal',      'teal'],
      ['green',     'green',     'yellow',    'yellow',    'yellow',    'yellow',    'yellow',    'brown'],
      ['green',     'yellow',    'yellow',    'yellow',    'magenta',   'magenta',   'yellow',    'brown'],
      ['green',     'green',     'green',     'magenta',   'magenta',   'magenta',   'brown',     'brown'],
      ['green',     'yellow',    'yellow',    'yellow',    'magenta',   'yellow',    'yellow',    'darkbrown'],
      ['green',     'green',     'green',     'green',     'yellow',    'yellow',    'yellow',    'darkbrown'],
    ],
    solution: [[0,1],[1,5],[2,1],[3,7],[4,4],[5,0],[6,3],[7,6]],
  },
  // Level 4 - 8x8
  {
    id: 4,
    size: 8,
    colors: ['pink', 'teal', 'green', 'yellow', 'purple', 'brown', 'magenta', 'orange'],
    colorMap: [
      ['pink',   'pink',   'teal',   'teal',   'teal',   'teal',   'teal',   'teal'],
      ['pink',   'pink',   'pink',   'teal',   'teal',   'teal',   'teal',   'teal'],
      ['pink',   'green',  'green',  'green',  'yellow', 'yellow', 'teal',   'teal'],
      ['purple', 'green',  'green',  'yellow', 'yellow', 'yellow', 'yellow', 'brown'],
      ['purple', 'purple', 'green',  'yellow', 'magenta','magenta','brown',  'brown'],
      ['purple', 'purple', 'orange', 'orange', 'magenta','brown',  'brown',  'brown'],
      ['purple', 'orange', 'orange', 'orange', 'magenta','magenta','brown',  'brown'],
      ['orange', 'orange', 'orange', 'orange', 'magenta','magenta','magenta','brown'],
    ],
    solution: [[0,2],[1,6],[2,0],[3,4],[4,7],[5,1],[6,3],[7,5]],
  },
  // Level 5 - 9x9
  {
    id: 5,
    size: 9,
    colors: ['pink', 'teal', 'green', 'yellow', 'purple', 'brown', 'magenta', 'orange', 'blue'],
    colorMap: [
      ['pink',   'pink',   'pink',   'teal',   'teal',   'teal',   'teal',   'teal',   'teal'],
      ['pink',   'pink',   'green',  'green',  'teal',   'teal',   'teal',   'teal',   'teal'],
      ['pink',   'green',  'green',  'green',  'yellow', 'yellow', 'teal',   'teal',   'blue'],
      ['purple', 'green',  'green',  'yellow', 'yellow', 'yellow', 'yellow', 'blue',   'blue'],
      ['purple', 'purple', 'green',  'yellow', 'magenta','magenta','yellow', 'blue',   'blue'],
      ['purple', 'purple', 'orange', 'orange', 'magenta','brown',  'brown',  'blue',   'blue'],
      ['purple', 'orange', 'orange', 'orange', 'magenta','magenta','brown',  'brown',  'blue'],
      ['orange', 'orange', 'orange', 'orange', 'magenta','magenta','magenta','brown',  'brown'],
      ['orange', 'orange', 'orange', 'orange', 'orange', 'magenta','magenta','brown',  'brown'],
    ],
    solution: [[0,2],[1,6],[2,0],[3,4],[4,8],[5,1],[6,3],[7,5],[8,7]],
  },
];

export function checkWin(cellStates, colorMap, colors, size) {
  const catPositions = [];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (cellStates[r][c] === 'cat') {
        catPositions.push({ row: r, col: c, color: colorMap[r][c] });
      }
    }
  }

  if (catPositions.length !== colors.length) return false;

  const usedColors = new Set(catPositions.map(p => p.color));
  if (usedColors.size !== colors.length) return false;

  const rows = catPositions.map(p => p.row);
  if (new Set(rows).size !== colors.length) return false;

  const cols = catPositions.map(p => p.col);
  if (new Set(cols).size !== colors.length) return false;

  for (let i = 0; i < catPositions.length; i++) {
    for (let j = i + 1; j < catPositions.length; j++) {
      const dr = Math.abs(catPositions[i].row - catPositions[j].row);
      const dc = Math.abs(catPositions[i].col - catPositions[j].col);
      if (dr <= 1 && dc <= 1) return false;
    }
  }

  return true;
}

export function getConflicts(cellStates, size) {
  const catPositions = [];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (cellStates[r][c] === 'cat') {
        catPositions.push([r, c]);
      }
    }
  }

  const conflictSet = new Set();
  for (let i = 0; i < catPositions.length; i++) {
    for (let j = i + 1; j < catPositions.length; j++) {
      const [r1, c1] = catPositions[i];
      const [r2, c2] = catPositions[j];
      const dr = Math.abs(r1 - r2);
      const dc = Math.abs(c1 - c2);
      if (r1 === r2 || c1 === c2 || (dr <= 1 && dc <= 1)) {
        conflictSet.add(`${r1},${c1}`);
        conflictSet.add(`${r2},${c2}`);
      }
    }
  }
  return conflictSet;
}
