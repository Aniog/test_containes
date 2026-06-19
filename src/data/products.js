import { placeholderDataUri, sceneDataUri } from "@/lib/placeholders";

// All imagery here is placeholder SVGs that emulate warm-lit gold jewelry photography.
// Swap `images` arrays with real photography URLs when ready — the rest of the app
// will pick them up automatically.

const img = (type, palette, variant = 1, id = "x") =>
  placeholderDataUri({ type, palette, variant, id, width: 800, height: 1000 });

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18k-gold",
    price: 42,
    rating: 4.8,
    reviews: 184,
    badge: "Bestseller",
    blurb:
      "A fluid gold ear cuff traced with a single crystal accent — the quiet piece you never take off.",
    description:
      "Sculpted in our demi-fine studio, the Vivid Aura cuff follows the curve of the ear like a whispered secret. A single hand-set crystal catches the light without ever shouting. Wear it solo for restraint, or stack it with the Golden Sphere Huggies for evening.",
    materials:
      "18K gold plated over a brass core, hypoallergenic and nickel-free. Hand-set crystal accent. Each piece is finished by hand and inspected before shipping.",
    care:
      "Remove before showering, swimming, or applying lotion. Store in the velvet pouch provided. To restore shine, gently buff with the included polishing cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Most orders ship within 1–2 business days.",
    images: [
      img("earCuff", "amber", 1, "vivid-1"),
      img("earCuff", "taupe", 2, "vivid-2"),
      img("earCuff", "umber", 3, "vivid-3"),
      img("earCuff", "amber", 4, "vivid-4"),
    ],
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#C99650" },
      { id: "silver", label: "Sterling Silver", swatch: "#C9C3BB" },
    ],
    stock: 28,
    isBestseller: true,
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "18k-gold",
    price: 68,
    rating: 4.9,
    reviews: 312,
    badge: "New",
    blurb:
      "A multicolor floral crystal cluster on a delicate gold chain — botanically inspired, undeniably modern.",
    description:
      "The Majestic Flora pendant is composed of seven hand-set crystals arranged in a small floral cluster, finished with a delicate cable chain. The palette shifts between amethyst, citrine, and peridot — warm, jewel-toned, and never garish.",
    materials:
      "18K gold plated brass chain and setting. Genuine crystals, hand-set. Lobster clasp closure with adjustable extender.",
    care:
      "Avoid contact with perfume and water. Store flat in the provided pouch. Polish gently with a soft dry cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Comes in our signature gift box.",
    images: [
      img("necklace", "umber", 1, "flora-1"),
      img("necklace", "taupe", 2, "flora-2"),
      img("necklace", "amber", 3, "flora-3"),
      img("necklace", "umber", 4, "flora-4"),
    ],
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#C99650" },
      { id: "silver", label: "Sterling Silver", swatch: "#C9C3BB" },
    ],
    stock: 16,
    isBestseller: true,
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18k-gold",
    price: 38,
    rating: 4.7,
    reviews: 421,
    badge: "Cult Favorite",
    blurb:
      "Chunky gold dome huggies that close with a quiet click. The everyday piece your dresser has been waiting for.",
    description:
      "Heavy in the hand, light on the ear. The Golden Sphere huggies are crafted with a satisfying dome silhouette and a secure hinged closure. Designed to wear from morning coffee to a candlelit dinner — and everything between.",
    materials:
      "18K gold plated brass. Hinged snap closure. Sold as a pair. Hypoallergenic and lead-free.",
    care:
      "Remove before sleeping and showering. Wipe with the included polishing cloth to maintain the gold finish.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pairs.",
    images: [
      img("huggies", "amber", 1, "sphere-1"),
      img("huggies", "taupe", 2, "sphere-2"),
      img("huggies", "umber", 3, "sphere-3"),
      img("huggies", "amber", 4, "sphere-4"),
    ],
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#C99650" },
      { id: "silver", label: "Sterling Silver", swatch: "#C9C3BB" },
    ],
    stock: 54,
    isBestseller: true,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18k-gold",
    price: 54,
    rating: 4.8,
    reviews: 96,
    badge: null,
    blurb:
      "Textured gold filigree drops — the heirloom-in-waiting you can wear today.",
    description:
      "Each Amber Lace drop is cast from a hand-engraved brass mold, then plated in 18K gold. The lacework catches light through its openwork — delicate in profile, substantial in the hand.",
    materials:
      "18K gold plated brass, hypoallergenic. Hand-cast lacework detail. Secure post and butterfly back.",
    care:
      "Store dry in the provided pouch. Avoid contact with lotions and perfumes. Polish gently with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns.",
    images: [
      img("dropEarrings", "taupe", 1, "lace-1"),
      img("dropEarrings", "amber", 2, "lace-2"),
      img("dropEarrings", "umber", 3, "lace-3"),
      img("dropEarrings", "taupe", 4, "lace-4"),
    ],
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#C99650" },
      { id: "silver", label: "Sterling Silver", swatch: "#C9C3BB" },
    ],
    stock: 21,
    isBestseller: true,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    material: "18k-gold",
    price: 95,
    rating: 5.0,
    reviews: 58,
    badge: "Gift-Ready",
    blurb:
      "A matching huggie-and-pendant set, presented in our signature gift box. The answer to every occasion.",
    description:
      "The Royal Heirloom Set pairs our Golden Sphere huggies with a scaled Vivid Aura pendant on a delicate chain. Presented together in a magnetic-closure gift box with a hand-written card — ready to give, impossible to guess the price.",
    materials:
      "18K gold plated brass throughout. Hypoallergenic. Includes both pieces, a polishing cloth, and a velvet pouch.",
    care:
      "Remove before water exposure. Store in the gift box when not worn. Polish with the included cloth.",
    shipping:
      "Free worldwide shipping. 30-day returns. Gift receipts available at checkout.",
    images: [
      img("set", "umber", 1, "heirloom-1"),
      img("set", "amber", 2, "heirloom-2"),
      img("set", "taupe", 3, "heirloom-3"),
      img("set", "umber", 4, "heirloom-4"),
    ],
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#C99650" },
      { id: "silver", label: "Sterling Silver", swatch: "#C9C3BB" },
    ],
    stock: 9,
    isBestseller: true,
  },
];

