// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern interpretation of classic elegance.",
    details: "Handcrafted with 18K gold plating over sterling silver. Features a secure hinged closure and a single Swarovski crystal accent.",
    care: "Avoid contact with water, perfumes, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
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
    description: "A statement necklace adorned with multicolor floral crystals. Each stone is hand-selected for its brilliance.",
    details: "18K gold-plated chain with a 16-inch length and 2-inch extender. Features five hand-set crystal pendants in warm jewel tones.",
    care: "Avoid contact with water, perfumes, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
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
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    details: "18K gold plating over hypoallergenic stainless steel. Features a comfortable hinged closure. Measures 12mm in diameter.",
    care: "Avoid contact with water, perfumes, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
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
    description: "Intricately textured gold filigree drop earrings. A timeless silhouette with modern craftsmanship.",
    details: "18K gold-plated brass with delicate filigree detailing. Lightweight design with secure post backs. Drop length: 1.5 inches.",
    care: "Avoid contact with water, perfumes, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.6,
    reviewCount: 73,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Earrings",
    price: 95,
    material: "Gold",
    description: "A curated gift-boxed set featuring matching earrings and necklace. The perfect expression of thoughtfulness.",
    details: "Complete set includes: one pair of huggie earrings and one 16-inch pendant necklace. Both pieces feature 18K gold plating and Swarovski crystal accents. Presented in a premium gift box.",
    care: "Avoid contact with water, perfumes, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 67,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== currentId).slice(0, limit);