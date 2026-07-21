export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone for a touch of refined sparkle.",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    ],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "An exquisite multicolor floral crystal necklace that captures light with every movement. A statement piece for the modern romantic.",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80"
    ],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are destined to become everyday favorites.",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1535632787350-4e68b0f2c8e3?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework. Lightweight and elegant for all-day wear.",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
    ],
    rating: 4.6,
    reviews: 72,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "A beautifully gift-boxed pairing of our signature earrings and necklace. The perfect present for someone you treasure—or yourself.",
    price: 95,
    category: "Sets",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    rating: 4.9,
    reviews: 63,
  },
]

export const getProductById = (id) => products.find(p => p.id === parseInt(id))
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit)