// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern interpretation of classic elegance.",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "An exquisite multicolor floral crystal necklace that captures light with every movement. Perfect for evening occasions.",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80",
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are destined to become everyday favorites.",
    price: 38,
    category: "Earrings",
    material: "18K Gold Plated",
    image: "https://images.unsplash.com/photo-1506630448388-4bc034008a1b?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework. Lightweight and ethereal.",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    rating: 4.6,
    reviews: 73,
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "A curated gift-boxed pairing of our signature earrings and necklace. Presented in a velvet-lined keepsake box.",
    price: 95,
    category: "Sets",
    material: "18K Gold Plated",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
    rating: 5.0,
    reviews: 42,
    inStock: true,
  },
]

export const getProductById = (id) => products.find((p) => p.id === parseInt(id))

export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== parseInt(currentId))
    .slice(0, limit)
}
