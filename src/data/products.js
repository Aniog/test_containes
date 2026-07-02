const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "gold",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description:
      "A sculptural gold ear cuff adorned with a single crystal accent. Lightweight and comfortable for all-day wear — a quiet statement piece that catches the light with every movement.",
    details: {
      materials:
        "18K gold plated over brass. Cubic zirconia crystal accent. Hypoallergenic, nickel-free and lead-free.",
      care: "Avoid contact with perfumes, lotions and water. Store in a soft pouch or jewelry box. Clean gently with a soft dry cloth.",
      shipping:
        "Free worldwide shipping on all orders. Standard delivery: 5-10 business days. Express: 2-5 business days.",
      returns:
        "30-day return policy. Items must be unworn with original packaging. Free returns on first-time orders.",
    },
    images: [
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    ],
    slug: "vivid-aura-jewels",
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "gold",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description:
      "A luminous multicolor floral crystal necklace that catches light from every angle. Each petal is carefully set in a warm 18K gold setting — a garden of radiance at your neckline.",
    details: {
      materials:
        "18K gold plated over brass. Multicolor cubic zirconia crystals. Adjustable chain: 16-18 inches. Hypoallergenic.",
      care: "Avoid contact with perfumes, lotions and water. Store in a soft pouch or jewelry box. Clean gently with a soft dry cloth.",
      shipping:
        "Free worldwide shipping on all orders. Standard delivery: 5-10 business days. Express: 2-5 business days.",
      returns:
        "30-day return policy. Items must be unworn with original packaging. Free returns on first-time orders.",
    },
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
    ],
    slug: "majestic-flora-nectar",
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "earrings",
    material: "gold",
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description:
      "Chunky gold dome huggie earrings with a high-polish finish. The perfect everyday essential — substantial enough to make a statement, refined enough for the office.",
    details: {
      materials:
        "18K gold plated over brass. Hollow construction for lightweight comfort. Hypoallergenic, nickel-free. Snap-bar closure.",
      care: "Avoid contact with perfumes, lotions and water. Store in a soft pouch or jewelry box. Clean gently with a soft dry cloth.",
      shipping:
        "Free worldwide shipping on all orders. Standard delivery: 5-10 business days. Express: 2-5 business days.",
      returns:
        "30-day return policy. Items must be unworn with original packaging. Free returns on first-time orders.",
    },
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80",
      "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=800&q=80",
    ],
    slug: "golden-sphere-huggies",
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "gold",
    price: 54,
    rating: 4.6,
    reviewCount: 67,
    description:
      "Textured gold filigree drop earrings inspired by heirloom lace. Intricate woven patterns catch and reflect warm light — delicate yet undeniably present.",
    details: {
      materials:
        "18K gold plated over brass. Intricate filigree detailing. Hypoallergenic, nickel-free. Lever-back closure for secure wear.",
      care: "Avoid contact with perfumes, lotions and water. Store in a soft pouch or jewelry box. Clean gently with a soft dry cloth.",
      shipping:
        "Free worldwide shipping on all orders. Standard delivery: 5-10 business days. Express: 2-5 business days.",
      returns:
        "30-day return policy. Items must be unworn with original packaging. Free returns on first-time orders.",
    },
    images: [
      "https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?w=800&q=80",
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80",
    ],
    slug: "amber-lace-earrings",
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "sets",
    material: "gold",
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description:
      "A gift-boxed pairing of our signature earring and necklace. The ultimate expression of Velmora's quiet luxury — curated, intentional, and ready to gift or treasure.",
    details: {
      materials:
        "18K gold plated over brass. Cubic zirconia accents. Adjustable necklace chain: 16-18 inches. Presented in a velvet-lined gift box.",
      care: "Avoid contact with perfumes, lotions and water. Store in a soft pouch or jewelry box. Clean gently with a soft dry cloth.",
      shipping:
        "Free worldwide shipping on all orders. Standard delivery: 5-10 business days. Express: 2-5 business days.",
      returns:
        "30-day return policy. Items must be unworn with original packaging. Free returns on first-time orders.",
    },
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
    ],
    slug: "royal-heirloom-set",
  },
];

export const categories = [
  { id: "earrings", name: "Earrings", slug: "earrings", image: "https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?w=800&q=80" },
  { id: "necklaces", name: "Necklaces", slug: "necklaces", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80" },
  { id: "huggies", name: "Huggies", slug: "huggies", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80" },
];

export default products;