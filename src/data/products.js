export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Delicate gold ear cuff featuring a single crystal accent. Lightweight and sculptural, designed for everyday elegance.",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "A statement necklace adorned with multicolor floral crystals. Each piece is hand-assembled for a one-of-a-kind finish.",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky dome huggie earrings with a polished gold finish. Bold yet refined, these are the perfect everyday statement.",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Intricate filigree drop earrings with a textured gold surface. Inspired by vintage heirlooms, reimagined for today.",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.6,
    reviews: 72
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "A curated gift set featuring our signature earrings and necklace. Presented in a velvet-lined keepsake box.",
    price: 95,
    category: "Sets",
    material: "18K Gold Plated",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.9,
    reviews: 63
  }
]

export const getProductById = (id) => products.find(p => p.id === parseInt(id))
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit)