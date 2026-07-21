// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    description: "Elegant gold ear cuff with crystal accent. A delicate statement piece that wraps around your ear for an ethereal, ethereal look.",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop"
    ],
    rating: 5,
    reviews: 128,
    inStock: true,
    variants: ["Gold", "Silver"]
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    description: "Stunning multicolor floral crystal necklace. Each crystal is carefully selected to create a harmonious blend of warm tones.",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop"
    ],
    rating: 5,
    reviews: 89,
    inStock: true,
    variants: ["Gold", "Rose Gold"]
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    description: "Chunky gold dome huggie earrings. The perfect everyday essential that adds a touch of luxury to any outfit.",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop"
    ],
    rating: 4,
    reviews: 256,
    inStock: true,
    variants: ["Gold", "Silver"]
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    description: "Textured gold filigree drop earrings. Intricate detailing meets modern elegance in these show-stopping pieces.",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop"
    ],
    rating: 5,
    reviews: 67,
    inStock: true,
    variants: ["Gold"]
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    description: "Gift-boxed earring + necklace set. The perfect gift for someone special, or a luxurious treat for yourself.",
    price: 95,
    category: "sets",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=750&fit=crop"
    ],
    rating: 5,
    reviews: 312,
    inStock: true,
    variants: ["Gold", "Rose Gold", "Silver"]
  }
];

export const categories = [
  { id: "earrings", name: "Earrings", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop" },
  { id: "necklaces", name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop" },
  { id: "huggies", name: "Huggies", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop" }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The quality is absolutely stunning. I've received so many compliments on my Golden Sphere Huggies.",
    initials: "S.M."
  },
  {
    id: 2,
    name: "Emily R.",
    rating: 5,
    text: "Perfect for everyday wear. The gold doesn't fade and the design is so elegant.",
    initials: "E.R."
  },
  {
    id: 3,
    name: "Jessica K.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift - it was beautifully packaged and my friend loved it!",
    initials: "J.K."
  }
];

export const ugcContent = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop",
    caption: "Everyday luxury ✨"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=600&fit=crop",
    caption: "My new favorite piece"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=600&fit=crop",
    caption: "Obsessed with these"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=600&fit=crop",
    caption: "Simple yet stunning"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=600&fit=crop",
    caption: "Gold goddess"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=600&fit=crop",
    caption: "Effortless elegance"
  }
];