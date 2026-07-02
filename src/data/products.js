export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    category: "earrings",
    price: 42,
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone for a touch of refined sparkle.",
    material: "18K Gold Plated Brass, Crystal",
    images: {
      gold: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      silver: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    },
    rating: 4.8,
    reviewCount: 124,
    inStock: true
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    category: "necklaces",
    price: 68,
    description: "An enchanting multicolor floral crystal necklace that captures light with every movement. A statement piece for the modern romantic.",
    material: "18K Gold Plated Brass, Multicolor Crystals",
    images: {
      gold: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      silver: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    },
    rating: 4.9,
    reviewCount: 89,
    inStock: true
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    category: "huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are destined to become your everyday signature.",
    material: "18K Gold Plated Brass",
    images: {
      gold: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      silver: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    },
    rating: 4.7,
    reviewCount: 156,
    inStock: true
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    category: "earrings",
    price: 54,
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework. Lightweight and elegant for day-to-night wear.",
    material: "18K Gold Plated Brass",
    images: {
      gold: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      silver: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    },
    rating: 4.6,
    reviewCount: 72,
    inStock: true
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    category: "sets",
    price: 95,
    description: "A beautifully gift-boxed pairing of our signature earrings and necklace. The perfect present for someone special—or yourself.",
    material: "18K Gold Plated Brass, Crystal",
    images: {
      gold: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      silver: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    },
    rating: 4.9,
    reviewCount: 203,
    inStock: true
  }
]

export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id))
}

export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== parseInt(currentId))
    .slice(0, limit)
}