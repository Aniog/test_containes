// Velmora — seed product catalog
// Each product carries stock image-system references for
// data-strk-img queries; swap with real CDN URLs when ready.

export const CATEGORIES = [
  { id: "earrings",  label: "Earrings"  },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies",   label: "Huggies"   },
];

export const MATERIALS = [
  { id: "18k-gold",   label: "18K Gold Plated" },
  { id: "sterling",   label: "Sterling Silver" },
  { id: "rose-gold",  label: "Rose Gold Plated" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    tone: "gold",
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    material: "18k-gold",
    short:
      "A whisper of light at the ear. A delicate crystal-set ear cuff designed to catch every movement.",
    description:
      "The Vivid Aura Jewels ear cuff is hand-finished with a single light-catching crystal set against warm 18K gold plating. Designed to be worn on the lobe or the upper helix, it sculpts the ear into a constellation of soft, golden light. Demi-fine craftsmanship without the fine-jewelry price tag.",
    materials:
      "18K gold plated over a hypoallergenic brass core. Cubic zirconia crystal accent. Nickel-free, lead-free, hypoallergenic. Tarnish-resistant coating.",
    care: "Remove before showering, swimming, or applying perfume. Wipe gently with the included polishing cloth. Store in the soft pouch to prevent scratching.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Each piece arrives in a gift-ready velvet pouch and recyclable box.",
    imgId: "p-vivid-aura-1",
    titleId: "p-vivid-aura-title",
    descId: "p-vivid-aura-desc",
    imgId2: "p-vivid-aura-2",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    tone: "gold",
    rating: 4.8,
    reviews: 214,
    badge: "New",
    material: "18k-gold",
    short:
      "A garden in bloom, captured at the neckline. A multicolor crystal pendant on a whisper-fine chain.",
    description:
      "Inspired by the first hour of an English garden at dawn, the Majestic Flora Nectar necklace suspends a hand-set cluster of multicolored crystals from a delicate 18K gold-plated chain. Each stone catches the light differently — emerald, citrine, blush, and a quiet, oceanic blue.",
    materials:
      "18K gold plated chain and setting. Multicolor crystals — citrine, emerald, blush, blue topaz. Hypoallergenic, nickel-free, lead-free.",
    care: "Avoid contact with water, perfume, and lotion. Wipe with a soft dry cloth after wear. Store flat in the included pouch to protect the chain.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Gift wrapping available at checkout.",
    imgId: "p-majestic-flora-1",
    titleId: "p-majestic-flora-title",
    descId: "p-majestic-flora-desc",
    imgId2: "p-majestic-flora-2",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    tone: "gold",
    rating: 5.0,
    reviews: 341,
    badge: "Crowd Favorite",
    material: "18k-gold",
    short:
      "A polished gold dome that hugs the lobe. The everyday earring, elevated.",
    description:
      "The Golden Sphere Huggies are the answer to every morning's earring question. A chunky, perfectly weighted gold dome, hinged for easy wear and a confident silhouette. Stack them, wear them solo, sleep in them — they're the foundation of the Velmora collection.",
    materials:
      "18K gold plated brass with a secure hinged closure. Hypoallergenic, nickel-free, lead-free. Tarnish-resistant finish.",
    care: "The most low-maintenance piece in the collection — wear them daily. Wipe with a soft cloth weekly. Safe to keep on in the shower.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Sold as a pair.",
    imgId: "p-golden-sphere-1",
    titleId: "p-golden-sphere-title",
    descId: "p-golden-sphere-desc",
    imgId2: "p-golden-sphere-2",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    tone: "gold",
    rating: 4.7,
    reviews: 96,
    badge: "Limited",
    material: "18k-gold",
    short:
      "Texture and light in motion. A filigree drop earring inspired by antique lace.",
    description:
      "The Amber Lace Earrings translate the delicacy of hand-tatted lace into wearable gold. Each drop is cast with a fine filigree pattern, then polished to a warm, almost amber glow. They move like breath — quiet, considered, unmistakable.",
    materials:
      "18K gold plated brass with a hand-finished filigree pattern. Hypoallergenic, nickel-free, lead-free. Stainless steel posts for sensitive ears.",
    care: "Store flat in the included pouch to protect the filigree. Avoid contact with perfume and water. Polish gently with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Sold as a pair.",
    imgId: "p-amber-lace-1",
    titleId: "p-amber-lace-title",
    descId: "p-amber-lace-desc",
    imgId2: "p-amber-lace-2",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    price: 95,
    tone: "gold",
    rating: 4.9,
    reviews: 57,
    badge: "Gift-Ready",
    material: "18k-gold",
    short:
      "The matching earring and necklace set, gift-boxed. A modern heirloom.",
    description:
      "The Royal Heirloom Set pairs our most-loved earring silhouette with a delicate pendant necklace, both cast in warm 18K gold plating. Arrives in a keepsake box with a hand-tied ribbon — ready to gift, made to be treasured. A quiet moment of luxury, made easy.",
    materials:
      "18K gold plated brass. Hypoallergenic, nickel-free, lead-free. Stainless steel earring posts and a secure lobster-clasp closure on the necklace.",
    care: "Remove before showering, swimming, or applying perfume. Wipe gently with the included polishing cloth. Store in the keepsake box.",
    shipping:
      "Free worldwide shipping. 30-day returns, no questions asked. Gift receipts available at checkout. Ships in 1–2 business days.",
    imgId: "p-royal-heirloom-1",
    titleId: "p-royal-heirloom-title",
    descId: "p-royal-heirloom-desc",
    imgId2: "p-royal-heirloom-2",
  },
];

// Convenience helpers
export function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

export function getRelated(product, n = 4) {
  if (!product) return PRODUCTS.slice(0, n);
  return PRODUCTS.filter((p) => p.id !== product.id).slice(0, n);
}
