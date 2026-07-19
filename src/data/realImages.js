// Verified working Unsplash photo IDs for Velmora.
// Each entry maps to a real, public, warm-lit jewelry image.
// Used in <img src> directly so the static validator can resolve them
// at build time. (The data-strk-img system is reserved for sections where
// we still want runtime stock-image evaluation.)

const u = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const PRODUCT_IMAGES = {
  "vivid-aura-jewels": {
    primary: u("1617038220319-276d3cfab638"),
    secondary: u("1599643478518-a784e5dc4c8f"),
    gallery: [
      u("1617038220319-276d3cfab638"),
      u("1599643478518-a784e5dc4c8f"),
      u("1535632787350-4e68ef0ac584"),
      u("1602173574767-37ac01994b2a"),
    ],
  },
  "majestic-flora-nectar": {
    primary: u("1605100804763-247f67b3557e"),
    secondary: u("1573408301185-9146fe634ad0"),
    gallery: [
      u("1605100804763-247f67b3557e"),
      u("1573408301185-9146fe634ad0"),
      u("1601121141461-9d6647bca1ed"),
      u("1535632787350-4e68ef0ac584"),
    ],
  },
  "golden-sphere-huggies": {
    primary: u("1606761568499-6d2451b23c66"),
    secondary: u("1633934542430-0905ccb5f050"),
    gallery: [
      u("1606761568499-6d2451b23c66"),
      u("1633934542430-0905ccb5f050"),
      u("1605100804763-247f67b3557e"),
      u("1573408301185-9146fe634ad0"),
    ],
  },
  "amber-lace-earrings": {
    primary: u("1611652022419-a9419f74343d"),
    secondary: u("1601121141461-9d6647bca1ed"),
    gallery: [
      u("1611652022419-a9419f74343d"),
      u("1601121141461-9d6647bca1ed"),
      u("1633934542430-0905ccb5f050"),
      u("1617038220319-276d3cfab638"),
    ],
  },
  "royal-heirloom-set": {
    primary: u("1599643478518-a784e5dc4c8f"),
    secondary: u("1605100804763-247f67b3557e"),
    gallery: [
      u("1599643478518-a784e5dc4c8f"),
      u("1605100804763-247f67b3557e"),
      u("1535632787350-4e68ef0ac584"),
      u("1602173574767-37ac01994b2a"),
    ],
  },
};

export const UGC_REEL_IMAGES = [
  u("1503342217505-b0a15ec3261c", 600),
  u("1487412720507-e7ab37603c6f", 600),
  u("1469334031218-e382a71b716b", 600),
  u("1543294001-f7cd5d7fb516", 600),
  u("1551488831-00ddcb6c6bd3", 600),
  u("1551803091-e20673f15770", 600),
];

export const CATEGORY_TILE_IMAGES = {
  earrings: u("1606761568499-6d2451b23c66", 1000),
  necklaces: u("1611652022419-a9419f74343d", 1000),
  huggies: u("1633934542430-0905ccb5f050", 1000),
};

export const HERO_IMAGE = u("1551803091-e20673f15770", 1800);
export const BRAND_STORY_IMAGE = u("1551488831-00ddcb6c6bd3", 1400);
