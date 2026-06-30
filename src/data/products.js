// Seed product data for Velmora Fine Jewelry
const products = [
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
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    details: "A stunning gold ear cuff adorned with sparkling crystal accents. Perfect for adding a touch of elegance to any outfit. Hypoallergenic and nickel-free.",
    materials: "18K Gold Plated, Crystal Accents, Hypoallergenic Base Metal",
    inStock: true
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
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    details: "A breathtaking multicolor floral crystal necklace that captures the beauty of a blooming garden. Each crystal is carefully selected for its brilliance.",
    materials: "18K Gold Plated, Multi-color Crystals, Hypoallergenic Base Metal",
    inStock: true
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
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    details: "Chunky gold dome huggie earrings that make a bold statement while maintaining everyday wearability. The perfect blend of modern and classic.",
    materials: "18K Gold Plated, Hypoallergenic Base Metal",
    inStock: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    rating: 4.9,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    details: "Delicate textured gold filigree drop earrings with intricate amber-toned details. A true work of artisanal craftsmanship.",
    materials: "18K Gold Plated, Amber-toned Accents, Hypoallergenic Base Metal",
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "Gold",
    rating: 5.0,
    reviews: 43,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    details: "A luxurious gift-boxed set featuring matching earrings and necklace. The perfect gift for someone special or a treasured addition to your own collection.",
    materials: "18K Gold Plated, Premium Crystal Accents, Hypoallergenic Base Metal",
    inStock: true
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely stunning pieces. The quality is exceptional and I receive compliments every time I wear my Velmora jewelry.",
    initial: "S"
  },
  {
    id: 2,
    name: "Emily R.",
    rating: 5,
    text: "I've purchased multiple items and they all exceed expectations. Beautiful, delicate, and the perfect price point for demi-fine jewelry.",
    initial: "E"
  },
  {
    id: 3,
    name: "Jessica L.",
    rating: 5,
    text: "The Royal Heirloom Set was the perfect gift. Elegant packaging and the pieces are even more beautiful in person.",
    initial: "J"
  }
];

// UGC Reel data
const ugcReels = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Golden hour glow ✨",
    username: "@sarahstyles"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Everyday elegance 💫",
    username: "@emilyj"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Obsessed with these huggies 💛",
    username: "@jessicat"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Perfect gift for myself 🎁",
    username: "@aishawears"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Velmora vibes only ✨",
    username: "@oliviad"
  }
];

export { products, testimonials, ugcReels };