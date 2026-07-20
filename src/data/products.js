const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    title: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent. A delicate piece that catches the light with every movement.",
    price: 42,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    category: "Earrings",
    material: "Gold",
    rating: 4.8,
    reviews: 124,
    featured: true,
    bestseller: true
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    title: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace. Each crystal is hand-set to create a blooming garden effect.",
    price: 68,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    category: "Necklaces",
    material: "Gold",
    rating: 4.9,
    reviews: 89,
    featured: true,
    bestseller: true
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    title: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings. Perfect for everyday elegance with a modern twist.",
    price: 38,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    category: "Huggies",
    material: "Gold",
    rating: 4.7,
    reviews: 156,
    featured: true,
    bestseller: true
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    title: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings. Intricate detailing inspired by vintage jewelry craftsmanship.",
    price: 54,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    category: "Earrings",
    material: "Gold",
    rating: 4.6,
    reviews: 92,
    featured: true,
    bestseller: false
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    title: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set. The perfect gift for someone special, presented in our signature packaging.",
    price: 95,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    category: "Sets",
    material: "Gold",
    rating: 5.0,
    reviews: 67,
    featured: true,
    bestseller: true
  }
];

const categories = [
  { id: "earrings", name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
  { id: "necklaces", name: "Necklaces", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80" },
  { id: "huggies", name: "Huggies", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely stunning piece. The quality is exceptional and it arrived beautifully packaged.",
    initial: "S"
  },
  {
    id: 2,
    name: "Emily R.",
    rating: 5,
    text: "I've received so many compliments on my Velmora necklace. It's my new everyday favorite.",
    initial: "E"
  },
  {
    id: 3,
    name: "Jessica L.",
    rating: 5,
    text: "The perfect gift! The presentation box made it feel so luxurious. Will definitely order again.",
    initial: "J"
  }
];

export { products, categories, testimonials };
