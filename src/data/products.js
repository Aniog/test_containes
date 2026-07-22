const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    details: "Elevate your ear stack with this stunning gold ear cuff. Featuring a delicate crystal accent that catches the light beautifully, this piece adds effortless edge to any look. No piercing required.",
    materials: "18K Gold Plated on Brass, Crystal Accent",
    care: "Avoid contact with water, perfume, and cosmetics. Store in provided jewelry pouch."
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop"
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
    details: "A botanical dream in jewelry form. This exquisite necklace features multicolor floral crystals hand-set in a gold-plated pendant. Each piece is unique, capturing the ephemeral beauty of a blooming garden.",
    materials: "18K Gold Plated on Brass, Multicolor Crystals",
    care: "Avoid contact with water, perfume, and cosmetics. Store in provided jewelry pouch."
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: true,
    details: "Make a statement with these substantial huggie hoops. The domed design catches light from every angle, while the secure hinge closure ensures all-day comfort. Perfect for curating your dream ear stack.",
    materials: "18K Gold Plated on Brass, Hypoallergenic",
    care: "Avoid contact with water, perfume, and cosmetics. Store in provided jewelry pouch."
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop"
    ],
    rating: 4.9,
    reviews: 67,
    inStock: true,
    featured: true,
    details: "Intricate filigree work meets modern design in these stunning drop earrings. The textured gold lace pattern creates beautiful movement and captures light with every turn of your head.",
    materials: "18K Gold Plated on Brass, Hypoallergenic",
    care: "Avoid contact with water, perfume, and cosmetics. Store in provided jewelry pouch."
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
    ],
    rating: 5.0,
    reviews: 43,
    inStock: true,
    featured: true,
    details: "The ultimate gift set for the jewelry lover in your life. This curated collection includes a matching necklace and earrings, both featuring our signature 18K gold plating and timeless design.",
    materials: "18K Gold Plated on Brass, Hypoallergenic",
    care: "Avoid contact with water, perfume, and cosmetics. Store in provided jewelry pouch."
  }
];

const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    initial: "S",
    rating: 5,
    text: "Absolutely stunning pieces. The quality is incredible for the price point. I've received so many compliments!"
  },
  {
    id: 2,
    name: "Emily R.",
    initial: "E",
    rating: 5,
    text: "Velmora has become my go-to for gifts. The packaging is beautiful and the jewelry is even more gorgeous in person."
  },
  {
    id: 3,
    name: "Jessica L.",
    initial: "J",
    rating: 5,
    text: "I love that these are hypoallergenic. Finally, beautiful jewelry that doesn't irritate my sensitive ears!"
  }
];

export { products, categories, testimonials };
