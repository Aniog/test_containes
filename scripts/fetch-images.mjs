import axios from 'axios';
import fs from 'fs';

const key = process.env.UNSPLASH_ACCESS_KEY;
if (!key) { console.error('No UNSPLASH_ACCESS_KEY'); process.exit(1); }

const queries = [
  { id: 'hero', q: 'gold jewelry model close up warm light luxury' },
  { id: 'cat-earrings', q: 'gold earrings jewelry on dark background' },
  { id: 'cat-necklaces', q: 'gold necklace pendant jewelry editorial' },
  { id: 'cat-huggies', q: 'gold huggie earrings jewelry close up' },
  { id: 'story', q: 'jewelry designer hands crafting gold earrings' },
  { id: 'ugc-1', q: 'woman wearing gold earrings close up portrait' },
  { id: 'ugc-2', q: 'gold necklace on woman neck portrait' },
  { id: 'ugc-3', q: 'woman ear with gold huggie earrings' },
  { id: 'ugc-4', q: 'gold jewelry ear cuff on model' },
  { id: 'ugc-5', q: 'woman wearing layered gold necklaces' },
  { id: 'product-1', q: 'gold ear cuff crystal jewelry dark background' },
  { id: 'product-2', q: 'multicolor crystal floral necklace gold jewelry' },
  { id: 'product-3', q: 'chunky gold dome huggie earrings jewelry' },
  { id: 'product-4', q: 'gold filigree drop earrings jewelry dark background' },
  { id: 'product-5', q: 'gold jewelry gift box earring necklace set' },
  { id: 'product-6', q: 'gold hoop earrings minimal jewelry dark background' },
  { id: 'product-7', q: 'dainty gold chain necklace jewelry' },
  { id: 'product-8', q: 'gold stud earrings gemstone jewelry' },
];

const results = {};
for (const { id, q } of queries) {
  try {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: q, per_page: 3, orientation: id.startsWith('ugc') ? 'portrait' : 'squarish' },
      headers: { Authorization: `Client-ID ${key}` },
    });
    const imgs = res.data.results.slice(0, 2).map(img => ({
      id: img.id,
      url: img.urls.raw,
      alt: img.alt_description || q,
    }));
    results[id] = imgs;
    console.log(id, imgs.length);
  } catch (e) {
    console.error('fail', id, e.response?.status, e.message);
  }
}

fs.writeFileSync('tmp/image-results.json', JSON.stringify(results, null, 2));
console.log('written tmp/image-results.json');
