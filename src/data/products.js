// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone for a subtle statement.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    description: "A stunning multicolor floral crystal necklace that captures light beautifully. Features an adjustable chain for versatile styling.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Lightweight and comfortable for everyday wear.",
    material: "18K Gold Plated Brass",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework. Lightweight with elegant movement.",
    material: "18K Gold Plated Brass",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.6,
    reviews: 72
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    description: "A beautifully gift-boxed earring and necklace set featuring our signature designs. The perfect gift for someone special.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    imageAlt: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 5.0,
    reviews: 43
  }
]

export const getProductById = (id) => products.find(p => p.id === parseInt(id))

export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== parseInt(currentId))
    .slice(0, limit)
}