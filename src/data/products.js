// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "Gold",
    rating: 4.8,
    reviews: 124,
    images: [
      {
        id: "vivid-aura-1",
        alt: "Vivid Aura Jewels - Gold ear cuff with crystal accent",
        dataStrkImg: "[product-desc-1] [product-name-1]",
        dataStrkImgRatio: "1x1",
        dataStrkImgWidth: "800"
      },
      {
        id: "vivid-aura-2",
        alt: "Vivid Aura Jewels - Side view",
        dataStrkImg: "[product-desc-1] [product-name-1] side view",
        dataStrkImgRatio: "1x1",
        dataStrkImgWidth: "800"
      }
    ],
    isBestseller: true,
    isNew: false
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    rating: 4.9,
    reviews: 89,
    images: [
      {
        id: "majestic-flora-1",
        alt: "Majestic Flora Nectar - Multicolor floral crystal necklace",
        dataStrkImg: "[product-desc-2] [product-name-2]",
        dataStrkImgRatio: "1x1",
        dataStrkImgWidth: "800"
      },
      {
        id: "majestic-flora-2",
        alt: "Majestic Flora Nectar - Detail view",
        dataStrkImg: "[product-desc-2] [product-name-2] detail",
        dataStrkImgRatio: "1x1",
        dataStrkImgWidth: "800"
      }
    ],
    isBestseller: true,
    isNew: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "Gold",
    rating: 4.7,
    reviews: 156,
    images: [
      {
        id: "golden-sphere-1",
        alt: "Golden Sphere Huggies - Chunky gold dome huggie earrings",
        dataStrkImg: "[product-desc-3] [product-name-3]",
        dataStrkImgRatio: "1x1",
        dataStrkImgWidth: "800"
      },
      {
        id: "golden-sphere-2",
        alt: "Golden Sphere Huggies - On ear",
        dataStrkImg: "[product-desc-3] [product-name-3] worn",
        dataStrkImgRatio: "1x1",
        dataStrkImgWidth: "800"
      }
    ],
    isBestseller: true,
    isNew: false
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    rating: 4.6,
    reviews: 92,
    images: [
      {
        id: "amber-lace-1",
        alt: "Amber Lace Earrings - Textured gold filigree drop earrings",
        dataStrkImg: "[product-desc-4] [product-name-4]",
        dataStrkImgRatio: "1x1",
        dataStrkImgWidth: "800"
      },
      {
        id: "amber-lace-2",
        alt: "Amber Lace Earrings - Dangling",
        dataStrkImg: "[product-desc-4] [product-name-4] dangling",
        dataStrkImgRatio: "1x1",
        dataStrkImgWidth: "800"
      }
    ],
    isBestseller: false,
    isNew: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "Gold",
    rating: 5.0,
    reviews: 67,
    images: [
      {
        id: "royal-heirloom-1",
        alt: "Royal Heirloom Set - Gift-boxed earring + necklace set",
        dataStrkImg: "[product-desc-5] [product-name-5]",
        dataStrkImgRatio: "1x1",
        dataStrkImgWidth: "800"
      },
      {
        id: "royal-heirloom-2",
        alt: "Royal Heirloom Set - Gift box",
        dataStrkImg: "[product-desc-5] [product-name-5] gift box",
        dataStrkImgRatio: "1x1",
        dataStrkImgWidth: "800"
      }
    ],
    isBestseller: true,
    isNew: false
  }
];

export const categories = [
  { id: "earrings", name: "Earrings", image: "elegant gold earrings jewelry" },
  { id: "necklaces", name: "Necklaces", image: "gold necklace jewelry elegant" },
  { id: "huggies", name: "Huggies", image: "gold huggie earrings jewelry" }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    initial: "S",
    rating: 5,
    text: "Absolutely stunning pieces. The quality is exceptional and I receive compliments every time I wear them.",
    product: "Vivid Aura Jewels"
  },
  {
    id: 2,
    name: "Emily R.",
    initial: "E",
    rating: 5,
    text: "Perfect for gifting! Bought the Royal Heirloom Set for my sister's birthday and she was thrilled.",
    product: "Royal Heirloom Set"
  },
  {
    id: 3,
    name: "Jessica L.",
    initial: "J",
    rating: 5,
    text: "The Golden Sphere Huggies are my everyday go-to. Comfortable, beautiful, and great value.",
    product: "Golden Sphere Huggies"
  }
];

export const ugcPosts = [
  {
    id: 1,
    image: "woman wearing gold earrings elegant",
    caption: "Everyday elegance",
    dataStrkBg: "woman wearing gold earrings elegant",
    dataStrkBgRatio: "9x16",
    dataStrkBgWidth: "600"
  },
  {
    id: 2,
    image: "gold necklace layered look",
    caption: "Layered perfection",
    dataStrkBg: "gold necklace layered look",
    dataStrkBgRatio: "9x16",
    dataStrkBgWidth: "600"
  },
  {
    id: 3,
    image: "huggie earrings close up",
    caption: "Subtle sparkle",
    dataStrkBg: "huggie earrings close up",
    dataStrkBgRatio: "9x16",
    dataStrkBgWidth: "600"
  },
  {
    id: 4,
    image: "jewelry flat lay aesthetic",
    caption: "Morning ritual",
    dataStrkBg: "jewelry flat lay aesthetic",
    dataStrkBgRatio: "9x16",
    dataStrkBgWidth: "600"
  },
  {
    id: 5,
    image: "woman touching neck necklace",
    caption: "Timeless beauty",
    dataStrkBg: "woman touching neck necklace",
    dataStrkBgRatio: "9x16",
    dataStrkBgWidth: "600"
  }
];
