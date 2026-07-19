// Seed catalog for Velmora Fine Jewelry.
// Each product carries enough metadata to drive cards, filters, and the PDP.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    shortName: "Vivid Aura",
    eyebrow: "Ear Cuff",
    category: "earrings",
    material: "18k-gold",
    price: 42,
    rating: 4.8,
    reviews: 184,
    variants: ["Gold", "Silver"],
    inStock: true,
    isBestseller: true,
    description:
      "A delicate ear cuff punctuated with a single hand-set crystal. Designed to hug the curve of the ear without piercing — stack it or wear it solo.",
    details:
      "Each cuff is cast in a hypoallergenic brass core and finished with a thick layer of 18K gold plating, then hand-set with a faceted crystal. Lightweight enough for all-day wear.",
    materials:
      "18K gold-plated brass, AAA crystal accent. Free of nickel, lead, and cadmium. Tarnish-resistant coating.",
    care: "Store in the included pouch. Avoid perfumes, lotions, and water. Wipe gently with the soft cloth provided to restore the finish.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Most orders ship within 1–2 business days from our atelier in Lisbon.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    shortName: "Majestic Flora",
    eyebrow: "Floral Necklace",
    category: "necklaces",
    material: "18k-gold",
    price: 68,
    rating: 4.9,
    reviews: 312,
    variants: ["Gold", "Silver"],
    inStock: true,
    isBestseller: true,
    description:
      "A botanical composition in miniature — petals of mother-of-pearl and freshwater pearl set along a whisper-thin gold chain.",
    details:
      "A multi-stone floral pendant on an 18-inch cable chain with a 2-inch extender. Each petal is hand-set; every piece is slightly unique.",
    materials:
      "18K gold-plated brass, mother-of-pearl, freshwater pearl. Lead-free, nickel-free.",
    care: "Remove before showering or sleeping. Store flat in the velvet pouch to protect the stones.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Standard delivery 3–6 business days; expedited options at checkout.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    shortName: "Golden Sphere",
    eyebrow: "Huggie Hoop",
    category: "huggies",
    material: "18k-gold",
    price: 38,
    rating: 4.7,
    reviews: 256,
    variants: ["Gold", "Silver"],
    inStock: true,
    isBestseller: true,
    description:
      "A modern take on the classic huggie. A solid gold dome, hinged for easy everyday wear and gentle on the lobe.",
    details:
      "Hinged huggie hoops with a secure click closure. Inner diameter 9mm. Substantial without feeling heavy.",
    materials:
      "18K gold-plated brass with a hypoallergenic post. Tarnish-resistant finish.",
    care: "Wipe with the included polishing cloth. Avoid contact with chlorinated water.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Tracked shipping included.",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    shortName: "Amber Lace",
    eyebrow: "Drop Earrings",
    category: "earrings",
    material: "18k-gold",
    price: 54,
    rating: 4.8,
    reviews: 142,
    variants: ["Gold"],
    inStock: true,
    isBestseller: true,
    description:
      "Filigree drop earrings inspired by antique lace. Light catches the openwork pattern, creating a soft, golden shimmer.",
    details:
      "Length 1.5 inches. Lightweight filigree construction — substantial in look, gentle on the ear. Post and butterfly back.",
    materials:
      "18K gold-plated brass. Hypoallergenic. Hand-finished openwork.",
    care: "Store in the included pouch. Avoid sprays and perfumes directly on the metal.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Gift packaging available at no extra cost.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    shortName: "Royal Heirloom",
    eyebrow: "Gift Set",
    category: "sets",
    material: "18k-gold",
    price: 95,
    rating: 5.0,
    reviews: 98,
    variants: ["Gold", "Silver"],
    inStock: true,
    isBestseller: true,
    description:
      "A matching earring and pendant set in our signature silhouette — a complete look, gift-boxed and ready to give.",
    details:
      "Includes a pair of mini huggies and a pendant on an 18-inch chain. Arrives in a magnetic gift box with a hand-written note option at checkout.",
    materials:
      "18K gold-plated brass. Hypoallergenic posts, tarnish-resistant finish.",
    care: "Store in the gift box between wears. Use the polishing cloth to maintain the finish.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Express options available at checkout — order by 2pm ET for next-day dispatch.",
  },
];

// Look up a product by id; returns null when not found.
export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

// Related products: same category, exclude current.
export function getRelated(id, limit = 4) {
  const current = getProductById(id);
  if (!current) return PRODUCTS.slice(0, limit);
  const sameCat = PRODUCTS.filter(
    (p) => p.id !== id && p.category === current.category,
  );
  const others = PRODUCTS.filter(
    (p) => p.id !== id && p.category !== current.category,
  );
  return [...sameCat, ...others].slice(0, limit);
}

// Bestsellers (already marked) for the homepage.
export function getBestsellers(limit = 5) {
  return PRODUCTS.filter((p) => p.isBestseller).slice(0, limit);
}
