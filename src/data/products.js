// Seed product catalog for Velmora Fine Jewelry
// Imagery queries are written for the strk stock image system and reference
// nearby text IDs. Each product declares its own titleId/descId/imgId so the
// dynamic references are stable and never guessed from display text.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    eyebrow: "Ear Cuff",
    price: 42,
    category: "earrings",
    material: "gold",
    tone: ["gold"],
    rating: 4.9,
    reviews: 128,
    description:
      "A whisper of brilliance. The Vivid Aura ear cuff catches light with a single crystal accent, designed to sit softly along the lobe — no piercing required.",
    materials:
      "18K gold-plated brass with a hand-set cubic zirconia crystal. Hypoallergenic and nickel-free.",
    care: "Avoid water, perfume, and lotion. Store in the suede pouch provided. Polish gently with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    titleId: "prod-vivid-aura-title",
    descId: "prod-vivid-aura-desc",
    imgId: "prod-vivid-aura-img-1",
    imgId2: "prod-vivid-aura-img-2",
    query:
      "gold ear cuff crystal accent on warm neutral background editorial jewelry product photography",
    query2: "close up gold ear cuff worn on model ear soft light jewelry",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    eyebrow: "Floral Necklace",
    price: 68,
    category: "necklaces",
    material: "gold",
    tone: ["gold"],
    rating: 4.8,
    reviews: 96,
    description:
      "A garden in bloom, worn at the collarbone. Hand-arranged crystals form a delicate cluster on a fine cable chain.",
    materials:
      "18K gold-plated brass, multicolor hand-set crystals, lobster clasp closure.",
    care: "Remove before showering or sleeping. Wipe with a soft, dry cloth; avoid chemical cleaners.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    titleId: "prod-majestic-flora-title",
    descId: "prod-majestic-flora-desc",
    imgId: "prod-majestic-flora-img-1",
    imgId2: "prod-majestic-flora-img-2",
    query:
      "multicolor floral crystal necklace on dark warm background editorial jewelry product photography",
    query2: "close up floral crystal necklace worn on neckline soft natural light",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    eyebrow: "Huggie Hoops",
    price: 38,
    category: "huggies",
    material: "gold",
    tone: ["gold"],
    rating: 5.0,
    reviews: 214,
    description:
      "A polished dome, sized for everyday. The Golden Sphere huggies sit close to the lobe with a satisfying, weighty click.",
    materials:
      "18K gold-plated brass with a secure hinged closure. Hypoallergenic and water-resistant finish.",
    care: "Safe for daily wear. Rinse with mild soap and dry after exposure to sweat or perfume.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    titleId: "prod-golden-sphere-title",
    descId: "prod-golden-sphere-desc",
    imgId: "prod-golden-sphere-img-1",
    imgId2: "prod-golden-sphere-img-2",
    query:
      "chunky gold dome huggie hoop earrings on dark warm background editorial jewelry product photography",
    query2: "close up gold huggie hoops worn on ear soft natural light",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    eyebrow: "Drop Earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    tone: ["gold"],
    rating: 4.9,
    reviews: 71,
    description:
      "Filigree in motion. Textured gold lace falls in a soft, articulated drop — light enough to wear all day, intricate enough to keep looking.",
    materials:
      "18K gold-plated brass, filigree cast detail, hypoallergenic posts.",
    care: "Avoid contact with water and cosmetics. Store flat in the original box to protect the filigree.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    titleId: "prod-amber-lace-title",
    descId: "prod-amber-lace-desc",
    imgId: "prod-amber-lace-img-1",
    imgId2: "prod-amber-lace-img-2",
    query:
      "textured gold filigree drop earrings on dark warm background editorial jewelry product photography",
    query2: "close up filigree drop earrings worn on ear soft light",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    eyebrow: "Gift Set",
    price: 95,
    category: "sets",
    material: "gold",
    tone: ["gold"],
    rating: 4.9,
    reviews: 53,
    description:
      "An earring and necklace duo, presented in our signature cream gift box. Designed as a quiet heirloom — for someone, or for yourself.",
    materials:
      "18K gold-plated brass set, cubic zirconia accents, presented in a magnetic-closure gift box with suede pouch.",
    care: "Remove before showering or sleeping. Polish gently with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    titleId: "prod-royal-heirloom-title",
    descId: "prod-royal-heirloom-desc",
    imgId: "prod-royal-heirloom-img-1",
    imgId2: "prod-royal-heirloom-img-2",
    query:
      "gold earring and necklace gift set in cream box on dark warm background editorial jewelry product photography",
    query2: "close up gold jewelry gift set with bow ribbon warm light",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const priceRanges = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "Over $80", min: 80.01, max: Infinity },
];

export const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "priceAsc", label: "Price: Low to High" },
  { id: "priceDesc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(id, count = 4) {
  return products.filter((p) => p.id !== id).slice(0, count);
}
