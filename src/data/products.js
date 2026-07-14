export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern statement piece that catches the light with every movement.",
    details: "18K gold plated brass with crystal embellishment. Lightweight and comfortable for all-day wear.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A breathtaking multicolor floral crystal necklace that blooms with elegance. Each petal catches light in a symphony of color.",
    details: "18K gold plated chain with hand-set multicolor crystals. Adjustable length with extender chain.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    ],
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the everyday luxury staple.",
    details: "18K gold plated brass. Secure hinged closure. Hypoallergenic posts.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework. A romantic heirloom piece.",
    details: "18K gold plated brass with delicate filigree detailing. French wire hooks.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    ],
    rating: 4.6,
    reviewCount: 72,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    category: "Earrings",
    price: 95,
    material: "Gold",
    description: "A curated gift-boxed pairing of our signature earrings and necklace. The perfect expression of thoughtfulness.",
    details: "Includes one pair of earrings and one necklace in a premium gift box. 18K gold plated with crystal accents.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    ],
    rating: 4.9,
    reviewCount: 63,
  },
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);