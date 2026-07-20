export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description:
      "A sculptural gold ear cuff finished with a single crystal accent. Designed to sit high on the ear for an editorial, modern look.",
    details:
      "18K gold-plated brass with crystal accent. Hypoallergenic. One size. Made for right or left ear.",
    care:
      "Avoid contact with perfume, lotion, and water. Store in a dry pouch when not in use. Clean gently with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5-10 business days. Express delivery available at checkout.",
    tone: "gold",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    ],
    relatedIds: ["golden-sphere-huggies", "amber-lace-earrings"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description:
      "A multicolor floral crystal necklace inspired by pressed botanicals. Lightweight chain with a delicate pendant that catches the light.",
    details:
      "18K gold-plated brass with multicolor crystals. Adjustable chain 16-18 inches. Lobster clasp.",
    care:
      "Remove before swimming, bathing, or exercising. Store separately to avoid scratches. Polish with a jewelry cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5-10 business days. Express delivery available at checkout.",
    tone: "gold",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
    ],
    relatedIds: ["royal-heirloom-set", "vivid-aura-jewels"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description:
      "Chunky gold dome huggie earrings with a smooth, polished finish. A modern staple that pairs with everything.",
    details:
      "18K gold-plated brass. Hinge closure. Approximately 12mm diameter. Lightweight for all-day wear.",
    care:
      "Wipe with a soft cloth after wearing. Avoid harsh chemicals. Store in a jewelry box or pouch.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5-10 business days. Express delivery available at checkout.",
    tone: "gold",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    ],
    relatedIds: ["vivid-aura-jewels", "amber-lace-earrings"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    rating: 4.8,
    reviewCount: 156,
    description:
      "Textured gold filigree drop earrings with an organic, lace-like silhouette. Elegant movement with every turn.",
    details:
      "18K gold-plated brass with textured finish. French wire closure. Approximately 45mm drop length.",
    care:
      "Handle with care. Avoid pulling or bending. Clean with a soft dry cloth. Store flat to maintain shape.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5-10 business days. Express delivery available at checkout.",
    tone: "gold",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    ],
    relatedIds: ["vivid-aura-jewels", "golden-sphere-huggies"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Necklaces",
    price: 95,
    rating: 5.0,
    reviewCount: 67,
    description:
      "A gift-boxed set featuring a delicate necklace and matching earrings. The perfect heirloom-worthy present.",
    details:
      "18K gold-plated brass. Necklace 16-18 inches adjustable. Earrings with secure backs. Presented in a Velmora gift box.",
    care:
      "Store in the included pouch when not worn. Polish gently with a soft cloth. Avoid contact with chemicals.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5-10 business days. Express delivery available at checkout.",
    tone: "gold",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    ],
    relatedIds: ["majestic-flora-nectar", "amber-lace-earrings"],
  },
];

export const categories = [
  { id: "earrings", label: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
  { id: "necklaces", label: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
  { id: "huggies", label: "Huggies", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" },
];

export const testimonials = [
  { id: 1, name: "Sophia M.", text: "The packaging alone felt like a gift. The necklace is even more delicate in person.", stars: 5 },
  { id: 2, name: "Elena R.", text: "I bought the huggies for myself and ended up ordering the set for my sister.", stars: 5 },
  { id: 3, name: "Claire T.", text: "Finally jewelry that feels premium without the markup. I wear the ear cuffs daily.", stars: 5 },
];
