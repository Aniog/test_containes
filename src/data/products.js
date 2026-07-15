// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a subtle crystal accent. A modern interpretation of classic elegance.",
    details: "Handcrafted with 18K gold plating over sterling silver. Features a brilliant-cut crystal accent.",
    care: "Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be unworn with original packaging.",
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
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
    description: "A statement necklace adorned with multicolor floral crystals. Perfect for evening occasions or as a cherished gift.",
    details: "18K gold-plated chain with hand-set multicolor crystal pendants. Adjustable length.",
    care: "Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be unworn with original packaging.",
    rating: 4.9,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
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
    details: "Solid 18K gold-plated brass with a polished finish. Secure hinged closure.",
    care: "Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be unworn with original packaging.",
    rating: 4.7,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
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
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework.",
    details: "18K gold-plated sterling silver with delicate filigree detailing. Lightweight design.",
    care: "Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be unworn with original packaging.",
    rating: 4.6,
    reviews: 73,
    images: [
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
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
    description: "A curated gift set featuring matching earrings and necklace. Presented in a signature velvet box.",
    details: "Complete set includes drop earrings and pendant necklace in 18K gold plating. Gift-ready packaging included.",
    care: "Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be unworn with original packaging.",
    rating: 4.9,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);