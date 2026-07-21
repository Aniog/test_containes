// Static image manifest for the catalog. Each entry carries the literal
// strk-img IDs + queries the stock-image system resolves at build/scan time.
// Components map over this array (or the `PRODUCT_IMAGE_MAP`) so every
// data-strk-img-id stays statically traceable and lands in strk-img-config.json.
export const PRODUCT_IMAGES = [
  {
    slug: 'vivid-aura-jewels',
    mainId: 'product-vivid-aura-jewels-main',
    mainQuery:
      'gold ear cuff with crystal accent on dark elegant background, macro luxury jewelry photography',
    wornId: 'product-vivid-aura-jewels-worn',
    wornQuery:
      'woman wearing gold ear cuff close up on ear, warm editorial jewelry photography',
    detailId: 'product-vivid-aura-jewels-detail',
    detailQuery:
      'gold ear cuff with crystal accent macro detail on dark silk, luxury jewelry still life',
    styledId: 'product-vivid-aura-jewels-styled',
    styledQuery:
      'gold ear cuff flat lay with silk ribbon on warm neutral background, editorial jewelry photography',
  },
  {
    slug: 'majestic-flora-nectar',
    mainId: 'product-majestic-flora-nectar-main',
    mainQuery:
      'multicolor floral crystal gold necklace on neutral linen, editorial luxury jewelry photography',
    wornId: 'product-majestic-flora-nectar-worn',
    wornQuery:
      'woman neck wearing colorful floral crystal gold necklace, warm editorial jewelry photography',
    detailId: 'product-majestic-flora-nectar-detail',
    detailQuery:
      'multicolor crystal floral gold necklace macro detail on linen, luxury jewelry still life',
    styledId: 'product-majestic-flora-nectar-styled',
    styledQuery:
      'gold floral crystal necklace flat lay with dried flowers, warm editorial jewelry photography',
  },
  {
    slug: 'golden-sphere-huggies',
    mainId: 'product-golden-sphere-huggies-main',
    mainQuery:
      'chunky gold dome huggie earrings macro on dark warm background, luxury jewelry photography',
    wornId: 'product-golden-sphere-huggies-worn',
    wornQuery:
      'woman ear wearing chunky gold dome huggie earrings close up, warm editorial photography',
    detailId: 'product-golden-sphere-huggies-detail',
    detailQuery:
      'polished gold dome huggie earrings macro detail on dark background, luxury jewelry still life',
    styledId: 'product-golden-sphere-huggies-styled',
    styledQuery:
      'gold huggie earrings flat lay on warm stone surface, editorial jewelry photography',
  },
  {
    slug: 'amber-lace-earrings',
    mainId: 'product-amber-lace-earrings-main',
    mainQuery:
      'textured gold filigree drop earrings on dark silk, elegant editorial jewelry photography',
    wornId: 'product-amber-lace-earrings-worn',
    wornQuery:
      'woman wearing gold filigree drop earrings evening look, warm editorial photography',
    detailId: 'product-amber-lace-earrings-detail',
    detailQuery:
      'gold filigree lace drop earrings macro detail on dark silk, luxury jewelry still life',
    styledId: 'product-amber-lace-earrings-styled',
    styledQuery:
      'gold drop earrings flat lay with candlelight glow on warm background, editorial photography',
  },
  {
    slug: 'royal-heirloom-set',
    mainId: 'product-royal-heirloom-set-main',
    mainQuery:
      'gold earring and necklace gift set in elegant jewelry box, luxury product photography',
    wornId: 'product-royal-heirloom-set-worn',
    wornQuery:
      'woman wearing gold pendant necklace and huggie earrings set, warm editorial photography',
    detailId: 'product-royal-heirloom-set-detail',
    detailQuery:
      'gold earring and necklace set in open gift box macro, luxury jewelry still life',
    styledId: 'product-royal-heirloom-set-styled',
    styledQuery:
      'elegant gold jewelry gift box with ribbon on warm background, editorial photography',
  },
]

export const PRODUCT_IMAGE_MAP = Object.fromEntries(
  PRODUCT_IMAGES.map((entry) => [entry.slug, entry])
)
