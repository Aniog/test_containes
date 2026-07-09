export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone for a subtle statement.",
    details: "18K gold plated brass with crystal embellishment. Hypoallergenic and tarnish-resistant.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "An exquisite multicolor floral crystal necklace that captures the essence of a blooming garden. Each crystal is hand-selected for its brilliance.",
    details: "18K gold plated chain with premium crystal pendants. Adjustable length with extender chain.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the perfect everyday statement piece.",
    details: "18K gold plated brass. Secure hinged closure. Lightweight design for all-day comfort.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework. Each piece is a testament to artisanal craftsmanship.",
    details: "18K gold plated brass with detailed filigree work. French wire hooks for secure fit.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    rating: 4.6,
    reviews: 72,
    inStock: true,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    category: "Sets",
    price: 95,
    material: "Gold",
    description: "A curated gift-boxed set featuring our signature earring and necklace pairing. Presented in a luxurious velvet box, perfect for gifting or self-indulgence.",
    details: "Includes one pair of Golden Sphere Huggies and one Majestic Flora Nectar necklace. 18K gold plated with premium crystals.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    rating: 4.9,
    reviews: 67,
    inStock: true,
  },
];

export const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

export const materials = ["All", "Gold", "Silver"];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));