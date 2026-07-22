export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    price: 42,
    category: "earrings",
    material: ["18k-gold-plated"],
    rating: 4.8,
    reviewCount: 124,
    description:
      "A sculptural gold ear cuff designed to catch the light with every turn. Set with a single luminous crystal accent, Vivid Aura Jewels offers the look of a curated ear stack without the need for multiple piercings.",
    materials:
      "18k gold-plated brass with a premium e-coating for lasting color. Nickel-free and lead-free. Crystal accent is handset for secure, everyday wear.",
    care: "Store in a dry pouch and avoid contact with perfumes, lotions, and water. Clean gently with a soft cloth to maintain the warm gold finish.",
    shipping:
      "Free worldwide shipping on all orders over $50. Orders are processed within 1–2 business days. 30-day hassle-free returns on unworn pieces in original packaging.",
    tone: ["gold", "silver"],
    images: 3,
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    material: ["18k-gold-plated", "crystals"],
    rating: 4.9,
    reviewCount: 89,
    description:
      "Delicate blossoms in soft multicolor crystals bloom along a fine gold chain. The Majestic Flora Nectar necklace is a romantic statement piece that layers beautifully or stands alone.",
    materials:
      "18k gold-plated chain with handset glass crystals. Adjustable 16–18 inch length. Lobster clasp closure.",
    care: "Lay flat when storing to prevent tangling. Avoid exposure to moisture and harsh chemicals. Wipe with a soft, dry cloth after wear.",
    shipping:
      "Complimentary shipping on orders over $50. Dispatched within 1–2 business days. Returns accepted within 30 days of delivery.",
    tone: ["gold"],
    images: 3,
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    material: ["18k-gold-plated"],
    rating: 4.7,
    reviewCount: 210,
    description:
      "Effortlessly modern, the Golden Sphere Huggies feature a polished dome silhouette that hugs the lobe with a satisfying weight. The perfect everyday hoop with a sculptural twist.",
    materials:
      "18k gold-plated stainless steel. Hypoallergenic, water-resistant, and tarnish-resistant. Hinge closure for easy wear.",
    care: "Can be worn daily but avoid prolonged water exposure. Store in the provided pouch to keep the polished finish intact.",
    shipping:
      "Free shipping on all orders over $50. Orders ship within 1–2 business days. 30-day returns available.",
    tone: ["gold", "silver"],
    images: 3,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    material: ["18k-gold-plated"],
    rating: 4.9,
    reviewCount: 76,
    description:
      "Inspired by antique lace, these drop earrings feature an intricate filigree texture finished in warm gold. Lightweight and eye-catching, they move beautifully with you.",
    materials:
      "18k gold-plated brass with a textured matte-lustre finish. Surgical steel posts and butterfly backs. Nickel-free.",
    care: "Keep away from moisture and beauty products. Store hanging or flat to preserve the drop shape. Polish gently with a dry cloth.",
    shipping:
      "Free worldwide shipping over $50. Dispatched within 1–2 business days. Easy 30-day returns.",
    tone: ["gold"],
    images: 3,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    price: 95,
    category: "sets",
    material: ["18k-gold-plated", "crystals"],
    rating: 5.0,
    reviewCount: 52,
    description:
      "A ready-to-gift pairing of our signature huggie earrings and a matching pendant necklace. Presented in a soft-touch Velmora gift box with a hand-tied ribbon.",
    materials:
      "18k gold-plated brass earrings and necklace. Hypoallergenic posts. Crystal pendant detail. Necklace length 16–18 inches.",
    care: "Store in the included gift box. Avoid contact with water, perfumes, and lotions. Clean with a soft cloth.",
    shipping:
      "Free gift packaging and worldwide shipping included. Ships within 1–2 business days. 30-day returns.",
    tone: ["gold"],
    images: 3,
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit);
