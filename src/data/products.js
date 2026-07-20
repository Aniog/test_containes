// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    material: "gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern interpretation of classic elegance.",
    details: "Handcrafted with 18K gold plating over sterling silver. Features a secure hinged closure and a single Swarovski crystal accent.",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    material: "gold",
    description: "A statement necklace adorned with multicolor floral crystals. Each petal captures light with remarkable brilliance.",
    details: "18K gold-plated chain with hand-set crystal flowers. Adjustable length from 16\" to 18\". Features a secure lobster clasp.",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    material: "gold",
    description: "Chunky gold dome huggies with a sculptural silhouette. Bold yet refined, these earrings make a statement.",
    details: "18K gold plating over hypoallergenic stainless steel. Comfortable hinged closure. Lightweight design for all-day wear.",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    material: "gold",
    description: "Intricate filigree drop earrings with a textured gold finish. Inspired by vintage lace patterns.",
    details: "18K gold-plated brass with delicate filigree work. Lightweight design with secure push-back closures. 2.5\" drop length.",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.6,
    reviewCount: 73,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "earrings",
    price: 95,
    material: "gold",
    description: "A curated gift set featuring matching earrings and necklace. Presented in a signature Velmora gift box.",
    details: "Includes: 1 pair of delicate stud earrings and 1 pendant necklace. Both pieces feature 18K gold plating and Swarovski crystals. Gift box included.",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 67,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
];

export const categories = [
  { id: "earrings", name: "Earrings", count: 3 },
  { id: "necklaces", name: "Necklaces", count: 1 },
  { id: "huggies", name: "Huggies", count: 1 },
];

export const materials = [
  { id: "gold", name: "18K Gold" },
  { id: "silver", name: "Sterling Silver" },
];