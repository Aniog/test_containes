// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "VIVID AURA JEWELS",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle shimmer to your everyday look.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, it features a single faceted crystal that refracts light like morning dew. Lightweight and comfortable for all-day wear, this piece transitions effortlessly from desk to dinner.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      { id: "img1", alt: "Vivid Aura Jewels ear cuff in gold with crystal accent" },
      { id: "img2", alt: "Vivid Aura Jewels ear cuff worn on model" }
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    inStock: true,
    featured: true
  },
  {
    id: "majestic-flora-nectar",
    name: "MAJESTIC FLORA NECTAR",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A statement necklace featuring a multicolor floral crystal pendant suspended on a delicate gold chain. Each crystal is hand-selected for its unique hue.",
    longDescription: "The Majestic Flora Nectar necklace celebrates the beauty of nature's palette. A cluster of faceted crystals in warm amber, soft rose, and deep emerald tones are set in 18K gold-plated brass. Suspended from an adjustable 18-inch chain, this piece sits gracefully at the collarbone.",
    rating: 4.9,
    reviewCount: 87,
    images: [
      { id: "img1", alt: "Majestic Flora Nectar multicolor crystal necklace" },
      { id: "img2", alt: "Majestic Flora Nectar necklace worn on model" }
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    inStock: true,
    featured: true
  },
  {
    id: "golden-sphere-huggies",
    name: "GOLDEN SPHERE HUGGIES",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these hoops hug the earlobe with a satisfying weight.",
    longDescription: "The Golden Sphere Huggies are our most-loved everyday statement. Cast in 18K gold-plated brass with a polished dome finish, these chunky hoops have a substantial feel without weighing you down. The secure hinge closure ensures they stay comfortably in place from morning coffee to evening cocktails.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      { id: "img1", alt: "Golden Sphere Huggies chunky gold dome earrings" },
      { id: "img2", alt: "Golden Sphere Huggies worn on model" }
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    inStock: true,
    featured: true
  },
  {
    id: "amber-lace-earrings",
    name: "AMBER LACE EARRINGS",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. Each piece is individually hand-finished for a one-of-a-kind look.",
    longDescription: "The Amber Lace Earrings are a love letter to traditional craftsmanship. Delicate filigree work creates a lace-like texture that catches light from every angle. Suspended from a simple post, these drops move with grace and add an artisanal touch to any ensemble. 18K gold-plated brass with hypoallergenic posts.",
    rating: 4.6,
    reviewCount: 92,
    images: [
      { id: "img1", alt: "Amber Lace Earrings textured gold filigree drops" },
      { id: "img2", alt: "Amber Lace Earrings worn on model" }
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    inStock: true,
    featured: true
  },
  {
    id: "royal-heirloom-set",
    name: "ROYAL HEIRLOOM SET",
    category: "Necklaces",
    price: 95,
    material: "Gold",
    description: "A gift-boxed pairing of our signature huggie earrings and a delicate pendant necklace. The perfect introduction to the Velmora collection.",
    longDescription: "The Royal Heirloom Set is our most cherished gift offering. Inside a velvet-lined keepsake box, you'll find our Golden Sphere Huggies paired with a slim pendant necklace featuring a single faceted crystal. Both pieces are crafted in 18K gold-plated brass and designed to be treasured for years to come.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      { id: "img1", alt: "Royal Heirloom Set gift-boxed earring and necklace set" },
      { id: "img2", alt: "Royal Heirloom Set pieces styled together" }
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    inStock: true,
    featured: true
  }
];

export const categories = ["Earrings", "Necklaces", "Huggies"];

export const materials = ["Gold", "Silver"];

export default products;
