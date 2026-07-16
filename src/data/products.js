export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern take on classic elegance.",
    details: "18K gold plated brass with crystal embellishment. Lightweight and comfortable for all-day wear.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A statement necklace adorned with multicolor floral crystals. Perfect for evening occasions.",
    details: "18K gold plated chain with hand-set crystal pendants. Adjustable length with lobster clasp.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviews: 87,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    details: "18K gold plated brass. Secure hinged closure. Hypoallergenic posts.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.7,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Intricately textured gold filigree drop earrings with an organic, lace-like pattern.",
    details: "18K gold plated brass with hand-etched detailing. French wire hooks.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.6,
    reviews: 92,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    category: "Earrings",
    price: 95,
    material: "Gold",
    description: "A curated gift set featuring matching earrings and necklace. Presented in a velvet-lined keepsake box.",
    details: "18K gold plated brass with crystal accents. Includes both earrings and necklace. Gift-ready packaging.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviews: 63,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);