// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    price: 42,
    category: "earrings",
    description: "A delicate gold ear cuff adorned with a shimmering crystal accent. The perfect piece to elevate any look, worn alone for subtle elegance or stacked for maximum impact.",
    shortDescription: "Gold ear cuff with crystal accent",
    materials: "18K Gold Plated, Cubic Zirconia",
    care: "Store in a cool, dry place. Avoid contact with water, perfumes, and cosmetics. Clean gently with a soft cloth.",
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80"
    ],
    variants: ["Gold"],
    badge: null
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    price: 68,
    category: "necklaces",
    description: "A stunning multicolor floral crystal necklace that captures the essence of spring. Each crystal petal is carefully set to create a mesmerizing play of light, making it a true statement piece.",
    shortDescription: "Multicolor floral crystal necklace",
    materials: "18K Gold Plated, Multicolor Crystals",
    care: "Store separately to avoid scratching. Clean with a jewelry polishing cloth. Remove before swimming or exercising.",
    rating: 4.9,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599458252573-56ae36120de1?w=800&q=80"
    ],
    variants: ["Gold"],
    badge: "Bestseller"
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    price: 38,
    category: "huggies",
    description: "Chunky, bold, and beautifully minimal. These dome-shaped huggie earrings make a statement without overwhelming. Perfect for everyday luxury or special occasions.",
    shortDescription: "Chunky gold dome huggie earrings",
    materials: "18K Gold Plated, Sterling Silver Base",
    care: "Wipe with a soft cloth after wearing. Store in the provided pouch. Avoid harsh chemicals and abrasive surfaces.",
    rating: 4.7,
    reviews: 203,
    images: [
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    badge: null
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    price: 54,
    category: "earrings",
    description: "Intricate textured gold filigree creates these stunning drop earrings. The delicate lace-like pattern catches the light beautifully, adding a touch of vintage glamour to any ensemble.",
    shortDescription: "Textured gold filigree drop earrings",
    materials: "18K Gold Plated, Brass Base",
    care: "Keep away from moisture. Store in an airtight container. Clean carefully with a dry cloth to preserve the intricate detail.",
    rating: 4.9,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: ["Gold"],
    badge: "New"
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    price: 95,
    category: "sets",
    description: "The perfect gift, elegantly boxed. This matching earring and necklace set features classic designs that transcend trends. Presented in a luxurious gift box, ready to give or keep.",
    shortDescription: "Gift-boxed earring + necklace set",
    materials: "18K Gold Plated, Cubic Zirconia",
    care: "Store in the provided gift box. Clean both pieces together to maintain their matching shine. Avoid exposure to water and perfumes.",
    rating: 5.0,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
    ],
    variants: ["Gold"],
    badge: "Gift"
  }
];

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    description: "Studs, drops, and ear cuffs",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80"
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Chains, pendants, and layers",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
  },
  {
    id: "huggies",
    name: "Huggies",
    description: "Classic and contemporary hoops",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The quality is absolutely stunning. I receive compliments every time I wear my Majestic Flora necklace. It feels like fine jewelry at an accessible price.",
    product: "Majestic Flora Nectar"
  },
  {
    id: 2,
    name: "Emily R.",
    rating: 5,
    text: "Finally found gold jewelry that doesn't turn my skin green. The Golden Sphere Huggies are my daily go-to. Comfortable, stylish, and hypoallergenic.",
    product: "Golden Sphere Huggies"
  },
  {
    id: 3,
    name: "Jessica L.",
    rating: 5,
    text: "Purchased the Royal Heirloom Set as a gift for my sister's birthday. The packaging was exquisite and she absolutely loved it. Already ordered one for myself!",
    product: "Royal Heirloom Set"
  }
];

export const ugcImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop&q=80",
    caption: "Everyday elegance ✨"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop&q=80",
    caption: "My new favorite huggies"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop&q=80",
    caption: "Statement piece for the win"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1599458252573-56ae36120de1?w=400&h=711&fit=crop&q=80",
    caption: "Layered and loving it"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop&q=80",
    caption: "The details make the difference"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop&q=80",
    caption: "Gift giving made beautiful"
  }
];

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.rating >= 4.7).slice(0, 5);
