// Seed product data for Velmora Fine Jewelry
// All prices in USD. Product names are UPPERCASE in UI.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    description: "A sculptural ear cuff adorned with a single brilliant crystal. Lightweight yet striking, designed to catch the light with every movement.",
    longDescription: "The Vivid Aura Jewels ear cuff is a modern heirloom. Hand-finished in warm 18K gold plating over hypoallergenic brass, it features a single faceted crystal that refracts light like morning dew. Wear it alone for quiet elegance or stack with our huggies for a layered look.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Wipe gently with a soft cloth after wear.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" }
    ],
    defaultVariant: "gold"
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    description: "A delicate necklace featuring a cluster of multicolor crystals arranged like a drop of nectar. Romantic and refined.",
    longDescription: "Inspired by wildflower meadows at golden hour, the Majestic Flora Nectar necklace combines warm gold chain with a hand-set cluster of blush, champagne, and peridot crystals. The pendant sits at the perfect length to complement both day and evening looks.",
    material: "18K Gold Plated Sterling Silver, Multicolor Crystals",
    care: "Remove before swimming or exercising. Clean with a jewelry cloth. Store flat to prevent tangling.",
    rating: 4.9,
    reviewCount: 87,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" }
    ],
    defaultVariant: "gold"
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky yet refined dome huggies with a soft matte finish. The perfect everyday gold earring.",
    longDescription: "Our signature Golden Sphere Huggies are cast in a substantial dome silhouette with a brushed matte texture. The secure hinge closure makes them comfortable enough for daily wear, while the warm gold tone elevates any outfit from denim to silk.",
    material: "18K Gold Plated Brass",
    care: "Hypoallergenic and tarnish-resistant. Clean with mild soap and water if needed. Dry thoroughly.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" }
    ],
    defaultVariant: "gold"
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    description: "Intricate filigree drop earrings with a warm amber-hued crystal center. Timeless and romantic.",
    longDescription: "The Amber Lace Earrings feature hand-etched filigree work inspired by vintage lace. A single warm amber crystal nestles at the center, surrounded by delicate goldwork. These earrings move gracefully and catch the light with every turn of the head.",
    material: "18K Gold Plated Brass, Amber Crystal",
    care: "Store in a cool, dry place. Avoid harsh chemicals. The filigree is delicate — handle with care.",
    rating: 4.6,
    reviewCount: 73,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1200&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" }
    ],
    defaultVariant: "gold"
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Necklaces",
    price: 95,
    description: "A curated gift set featuring a delicate necklace and matching stud earrings in a velvet-lined box.",
    longDescription: "The Royal Heirloom Set is our most cherished offering. Inside a keepsake velvet box, you'll find a fine chain necklace with a petite crystal pendant and a pair of matching crystal studs. Perfect for gifting or marking a meaningful moment.",
    material: "18K Gold Plated Sterling Silver, Crystals",
    care: "Keep in the included box when not worn. Wipe pieces after each use. The set is designed to be passed down.",
    rating: 4.9,
    reviewCount: 62,
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" }
    ],
    defaultVariant: "gold"
  }
];

export const categories = ["Earrings", "Necklaces", "Huggies"];

export const getProductById = (id) => products.find(p => p.id === id);

export const getRelatedProducts = (currentId, limit = 4) => {
  const current = getProductById(currentId);
  if (!current) return products.slice(0, limit);
  
  // Prioritize same category, then others
  const sameCategory = products.filter(p => p.id !== currentId && p.category === current.category);
  const others = products.filter(p => p.id !== currentId && p.category !== current.category);
  
  return [...sameCategory, ...others].slice(0, limit);
};
