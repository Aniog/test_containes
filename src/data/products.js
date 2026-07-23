// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle shimmer to your everyday look.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted with precision, the slender gold band curves gently around the ear while a faceted crystal catches and refracts light. Perfect worn alone or stacked with other pieces from our collection.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      { id: "img1", alt: "Vivid Aura Jewels ear cuff in gold with crystal accent" },
      { id: "img2", alt: "Vivid Aura Jewels ear cuff side view showing crystal detail" }
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Each stone is carefully selected and set to create a piece that feels both timeless and contemporary.",
    longDescription: "The Majestic Flora Nectar necklace is inspired by the delicate beauty of wildflowers. A cluster of hand-selected crystals in warm amber, soft rose, and clear tones are arranged in an organic composition. Suspended from a fine gold chain, this piece transitions effortlessly from day to evening.",
    rating: 4.9,
    reviewCount: 87,
    images: [
      { id: "img1", alt: "Majestic Flora Nectar necklace with multicolor floral crystals" },
      { id: "img2", alt: "Majestic Flora Nectar necklace detail showing crystal arrangement" }
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these earrings make a confident statement while remaining comfortable for all-day wear.",
    longDescription: "The Golden Sphere Huggies are our most beloved everyday statement. The domed silhouette is achieved through careful hand-finishing, creating a soft, sculptural form that feels substantial without weight. The secure hinge closure ensures they stay comfortably in place from morning to night.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      { id: "img1", alt: "Golden Sphere Huggies chunky gold dome earrings" },
      { id: "img2", alt: "Golden Sphere Huggies worn on model showing scale" }
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. Each piece is meticulously crafted to showcase the delicate artistry of traditional metalwork.",
    longDescription: "The Amber Lace Earrings celebrate the lost art of filigree. Delicate gold threads are twisted and soldered by hand to create an openwork pattern reminiscent of antique lace. The warm amber tone of the gold is achieved through a special finishing process that enhances the natural warmth of the metal.",
    rating: 4.6,
    reviewCount: 73,
    images: [
      { id: "img1", alt: "Amber Lace Earrings textured gold filigree drop earrings" },
      { id: "img2", alt: "Amber Lace Earrings detail showing intricate filigree work" }
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    material: "Gold",
    description: "A gift-boxed pairing of our signature huggie earrings and a delicate pendant necklace. Presented in a velvet-lined keepsake box, this set is made for gifting and treasuring.",
    longDescription: "The Royal Heirloom Set brings together two of our most cherished pieces. The Golden Sphere Huggies pair beautifully with a fine gold chain necklace featuring a small, perfectly proportioned pendant. Each set arrives in a premium keepsake box, ready for gifting or safekeeping as a family treasure.",
    rating: 4.9,
    reviewCount: 92,
    images: [
      { id: "img1", alt: "Royal Heirloom Set gift-boxed earring and necklace set" },
      { id: "img2", alt: "Royal Heirloom Set pieces displayed together" }
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true
  }
];

export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

export const getRelatedProducts = (currentProductId, limit = 4) => {
  return products
    .filter(p => p.id !== currentProductId)
    .slice(0, limit);
};

export const categories = ["Earrings", "Necklaces", "Huggies"];

export const materials = ["Gold", "Silver"];
