// Seed product data for Velmora Fine Jewelry
// Elegant demi-fine gold jewelry — earrings, necklaces, huggies

export const products = [
  {
    id: 1,
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    description: "A sculptural ear cuff that catches the light with every turn. Delicate crystal accents add a whisper of brilliance to the warm gold form.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in quiet drama. Hand-finished in warm 18K gold plating, it features a single faceted crystal that refracts light like morning sun on water. Designed to sit gracefully along the upper ear, it requires no piercing and feels weightless yet substantial.",
    material: "18K Gold Plated Brass, Crystal",
    variants: ["Gold", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=85",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=85"
    ],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
  },
  {
    id: 2,
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    description: "A delicate floral crystal necklace that blooms against the skin. Multicolor stones set in a refined gold frame evoke a secret garden at dusk.",
    longDescription: "Inspired by wildflowers pressed between the pages of an old book, the Majestic Flora Nectar necklace features a cluster of hand-selected crystals in warm amber, soft rose, and moss green. Suspended from a fine 18K gold-plated chain, it sits at the perfect length to complement both bare necks and open collars.",
    material: "18K Gold Plated Brass, Multicolor Crystals",
    variants: ["Gold", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 87,
    inStock: true,
  },
  {
    id: 3,
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    description: "Chunky yet refined dome huggies with a soft matte finish. The perfect everyday gold earring that feels both modern and timeless.",
    longDescription: "The Golden Sphere Huggies are our signature everyday piece. Cast in a generous dome silhouette and finished with a subtle matte texture, they hug the earlobe with quiet confidence. Lightweight enough for all-day wear, substantial enough to be noticed.",
    material: "18K Gold Plated Brass",
    variants: ["Gold", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=85",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1200&q=85"
    ],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
  },
  {
    id: 4,
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    description: "Textured gold filigree drops with an intricate lace-like pattern. Lightweight and luminous, they move with grace.",
    longDescription: "Each Amber Lace earring is a miniature work of art. The filigree pattern is inspired by antique lace and hand-finished to catch light from every angle. Suspended from a delicate post, they sway gently with movement while remaining comfortable for hours.",
    material: "18K Gold Plated Brass",
    variants: ["Gold", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1200&q=85",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&q=85"
    ],
    rating: 4.6,
    reviewCount: 92,
    inStock: true,
  },
  {
    id: 5,
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    description: "A gift-boxed pairing of our signature huggies and a delicate pendant necklace. The ultimate expression of considered gifting.",
    longDescription: "The Royal Heirloom Set brings together two of our most beloved pieces in a beautiful keepsake box. Includes the Golden Sphere Huggies and a matching pendant necklace on a fine chain. Presented in our signature cream and gold packaging, ready for gifting or self-celebration.",
    material: "18K Gold Plated Brass",
    variants: ["Gold", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=1200&q=85",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 63,
    inStock: true,
  },
];

export const categories = [
  { id: "all", label: "All", value: "all" },
  { id: "earrings", label: "Earrings", value: "earrings" },
  { id: "necklaces", label: "Necklaces", value: "necklaces" },
  { id: "huggies", label: "Huggies", value: "huggies" },
  { id: "sets", label: "Sets", value: "sets" },
];

export const materials = [
  { id: "all", label: "All Materials", value: "all" },
  { id: "gold", label: "18K Gold Plated", value: "gold" },
  { id: "silver", label: "Silver Plated", value: "silver" },
];

export default products;
