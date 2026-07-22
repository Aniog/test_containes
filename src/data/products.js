// Product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    description: "A stunning gold ear cuff featuring a delicate crystal accent. This piece effortlessly elevates any look, from casual daytime charm to evening elegance.",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
    ],
    colors: ["Gold"],
    inStock: true,
    isBestseller: true
  },
  {
    id: 2,
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    description: "A breathtaking multicolor floral crystal necklace that captures the essence of spring. Each crystal is carefully selected for its vibrant hue and brilliance.",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    colors: ["Gold"],
    inStock: true,
    isBestseller: true
  },
  {
    id: 3,
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings that make a bold statement. The smooth, polished surface catches light beautifully with every movement.",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80"
    ],
    colors: ["Gold"],
    inStock: true,
    isBestseller: true
  },
  {
    id: 4,
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings featuring intricate lace-like patterns. A masterpiece of craftsmanship that adds refined elegance to any ensemble.",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 72,
    images: [
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
    ],
    colors: ["Gold"],
    inStock: true,
    isBestseller: true
  },
  {
    id: 5,
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    description: "An exquisite gift-boxed set featuring a matching pair of earrings and a delicate necklace. The perfect gift for yourself or someone special.",
    price: 95,
    category: "sets",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 203,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
    ],
    colors: ["Gold"],
    inStock: true,
    isBestseller: true
  }
];

export const categories = [
  { id: "earrings", name: "Earrings", count: 2 },
  { id: "necklaces", name: "Necklaces", count: 1 },
  { id: "huggies", name: "Huggies", count: 1 },
  { id: "sets", name: "Sets", count: 1 }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely stunning jewelry. The quality exceeds expectations for the price point. I've received so many compliments!",
    product: "Royal Heirloom Set"
  },
  {
    id: 2,
    name: "Emily R.",
    rating: 5,
    text: "These huggies are my new favorite. Comfortable to wear all day and the gold doesn't tarnish. Perfection.",
    product: "Golden Sphere Huggies"
  },
  {
    id: 3,
    name: "Jessica L.",
    rating: 5,
    text: "The ear cuff is delicate yet bold. Beautifully packaged and arrived quickly. Will definitely order again.",
    product: "Vivid Aura Jewels"
  }
];

export const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=711&fit=crop",
    caption: "Everyday elegance ✨"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop",
    caption: "Layered and loving it"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=711&fit=crop",
    caption: "Minimalist charm"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=711&fit=crop",
    caption: "Date night ready"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop",
    caption: "Gift for myself 💛"
  }
];

export const trustItems = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic"
];

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

export function getBestsellers() {
  return products.filter(p => p.isBestseller);
}

export function getRelatedProducts(productId, limit = 4) {
  return products.filter(p => p.id !== productId).slice(0, limit);
}
