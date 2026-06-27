// Seed product catalog for Velmora Fine Jewelry.
// Each product has stable text IDs used by the stock image system.

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    description:
      "A weightless ear cuff sculpted in 18k gold vermeil and set with a single hand-cut crystal. Slips on — no piercing required — for an effortless cuff stack.",
    price: 42,
    category: "earrings",
    material: "18k Gold Vermeil",
    rating: 4.9,
    reviewCount: 184,
    variants: ["18K Gold", "Silver Tone"],
    bestseller: true,
    isNew: false,
    images: [
      { id: "vivid-aura-1", q: "[product-vivid-aura-jewels-desc] [product-vivid-aura-jewels-title] gold ear cuff crystal close up" },
      { id: "vivid-aura-2", q: "[product-vivid-aura-jewels-title] gold ear cuff worn on model warm light" },
      { id: "vivid-aura-3", q: "[product-vivid-aura-jewels-title] gold ear cuff macro detail editorial" },
      { id: "vivid-aura-4", q: "[product-vivid-aura-jewels-title] gold jewelry on linen flatlay" },
    ],
    titleId: "product-vivid-aura-jewels-title",
    descId: "product-vivid-aura-jewels-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    description:
      "An heirloom-feel necklace strung with hand-set floral crystals in soft amber, rose and ivory tones. The chain is finished in warm 18k gold plating.",
    price: 68,
    category: "necklaces",
    material: "18k Gold Plated",
    rating: 4.8,
    reviewCount: 132,
    variants: ["18K Gold", "Silver Tone"],
    bestseller: true,
    isNew: true,
    images: [
      { id: "flora-nectar-1", q: "[product-majestic-flora-nectar-desc] [product-majestic-flora-nectar-title] floral crystal necklace warm gold" },
      { id: "flora-nectar-2", q: "[product-majestic-flora-nectar-title] gold floral necklace on neck editorial" },
      { id: "flora-nectar-3", q: "[product-majestic-flora-nectar-title] vintage style gold necklace macro" },
      { id: "flora-nectar-4", q: "[product-majestic-flora-nectar-title] gold necklace on cream linen" },
    ],
    titleId: "product-majestic-flora-nectar-title",
    descId: "product-majestic-flora-nectar-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    description:
      "Bold, polished dome huggies with a hinged closure. Cast in solid brass and plated in 18k gold for a substantial, sculptural everyday wear.",
    price: 38,
    category: "huggies",
    material: "18k Gold Plated Brass",
    rating: 4.9,
    reviewCount: 241,
    variants: ["18K Gold", "Silver Tone"],
    bestseller: true,
    isNew: false,
    images: [
      { id: "sphere-huggies-1", q: "[product-golden-sphere-huggies-desc] [product-golden-sphere-huggies-title] chunky gold huggie earrings" },
      { id: "sphere-huggies-2", q: "[product-golden-sphere-huggies-title] gold dome huggie earring worn ear close up" },
      { id: "sphere-huggies-3", q: "[product-golden-sphere-huggies-title] polished gold hoop macro detail" },
      { id: "sphere-huggies-4", q: "[product-golden-sphere-huggies-title] gold huggie earrings on neutral background" },
    ],
    titleId: "product-golden-sphere-huggies-title",
    descId: "product-golden-sphere-huggies-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    description:
      "Delicate filigree drop earrings with a hand-textured lace pattern. Light as air, with the warm glow of antique gold.",
    price: 54,
    category: "earrings",
    material: "18k Gold Vermeil",
    rating: 4.7,
    reviewCount: 97,
    variants: ["18K Gold", "Silver Tone"],
    bestseller: true,
    isNew: false,
    images: [
      { id: "amber-lace-1", q: "[product-amber-lace-earrings-desc] [product-amber-lace-earrings-title] gold filigree drop earrings" },
      { id: "amber-lace-2", q: "[product-amber-lace-earrings-title] gold drop earrings worn editorial portrait" },
      { id: "amber-lace-3", q: "[product-amber-lace-earrings-title] vintage gold filigree macro" },
      { id: "amber-lace-4", q: "[product-amber-lace-earrings-title] gold drop earrings on cream marble" },
    ],
    titleId: "product-amber-lace-earrings-title",
    descId: "product-amber-lace-earrings-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    description:
      "Our signature gift set: a matched pair of huggies and a fine pendant necklace, presented in a velvet-lined Velmora box.",
    price: 95,
    category: "sets",
    material: "18k Gold Plated",
    rating: 5.0,
    reviewCount: 76,
    variants: ["18K Gold", "Silver Tone"],
    bestseller: true,
    isNew: true,
    images: [
      { id: "heirloom-set-1", q: "[product-royal-heirloom-set-desc] [product-royal-heirloom-set-title] gold jewelry gift box set" },
      { id: "heirloom-set-2", q: "[product-royal-heirloom-set-title] gold necklace earrings set styled" },
      { id: "heirloom-set-3", q: "[product-royal-heirloom-set-title] luxury jewelry gift packaging" },
      { id: "heirloom-set-4", q: "[product-royal-heirloom-set-title] gold jewelry flatlay editorial" },
    ],
    titleId: "product-royal-heirloom-set-title",
    descId: "product-royal-heirloom-set-desc",
  },
];

