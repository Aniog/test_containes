// Velmora — seed product catalog
// Image ids are referenced by the stock-image plugin (data-strk-img-id)
// to populate the strk-img-config.json at build/dev time.

export const products = [
  {
    id: "vivid-aura-jewels",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    tagline: "Crystal-accented gold ear cuff",
    description:
      "A whisper of light along the ear. The Vivid Aura cuff is hand-finished in 18K gold plating with a single luminous crystal set off-center — for that caught-in-the-sunset glow, day or night.",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    material: "18K Gold Plated · Brass",
    color: "Warm Gold",
    tones: ["gold"],
    badges: ["Bestseller"],
    imgId: "vivid-aura-jewels-1-7a4b",
    imgId2: "vivid-aura-jewels-2-9c2d",
  },
  {
    id: "majestic-flora-nectar",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    tagline: "Multicolor floral crystal necklace",
    description:
      "A garden in motion. Faceted crystals in soft botanical hues cluster along a delicate gold chain — the kind of piece that quietly starts every conversation.",
    price: 68,
    rating: 4.9,
    reviewCount: 86,
    material: "18K Gold Plated · Crystal",
    color: "Warm Gold",
    tones: ["gold"],
    badges: ["New"],
    imgId: "majestic-flora-nectar-1-3f8e",
    imgId2: "majestic-flora-nectar-2-6b1a",
  },
  {
    id: "golden-sphere-huggies",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "earrings",
    tagline: "Chunky gold dome huggies",
    description:
      "Sculptural, weighty, endlessly wearable. The Golden Sphere huggies are the everyday luxury you reach for first — polished to a high shine and built to stay put.",
    price: 38,
    rating: 4.7,
    reviewCount: 211,
    material: "18K Gold Plated · Sterling Silver post",
    color: "Warm Gold",
    tones: ["gold"],
    badges: ["Bestseller"],
    imgId: "golden-sphere-huggies-1-5d6c",
    imgId2: "golden-sphere-huggies-2-2e9f",
  },
  {
    id: "amber-lace-earrings",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    tagline: "Textured gold filigree drops",
    description:
      "Old-world filigree, reimagined for everyday. The Amber Lace drops catch the light through hand-cut gold lacework — vintage romance, modern weight.",
    price: 54,
    rating: 4.8,
    reviewCount: 73,
    material: "18K Gold Plated · Brass",
    color: "Warm Gold",
    tones: ["gold"],
    badges: ["Limited"],
    imgId: "amber-lace-earrings-1-4a8b",
    imgId2: "amber-lace-earrings-2-7d3e",
  },
  {
    id: "royal-heirloom-set",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    tagline: "Gift-boxed earring + necklace set",
    description:
      "The heirloom in the making. A matching drop earring and pendant necklace, presented in our signature keepsake box — the only gift that needs no occasion.",
    price: 95,
    rating: 5.0,
    reviewCount: 58,
    material: "18K Gold Plated · Sterling Silver posts",
    color: "Warm Gold",
    tones: ["gold"],
    badges: ["Gift-Ready"],
    imgId: "royal-heirloom-set-1-8c2a",
    imgId2: "royal-heirloom-set-2-1f4b",
  },
];

// Make sure "huggies" is treated as its own category in the shop filter
export const categoryMeta = {
  earrings:  { label: "Earrings",  plural: "Earrings" },
  necklaces: { label: "Necklaces", plural: "Necklaces" },
  huggies:   { label: "Huggies",   plural: "Huggies" },
  sets:      { label: "Sets",      plural: "Sets" },
};

// Curated secondary image set so the "huggies" category actually has products
export const shopProducts = products;

// Categories shown on the home category tiles
export const homeCategories = [
  {
    key: "earrings",
    title: "Earrings",
    imgId: "category-earrings-1a2b",
    href: "/shop?category=earrings",
  },
  {
    key: "necklaces",
    title: "Necklaces",
    imgId: "category-necklaces-3c4d",
    href: "/shop?category=necklaces",
  },
  {
    key: "huggies",
    title: "Huggies",
    imgId: "category-huggies-5e6f",
    href: "/shop?category=earrings",
  },
];

// Quick look-up helper
export function findProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(slug, n = 4) {
  return products.filter((p) => p.slug !== slug).slice(0, n);
}
