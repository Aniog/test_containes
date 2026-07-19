export const products = [
  {
    id: "vivid-aura-jewels",
    name: "VIVID AURA JEWELS",
    price: 42,
    category: "earrings",
    subcategory: "ear-cuffs",
    material: "18k Gold Plated",
    tone: ["gold"],
    description:
      "A bold gold ear cuff adorned with a luminous crystal accent. Designed to elevate any look with effortless sparkle — no piercing required.",
    details:
      "Crafted from 18k gold-plated sterling silver with a hand-set cubic zirconia crystal. Hypoallergenic and tarnish-resistant.",
    care: "Avoid contact with water, perfume, and harsh chemicals. Store in the included pouch when not wearing.",
    shipping: "Free worldwide shipping. 30-day hassle-free returns.",
    rating: 4.8,
    reviewCount: 124,
    bestseller: true,
    images: [
      "vivid aura gold ear cuff crystal jewelry closeup",
      "vivid aura ear cuff on model ear warm lighting",
    ],
    featuredImg: "vivid aura crystal gold ear cuff on dark velvet",
    tags: ["bestseller", "gift-pick"],
  },
  {
    id: "majestic-flora-nectar",
    name: "MAJESTIC FLORA NECTAR",
    price: 68,
    category: "necklaces",
    subcategory: "pendants",
    material: "18k Gold Plated",
    tone: ["gold"],
    description:
      "A multicolor floral crystal pendant necklace that captures the beauty of a garden in bloom. A statement piece with delicate charm.",
    details:
      "Features a hand-arranged cluster of multicolor crystals set in 18k gold-plated brass. Adjustable 16–18 inch chain with lobster clasp.",
    care: "Gently wipe with a soft cloth after each wear. Store separately to avoid scratching.",
    shipping: "Free worldwide shipping. 30-day hassle-free returns.",
    rating: 4.9,
    reviewCount: 87,
    bestseller: true,
    images: [
      "multicolor floral crystal necklace on dark background",
      "floral crystal pendant necklace on model neck",
    ],
    featuredImg: "majestic floral crystal gold necklace editorial shot",
    tags: ["bestseller", "new"],
  },
  {
    id: "golden-sphere-huggies",
    name: "GOLDEN SPHERE HUGGIES",
    price: 38,
    category: "huggies",
    subcategory: "huggies",
    material: "18k Gold Plated",
    tone: ["gold", "silver"],
    description:
      "Chunky gold dome huggie earrings with a smooth, polished finish. The perfect everyday staple with a luxurious weight.",
    details:
      "Made from 18k gold-plated surgical steel. Hinged closure for easy wear. Diameter: 12mm. Hypoallergenic.",
    care: "Remove before showering or swimming. Polish gently with the included cloth.",
    shipping: "Free worldwide shipping. 30-day hassle-free returns.",
    rating: 4.7,
    reviewCount: 203,
    bestseller: true,
    images: [
      "chunky gold dome huggie earrings on marble surface",
      "gold sphere huggies worn on model ear",
    ],
    featuredImg: "golden sphere huggie earrings on dark fabric",
    tags: ["bestseller"],
  },
  {
    id: "amber-lace-earrings",
    name: "AMBER LACE EARRINGS",
    price: 54,
    category: "earrings",
    subcategory: "drops",
    material: "18k Gold Plated",
    tone: ["gold"],
    description:
      "Textured gold filigree drop earrings inspired by antique lace patterns. Romantic and refined for day-to-evening elegance.",
    details:
      "Intricate filigree design in 18k gold-plated brass. French hook closure. Drop length: 45mm. Lightweight at 6g per earring.",
    care: "Store in a dry place. Avoid contact with lotions and perfumes.",
    shipping: "Free worldwide shipping. 30-day hassle-free returns.",
    rating: 4.6,
    reviewCount: 65,
    bestseller: true,
    images: [
      "gold filigree drop earrings on dark background",
      "amber lace earrings worn with warm outfit",
    ],
    featuredImg: "amber lace filigree earrings closeup",
    tags: ["new", "bestseller"],
  },
  {
    id: "royal-heirloom-set",
    name: "ROYAL HEIRLOOM SET",
    price: 95,
    category: "sets",
    subcategory: "gift-sets",
    material: "18k Gold Plated",
    tone: ["gold"],
    description:
      "An exquisite gift-boxed set featuring a pair of crystal drop earrings and a matching pendant necklace. The ultimate gift for someone special.",
    details:
      "Set includes Crystal Cascade Earrings and Luna Pendant Necklace. Both crafted in 18k gold-plated sterling silver with cubic zirconia accents. Presented in a signature Velmora gift box.",
    care: "Clean gently with a soft, dry cloth. Store each piece in the provided pouch.",
    shipping: "Free worldwide shipping. 30-day hassle-free returns. Gift wrapping included.",
    rating: 4.9,
    reviewCount: 42,
    bestseller: true,
    images: [
      "luxury gold jewelry gift set in black box",
      "royal heirloom earring necklace set on silk",
    ],
    featuredImg: "premium gold jewelry gift set velvet box",
    tags: ["bestseller", "gift-pick"],
  },
];

export const categories = [
  { id: "earrings", name: "Earrings", count: 2 },
  { id: "necklaces", name: "Necklaces", count: 1 },
  { id: "huggies", name: "Huggies", count: 1 },
  { id: "sets", name: "Sets", count: 1 },
];

export const priceRanges = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over-75", label: "Over $75", min: 75, max: Infinity },
];

export const materials = [
  { id: "18k-gold", label: "18k Gold Plated" },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The quality is incredible for the price. I wear my Golden Sphere Huggies every single day and they still look brand new after months.",
  },
  {
    id: 2,
    name: "Emily R.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging was beautiful and she absolutely loved it. Will definitely order again.",
  },
  {
    id: 3,
    name: "Jessica L.",
    rating: 5,
    text: "I'm obsessed with the Amber Lace Earrings. They're so lightweight and elegant. I get compliments every time I wear them.",
  },
];

export const ugcItems = [
  { id: 1, caption: "Golden hour glow", query: "woman wearing gold huggie earrings closeup warm light" },
  { id: 2, caption: "Layered perfection", query: "gold layered necklaces on woman neck editorial" },
  { id: 3, caption: "Ear stack goals", query: "multiple gold earrings ear stack fashion photo" },
  { id: 4, caption: "Gift moment", query: "woman opening jewelry gift box luxury packaging" },
  { id: 5, caption: "Everyday elegance", query: "gold jewelry on woman casual outfit minimalist" },
  { id: 6, caption: "Detail shot", query: "closeup gold crystal pendant necklace detail" },
];
