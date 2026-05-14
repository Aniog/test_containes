import { createNoise2D } from 'simplex-noise';
import { BLOCKS, CHUNK_SIZE, WORLD_HEIGHT } from './constants.js';

const noise2D = createNoise2D();

function octaveNoise(x, z, octaves, persistence, lacunarity, scale) {
  let value = 0;
  let amplitude = 1;
  let frequency = 1;
  let maxValue = 0;
  for (let i = 0; i < octaves; i++) {
    value += noise2D(x * frequency / scale, z * frequency / scale) * amplitude;
    maxValue += amplitude;
    amplitude *= persistence;
    frequency *= lacunarity;
  }
  return value / maxValue;
}

function getTerrainHeight(wx, wz) {
  const base = octaveNoise(wx, wz, 4, 0.5, 2.0, 120) * 0.5 + 0.5;
  const detail = octaveNoise(wx + 1000, wz + 1000, 2, 0.5, 2.0, 40) * 0.5 + 0.5;
  return Math.floor(8 + base * 28 + detail * 6);
}

export function generateChunk(cx, cz) {
  const data = new Uint8Array(CHUNK_SIZE * WORLD_HEIGHT * CHUNK_SIZE);

  const idx = (lx, y, lz) => lx + CHUNK_SIZE * (y + WORLD_HEIGHT * lz);

  for (let lx = 0; lx < CHUNK_SIZE; lx++) {
    for (let lz = 0; lz < CHUNK_SIZE; lz++) {
      const wx = cx * CHUNK_SIZE + lx;
      const wz = cz * CHUNK_SIZE + lz;
      const h = getTerrainHeight(wx, wz);

      for (let y = 0; y < WORLD_HEIGHT; y++) {
        let block = BLOCKS.AIR;
        if (y === 0) {
          block = BLOCKS.STONE;
        } else if (y < h - 3) {
          block = BLOCKS.STONE;
        } else if (y < h) {
          block = BLOCKS.DIRT;
        } else if (y === h) {
          block = h < 12 ? BLOCKS.SAND : (h > 38 ? BLOCKS.SNOW : BLOCKS.GRASS);
        }
        data[idx(lx, y, lz)] = block;
      }

      // Trees on grass
      if (h >= 12 && h <= 38) {
        const treeNoise = noise2D(wx * 0.3, wz * 0.3);
        if (treeNoise > 0.72) {
          const trunkH = 4 + Math.floor(Math.abs(noise2D(wx * 2, wz * 2)) * 2);
          for (let ty = h + 1; ty <= h + trunkH && ty < WORLD_HEIGHT; ty++) {
            data[idx(lx, ty, lz)] = BLOCKS.WOOD;
          }
          const leafY = h + trunkH;
          for (let ly = leafY - 1; ly <= leafY + 1; ly++) {
            for (let llx = -2; llx <= 2; llx++) {
              for (let llz = -2; llz <= 2; llz++) {
                if (Math.abs(llx) === 2 && Math.abs(llz) === 2) continue;
                const nlx = lx + llx;
                const nlz = lz + llz;
                if (nlx >= 0 && nlx < CHUNK_SIZE && nlz >= 0 && nlz < CHUNK_SIZE && ly < WORLD_HEIGHT) {
                  if (data[idx(nlx, ly, nlz)] === BLOCKS.AIR) {
                    data[idx(nlx, ly, nlz)] = BLOCKS.LEAVES;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return data;
}

export function getSpawnHeight(world) {
  const h = getTerrainHeight(0, 0);
  return h + 2;
}

export function getBlockInChunk(data, lx, y, lz) {
  if (lx < 0 || lx >= CHUNK_SIZE || y < 0 || y >= WORLD_HEIGHT || lz < 0 || lz >= CHUNK_SIZE) {
    return BLOCKS.AIR;
  }
  return data[lx + CHUNK_SIZE * (y + WORLD_HEIGHT * lz)];
}

export function setBlockInChunk(data, lx, y, lz, block) {
  if (lx < 0 || lx >= CHUNK_SIZE || y < 0 || y >= WORLD_HEIGHT || lz < 0 || lz >= CHUNK_SIZE) return;
  data[lx + CHUNK_SIZE * (y + WORLD_HEIGHT * lz)] = block;
}

export function chunkKey(cx, cz) {
  return `${cx},${cz}`;
}

export function worldToChunk(wx, wz) {
  return [Math.floor(wx / CHUNK_SIZE), Math.floor(wz / CHUNK_SIZE)];
}

export function worldToLocal(wx, wz) {
  return [
    ((wx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE,
    ((wz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE,
  ];
}
