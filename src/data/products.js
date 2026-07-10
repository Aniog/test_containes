// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    price: 42,
    category: "earrings",
    description: "A stunning gold ear cuff featuring a crystal accent that catches the light beautifully. This piece adds instant elegance to any look, day or night.",
    shortDescription: "Gold ear cuff with crystal accent",
    materials: "18K Gold Plated, Cubic Zirconia",
    care: "Avoid contact with water and perfumes. Store in jewelry box when not wearing.",
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    featured: true,
    bestseller: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    price: 68,
    category: "necklaces",
    description: "A multicolor floral crystal necklace that brings garden-inspired elegance to your脖颈. Each crystal is carefully selected for its vibrant hue and brilliant sparkle.",
    shortDescription: "Multicolor floral crystal necklace",
    materials: "18K Gold Plated, Multicolor Crystals",
    care: "Gently wipe with soft cloth. Avoid exposure to water and chemicals.",
    rating: 4.9,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold"],
    featured: true,
    bestseller: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    price: 38,
    category: "huggies",
    description: "Chunky gold dome huggie earrings that make a statement. The smooth, polished spheres create a luxurious look that's perfect for everyday elegance.",
    shortDescription: "Chunky gold dome huggie earrings",
    materials: "18K Gold Plated, Surgical Steel Post",
    care: "Wipe with jewelry cloth after wearing. Keep away from moisture.",
    rating: 4.7,
    reviews: 203,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
    ],
    variants: ["Gold", "Rose Gold"],
    featured: true,
    bestseller: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    price: 54,
    category: "earrings",
    description: "Textured gold filigree drop earrings featuring intricate lace-like patterns. These elegant earrings add a touch of vintage sophistication to any outfit.",
    shortDescription: "Textured gold filigree drop earrings",
    materials: "18K Gold Plated",
    care: "Store separately to avoid scratching. Clean with soft brush if needed.",
    rating: 4.8,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
    ],
    variants: ["Gold"],
    featured: true,
    bestseller: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    price: 95,
    category: "sets",
    description: "A gift-boxed earring and necklace set that makes the perfect present. Both pieces feature classic designs that transcend trends and become treasured favorites.",
    shortDescription: "Gift-boxed earring + necklace set",
    materials: "18K Gold Plated",
    care: "Keep in provided gift box when not wearing. Polish gently as needed.",
    rating: 4.9,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["Gold"],
    featured: true,
    bestseller: true
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
    text: "The quality is absolutely stunning. I've received so many compliments on my Golden Sphere Huggies!"
  },
  {
    id: 2,
    name: "Jessica L.",
    rating: 5,
    text: "Fast shipping and beautiful packaging. The Royal Heirloom Set was the perfect anniversary gift."
  },
  {
    id: 3,
    name: "Amanda K.",
    rating: 5,
    text: "Finally found demi-fine jewelry that doesn't irritate my sensitive ears. Velmora is now my go-to!"
  }
];

export const ugcContent = [
  { id: 1, image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=711&fit=crop", caption: "Everyday elegance" },
  { id: 2, image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=711&fit=crop", caption: "Golden hour glow" },
  { id: 3, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop", caption: "Stacked and styled" },
  { id: 4, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop", caption: "Layered perfection" },
  { id: 5, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop", caption: "Necklace goals" },
  { id: 6, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=711&fit=crop", caption: "Minimalist luxury" }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getBestsellers = () => products.filter(p => p.bestseller);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
