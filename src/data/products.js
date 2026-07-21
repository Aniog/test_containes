export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern interpretation of classic elegance.",
    details: "18K gold plated brass with crystal embellishment. Lightweight and comfortable for all-day wear.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
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
    description: "A statement necklace adorned with multicolor floral crystals. Each stone is hand-selected for its unique brilliance.",
    details: "18K gold plated chain with crystal pendant. Adjustable length from 16\" to 18\".",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
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
    description: "Chunky dome huggie earrings with a sculptural silhouette. Bold yet refined, these are destined to become everyday staples.",
    details: "18K gold plated brass. Secure hinged closure. Measures 12mm in diameter.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
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
    description: "Intricately textured filigree drop earrings inspired by vintage lacework. A romantic addition to any jewelry collection.",
    details: "18K gold plated brass with delicate filigree detailing. Lightweight design with secure post backs.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
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
    description: "A curated gift set featuring a matching earring and necklace duo. Presented in a luxurious keepsake box, perfect for gifting or self-treasuring.",
    details: "18K gold plated brass. Includes drop earrings and a delicate pendant necklace. Gift box included.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    rating: 4.9,
    reviews: 63,
    inStock: true
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);