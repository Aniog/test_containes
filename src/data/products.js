// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern interpretation of classic elegance.",
    details: "18K gold plated brass with premium crystal. Hypoallergenic and tarnish-resistant.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A stunning multicolor floral crystal necklace that captures light with every movement. Perfect for both day and evening wear.",
    details: "18K gold plated chain with hand-set premium crystals. Adjustable length 16-18 inches.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are destined to become everyday favorites.",
    details: "18K gold plated brass. Secure hinged closure. Lightweight design for all-day comfort.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework. Each piece is a testament to artisanal craftsmanship.",
    details: "18K gold plated brass with delicate filigree detailing. French wire hooks.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    material: "Gold",
    description: "A beautifully gift-boxed earring and necklace set. The perfect expression of thoughtfulness for someone special—or yourself.",
    details: "Includes matching earrings and necklace in 18K gold plated brass. Presented in a premium gift box with velvet interior.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
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