export const CATEGORIES = [
  {
    id: "earrings",
    label: "Earrings",
    description: "Drops, studs and statement pieces.",
    imgId: "category-tile-earrings",
    titleId: "category-earrings-title",
    descId: "category-earrings-desc",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    description: "Layering chains and heirloom pendants.",
    imgId: "category-tile-necklaces",
    titleId: "category-necklaces-title",
    descId: "category-necklaces-desc",
  },
  {
    id: "huggies",
    label: "Huggies",
    description: "Everyday hoops, sculpted to last.",
    imgId: "category-tile-huggies",
    titleId: "category-huggies-title",
    descId: "category-huggies-desc",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Sophia R.",
    text: "The weight, the warmth of the gold — it feels like a piece I'll pass down. Velmora has become my go-to.",
  },
  {
    id: "t2",
    name: "Amelia K.",
    text: "Quiet luxury done right. I wear my huggies daily and they still look like new six months in.",
  },
  {
    id: "t3",
    name: "Isabel M.",
    text: "Bought the Royal Heirloom Set as a gift — the packaging alone is worth it. She hasn't taken it off.",
  },
];

export const UGC_REELS = [
  { id: "reel-1", caption: "Layered for everyday.", titleId: "reel-1-caption", imgId: "reel-1-img", q: "[reel-1-caption] woman wearing gold necklaces layered editorial vertical" },
  { id: "reel-2", caption: "Sun on skin.", titleId: "reel-2-caption", imgId: "reel-2-img", q: "[reel-2-caption] gold huggie earrings worn close up vertical warm light" },
  { id: "reel-3", caption: "Quiet sparkle.", titleId: "reel-3-caption", imgId: "reel-3-img", q: "[reel-3-caption] gold crystal necklace on neck vertical portrait" },
  { id: "reel-4", caption: "Stacked, never stuffy.", titleId: "reel-4-caption", imgId: "reel-4-img", q: "[reel-4-caption] stacked gold ear cuffs and huggies on ear vertical" },
  { id: "reel-5", caption: "Gifted, then kept.", titleId: "reel-5-caption", imgId: "reel-5-img", q: "[reel-5-caption] gold jewelry gift box hand model vertical" },
  { id: "reel-6", caption: "Late afternoon.", titleId: "reel-6-caption", imgId: "reel-6-img", q: "[reel-6-caption] gold filigree drop earrings worn portrait vertical" },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(id, count = 4) {
  return PRODUCTS.filter((p) => p.id !== id).slice(0, count);
}
