// Per-product gallery image definitions with STATIC IDs (required by the
// strk-img build-time plugin which does not resolve template literals).
// Each gallery slot has separate `thumbId` and `mainId` so the same query
// can be rendered in two distinct DOM nodes (thumbnail + large image).
export const productGalleries = {
  'vivid-aura-jewels': [
    {
      thumbId: 'gallery-vivid-aura-1-thumb',
      mainId: 'gallery-vivid-aura-1-main',
      query: 'minimalist gold ear cuff with single crystal on warm dark editorial background closeup',
    },
    {
      thumbId: 'gallery-vivid-aura-2-thumb',
      mainId: 'gallery-vivid-aura-2-main',
      query: 'gold ear cuff worn on model ear warm light editorial portrait',
    },
    {
      thumbId: 'gallery-vivid-aura-3-thumb',
      mainId: 'gallery-vivid-aura-3-main',
      query: 'gold ear cuff detail closeup luxury jewelry editorial warm flat lay cream linen',
    },
    {
      thumbId: 'gallery-vivid-aura-4-thumb',
      mainId: 'gallery-vivid-aura-4-main',
      query: 'gold ear cuff styled on model warm side light editorial portrait soft focus',
    },
  ],
  'majestic-flora-nectar': [
    {
      thumbId: 'gallery-majestic-flora-1-thumb',
      mainId: 'gallery-majestic-flora-1-main',
      query: 'delicate gold floral pendant necklace with multicolor crystals on warm beige editorial flatlay',
    },
    {
      thumbId: 'gallery-majestic-flora-2-thumb',
      mainId: 'gallery-majestic-flora-2-main',
      query: 'gold floral crystal necklace worn on neck warm soft editorial portrait',
    },
    {
      thumbId: 'gallery-majestic-flora-3-thumb',
      mainId: 'gallery-majestic-flora-3-main',
      query: 'multicolor crystal floral pendant detail macro luxury jewelry editorial warm cream',
    },
    {
      thumbId: 'gallery-majestic-flora-4-thumb',
      mainId: 'gallery-majestic-flora-4-main',
      query: 'gold floral necklace styled on woman in beige knit warm light editorial portrait',
    },
  ],
  'golden-sphere-huggies': [
    {
      thumbId: 'gallery-golden-sphere-1-thumb',
      mainId: 'gallery-golden-sphere-1-main',
      query: 'chunky polished gold dome huggie hoop earrings closeup on warm cream marble',
    },
    {
      thumbId: 'gallery-golden-sphere-2-thumb',
      mainId: 'gallery-golden-sphere-2-main',
      query: 'gold dome huggie hoops worn on model ear soft warm light',
    },
    {
      thumbId: 'gallery-golden-sphere-3-thumb',
      mainId: 'gallery-golden-sphere-3-main',
      query: 'pair of polished gold dome huggie earrings macro detail luxury editorial flat lay warm',
    },
    {
      thumbId: 'gallery-golden-sphere-4-thumb',
      mainId: 'gallery-golden-sphere-4-main',
      query: 'gold dome hoop earrings styled on model in linen shirt warm soft editorial portrait',
    },
  ],
  'amber-lace-earrings': [
    {
      thumbId: 'gallery-amber-lace-1-thumb',
      mainId: 'gallery-amber-lace-1-main',
      query: 'textured gold filigree drop earrings warm amber light editorial closeup',
    },
    {
      thumbId: 'gallery-amber-lace-2-thumb',
      mainId: 'gallery-amber-lace-2-main',
      query: 'gold filigree drop earrings worn on model ear warm side light',
    },
    {
      thumbId: 'gallery-amber-lace-3-thumb',
      mainId: 'gallery-amber-lace-3-main',
      query: 'pair of vintage style gold filigree drop earrings on warm linen luxury editorial flat lay',
    },
    {
      thumbId: 'gallery-amber-lace-4-thumb',
      mainId: 'gallery-amber-lace-4-main',
      query: 'gold lace drop earrings styled on model in evening light warm editorial portrait',
    },
  ],
  'royal-heirloom-set': [
    {
      thumbId: 'gallery-royal-heirloom-1-thumb',
      mainId: 'gallery-royal-heirloom-1-main',
      query: 'luxury gold earring and necklace gift set in cream keepsake jewelry box warm editorial',
    },
    {
      thumbId: 'gallery-royal-heirloom-2-thumb',
      mainId: 'gallery-royal-heirloom-2-main',
      query: 'gold jewelry gift set styled on warm linen with ribbon editorial flatlay',
    },
    {
      thumbId: 'gallery-royal-heirloom-3-thumb',
      mainId: 'gallery-royal-heirloom-3-main',
      query: 'matching gold drop earrings and pendant necklace open jewelry box luxury warm editorial',
    },
    {
      thumbId: 'gallery-royal-heirloom-4-thumb',
      mainId: 'gallery-royal-heirloom-4-main',
      query: 'woman opening luxury gold jewelry gift box warm soft editorial portrait',
    },
  ],
};
