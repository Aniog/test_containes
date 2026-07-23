// Velmora Fine Jewelry - Product Data
// Seed products for the jewelry storefront

const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
    featured: true,
    tags: ["bestseller", "new"]
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    variants: ["Gold"],
    inStock: true,
    featured: true,
    tags: ["bestseller"]
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
    featured: true,
    tags: ["bestseller"]
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.6,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold"],
    inStock: true,
    featured: false,
    tags: ["new"]
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 43,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold"],
    inStock: true,
    featured: true,
    tags: ["bestseller", "gift"]
  }
];

// UGC Reels data
const ugcReels = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Everyday elegance ✨",
    author: "@sarahj"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Stacked to perfection 💫",
    author: "@emilyk"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
    caption: "Golden hour glow 🌅",
    author: "@aisham"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    caption: "My daily essentials ✨",
    author: "@chloet"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Gifted myself these 🎁",
    author: "@ninap"
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah",
    initial: "S",
    rating: 5,
    text: "Absolutely stunning quality. The gold tone is rich and doesn't fade. I wear my Vivid Aura ear cuff every day.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Emily",
    initial: "E",
    rating: 5,
    text: "The Majestic Flora necklace is even more beautiful in person. Packaging was luxurious too. Will definitely order again!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Aisha",
    initial: "A",
    rating: 5,
    text: "Finally, affordable jewelry that doesn't look cheap. The Golden Sphere Huggies are my new favorite accessory.",
    date: "3 weeks ago"
  }
];

// Categories
const categories = [
  {
    id: "earrings",
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    link: "/shop?category=earrings"
  },
  {
    id: "necklaces",
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    link: "/shop?category=necklaces"
  },
  {
    id: "huggies",
    name: "Huggies",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    link: "/shop?category=huggies"
  }
];

export { products, ugcReels, testimonials, categories };
