#!/usr/bin/env node
/**
 * populate-product-images.mjs
 *
 * The vite-plugin-strk-img plugin can only see data-strk-img-id / data-strk-img
 * attributes that exist as string literals in the source it parses. Our
 * ProductCard / CartDrawer / ProductDetail render these attributes from
 * `product.images[0].id` etc., so the plugin cannot statically discover them
 * and leaves the corresponding slots unresolved.
 *
 * This script does that discovery and pre-resolves the image entries by
 * calling the Strikingly AI image-search API directly, then merges the
 * results into `src/strk-img-config.json`. The runtime `ImageHelper.loadImages`
 * only reads from the JSON, so the images will appear at runtime.
 *
 * It runs against the same env vars as the plugin (STRIKINGLY_IMAGES_API_KEY,
 * STRIKINGLY_IMAGES_API_URL).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const ROOT       = path.resolve(__dirname, '..');

// --- Load env (same priority as the plugin: .env.local > .env) ---
for (const name of ['.env.local', '.env']) {
  const p = path.resolve(ROOT, name);
  if (!fs.existsSync(p)) continue;
  for (const raw of fs.readFileSync(p, 'utf-8').split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val  = line.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1);
    if (key && !(key in process.env)) process.env[key] = val;
  }
}

const API_KEY = process.env.STRIKINGLY_IMAGES_API_KEY;
const ENDPOINT = process.env.STRIKINGLY_IMAGES_API_URL ||
  'https://ai-builder.strikingly.com/images/search';

if (!API_KEY || API_KEY === 'your_key_here') {
  console.error('[populate-product-images] STRIKINGLY_IMAGES_API_KEY not set — skipping.');
  process.exit(0);
}

// --- Load product data ---
const productsModule = await import(path.resolve(ROOT, 'src/data/products.js'));
const products = productsModule.PRODUCTS;

// --- Load existing config ---
// The Vite plugin writes a flat object: each imgId is a top-level key, plus
// the bookkeeping keys `config` and `entries`. The runtime helper
// (`ImageHelper.loadImages`) reads `e[imgId]` where `e` is this whole object,
// so we must preserve the top-level imgId entries and add the product ones
// at the same level.
const configPath = path.resolve(ROOT, 'src/strk-img-config.json');
const config = fs.existsSync(configPath)
  ? JSON.parse(fs.readFileSync(configPath, 'utf-8'))
  : {};

// The "entries" array is the plugin's internal record; the runtime uses
// the flat imgId keys. We maintain the entries array so the plugin stays
// consistent on the next incremental update.
if (!config.entries) config.entries = [];

// Build a Set of ids already in the config.
const existingIds = new Set();
for (const key of Object.keys(config)) {
  if (key === 'config' || key === 'entries') continue;
  existingIds.add(key);
}

// Collect every product-image slot that isn't yet in the config.
const wanted = [];
for (const product of products) {
  for (const img of product.images) {
    if (!existingIds.has(img.id)) {
      wanted.push({ id: img.id, query: img.query, ratio: img.ratio, width: img.width });
    }
  }
}

if (wanted.length === 0) {
  console.log('[populate-product-images] All product image entries already in config.');
  process.exit(0);
}

console.log(`[populate-product-images] Fetching ${wanted.length} product image entries…`);

async function fetchImages(query, limit = 10) {
  const data = { query, image_type: 'landscape', limit, ar_range: '1.0,1.0' };
  const payload = { event_type: 'images_search_detail', data };
  let res;
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Api-Key': API_KEY },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    console.warn('[populate-product-images] network error:', e.message);
    return [];
  }
  if (!res.ok) {
    const t = await res.text().catch(() => '');
    console.warn(`[populate-product-images] ${res.status} for "${query}": ${t.slice(0, 120)}`);
    return [];
  }
  let json;
  try { json = await res.json(); } catch { return []; }
  if (!json || json.code !== 200) return [];
  return (Array.isArray(json.list) ? json.list : [])
    .filter((p) => p && p.photo_url)
    .map((p) => ({
      id:          String(p.id),
      url:         p.photo_url,
      alt:         query,
      aspectRatio: p.photo_aspect_ratio,
    }));
}

const CONCURRENCY = 4;
const usedIds = new Set(
  config.entries.flatMap((e) => (e.results || []).map((r) => String(r.id)))
);

let cursor = 0;
let addedCount = 0;

async function worker() {
  while (cursor < wanted.length) {
    const idx = cursor++;
    const slot = wanted[idx];
    const results = await fetchImages(slot.query, 10);
    if (results.length === 0) {
      console.warn(`[populate-product-images] no results for "${slot.query}"`);
      continue;
    }
    const picked =
      results.find((r) => !usedIds.has(r.id)) || results[0];
    if (picked) usedIds.add(String(picked.id));

    // The runtime helper reads e[imgId] where e is the whole JSON. So the
    // imgId must be a top-level key, NOT nested under `config`. Mirror the
    // plugin's shape: a flat entry with `query`, `results`, `picked`.
    const entry = {
      query:   slot.query,
      ratio:   slot.ratio,
      width:   slot.width,
      results,
      picked:  picked.id,
      cached:  true,
    };
    config[slot.id] = entry;

    // Keep the bookkeeping `entries` array in sync (the plugin uses it to
    // avoid re-fetching on the next incremental run).
    const existingEntry = config.entries.find((e) => e.imgId === slot.id);
    if (existingEntry) {
      existingEntry.query   = slot.query;
      existingEntry.ratio   = slot.ratio;
      existingEntry.width   = slot.width;
      existingEntry.results = results;
      existingEntry.picked  = picked.id;
    } else {
      config.entries.push({
        imgId:   slot.id,
        kind:    'img',
        query:   slot.query,
        ratio:   slot.ratio,
        width:   slot.width,
        results,
        picked:  picked.id,
      });
    }
    addedCount++;
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));

fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
console.log(`[populate-product-images] added/updated ${addedCount} entries; config now has ${config.entries.length} total.`);
