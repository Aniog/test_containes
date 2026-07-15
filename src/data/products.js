export const categories = ["Earrings", "Necklaces", "Huggies", "Sets"];

export const materials = ["18K Gold Plated", "Sterling Silver", "Brass"];

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviewCount: 124,
    badge: "Bestseller",
    description:
      "A sculptural gold ear cuff with a single crystal accent. Designed to sit comfortably along the ear without piercing, it catches light with every movement.",
    materialsCare: [
      "18K gold-plated brass",
      "Crystal accent stone",
      "Nickel-free and hypoallergenic",
      "Avoid water, perfume, and lotions to preserve plating",
    ],
    shippingReturns: [
      "Free worldwide shipping on orders over $50",
      "Orders ship within 1–2 business days",
      "30-day hassle-free returns",
      "Gift packaging available at checkout",
    ],
    imageQuery: "gold ear cuff crystal accent fine jewelry",
    hoverQuery: "gold ear cuff on model ear close up",
    colors: ["Gold", "Silver"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviewCount: 89,
    badge: "New",
    description:
      "A delicate gold necklace blooming with multicolor floral crystals. Layer it or wear alone as a statement of quiet femininity.",
    materialsCare: [
      "18K gold-plated chain",
      "Multicolor cubic zirconia crystals",
      "Adjustable 16–18 inch length",
      "Store flat and dry",
    ],
    shippingReturns: [
      "Free worldwide shipping on orders over $50",
      "Orders ship within 1–2 business days",
      "30-day hassle-free returns",
      "Gift packaging available at checkout",
    ],
    imageQuery: "multicolor floral crystal gold necklace",
    hoverQuery: "floral gold necklace on neck close up",
    colors: ["Gold", "Silver"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviewCount: 215,
    badge: "Bestseller",
    description:
      "Chunky dome huggie earrings with a polished mirror finish. The perfect everyday gold hoop that transitions effortlessly from coffee to cocktails.",
    materialsCare: [
      "18K gold-plated brass",
      "Hinged huggie closure",
      "Lightweight hollow construction",
      "Wipe clean with a soft cloth",
    ],
    shippingReturns: [
      "Free worldwide shipping on orders over $50",
      "Orders ship within 1–2 business days",
      "30-day hassle-free returns",
      "Gift packaging available at checkout",
    ],
    imageQuery: "chunky gold dome huggie earrings",
    hoverQuery: "gold huggie earrings on ear model",
    colors: ["Gold", "Silver"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.6,
    reviewCount: 76,
    badge: null,
    description:
      "Textured gold filigree drops inspired by vintage lace. These earrings frame the face with warm light and intricate detail.",
    materialsCare: [
      "18K gold-plated brass",
      "Filigree texture finish",
      "Surgical steel posts",
      "Store in provided pouch",
    ],
    shippingReturns: [
      "Free worldwide shipping on orders over $50",
      "Orders ship within 1–2 business days",
      "30-day hassle-free returns",
      "Gift packaging available at checkout",
    ],
    imageQuery: "textured gold filigree drop earrings",
    hoverQuery: "gold filigree earrings worn close up",
    colors: ["Gold"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "Sets",
    material: "18K Gold Plated",
    rating: 4.9,
    reviewCount: 52,
    badge: "Gift Set",
    description:
      "A thoughtfully gift-boxed pairing of coordinating earrings and necklace. Made for milestones, anniversaries, or simply because.",
    materialsCare: [
      "18K gold-plated brass",
      "Coordinating necklace and earrings",
      "Arrives in signature Velmora gift box",
      "Includes care card and polishing cloth",
    ],
    shippingReturns: [
      "Free worldwide shipping on orders over $50",
      "Orders ship within 1–2 business days",
      "30-day hassle-free returns",
      "Gift packaging included",
    ],
    imageQuery: "gold jewelry gift set necklace earrings box",
    hoverQuery: "gold jewelry set on model neck and ear",
    colors: ["Gold", "Silver"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sophia M.",
    text: "The packaging alone made me feel like I was unboxing something truly luxurious. The huggies have become my everyday staple.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily R.",
    text: "I gifted the Royal Heirloom Set to my sister and she cried. Beautiful quality and the customer service was impeccable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Olivia T.",
    text: "Finally, demi-fine jewelry that doesn't turn my ears green. Quiet luxury at a price I can actually afford.",
    rating: 5,
  },
];

export const ugcItems = [
  {
    id: "ugc-1",
    caption: "Everyday gold moments",
    query: "gold hoop earrings on ear close up warm light",
  },
  {
    id: "ugc-2",
    caption: "Layered & loved",
    query: "gold layered necklaces on neck editorial",
  },
  {
    id: "ugc-3",
    caption: "Quiet luxury",
    query: "gold huggie earrings ear stack",
  },
  {
    id: "ugc-4",
    caption: "Gift-worthy",
    query: "gold jewelry gift box hands",
  },
  {
    id: "ugc-5",
    caption: "Minimal shine",
    query: "gold stud earrings on ear model",
  },
  {
    id: "ugc-6",
    caption: "Made to treasure",
    query: "gold necklace pendant on skin",
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.id === slug) || null;
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit);
}
