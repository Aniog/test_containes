// Sudoku puzzle library with pre-seeded puzzles and a fast runtime generator

export const DIFFICULTIES = {
  EASY: { name: 'EASY' },
  MEDIUM: { name: 'MEDIUM' },
  HARD: { name: 'HARD' },
  EXPERT: { name: 'EXPERT' },
};

// Each entry: [puzzleString, solutionString] — 81 chars, 0 = empty
const PUZZLE_BANK = {
  EASY: [
    ['530070000600195000098000060800060003400803001700020006060000280000419005000080079',
     '534678912672195348198342567859761423426853791713924856961537284287419635345286179'],
    ['200080300060070084030500209000105408000000000402706000301007040720040060004010003',
     '241986375569273184738541269697125438815394726423768951356817942172439867984652313'],
    ['000000907000420180000705026100904000050000040000507009920108000034059000507000000',
     '162348957375426189849715326126934875953871642784562913291187534438259761517693248'],
  ],
  MEDIUM: [
    ['010020300004005060070000008006900070000800000080007600900000030050700900003010050',
     '815426397294385761673219548136954872742831659589647623967592134451768923328173456'],
    ['000000000000003085001020000000507000004000100090000000500000073002010000000040009',
     '987654321246173985351928746128537694634892157795461832519286473472319568863745219'],
    ['200300000008020000000000050040000700000102000003000060070000000000080900000007004',
     '261345897538629471794817253145963782679182345823574169317496528456238917982751634'],
  ],
  HARD: [
    ['800000000003600000070090200060005300004000080300000000000809000400000070000200600',
     '812753649943682175675491283168945372294137586357268491521876934486319257739524618'],
    ['000000010400000000020000000000050407008000300001090000300400200050100000000806000',
     '693784512487512936125963874932651487568247391741398625319475268856129743274836159'],
    ['000600400700003600000091080000000000050180003000306045040200060903000000007000800',
     '581672439792843651364591782438957216256184973179326845845219367913768524627435198'],
  ],
  EXPERT: [
    ['800000000003600000070090200060005300004000080300000000000809000400000070000200600',
     '812753649943682175675491283168945372294137586357268491521876934486319257739524618'],
    ['000000010400000000020000000000050407008000300001090000300400200050100000000806000',
     '693784512487512936125963874932651487568247391741398625319475268856129743274836159'],
    ['060000000000800000000030000000000700500010000000000030000000060000000000000000000',
     '962571348371846295845932617234689751597213486618754932783495126456127839129368574'],
    ['000000000000003085001020000000507000004000100090000000500000073002010000000040009',
     '987654321246173985351928746128537694634892157795461832519286473472319568863745219'],
    ['100007090030020008009600500005300900010080002600004000300000010040000007007000300',
     '162857493534129678789643521475312986913586742628794135356478219241935867897261354'],
  ],
};

function parseGrid(str) {
  const grid = [];
  for (let r = 0; r < 9; r++) {
    grid.push(str.slice(r * 9, r * 9 + 9).split('').map(Number));
  }
  return grid;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Rotate/reflect the board to get variety from the same base puzzle
function transform(grid) {
  const ops = Math.floor(Math.random() * 8);
  let g = grid.map(r => [...r]);
  if (ops & 1) g = g.map(r => [...r].reverse());           // flip horizontal
  if (ops & 2) g = g[0].map((_, c) => g.map(r => r[c]));  // transpose
  if (ops & 4) g = [...g].reverse();                        // flip vertical
  return g;
}

export function generatePuzzle(difficulty = 'EXPERT') {
  const bank = PUZZLE_BANK[difficulty] || PUZZLE_BANK.EXPERT;
  const [puzzleStr, solutionStr] = bank[Math.floor(Math.random() * bank.length)];
  const puzzle = transform(parseGrid(puzzleStr));
  const solution = transform(parseGrid(solutionStr));
  // Re-sync solution to match transformed puzzle (transform both with same seed isn't guaranteed)
  // Instead, solve from the transformed puzzle
  const sol = puzzle.map(r => [...r]);
  fastSolve(sol);
  return { puzzle, solution: sol };
}

function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) return false;
    if (board[i][col] === num) return false;
  }
  const br = Math.floor(row / 3) * 3;
  const bc = Math.floor(col / 3) * 3;
  for (let r = br; r < br + 3; r++) {
    for (let c = bc; c < bc + 3; c++) {
      if (board[r][c] === num) return false;
    }
  }
  return true;
}

function fastSolve(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (fastSolve(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
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
  if (selectedRow == null || selectedCol == null) return 'none';
  if (row === selectedRow && col === selectedCol) return 'selected';
  const sameBox =
    Math.floor(row / 3) === Math.floor(selectedRow / 3) &&
    Math.floor(col / 3) === Math.floor(selectedCol / 3);
  if (row === selectedRow || col === selectedCol || sameBox) return 'related';
  const selectedVal = board[selectedRow][selectedCol];
  if (selectedVal !== 0 && board[row][col] === selectedVal) return 'same-number';
  return 'none';
}
