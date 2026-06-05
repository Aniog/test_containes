// Each level defines:
// - letters: available letters on the wheel
// - words: target words to find
// - grid: crossword layout (row, col, direction, word)
// - bonusWords: extra valid words (not required but give bonus points)

export const LEVELS = [
  {
    id: 1,
    title: "Level 1",
    letters: ["F", "O", "W", "L", "S"],
    words: ["OWL", "WOLF", "FOWL", "SOW", "LOW", "OWL"],
    targetWords: ["OWL", "WOLF", "FOWL", "SOW", "LOW"],
    bonusWords: ["FLO", "SOL", "OWS"],
    grid: [
      // Each entry: { word, startRow, startCol, direction }
      { word: "OWL",  startRow: 0, startCol: 2, direction: "across" },
      { word: "WOLF", startRow: 2, startCol: 2, direction: "across" },
      { word: "FOWL", startRow: 4, startCol: 1, direction: "across" },
      { word: "SOW",  startRow: 6, startCol: 2, direction: "across" },
      { word: "LOW",  startRow: 0, startCol: 4, direction: "down"   },
    ],
  },
  {
    id: 2,
    title: "Level 2",
    letters: ["C", "A", "T", "S", "R"],
    targetWords: ["CAT", "CAR", "CATS", "SCAR", "CART", "STAR", "RATS", "ARTS"],
    bonusWords: ["ARC", "TAR", "RAT", "SAT", "ACT", "ACTS", "CARS", "TARS"],
    grid: [
      { word: "CAT",  startRow: 0, startCol: 1, direction: "across" },
      { word: "SCAR", startRow: 2, startCol: 0, direction: "across" },
      { word: "CART", startRow: 4, startCol: 1, direction: "across" },
      { word: "STAR", startRow: 6, startCol: 0, direction: "across" },
      { word: "CATS", startRow: 0, startCol: 1, direction: "down"   },
      { word: "ARTS", startRow: 2, startCol: 3, direction: "down"   },
    ],
  },
  {
    id: 3,
    title: "Level 3",
    letters: ["P", "I", "N", "E", "S"],
    targetWords: ["PIN", "PINE", "PINES", "SPIN", "SNIP", "PENS", "NIPS"],
    bonusWords: ["PEN", "NIE", "SIP", "SIN", "NIL", "INS"],
    grid: [
      { word: "PIN",   startRow: 0, startCol: 1, direction: "across" },
      { word: "PINE",  startRow: 2, startCol: 0, direction: "across" },
      { word: "SPIN",  startRow: 4, startCol: 0, direction: "across" },
      { word: "PINES", startRow: 0, startCol: 1, direction: "down"   },
      { word: "SNIP",  startRow: 4, startCol: 3, direction: "down"   },
    ],
  },
  {
    id: 4,
    title: "Level 4",
    letters: ["B", "L", "U", "E", "S"],
    targetWords: ["BLUE", "BLUES", "LUBE", "LUBES", "SLUE", "BLESS"],
    bonusWords: ["BUS", "SUB", "LUB", "ELS", "USE"],
    grid: [
      { word: "BLUE",  startRow: 0, startCol: 0, direction: "across" },
      { word: "BLUES", startRow: 2, startCol: 0, direction: "across" },
      { word: "LUBE",  startRow: 4, startCol: 1, direction: "across" },
      { word: "SLUE",  startRow: 6, startCol: 0, direction: "across" },
      { word: "BLUES", startRow: 0, startCol: 0, direction: "down"   },
    ],
  },
  {
    id: 5,
    title: "Level 5",
    letters: ["G", "O", "L", "D", "E", "N"],
    targetWords: ["GOLD", "GOLDEN", "LONG", "LONE", "LEND", "NODE", "DONE", "OGLE"],
    bonusWords: ["GOD", "DOG", "LOG", "ODE", "GEL", "LEG", "OLD", "EON", "ONE", "NOD", "DON", "END"],
    grid: [
      { word: "GOLD",   startRow: 0, startCol: 0, direction: "across" },
      { word: "GOLDEN", startRow: 2, startCol: 0, direction: "across" },
      { word: "LONG",   startRow: 4, startCol: 0, direction: "across" },
      { word: "LONE",   startRow: 6, startCol: 0, direction: "across" },
      { word: "LEND",   startRow: 0, startCol: 0, direction: "down"   },
      { word: "NODE",   startRow: 2, startCol: 3, direction: "down"   },
    ],
  },
];

// Build a flat grid map from level data
export function buildGridMap(level) {
  const cells = {}; // key: "row,col" => { letter, wordIndices: [] }

  level.grid.forEach((entry, wordIdx) => {
    const { word, startRow, startCol, direction } = entry;
    for (let i = 0; i < word.length; i++) {
      const row = direction === "across" ? startRow : startRow + i;
      const col = direction === "across" ? startCol + i : startCol;
      const key = `${row},${col}`;
      if (!cells[key]) {
        cells[key] = { letter: word[i], wordIndices: [], revealed: false };
      }
      cells[key].wordIndices.push(wordIdx);
    }
  });

  return cells;
}

// Get grid dimensions
export function getGridDimensions(gridMap) {
  let maxRow = 0, maxCol = 0;
  Object.keys(gridMap).forEach(key => {
    const [r, c] = key.split(",").map(Number);
    if (r > maxRow) maxRow = r;
    if (c > maxCol) maxCol = c;
  });
  return { rows: maxRow + 1, cols: maxCol + 1 };
}
