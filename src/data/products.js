const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "Gold",
    images: [
      "https://via.placeholder.com/800x800/FAF8F5/C9A96E?text=Vivid+Aura+Jewels+1",
      "https://via.placeholder.com/800x800/FAF8F5/C9A96E?text=Vivid+Aura+Jewels+2"
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    details: "Elevate your edge with our Vivid Aura Jewels ear cuff. Handcrafted in 18k gold plating with a sparkling crystal accent, this piece adds the perfect touch of modern elegance to any look. No piercing required — simply slide and shine.",
    materials: "18K Gold Plated Brass, Crystal Accent",
    care: "Avoid contact with water, perfume, and cosmetics. Store in provided pouch when not worn.",
    variants: [
      { id: "gold", name: "Gold", color: "#C9A96E", available: true },
      { id: "silver", name: "Silver", color: "#E8E8E8", available: true }
    ]
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    images: [
      "https://via.placeholder.com/800x800/FAF8F5/C9A96E?text=Majestic+Flora+1",
      "https://via.placeholder.com/800x800/FAF8F5/C9A96E?text=Majestic+Flora+2"
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
    details: "A botanical dream in gold. The Majestic Flora Nectar necklace features a delicate multicolor floral pendant adorned with hand-set crystals. Each piece captures the ethereal beauty of a garden in bloom, suspended on a dainty 18k gold-plated chain.",
    materials: "18K Gold Plated Brass, Multi-color Crystals",
    care: "Avoid contact with water, perfume, and cosmetics. Store in provided pouch when not worn.",
    variants: [
      { id: "gold", name: "Gold", color: "#C9A96E", available: true },
      { id: "silver", name: "Silver", color: "#E8E8E8", available: false }
    ]
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "Gold",
    images: [
      "https://via.placeholder.com/800x800/FAF8F5/C9A96E?text=Golden+Sphere+1",
      "https://via.placeholder.com/800x800/FAF8F5/C9A96E?text=Golden+Sphere+2"
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: true,
    details: "Sculptural simplicity at its finest. Our Golden Sphere Huggies feature a substantial domed silhouette in polished 18k gold plate. The perfect everyday earring — substantial enough to make a statement, comfortable enough for all-day wear.",
    materials: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and cosmetics. Store in provided pouch when not worn.",
    variants: [
      { id: "gold", name: "Gold", color: "#C9A96E", available: true },
      { id: "silver", name: "Silver", color: "#E8E8E8", available: true }
    ]
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    images: [
      "https://via.placeholder.com/800x800/FAF8F5/C9A96E?text=Amber+Lace+1",
      "https://via.placeholder.com/800x800/FAF8F5/C9A96E?text=Amber+Lace+2"
    ],
    rating: 4.9,
    reviews: 67,
    inStock: true,
    featured: true,
    details: "Intricate artistry in every detail. The Amber Lace Earrings showcase meticulous filigree work in warm 18k gold plate, creating a lace-like pattern that catches the light with every movement. A true heirloom piece for your collection.",
    materials: "18K Gold Plated Brass, Filigree Detail",
    care: "Avoid contact with water, perfume, and cosmetics. Store in provided pouch when not worn.",
    variants: [
      { id: "gold", name: "Gold", color: "#C9A96E", available: true }
    ]
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "Gold",
    images: [
      "https://via.placeholder.com/800x800/FAF8F5/C9A96E?text=Royal+Heirloom+1",
      "https://via.placeholder.com/800x800/FAF8F5/C9A96E?text=Royal+Heirloom+2"
    ],
    rating: 5.0,
    reviews: 43,
    inStock: true,
    featured: true,
    details: "The ultimate gifting experience. Our Royal Heirloom Set pairs our bestselling earrings with a matching necklace, beautifully presented in our signature velvet box. A complete jewelry story that transitions seamlessly from day to evening.",
    materials: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and cosmetics. Store in provided pouch when not worn.",
    variants: [
      { id: "gold", name: "Gold", color: "#C9A96E", available: true },
      { id: "silver", name: "Silver", color: "#E8E8E8", available: true }
    ]
  }
];

export default products;