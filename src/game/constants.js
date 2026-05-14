export const CHUNK_SIZE = 16;
export const WORLD_HEIGHT = 64;
export const RENDER_DISTANCE = 3;

export const BLOCKS = {
  AIR: 0,
  GRASS: 1,
  DIRT: 2,
  STONE: 3,
  SAND: 4,
  WOOD: 5,
  LEAVES: 6,
  WATER: 7,
  SNOW: 8,
  GRAVEL: 9,
};

export const BLOCK_NAMES = {
  [BLOCKS.GRASS]: 'Grass',
  [BLOCKS.DIRT]: 'Dirt',
  [BLOCKS.STONE]: 'Stone',
  [BLOCKS.SAND]: 'Sand',
  [BLOCKS.WOOD]: 'Wood',
  [BLOCKS.LEAVES]: 'Leaves',
  [BLOCKS.WATER]: 'Water',
  [BLOCKS.SNOW]: 'Snow',
  [BLOCKS.GRAVEL]: 'Gravel',
};

// [top, side, bottom] as hex integers
export const BLOCK_FACE_COLORS = {
  [BLOCKS.GRASS]:  [0x5d9e2a, 0x8b6914, 0x7a5c10],
  [BLOCKS.DIRT]:   [0x7a5c10, 0x7a5c10, 0x7a5c10],
  [BLOCKS.STONE]:  [0x888888, 0x888888, 0x888888],
  [BLOCKS.SAND]:   [0xd4c07a, 0xd4c07a, 0xd4c07a],
  [BLOCKS.WOOD]:   [0x6b4c1e, 0x8b5e3c, 0x6b4c1e],
  [BLOCKS.LEAVES]: [0x2d7a1f, 0x2d7a1f, 0x2d7a1f],
  [BLOCKS.WATER]:  [0x1a6b9a, 0x1a6b9a, 0x1a6b9a],
  [BLOCKS.SNOW]:   [0xeef0f0, 0xdde0e0, 0xdde0e0],
  [BLOCKS.GRAVEL]: [0x9a9090, 0x9a9090, 0x9a9090],
};

export const HOTBAR = [
  BLOCKS.GRASS,
  BLOCKS.DIRT,
  BLOCKS.STONE,
  BLOCKS.SAND,
  BLOCKS.WOOD,
  BLOCKS.LEAVES,
  BLOCKS.GRAVEL,
  BLOCKS.SNOW,
  BLOCKS.WATER,
];

export const PLAYER_SPEED = 5.0;
export const SPRINT_MULTIPLIER = 1.6;
export const JUMP_FORCE = 8.0;
export const GRAVITY = -20.0;
export const PLAYER_HEIGHT = 1.8;
export const PLAYER_WIDTH = 0.6;
export const REACH = 5.0;
