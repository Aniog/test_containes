export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern interpretation of classic elegance.",
    details: "18K gold plated brass with crystal embellishment. Lightweight and comfortable for all-day wear.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A stunning multicolor floral crystal necklace that captures the essence of a blooming garden.",
    details: "18K gold plated chain with hand-set crystal pendants. Adjustable length with lobster clasp.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural, modern silhouette.",
    details: "18K gold plated brass. Secure hinged closure. Lightweight despite their bold presence.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Intricately textured gold filigree drop earrings with an heirloom-inspired design.",
    details: "18K gold plated brass with delicate filigree work. French wire backs for comfortable wear.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80"
    ],
    rating: 4.6,
    reviews: 72,
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Earrings",
    price: 95,
    material: "Gold",
    description: "A beautifully gift-boxed earring and necklace set, perfect for gifting or treating yourself.",
    details: "Includes matching earrings and necklace in 18K gold plating. Presented in a premium gift box with velvet interior.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    rating: 4.9,
    reviews: 203,
    inStock: true
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);