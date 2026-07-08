// Pre-resolved image URLs from strk-img-config.json
// Used for components where the strk-img plugin can't statically resolve
// data-strk-img attributes (e.g., ProductCard receiving dynamic props).

import config from '@/strk-img-config.json';

const resolvedConfig = config.default || config;

const imageMap = {};
for (const [key, entry] of Object.entries(resolvedConfig)) {
  if (entry?.results?.length > 0) {
    imageMap[key] = entry.results[0].url;
  }
}

export default imageMap;
