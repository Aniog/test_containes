export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern interpretation of classic elegance.",
    details: "18K gold plated brass with crystal embellishment. Lightweight and comfortable for all-day wear.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be in original condition with tags attached.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A stunning multicolor floral crystal necklace that captures the essence of a blooming garden. Each crystal is hand-selected for its brilliance.",
    details: "18K gold plated chain with premium crystal pendants. Adjustable length from 16-18 inches.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be in original condition with tags attached.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these statement pieces add instant sophistication.",
    details: "18K gold plated brass. Secure hinged closure. Measures 0.6 inches in diameter.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be in original condition with tags attached.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1535632787350-4e68b0cfdbac?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4bc759e0519d?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Intricately textured gold filigree drop earrings inspired by vintage lace patterns. A timeless piece that transitions effortlessly from day to evening.",
    details: "18K gold plated brass with delicate filigree work. Lightweight design. Drop length: 1.5 inches.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be in original condition with tags attached.",
    rating: 4.6,
    reviewCount: 73,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Earrings",
    price: 95,
    material: "Gold",
    description: "An exquisite gift-boxed earring and necklace set. The perfect heirloom piece for those who appreciate timeless beauty and exceptional craftsmanship.",
    details: "18K gold plated brass with crystal accents. Includes matching stud earrings and pendant necklace. Presented in a premium gift box.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be in original condition with tags attached.",
    rating: 4.9,
    reviewCount: 67,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
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