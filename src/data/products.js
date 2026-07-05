export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      {
        id: "vivid-aura-1",
        alt: "Vivid Aura Jewels gold ear cuff with crystal accent",
        query: "gold ear cuff crystal accent jewelry close-up",
      },
      {
        id: "vivid-aura-2",
        alt: "Vivid Aura Jewels side view",
        query: "gold ear cuff side view jewelry",
      }
    ],
    rating: 4.8,
    reviews: 124,
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    description: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    images: [
      {
        id: "majestic-flora-1",
        alt: "Majestic Flora Nectar multicolor floral crystal necklace",
        query: "floral crystal necklace gold jewelry",
      },
      {
        id: "majestic-flora-2",
        alt: "Majestic Flora Nectar on model",
        query: "gold necklace model neck jewelry",
      }
    ],
    rating: 4.9,
    reviews: 89,
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    images: [
      {
        id: "golden-sphere-1",
        alt: "Golden Sphere Huggies chunky gold dome earrings",
        query: "gold huggie earrings chunky dome",
      },
      {
        id: "golden-sphere-2",
        alt: "Golden Sphere Huggies on ear",
        query: "huggie earrings on ear gold",
      }
    ],
    rating: 4.7,
    reviews: 156,
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      {
        id: "amber-lace-1",
        alt: "Amber Lace Earrings textured gold filigree drop",
        query: "gold filigree drop earrings textured",
      },
      {
        id: "amber-lace-2",
        alt: "Amber Lace Earrings detail",
        query: "filigree earrings detail gold jewelry",
      }
    ],
    rating: 4.8,
    reviews: 97,
    variants: ["Gold"],
    inStock: true,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "18K Gold Plated",
    images: [
      {
        id: "royal-heirloom-1",
        alt: "Royal Heirloom Set gift box earring necklace",
        query: "jewelry gift set gold earrings necklace",
      },
      {
        id: "royal-heirloom-2",
        alt: "Royal Heirloom Set laid out",
        query: "gold jewelry set earrings necklace display",
      }
    ],
    rating: 4.9,
    reviews: 203,
    variants: ["Gold"],
    inStock: true,
  },
]

export const categories = [
  { name: "Earrings", slug: "earrings", image: "gold earrings collection" },
  { name: "Necklaces", slug: "necklaces", image: "gold necklace collection" },
  { name: "Huggies", slug: "huggies", image: "huggie earrings collection" },
]

export const testimonials = [
  {
    id: 1,
    name: "Sarah",
    initial: "S",
    rating: 5,
    text: "Absolutely stunning pieces. The quality is exceptional for the price point. I get compliments every time I wear my Vivid Aura ear cuff.",
  },
  {
    id: 2,
    name: "Emily",
    initial: "E",
    rating: 5,
    text: "I've purchased three pieces now and they've all exceeded my expectations. The gold plating is beautiful and hasn't tarnished.",
  },
  {
    id: 3,
    name: "Michael",
    initial: "M",
    rating: 5,
    text: "Bought the Royal Heirloom Set for my wife's birthday. The packaging was luxurious and she hasn't taken it off since.",
  },
]

export const ugcPosts = [
  {
    id: 1,
    image: "woman wearing gold huggie earrings",
    caption: "Everyday elegance",
    author: "@sarahj",
  },
  {
    id: 2,
    image: "gold necklace layered look",
    caption: "Layered perfection",
    author: "@emilyc",
  },
  {
    id: 3,
    image: "gold earrings close up ear",
    caption: "Details matter",
    author: "@alexandram",
  },
  {
    id: 4,
    image: "jewelry flat lay aesthetic",
    caption: "Morning ritual",
    author: "@ninap",
  },
  {
    id: 5,
    image: "woman touching necklace",
    caption: "Treasure moments",
    author: "@jessical",
  },
]
