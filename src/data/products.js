// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    description: "Delicate gold ear cuff featuring a subtle crystal accent. A modern take on classic elegance.",
    material: "18K Gold Plated Brass, Crystal",
    rating: 4.8,
    reviewCount: 124,
    images: {
      primary: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    },
    variants: ["gold", "silver"],
    inStock: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    description: "A statement necklace adorned with multicolor floral crystals. Perfect for evening occasions.",
    material: "18K Gold Plated Brass, Crystal",
    rating: 4.9,
    reviewCount: 87,
    images: {
      primary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    },
    variants: ["gold", "silver"],
    inStock: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    material: "18K Gold Plated Brass",
    rating: 4.7,
    reviewCount: 156,
    images: {
      primary: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    },
    variants: ["gold", "silver"],
    inStock: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    description: "Intricately textured gold filigree drop earrings. A timeless piece with artisanal detail.",
    material: "18K Gold Plated Brass",
    rating: 4.6,
    reviewCount: 92,
    images: {
      primary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    },
    variants: ["gold", "silver"],
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    description: "A curated gift set featuring matching earrings and necklace. Presented in our signature gift box.",
    material: "18K Gold Plated Brass, Crystal",
    rating: 4.9,
    reviewCount: 63,
    images: {
      primary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    },
    variants: ["gold", "silver"],
    inStock: true
  }
];

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" }
];

export const testimonials = [
  {
    id: 1,
    text: "The quality is exceptional. My earrings have become my everyday signature piece.",
    name: "Elena M.",
    rating: 5
  },
  {
    id: 2,
    text: "Beautiful packaging and the necklace exceeded my expectations. Will be back for more.",
    name: "Sofia R.",
    rating: 5
  },
  {
    id: 3,
    text: "I gifted the Heirloom Set to my sister. She wears it constantly. Stunning.",
    name: "Isabella T.",
    rating: 5
  }
];

export const ugcItems = [
  {
    id: 1,
    caption: "Morning light",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80"
  },
  {
    id: 2,
    caption: "Golden hour",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80"
  },
  {
    id: 3,
    caption: "Effortless elegance",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80"
  },
  {
    id: 4,
    caption: "Timeless beauty",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80"
  },
  {
    id: 5,
    caption: "Everyday luxury",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80"
  }
];
