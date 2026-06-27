// Velmora Fine Jewelry - Seed Product Data

const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1630019852942-fd3b9bdfec87?w=800&q=80"
    ],
    rating: 4.8,
    reviews: 124,
    featured: true,
    bestseller: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    rating: 4.9,
    reviews: 89,
    featured: true,
    bestseller: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    rating: 4.7,
    reviews: 156,
    featured: true,
    bestseller: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1630019852942-fd3b9bdfec87?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    rating: 4.6,
    reviews: 72,
    featured: true,
    bestseller: false
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 5.0,
    reviews: 45,
    featured: true,
    bestseller: true
  }
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    initial: "S",
    rating: 5,
    text: "Absolutely stunning piece. The quality is exceptional and it arrived beautifully packaged. Will definitely be purchasing again."
  },
  {
    id: 2,
    name: "Emily R.",
    initial: "E",
    rating: 5,
    text: "I've received so many compliments on my Velmora necklace. The gold tone is perfect and hasn't tarnished at all."
  },
  {
    id: 3,
    name: "Jessica L.",
    initial: "J",
    rating: 5,
    text: "The earrings are even more beautiful in person. Delicate yet substantial. Perfect for everyday wear or special occasions."
  }
];

// UGC Reel Data
const ugcReels = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
    caption: "Golden hour glow ✨"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Everyday elegance"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1630019852942-fd3b9bdfec87?w=400&q=80",
    caption: "Stacked & styled"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Minimal & chic"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    caption: "Gifted with love 💝"
  }
];

export { products, testimonials, ugcReels };
