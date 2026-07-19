// Seed product data for Velmora Fine Jewelry.
// Each product has two image ids (primary + hover) so the stock image system
// can populate distinct editorial photos.

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    tagline: "Sculptural gold, worn close to the skin.",
    descId: "cat-earrings-desc",
    titleId: "cat-earrings-title",
    imgId: "cat-earrings-bg",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    tagline: "Light-catching chains and pendants.",
    descId: "cat-necklaces-desc",
    titleId: "cat-necklaces-title",
    imgId: "cat-necklaces-bg",
  },
  {
    id: "huggies",
    name: "Huggies",
    tagline: "Chunky domes that hug the lobe.",
    descId: "cat-huggies-desc",
    titleId: "cat-huggies-title",
    imgId: "cat-huggies-bg",
  },
];

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    blurb: "Gold ear cuff with crystal accent",
    description:
      "A sculptural gold ear cuff set with a single brilliant-cut crystal. Designed to be worn alone or stacked along the cartilage for a quiet, modern statement.",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    tones: ["Gold", "Silver"],
    titleId: "prod-vivid-aura-title",
    descId: "prod-vivid-aura-desc",
    imgId: "prod-vivid-aura-img",
    hoverImgId: "prod-vivid-aura-hover",
    galleryIds: [
      "prod-vivid-aura-g1",
      "prod-vivid-aura-g2",
      "prod-vivid-aura-g3",
      "prod-vivid-aura-g4",
    ],
    bestseller: true,
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    blurb: "Multicolor floral crystal necklace",
    description:
      "A delicate floral pendant necklace with multicolor crystal petals suspended from a fine gold chain. A romantic, gift-ready piece that catches the light with every movement.",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 204,
    tones: ["Gold"],
    titleId: "prod-majestic-flora-title",
    descId: "prod-majestic-flora-desc",
    imgId: "prod-majestic-flora-img",
    hoverImgId: "prod-majestic-flora-hover",
    galleryIds: [
      "prod-majestic-flora-g1",
      "prod-majestic-flora-g2",
      "prod-majestic-flora-g3",
      "prod-majestic-flora-g4",
    ],
    bestseller: true,
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    blurb: "Chunky gold dome huggie earrings",
    description:
      "Chunky gold dome huggies with a polished, mirror-like finish. A modern essential that sits snug against the lobe for everyday wear.",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 318,
    tones: ["Gold", "Silver"],
    titleId: "prod-golden-sphere-title",
    descId: "prod-golden-sphere-desc",
    imgId: "prod-golden-sphere-img",
    hoverImgId: "prod-golden-sphere-hover",
    galleryIds: [
      "prod-golden-sphere-g1",
      "prod-golden-sphere-g2",
      "prod-golden-sphere-g3",
      "prod-golden-sphere-g4",
    ],
    bestseller: true,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    blurb: "Textured gold filigree drop earrings",
    description:
      "Textured gold filigree drop earrings inspired by antique lacework. Lightweight and elongating, they move softly with the wearer.",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 91,
    tones: ["Gold"],
    titleId: "prod-amber-lace-title",
    descId: "prod-amber-lace-desc",
    imgId: "prod-amber-lace-img",
    hoverImgId: "prod-amber-lace-hover",
    galleryIds: [
      "prod-amber-lace-g1",
      "prod-amber-lace-g2",
      "prod-amber-lace-g3",
      "prod-amber-lace-g4",
    ],
    bestseller: true,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    blurb: "Gift-boxed earring + necklace set",
    description:
      "A coordinated earring and necklace set, presented in a signature Velmora gift box. The heirloom-inspired pendant echoes the drop of the earrings for a finished, considered look.",
    price: 95,
    category: "necklaces",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 57,
    tones: ["Gold"],
    titleId: "prod-royal-heirloom-title",
    descId: "prod-royal-heirloom-desc",
    imgId: "prod-royal-heirloom-img",
    hoverImgId: "prod-royal-heirloom-hover",
    galleryIds: [
      "prod-royal-heirloom-g1",
      "prod-royal-heirloom-g2",
      "prod-royal-heirloom-g3",
      "prod-royal-heirloom-g4",
    ],
    bestseller: true,
  },
];

export const testimonials = [
  {
    name: "Eleanor M.",
    text: "The gold is so warm and the weight feels real. I get compliments every time I wear the Aura cuff.",
    product: "Vivid Aura Jewels",
  },
  {
    name: "Priya S.",
    text: "Bought the Flora necklace as a gift and it arrived in the most beautiful box. She hasn't taken it off since.",
    product: "Majestic Flora Nectar",
  },
  {
    name: "Camille R.",
    text: "My everyday huggies. They don't irritate my ears at all and the dome catches light beautifully.",
    product: "Golden Sphere Huggies",
  },
];

export const reels = [
  {
    id: "reel-1",
    caption: "Stacked on the lobe",
    titleId: "reel-1-title",
    imgId: "reel-1-img",
  },
  {
    id: "reel-2",
    caption: "Golden hour, golden chain",
    titleId: "reel-2-title",
    imgId: "reel-2-img",
  },
  {
    id: "reel-3",
    caption: "The everyday huggie",
    titleId: "reel-3-title",
    imgId: "reel-3-img",
  },
  {
    id: "reel-4",
    caption: "Filigree that moves with you",
    titleId: "reel-4-title",
    imgId: "reel-4-img",
  },
  {
    id: "reel-5",
    caption: "Gift-boxed and ready",
    titleId: "reel-5-title",
    imgId: "reel-5-img",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aSame = a.category === current.category ? 0 : 1;
      const bSame = b.category === current.category ? 0 : 1;
      return aSame - bSame;
    })
    .slice(0, limit);
}
