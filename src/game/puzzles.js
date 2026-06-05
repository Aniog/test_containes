// Puzzle definitions for the word game
// Each puzzle has letters in the wheel and a crossword grid

// Build a grid from word placements
export function buildGrid(placements, rows, cols) {
  const grid = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ letter: null, active: false, wordIndices: [] }))
  );

  placements.forEach((placement, idx) => {
    const { word, row, col, direction } = placement;
    for (let i = 0; i < word.length; i++) {
      const r = direction === 'down' ? row + i : row;
      const c = direction === 'across' ? col + i : col;
      if (r >= 0 && r < rows && c >= 0 && c < cols) {
        grid[r][c].letter = word[i];
        grid[r][c].active = true;
        grid[r][c].wordIndices.push(idx);
      }
    }
  });

  return grid;
}

// Check if a word can be formed from the given letters (each letter used at most once)
export function canFormWord(word, letters) {
  const available = [...letters.map(l => l.toUpperCase())];
  for (const ch of word.toUpperCase()) {
    const idx = available.indexOf(ch);
    if (idx === -1) return false;
    available.splice(idx, 1);
  }
  return true;
}

export const PUZZLES = [
  {
    id: 1,
    title: 'Forest Friends',
    levelLabel: 'Level 1',
    letters: ['W', 'O', 'L', 'F', 'S'],
    gridRows: 7,
    gridCols: 7,
    placements: [
      { word: 'OWL',  row: 0, col: 2, direction: 'across' },
      { word: 'WOLF', row: 0, col: 3, direction: 'down'   },
      { word: 'SOW',  row: 0, col: 5, direction: 'down'   },
      { word: 'LOW',  row: 2, col: 3, direction: 'across' },
      { word: 'FOWL', row: 3, col: 3, direction: 'across' },
      { word: 'FLOW', row: 3, col: 3, direction: 'down'   },
    ],
    bonusWords: ['FOWLS', 'SLOW', 'OWS', 'WOLS'],
    allValidWords: ['OWL', 'WOLF', 'SOW', 'LOW', 'FOWL', 'FLOW', 'SLOW', 'FOWLS'],
  },
  {
    id: 2,
    title: 'Ocean Waves',
    levelLabel: 'Level 2',
    letters: ['S', 'E', 'A', 'T', 'R'],
    gridRows: 7,
    gridCols: 7,
    placements: [
      { word: 'SEA',  row: 0, col: 2, direction: 'across' },
      { word: 'STAR', row: 0, col: 2, direction: 'down'   },
      { word: 'TEAR', row: 1, col: 2, direction: 'across' },
      { word: 'ATE',  row: 2, col: 2, direction: 'across' },
      { word: 'RATE', row: 1, col: 5, direction: 'down'   },
      { word: 'SEAT', row: 4, col: 2, direction: 'across' },
    ],
    bonusWords: ['EAT', 'EAR', 'ERA', 'EARS', 'EATS', 'TARE', 'ARES', 'SEAR', 'TEAS', 'ERAS', 'RATS', 'TARS', 'ARTS'],
    allValidWords: ['SEA', 'STAR', 'TEAR', 'ATE', 'RATE', 'SEAT', 'EAT', 'EAR', 'ERA', 'EARS', 'EATS', 'TARE', 'ARES', 'SEAR', 'TEAS', 'ERAS', 'RATS', 'TARS', 'ARTS'],
  },
  {
    id: 3,
    title: 'Garden Bloom',
    levelLabel: 'Level 3',
    letters: ['R', 'O', 'S', 'E', 'P'],
    gridRows: 7,
    gridCols: 7,
    placements: [
      { word: 'ROSE',  row: 0, col: 2, direction: 'across' },
      { word: 'ROPE',  row: 0, col: 2, direction: 'down'   },
      { word: 'PROSE', row: 2, col: 2, direction: 'across' },
      { word: 'SPORE', row: 0, col: 4, direction: 'down'   },
      { word: 'PORE',  row: 4, col: 2, direction: 'across' },
      { word: 'REPOS', row: 2, col: 5, direction: 'down'   },
    ],
    bonusWords: ['POSE', 'PORES', 'ROPES', 'REPO', 'SORE', 'ORES', 'ROES', 'PROS'],
    allValidWords: ['ROSE', 'ROPE', 'PROSE', 'SPORE', 'PORE', 'REPOS', 'POSE', 'PORES', 'ROPES', 'REPO', 'SORE', 'ORES', 'ROES', 'PROS'],
  },
  {
    id: 4,
    title: 'Night Sky',
    levelLabel: 'Level 4',
    letters: ['S', 'T', 'A', 'R', 'S'],
    gridRows: 7,
    gridCols: 7,
    placements: [
      { word: 'STAR', row: 0, col: 2, direction: 'across' },
      { word: 'STAR', row: 0, col: 2, direction: 'down'   },
      { word: 'ART',  row: 0, col: 4, direction: 'down'   },
      { word: 'ARTS', row: 2, col: 2, direction: 'across' },
      { word: 'RATS', row: 2, col: 3, direction: 'down'   },
      { word: 'TARS', row: 4, col: 2, direction: 'across' },
    ],
    bonusWords: ['TAR', 'RAT', 'SAT', 'STARS', 'TSAR'],
    allValidWords: ['STAR', 'ART', 'ARTS', 'RATS', 'TARS', 'TAR', 'RAT', 'SAT', 'STARS', 'TSAR'],
  },
  {
    id: 5,
    title: 'Mountain Peak',
    levelLabel: 'Level 5',
    letters: ['C', 'L', 'O', 'U', 'D'],
    gridRows: 7,
    gridCols: 7,
    placements: [
      { word: 'CLOUD', row: 0, col: 1, direction: 'across' },
      { word: 'COLD',  row: 0, col: 1, direction: 'down'   },
      { word: 'LOUD',  row: 0, col: 2, direction: 'down'   },
      { word: 'OLD',   row: 1, col: 1, direction: 'across' },
      { word: 'DUO',   row: 3, col: 2, direction: 'across' },
      { word: 'COD',   row: 1, col: 3, direction: 'down'   },
    ],
    bonusWords: ['OUD', 'COULD', 'CLODS', 'DOC', 'CUD'],
    allValidWords: ['CLOUD', 'COLD', 'LOUD', 'OLD', 'DUO', 'COD', 'OUD', 'COULD', 'CLODS', 'DOC', 'CUD'],
  },
];
