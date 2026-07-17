// Seed product data for Velmora Fine Jewelry
const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent. A modern statement piece that adds effortless edge to any look.",
    price: 42,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    category: "Earrings",
    material: "Gold",
    inStock: true,
    rating: 4.8,
    reviews: 124,
    isBestseller: true,
    details: "This elegant ear cuff features a brilliant crystal accent set in 18K gold plating. No piercing required — simply slide onto the ear cartilage for an instant style upgrade.",
    materials: "18K Gold Plated over brass, Crystal accent",
    care: "Avoid contact with water, perfumes, and lotions. Store in provided jewelry pouch. Clean gently with a soft cloth."
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace. A vibrant, nature-inspired piece that brings color to your everyday.",
    price: 68,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    category: "Necklaces",
    material: "Gold",
    inStock: true,
    rating: 4.9,
    reviews: 89,
    isBestseller: true,
    details: "Inspired by blooming gardens, this necklace features a delicate array of multicolor floral crystals. Each stone is hand-set in 18K gold plating for a luxurious finish.",
    materials: "18K Gold Plated over brass, Multi-color crystals",
    care: "Avoid contact with water, perfumes, and lotions. Store in provided jewelry pouch. Clean gently with a soft cloth."
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings. Bold yet refined — the perfect everyday luxury.",
    price: 38,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    category: "Huggies",
    material: "Gold",
    inStock: true,
    rating: 4.7,
    reviews: 156,
    isBestseller: true,
    details: "These substantial huggie hoops feature a smooth, domed design in 18K gold plating. The secure hinge closure ensures all-day comfort.",
    materials: "18K Gold Plated over brass, Hypoallergenic",
    care: "Avoid contact with water, perfumes, and lotions. Store in provided jewelry pouch. Clean gently with a soft cloth."
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings. Intricate lace-like detailing catches the light beautifully.",
    price: 54,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    category: "Earrings",
    material: "Gold",
    inStock: true,
    rating: 4.6,
    reviews: 72,
    isBestseller: false,
    details: "Delicate filigree work creates a lace-like pattern in these drop earrings. The textured gold surface catches and reflects light from every angle.",
    materials: "18K Gold Plated over brass, Hypoallergenic posts",
    care: "Avoid contact with water, perfumes, and lotions. Store in provided jewelry pouch. Clean gently with a soft cloth."
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set. The perfect present for someone special — or yourself.",
    price: 95,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    category: "Sets",
    material: "Gold",
    inStock: true,
    rating: 5.0,
    reviews: 45,
    isBestseller: true,
    details: "A curated set featuring matching earrings and necklace in our signature 18K gold plating. Presented in our signature Velmora gift box with velvet interior.",
    materials: "18K Gold Plated over brass, Hypoallergenic",
    care: "Avoid contact with water, perfumes, and lotions. Store in provided jewelry pouch. Clean gently with a soft cloth."
  }
];

// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: "Sarah",
    initial: "S",
    rating: 5,
    text: "Absolutely stunning quality. I get compliments every time I wear my Velmora pieces. Worth every penny.",
    date: "2024-03-15"
  },
  {
    id: 2,
    name: "Emily",
    initial: "E",
    rating: 5,
    text: "The perfect gift! Bought the Royal Heirloom Set for my sister's birthday. The packaging is so luxe.",
    date: "2024-02-28"
  },
  {
    id: 3,
    name: "Maria",
    initial: "M",
    rating: 5,
    text: "Finally, jewelry that doesn't irritate my sensitive ears. The hypoallergenic claim is real!",
    date: "2024-04-02"
  }
];

// UGC / Instagram-style content
export const ugcContent = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Morning light & gold details",
    username: "@velmora"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Stacked & styled",
    username: "@velmora"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
    caption: "Everyday elegance",
    username: "@velmora"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Gifted with love",
    username: "@velmora"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Golden hour glow",
    username: "@velmora"
  }
];

export default products;
