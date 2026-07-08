// Seed product data for Velmora Fine Jewelry
const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    description: "Gold ear cuff with crystal accent. A delicate statement piece that catches the light with every turn.",
    price: 42,
    category: "Earrings",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 4.8,
    reviews: 124,
    bestseller: true
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    description: "Multicolor floral crystal necklace. Inspired by blooming gardens, this piece brings natural elegance to any outfit.",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 4.9,
    reviews: 89,
    bestseller: true
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    description: "Chunky gold dome huggie earrings. Bold yet refined, these huggies make a perfect everyday luxury.",
    price: 38,
    category: "Huggies",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 4.7,
    reviews: 156,
    bestseller: true
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    description: "Textured gold filigree drop earrings. Intricate detailing meets timeless design in this artisan-crafted piece.",
    price: 54,
    category: "Earrings",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 4.9,
    reviews: 67,
    bestseller: false
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    description: "Gift-boxed earring + necklace set. The perfect gift for someone special, presented in our signature velvet box.",
    price: 95,
    category: "Sets",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 5.0,
    reviews: 43,
    bestseller: true
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah",
    initial: "S",
    rating: 5,
    text: "Absolutely stunning quality. I haven't taken off my huggies since they arrived. Worth every penny.",
    date: "2024-03-15"
  },
  {
    id: 2,
    name: "Emily",
    initial: "E",
    rating: 5,
    text: "The perfect gift for myself. The packaging is so luxe, it felt like opening a treasure chest.",
    date: "2024-03-10"
  },
  {
    id: 3,
    name: "Jessica",
    initial: "J",
    rating: 5,
    text: "Hypoallergenic and beautiful. Finally, gold jewelry that doesn't irritate my sensitive ears.",
    date: "2024-03-08"
  }
];

// UGC content for reel-style section
const ugcContent = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Everyday elegance ✨",
    author: "@maria_styling"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Layered to perfection 💫",
    author: "@jewelry_lover"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    caption: "My new favorite set 🤍",
    author: "@goldenaura"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Subtle sparkle, major impact ✨",
    author: "@minimalchic"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Gifted myself these beauties 🎁",
    author: "@selfcarefirst"
  }
];

export { products, testimonials, ugcContent };
