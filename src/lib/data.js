export const products = [
  {
    id: "vivid-aura",
    name: "Vivid Aura Jewels",
    price: 42,
    rating: 4.8,
    reviews: 124,
    description: "A striking gold ear cuff featuring a delicate crystal accent. Perfect for stacking or wearing alone for a bold yet refined look.",
    category: "Huggies",
    images: {
      primary: "vivid-aura-1",
      hover: "vivid-aura-2",
      gallery: ["vivid-aura-1", "vivid-aura-2", "vivid-aura-3"]
    },
    tones: ["Gold", "Silver"],
    cartId: "bestseller-vivid-aura"
  },
  {
    id: "majestic-flora",
    name: "Majestic Flora Nectar",
    price: 68,
    rating: 5.0,
    reviews: 89,
    description: "An intricate multicolor floral crystal necklace that captures the light beautifully. The perfect centerpiece for any neckline.",
    category: "Necklaces",
    images: {
      primary: "majestic-flora-1",
      hover: "majestic-flora-2",
      gallery: ["majestic-flora-1", "majestic-flora-2", "majestic-flora-3"]
    },
    tones: ["Gold"],
    cartId: "bestseller-majestic-flora"
  },
  {
    id: "golden-sphere",
    name: "Golden Sphere Huggies",
    price: 38,
    rating: 4.9,
    reviews: 245,
    description: "Chunky yet lightweight dome huggie earrings. A daily essential that blends seamless comfort with statement style.",
    category: "Huggies",
    images: {
      primary: "golden-sphere-1",
      hover: "golden-sphere-2",
      gallery: ["golden-sphere-1", "golden-sphere-2"]
    },
    tones: ["Gold", "Silver"],
    cartId: "bestseller-golden-sphere"
  },
  {
    id: "amber-lace",
    name: "Amber Lace Earrings",
    price: 54,
    rating: 4.7,
    reviews: 156,
    description: "Textured gold filigree drop earrings that offer an antique charm with a modern silhouette.",
    category: "Earrings",
    images: {
      primary: "amber-lace-1",
      hover: "amber-lace-2",
      gallery: ["amber-lace-1", "amber-lace-2"]
    },
    tones: ["Gold"],
    cartId: "bestseller-amber-lace"
  },
  {
    id: "royal-heirloom",
    name: "Royal Heirloom Set",
    price: 95,
    rating: 5.0,
    reviews: 312,
    description: "The ultimate gifting choice. This beautifully boxed set includes our signature matching earrings and delicate chain necklace.",
    category: "Sets",
    images: {
      primary: "royal-heirloom-1",
      hover: "royal-heirloom-2",
      gallery: ["royal-heirloom-1", "royal-heirloom-2", "royal-heirloom-3"]
    },
    tones: ["Gold", "Silver"],
    cartId: "bestseller-royal-heirloom"
  }
];

export const getBestsellers = () => products;

export const getProductById = (id) => products.find(p => p.id === id);