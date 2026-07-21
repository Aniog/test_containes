export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone.",
    details: "Handcrafted with 18K gold plating over sterling silver. Features a premium crystal accent.",
    care: "Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns accepted.",
    rating: 4.8,
    reviews: 124,
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
    description: "A stunning multicolor floral crystal necklace that captures light beautifully. The perfect statement piece.",
    details: "18K gold plated chain with hand-set multicolor crystals. Adjustable length with extender.",
    care: "Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns accepted.",
    rating: 4.9,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
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
    details: "Solid 18K gold plated brass with a polished finish. Secure hinged closure.",
    care: "Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns accepted.",
    rating: 4.7,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80"
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
    description: "Intricate textured gold filigree drop earrings inspired by vintage lacework. Lightweight and elegant.",
    details: "18K gold plated sterling silver with delicate filigree detailing. French wire backs.",
    care: "Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns accepted.",
    rating: 4.6,
    reviews: 72,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
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
    description: "A beautifully gift-boxed earring and necklace set. The perfect gift for someone special.",
    details: "Includes matching earrings and necklace in premium gift packaging. 18K gold plated.",
    care: "Avoid contact with perfumes, lotions, and harsh chemicals. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns accepted.",
    rating: 4.9,
    reviews: 203,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== currentId).slice(0, limit);