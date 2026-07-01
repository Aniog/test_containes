// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle sparkle to your everyday look.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, it features a single faceted crystal that refracts light beautifully. Lightweight and comfortable for all-day wear, this piece is perfect worn alone or stacked with other earrings.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A multicolor floral crystal necklace that blooms with elegance. Each crystal is carefully selected and set to create a piece that feels both timeless and contemporary.",
    longDescription: "The Majestic Flora Nectar necklace is inspired by the delicate beauty of wildflowers. Featuring a curated arrangement of multicolor crystals set in 18K gold-plated brass, this necklace brings a touch of garden romance to any ensemble. The adjustable chain allows for versatile styling.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these huggies make a statement without saying a word.",
    longDescription: "The Golden Sphere Huggies are our signature dome earrings, featuring a perfectly rounded silhouette that hugs the earlobe. Cast in 18K gold-plated brass with a high-polish finish, these earrings are substantial enough to make an impact but light enough for everyday wear.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. Each pair is a miniature work of art, showcasing the beauty of traditional craftsmanship.",
    longDescription: "The Amber Lace Earrings feature an intricate filigree pattern that evokes the delicate beauty of vintage lace. Hand-finished in 18K gold-plated brass, these drop earrings move gracefully with every turn of the head. The textured surface catches light in unexpected ways.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    material: "Gold",
    description: "A gift-boxed earring and necklace set featuring our most beloved designs. Presented in a velvet-lined keepsake box, this set is made for gifting and treasuring.",
    longDescription: "The Royal Heirloom Set pairs our signature Vivid Aura ear cuffs with a delicate pendant necklace. Each piece is crafted from 18K gold-plated brass and presented in a luxurious velvet-lined box. This set makes an unforgettable gift for someone special—or yourself.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
];

export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

export const getRelatedProducts = (currentProductId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentProductId)
    .slice(0, limit);
};

export const categories = ["Earrings", "Necklaces", "Huggies"];

export const materials = ["Gold", "Silver"];