export const COLLECTIONS = [
  {
    id: "the-everyday-edit",
    label: "The Everyday Edit",
    blurb: "Pieces you'll forget you're wearing — until someone asks.",
  },
  {
    id: "evening-restraint",
    label: "Evening Restraint",
    blurb: "For the dinner you'll remember next year.",
  },
  {
    id: "the-gift-edit",
    label: "The Gift Edit",
    blurb: "Pre-paired sets in signature boxes. Done.",
  },
];

export function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelated(id, limit = 4) {
  const product = getProduct(id);
  if (!product) return PRODUCTS.slice(0, limit);
  return PRODUCTS.filter((p) => p.id !== id)
    .sort((a, b) => {
      const sameCatA = a.category === product.category ? 0 : 1;
      const sameCatB = b.category === product.category ? 0 : 1;
      return sameCatA - sameCatB;
    })
    .slice(0, limit);
}

// Editorial UGC reel scenes — vertical, like Instagram Reels
export const UGC_REELS = [
  {
    id: "reel-1",
    caption: "Morning light, golden hour.",
    image: sceneDataUri({ scene: "earStack", palette: "amber", width: 540, height: 960, id: "reel1" }),
  },
  {
    id: "reel-2",
    caption: "The pendant, always.",
    image: sceneDataUri({ scene: "neck", palette: "taupe", width: 540, height: 960, id: "reel2" }),
  },
  {
    id: "reel-3",
    caption: "Huggies, but make them heirloom.",
    image: sceneDataUri({ scene: "earStack", palette: "umber", width: 540, height: 960, id: "reel3" }),
  },
  {
    id: "reel-4",
    caption: "The cuff you'll never take off.",
    image: sceneDataUri({ scene: "modelEar", palette: "amber", width: 540, height: 960, id: "reel4" }),
  },
  {
    id: "reel-5",
    caption: "Layered, but quiet.",
    image: sceneDataUri({ scene: "neck", palette: "umber", width: 540, height: 960, id: "reel5" }),
  },
  {
    id: "reel-6",
    caption: "Boxed and ready to give.",
    image: sceneDataUri({ scene: "earStack", palette: "taupe", width: 540, height: 960, id: "reel6" }),
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Amelia K.",
    rating: 5,
    body:
      "I bought the Vivid Aura cuff on a whim and now I wear it every single day. It looks far more expensive than it is — and the packaging felt like opening a real gift.",
  },
  {
    id: "t2",
    name: "Sophia M.",
    rating: 5,
    body:
      "The Majestic Flora necklace is the piece I reach for when I want to feel quietly put together. Customer service was also incredibly thoughtful when I had a sizing question.",
  },
  {
    id: "t3",
    name: "Isabella R.",
    rating: 5,
    body:
      "Sent the Royal Heirloom set to my sister for her birthday. She texted me a photo of herself wearing it before she even said thank you. That's the review.",
  },
];

// Category tile imagery (square)
export const CATEGORY_TILES = [
  {
    id: "earrings",
    label: "Earrings",
    image: sceneDataUri({ scene: "earStack", palette: "amber", width: 800, height: 800, id: "cat-ear" }),
  },
  {
    id: "necklaces",
    label: "Necklaces",
    image: sceneDataUri({ scene: "neck", palette: "taupe", width: 800, height: 800, id: "cat-neck" }),
  },
  {
    id: "huggies",
    label: "Huggies",
    image: sceneDataUri({ scene: "earStack", palette: "umber", width: 800, height: 800, id: "cat-hugg" }),
  },
];

// Editorial scenes for the homepage hero
export const HERO_IMAGE = sceneDataUri({
  scene: "modelEar",
  palette: "amber",
  width: 1600,
  height: 2000,
  id: "hero",
});

export const STORY_IMAGE = sceneDataUri({
  scene: "neck",
  palette: "taupe",
  width: 1200,
  height: 1500,
  id: "story",
});