export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    price: 42,
    category: "earrings",
    material: "gold",
    description: "A stunning gold ear cuff featuring a crystal accent that catches light beautifully. This piece adds instant glamour to any look, day or evening.",
    care: "Store in the provided pouch when not wearing. Avoid contact with water, perfume, and chemicals. Clean gently with a soft cloth.",
    materials: "18K Gold Plated · Hypoallergenic · Lead & Nickel Free",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80"
    ],
    rating: 4.8,
    reviews: 124,
    variants: ["gold", "silver"],
    badge: "bestseller"
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    price: 68,
    category: "necklaces",
    material: "gold",
    description: "A multicolor floral crystal necklace that brings garden-inspired elegance to your everyday style. The delicate crystal arrangement creates a mesmerizing sparkle.",
    care: "Store flat to maintain shape. Avoid swimming and intense physical activity. Wipe clean with a lint-free cloth after wearing.",
    materials: "18K Gold Plated · Hypoallergenic · Lead & Nickel Free",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 4.9,
    reviews: 89,
    variants: ["gold"],
    badge: "new"
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    price: 38,
    category: "huggies",
    material: "gold",
    description: "Chunky gold dome huggie earrings that make a statement. The smooth, polished spheres add modern sophistication to any ensemble.",
    care: "Store separately to prevent scratching. Apply beauty products before putting on jewelry. Clean with a jewelry polishing cloth for best results.",
    materials: "18K Gold Plated · Hypoallergenic · Lead & Nickel Free",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
    ],
    rating: 4.7,
    reviews: 203,
    variants: ["gold", "silver"],
    badge: "bestseller"
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. These elegant earrings sway gently with movement, catching attention from every angle.",
    care: "Handle with care to preserve the delicate filigree. Store in the included velvet pouch. Avoid exposure to moisture and harsh chemicals.",
    materials: "18K Gold Plated · Hypoallergenic · Lead & Nickel Free",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1576022162028-3a83dc9ef0cb?w=800&q=80"
    ],
    rating: 4.9,
    reviews: 67,
    variants: ["gold"],
    badge: ""
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    price: 95,
    category: "sets",
    material: "gold",
    description: "A luxurious gift-boxed set featuring a matching earring and necklace duo. Perfect for gifting or treating yourself to a complete look.",
    care: "Keep all pieces in the provided gift box when not wearing. Clean both pieces together to maintain uniform shine. Avoid storing tangled.",
    materials: "18K Gold Plated · Hypoallergenic · Lead & Nickel Free",
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    rating: 5.0,
    reviews: 156,
    variants: ["gold"],
    badge: "bestseller"
  }
]

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The quality is absolutely stunning. I've received so many compliments on my Golden Sphere Huggies."
  },
  {
    id: 2,
    name: "Emily R.",
    rating: 5,
    text: "Fast shipping, beautiful packaging, and the jewelry itself exceeded my expectations. Will definitely be ordering again."
  },
  {
    id: 3,
    name: "Jessica K.",
    rating: 5,
    text: "Finally found demi-fine jewelry that doesn't irritate my ears. The Amber Lace Earrings are my new everyday staple."
  }
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    description: "From studs to drops",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80"
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Chains, pendants & more",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80"
  },
  {
    id: "huggies",
    name: "Huggies",
    description: "Comfortable & chic",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80"
  }
]

export const ugcPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop&q=80",
    caption: "Everyday elegance ✨",
    username: "@stylebyalex"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop&q=80",
    caption: "Golden hour, golden jewels",
    username: "@sarah.style"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop&q=80",
    caption: "Layering season",
    username: "@jewelry.lover"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop&q=80",
    caption: "My new favorites 💫",
    username: "@emily.rings"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=711&fit=crop&q=80",
    caption: "Brunch ready",
    username: "@maria.lux"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1612751584552-8ba73aad10e1?w=400&h=711&fit=crop&q=80",
    caption: "Gift goals 🎁",
    username: "@jess.style"
  }
]
