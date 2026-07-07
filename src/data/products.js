export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "gold",
    rating: 4.8,
    reviewCount: 124,
    description:
      "A sculptural gold ear cuff illuminated by a single crystal accent. Designed to catch candlelight and compliments alike — no piercing required.",
    materials:
      "18K gold-plated brass with a high-polish finish. Set with a precision-cut cubic zirconia crystal. Nickel-free and hypoallergenic.",
    care: "Store in a dry pouch. Avoid contact with perfumes, lotions, and water. Clean gently with a soft cloth to maintain brilliance.",
    images: 2,
    tag: "Bestseller",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "gold",
    rating: 4.9,
    reviewCount: 89,
    description:
      "A garden frozen in gold — multicolor floral crystals arranged on a delicate chain. The necklace that turns a white tee into an occasion.",
    materials:
      "18K gold-plated chain with hand-set multicolor cubic zirconia petals. Lobster clasp closure. Length: 40cm + 5cm extender.",
    care: "Keep away from moisture and harsh chemicals. Store flat to prevent tangling. Polish with a microfiber cloth.",
    images: 2,
    tag: "New",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "gold",
    rating: 4.7,
    reviewCount: 210,
    description:
      "Chunky gold dome huggies with a satisfying weight and mirror finish. Your new everyday pair that still feels like a treat.",
    materials:
      "18K gold-plated stainless steel. Hinge closure for easy wear. Diameter: 12mm. Weight: 4g per earring.",
    care: "Wipe after each wear. Avoid sleeping or showering in your huggies. Store in the included Velmora pouch.",
    images: 2,
    tag: null,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    rating: 4.9,
    reviewCount: 76,
    description:
      "Textured gold filigree drops inspired by antique lace. Lightweight enough for all-day wear, striking enough for evening.",
    materials:
      "18K gold-plated brass with intricate filigree detailing. Surgical steel posts. Drop length: 35mm.",
    care: "Handle by the post to preserve the filigree shape. Store in a jewelry box or pouch. Avoid moisture.",
    images: 2,
    tag: "Bestseller",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "gold",
    rating: 5.0,
    reviewCount: 43,
    description:
      "A curated gift-boxed set featuring a matching earring and necklace pairing. The ultimate self-gift or surprise for someone treasured.",
    materials:
      "18K gold-plated brass and stainless steel. Necklace length: 42cm + 5cm extender. Earring posts: surgical steel.",
    care: "Store in the provided gift box. Clean each piece individually with a soft cloth. Avoid contact with water.",
    images: 2,
    tag: "Gift Set",
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit);
