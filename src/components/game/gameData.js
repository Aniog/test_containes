// Tile types with emoji icons
export const TILE_TYPES = {
  GRASS: { id: 'grass', emoji: '🌿', label: '草' },
  STUMP: { id: 'stump', emoji: '🪵', label: '树桩' },
  CORN: { id: 'corn', emoji: '🌽', label: '玉米' },
  CARROT: { id: 'carrot', emoji: '🥕', label: '胡萝卜' },
  CABBAGE: { id: 'cabbage', emoji: '🥬', label: '白菜' },
  ONION: { id: 'onion', emoji: '🧅', label: '洋葱' },
  RAKE: { id: 'rake', emoji: '🍴', label: '耙子' },
  GLOVE: { id: 'glove', emoji: '🧤', label: '手套' },
  FIRE: { id: 'fire', emoji: '🔥', label: '火' },
  SCISSORS: { id: 'scissors', emoji: '✂️', label: '剪刀' },
  BUCKET: { id: 'bucket', emoji: '🪣', label: '水桶' },
  WHEAT: { id: 'wheat', emoji: '🌾', label: '麦穗' },
  MUSHROOM: { id: 'mushroom', emoji: '🍄', label: '蘑菇' },
  FLOWER: { id: 'flower', emoji: '🌸', label: '花' },
};

export const TRAY_SIZE = 7;

/**
 * Each tile: { id, type, layer, col, row }
 * layer: higher = on top
 * col, row: grid position (can be fractional for offset tiles)
 * Tiles are blocked if a higher-layer tile overlaps them
 */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeTilePool(types, count) {
  // Ensure count is multiple of 3
  const pool = [];
  while (pool.length < count) {
    pool.push(...types);
  }
  return shuffle(pool.slice(0, count));
}

// Level 1: 3x3 base + 2x2 top layer = 9 + 4 = 13 tiles
// Types: 3 types x 3 = 9 base, plus 4 top (mixed)
// Total must be divisible by 3: use 12 tiles (4 types x 3)
export function buildLevel1Tiles() {
  const types = ['grass', 'stump', 'onion', 'grass', 'stump', 'onion', 'grass', 'stump', 'onion'];
  const topTypes = shuffle(['grass', 'stump', 'onion', 'grass']);

  const tiles = [];
  let id = 0;

  // Layer 0: 3x3 grid
  const layer0 = [
    { col: 0, row: 0 }, { col: 1, row: 0 }, { col: 2, row: 0 },
    { col: 0, row: 1 }, { col: 1, row: 1 }, { col: 2, row: 1 },
    { col: 0, row: 2 }, { col: 1, row: 2 }, { col: 2, row: 2 },
  ];

  layer0.forEach((pos, i) => {
    tiles.push({ id: id++, type: types[i], layer: 0, col: pos.col, row: pos.row });
  });

  // Layer 1: 2x2 offset grid (sits on top of center 4 tiles)
  const layer1 = [
    { col: 0.5, row: 0.5 }, { col: 1.5, row: 0.5 },
    { col: 0.5, row: 1.5 }, { col: 1.5, row: 1.5 },
  ];

  layer1.forEach((pos, i) => {
    tiles.push({ id: id++, type: topTypes[i], layer: 1, col: pos.col, row: pos.row });
  });

  return tiles;
}

// Level 2: Multi-layer pyramid with more tile types
export function buildLevel2Tiles() {
  const typeList = [
    'grass', 'stump', 'corn', 'carrot', 'cabbage',
    'rake', 'glove', 'fire', 'scissors', 'wheat', 'mushroom', 'flower',
  ];

  // Layer 0: 5x5 = 25 tiles
  const layer0 = [];
  for (let r = 0; r < 5; r++)
    for (let c = 0; c < 5; c++)
      layer0.push({ col: c, row: r, layer: 0 });

  // Layer 1: 4x4 offset = 16 tiles
  const layer1 = [];
  for (let r = 0; r < 4; r++)
    for (let c = 0; c < 4; c++)
      layer1.push({ col: c + 0.5, row: r + 0.5, layer: 1 });

  // Layer 2: 3x3 = 9 tiles
  const layer2 = [];
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++)
      layer2.push({ col: c + 1, row: r + 1, layer: 2 });

  // Layer 3: 2x2 offset = 4 tiles
  const layer3 = [
    { col: 1.5, row: 1.5, layer: 3 }, { col: 2.5, row: 1.5, layer: 3 },
    { col: 1.5, row: 2.5, layer: 3 }, { col: 2.5, row: 2.5, layer: 3 },
  ];

  // Layer 4: 1 center tile
  const layer4 = [{ col: 2, row: 2, layer: 4 }];

  // Total: 25+16+9+4+1 = 55 → round down to 54 (multiple of 3)
  const allPositions = [...layer0, ...layer1, ...layer2, ...layer3, ...layer4].slice(0, 54);
  const typePool = makeTilePool(typeList, 54);

  return allPositions.map((pos, i) => ({
    id: i,
    type: typePool[i],
    layer: pos.layer,
    col: pos.col,
    row: pos.row,
  }));
}

export function generateLevel(levelNum) {
  if (levelNum === 1) return buildLevel1Tiles();
  return buildLevel2Tiles();
}

/**
 * A tile is blocked if any tile on a strictly higher layer overlaps it.
 * Overlap: centers within 1 unit in both col and row.
 */
export function isTileBlocked(tile, allTiles) {
  return allTiles.some(other => {
    if (other.layer <= tile.layer) return false;
    const dc = Math.abs(other.col - tile.col);
    const dr = Math.abs(other.row - tile.row);
    return dc < 1 && dr < 1;
  });
}
