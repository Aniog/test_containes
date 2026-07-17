// Seed product catalogue for Velmora Fine Jewelry.
// Each product carries stable ids used by the strk image system
// (data-strk-img-id + text reference ids) so images resolve at build time.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    type: "ear cuff",
    price: 42,
    rating: 4.8,
    reviews: 126,
    tone: "gold",
    badge: "Bestseller",
    shortDesc:
      "A sculptural gold ear cuff traced with a single crystal accent — wear it alone or stacked for a quiet gleam.",
    description:
      "The Vivid Aura ear cuff is our most-loved everyday piece. Hand-finished in 18K gold plating over sterling silver, it hugs the cartilage without a piercing and catches the light with a single hand-set crystal. Lightweight, secure, and made to be worn from desk to dinner.",
    materials:
      "18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free, lead-free. Hand-set cubic zirconia crystal.",
    care: "Avoid contact with perfumes and water. Store in the pouch provided. Polish with a soft cloth.",
    shipping:
      "Free worldwide shipping over $50. Orders ship within 1–2 business days. 30-day returns on unworn pieces.",
    titleId: "prod-vivid-aura-jewels-title",
    descId: "prod-vivid-aura-jewels-desc",
    imgId: "prod-vivid-aura-jewels-img",
    img2Id: "prod-vivid-aura-jewels-img2",
    galleryIds: [
      "prod-vivid-aura-jewels-g1",
      "prod-vivid-aura-jewels-g2",
      "prod-vivid-aura-jewels-g3",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    type: "floral crystal necklace",
    price: 68,
    rating: 4.9,
    reviews: 88,
    tone: "gold",
    badge: "New",
    shortDesc:
      "A multicolor floral crystal pendant suspended from a fine gold chain — a soft, romantic statement.",
    description:
      "Majestic Flora Nectar is a garden in miniature. Multicolor crystals are arranged into a delicate floral motif, suspended from a whisper-fine gold-plated chain that sits gracefully at the collarbone. A romantic piece designed for gifting and keepsake moments.",
    materials:
      "18K gold plating over 925 sterling silver. Hand-set multicolor cubic zirconia. Adjustable 16–18 inch chain.",
    care: "Keep dry and away from perfumes. Store flat in the gift pouch. Clean with a soft, lint-free cloth.",
    shipping:
      "Free worldwide shipping over $50. Ships within 1–2 business days. 30-day returns on unworn pieces.",
    titleId: "prod-majestic-flora-nectar-title",
    descId: "prod-majestic-flora-nectar-desc",
    imgId: "prod-majestic-flora-nectar-img",
    img2Id: "prod-majestic-flora-nectar-img2",
    galleryIds: [
      "prod-majestic-flora-nectar-g1",
      "prod-majestic-flora-nectar-g2",
      "prod-majestic-flora-nectar-g3",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    type: "dome huggie earrings",
    price: 38,
    rating: 4.7,
    reviews: 214,
    tone: "gold",
    badge: "Bestseller",
    shortDesc:
      "Chunky gold dome huggies with a smooth, polished finish — the everyday hoop you'll never take off.",
    description:
      "Golden Sphere Huggies are our take on the perfect everyday hoop. A chunky polished dome sits snug against the lobe, catching light from every angle. Secure hinged closure, comfortable enough to sleep in, polished to a warm gold glow.",
    materials:
      "18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hinged snap closure.",
    care: "Wipe clean after wear. Avoid water and perfume. Store in the provided pouch.",
    shipping:
      "Free worldwide shipping over $50. Ships within 1–2 business days. 30-day returns on unworn pieces.",
    titleId: "prod-golden-sphere-huggies-title",
    descId: "prod-golden-sphere-huggies-desc",
    imgId: "prod-golden-sphere-huggies-img",
    img2Id: "prod-golden-sphere-huggies-img2",
    galleryIds: [
      "prod-golden-sphere-huggies-g1",
      "prod-golden-sphere-huggies-g2",
      "prod-golden-sphere-huggies-g3",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    type: "filigree drop earrings",
    price: 54,
    rating: 4.8,
    reviews: 73,
    tone: "gold",
    badge: null,
    shortDesc:
      "Textured gold filigree drops with an openwork lace pattern — heirloom detail, modern weight.",
    description:
      "Amber Lace Earrings reimagine traditional filigree for the modern wearer. An openwork gold drop moves gently with you, light enough for all-day wear yet detailed enough to anchor an evening look. A quietly intricate piece.",
    materials:
      "18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Lever-back closure.",
    care: "Handle with care to preserve the openwork detail. Keep dry, store flat in the pouch.",
    shipping:
      "Free worldwide shipping over $50. Ships within 1–2 business days. 30-day returns on unworn pieces.",
    titleId: "prod-amber-lace-earrings-title",
    descId: "prod-amber-lace-earrings-desc",
    imgId: "prod-amber-lace-earrings-img",
    img2Id: "prod-amber-lace-earrings-img2",
    galleryIds: [
      "prod-amber-lace-earrings-g1",
      "prod-amber-lace-earrings-g2",
      "prod-amber-lace-earrings-g3",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Necklaces",
    type: "earring + necklace gift set",
    price: 95,
    rating: 5.0,
    reviews: 41,
    tone: "gold",
    badge: "Gift Set",
    shortDesc:
      "A gift-boxed earring and necklace set in matching gold — ready to give, made to be treasured.",
    description:
      "The Royal Heirloom Set pairs a coordinating necklace and earring duo in warm gold, presented in a signature Velmora gift box. Designed for milestone moments — anniversaries, birthdays, the just-because gift — it is our most complete gifting piece.",
    materials:
      "18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Includes gift box and polishing pouch.",
    care: "Store each piece separately to avoid tangling. Keep dry, polish with a soft cloth.",
    shipping:
      "Free worldwide shipping. Gift-boxed and ready. Ships within 1–2 business days. 30-day returns on unworn sets.",
    titleId: "prod-royal-heirloom-set-title",
    descId: "prod-royal-heirloom-set-desc",
    imgId: "prod-royal-heirloom-set-img",
    img2Id: "prod-royal-heirloom-set-img2",
    galleryIds: [
      "prod-royal-heirloom-set-g1",
      "prod-royal-heirloom-set-g2",
      "prod-royal-heirloom-set-g3",
    ],
  },
];

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    tagline: "Hoops, drops & cuffs",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    imgId: "cat-earrings-img",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    tagline: "Chains & pendants",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    imgId: "cat-necklaces-img",
  },
  {
    id: "huggies",
    name: "Huggies",
    tagline: "Everyday snug hoops",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    imgId: "cat-huggies-img",
  },
];

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere Huggies, every day.",
    titleId: "reel-1-title",
    imgId: "reel-1-img",
  },
  {
    id: "reel-2",
    caption: "Stacked cuffs for the evening.",
    titleId: "reel-2-title",
    imgId: "reel-2-img",
  },
  {
    id: "reel-3",
    caption: "Flora Nectar, caught in light.",
    titleId: "reel-3-title",
    imgId: "reel-3-img",
  },
  {
    id: "reel-4",
    caption: "Amber Lace, heirloom detail.",
    titleId: "reel-4-title",
    imgId: "reel-4-img",
  },
  {
    id: "reel-5",
    caption: "The Heirloom Set, unboxed.",
    titleId: "reel-5-title",
    imgId: "reel-5-img",
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Sofia M.",
    rating: 5,
    text: "The huggies haven't left my ears in three months. They look far more expensive than they were.",
  },
  {
    id: "t2",
    name: "Priya R.",
    rating: 5,
    text: "Bought the Heirloom Set as an anniversary gift. The box alone made her cry. Stunning quality.",
  },
  {
    id: "t3",
    name: "Elena V.",
    rating: 5,
    text: "Quiet, warm gold that doesn't irritate my skin. Finally jewelry I can actually wear daily.",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aSame = a.category === current.category ? -1 : 0;
      const bSame = b.category === current.category ? -1 : 0;
      return aSame - bSame;
    })
    .slice(0, limit);
}
