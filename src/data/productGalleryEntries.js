// Flat list of gallery image entries for all products, with STATIC IDs.
// The strk-img Vite plugin extracts entries from `.map(...)` over statically
// known arrays, so flattening lets the plugin discover every gallery slot.
// `productId` is matched at runtime to pick the right 4 entries per product.
export const productGalleryEntries = [
  // Vivid Aura Jewels
  {
    productId: 'vivid-aura-jewels',
    thumbId: 'gallery-vivid-aura-1-thumb',
    mainId: 'gallery-vivid-aura-1-main',
    query: 'minimalist gold ear cuff with single crystal on warm dark editorial background closeup',
  },
  {
    productId: 'vivid-aura-jewels',
    thumbId: 'gallery-vivid-aura-2-thumb',
    mainId: 'gallery-vivid-aura-2-main',
    query: 'gold ear cuff worn on model ear warm light editorial portrait',
  },
  {
    productId: 'vivid-aura-jewels',
    thumbId: 'gallery-vivid-aura-3-thumb',
    mainId: 'gallery-vivid-aura-3-main',
    query: 'gold ear cuff detail closeup luxury jewelry editorial warm flat lay cream linen',
  },
  {
    productId: 'vivid-aura-jewels',
    thumbId: 'gallery-vivid-aura-4-thumb',
    mainId: 'gallery-vivid-aura-4-main',
    query: 'gold ear cuff styled on model warm side light editorial portrait soft focus',
  },
  // Majestic Flora Nectar
  {
    productId: 'majestic-flora-nectar',
    thumbId: 'gallery-majestic-flora-1-thumb',
    mainId: 'gallery-majestic-flora-1-main',
    query: 'delicate gold floral pendant necklace with multicolor crystals on warm beige editorial flatlay',
  },
  {
    productId: 'majestic-flora-nectar',
    thumbId: 'gallery-majestic-flora-2-thumb',
    mainId: 'gallery-majestic-flora-2-main',
    query: 'gold floral crystal necklace worn on neck warm soft editorial portrait',
  },
  {
    productId: 'majestic-flora-nectar',
    thumbId: 'gallery-majestic-flora-3-thumb',
    mainId: 'gallery-majestic-flora-3-main',
    query: 'multicolor crystal floral pendant detail macro luxury jewelry editorial warm cream',
  },
  {
    productId: 'majestic-flora-nectar',
    thumbId: 'gallery-majestic-flora-4-thumb',
    mainId: 'gallery-majestic-flora-4-main',
    query: 'gold floral necklace styled on woman in beige knit warm light editorial portrait',
  },
  // Golden Sphere Huggies
  {
    productId: 'golden-sphere-huggies',
    thumbId: 'gallery-golden-sphere-1-thumb',
    mainId: 'gallery-golden-sphere-1-main',
    query: 'chunky polished gold dome huggie hoop earrings closeup on warm cream marble',
  },
  {
    productId: 'golden-sphere-huggies',
    thumbId: 'gallery-golden-sphere-2-thumb',
    mainId: 'gallery-golden-sphere-2-main',
    query: 'gold dome huggie hoops worn on model ear soft warm light',
  },
  {
    productId: 'golden-sphere-huggies',
    thumbId: 'gallery-golden-sphere-3-thumb',
    mainId: 'gallery-golden-sphere-3-main',
    query: 'pair of polished gold dome huggie earrings macro detail luxury editorial flat lay warm',
  },
  {
    productId: 'golden-sphere-huggies',
    thumbId: 'gallery-golden-sphere-4-thumb',
    mainId: 'gallery-golden-sphere-4-main',
    query: 'gold dome hoop earrings styled on model in linen shirt warm soft editorial portrait',
  },
  // Amber Lace Earrings
  {
    productId: 'amber-lace-earrings',
    thumbId: 'gallery-amber-lace-1-thumb',
    mainId: 'gallery-amber-lace-1-main',
    query: 'textured gold filigree drop earrings warm amber light editorial closeup',
  },
  {
    productId: 'amber-lace-earrings',
    thumbId: 'gallery-amber-lace-2-thumb',
    mainId: 'gallery-amber-lace-2-main',
    query: 'gold filigree drop earrings worn on model ear warm side light',
  },
  {
    productId: 'amber-lace-earrings',
    thumbId: 'gallery-amber-lace-3-thumb',
    mainId: 'gallery-amber-lace-3-main',
    query: 'pair of vintage style gold filigree drop earrings on warm linen luxury editorial flat lay',
  },
  {
    productId: 'amber-lace-earrings',
    thumbId: 'gallery-amber-lace-4-thumb',
    mainId: 'gallery-amber-lace-4-main',
    query: 'gold lace drop earrings styled on model in evening light warm editorial portrait',
  },
  // Royal Heirloom Set
  {
    productId: 'royal-heirloom-set',
    thumbId: 'gallery-royal-heirloom-1-thumb',
    mainId: 'gallery-royal-heirloom-1-main',
    query: 'luxury gold earring and necklace gift set in cream keepsake jewelry box warm editorial',
  },
  {
    productId: 'royal-heirloom-set',
    thumbId: 'gallery-royal-heirloom-2-thumb',
    mainId: 'gallery-royal-heirloom-2-main',
    query: 'gold jewelry gift set styled on warm linen with ribbon editorial flatlay',
  },
  {
    productId: 'royal-heirloom-set',
    thumbId: 'gallery-royal-heirloom-3-thumb',
    mainId: 'gallery-royal-heirloom-3-main',
    query: 'matching gold drop earrings and pendant necklace open jewelry box luxury warm editorial',
  },
  {
    productId: 'royal-heirloom-set',
    thumbId: 'gallery-royal-heirloom-4-thumb',
    mainId: 'gallery-royal-heirloom-4-main',
    query: 'woman opening luxury gold jewelry gift box warm soft editorial portrait',
  },
];
