// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    description: "A delicate gold ear cuff adorned with a single crystal accent. Lightweight and sculptural, designed to catch the light with every movement.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, it features a single faceted crystal that refracts light like morning dew. The cuff is designed to sit comfortably on the ear's cartilage, requiring no piercing. Perfect worn alone or stacked with other pieces from our collection.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft, dry cloth.",
    rating: 4.8,
    reviewCount: 124,
    variants: ["Gold", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    imageAlt: "Gold ear cuff with crystal accent on warm neutral background",
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    description: "A statement necklace featuring a cluster of multicolor floral crystals suspended from a delicate gold chain. Romantic and timeless.",
    longDescription: "Inspired by the first bloom of spring, the Majestic Flora Nectar necklace captures the essence of a garden in full flower. Each crystal is hand-selected and set in 18K gold-plated brass. The 18-inch chain allows the pendant to rest at the perfect length, just below the collarbone. A piece that transitions effortlessly from day to evening.",
    material: "18K Gold Plated Brass, Multicolor Crystals",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft, dry cloth.",
    rating: 4.9,
    reviewCount: 89,
    variants: ["Gold", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    imageAlt: "Multicolor floral crystal necklace on elegant display",
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a sculptural, modern silhouette. Bold yet refined, these are the everyday statement piece.",
    longDescription: "The Golden Sphere Huggies redefine the classic hoop. Cast in 18K gold-plated brass with a substantial dome profile, they offer presence without weight. The secure hinge closure ensures they stay comfortably in place from morning coffee to evening events. A versatile piece that pairs beautifully with both casual and formal attire.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft, dry cloth.",
    rating: 4.7,
    reviewCount: 156,
    variants: ["Gold", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    ],
    imageAlt: "Chunky gold dome huggie earrings on dark background",
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. Delicate, feminine, and utterly captivating.",
    longDescription: "Each Amber Lace earring is a miniature work of art. The filigree pattern is meticulously crafted to evoke the delicate beauty of antique lace, while the warm gold finish adds contemporary warmth. Suspended from a comfortable post, these earrings move with grace and catch the light with every turn of the head.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft, dry cloth.",
    rating: 4.6,
    reviewCount: 72,
    variants: ["Gold", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    ],
    imageAlt: "Textured gold filigree drop earrings with intricate detailing",
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    description: "A curated gift-boxed set featuring our signature huggie earrings paired with a matching pendant necklace. The perfect introduction to Velmora.",
    longDescription: "The Royal Heirloom Set is our most beloved offering for gifting and self-purchase alike. This thoughtfully curated pairing includes our Golden Sphere Huggies and a coordinating pendant necklace, both crafted in 18K gold-plated brass. Presented in a signature Velmora gift box with a handwritten note card option, this set is designed to be treasured and passed down.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft, dry cloth.",
    rating: 4.9,
    reviewCount: 203,
    variants: ["Gold", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    imageAlt: "Gift-boxed earring and necklace set in elegant packaging",
  },
];

export const categories = ["Earrings", "Necklaces", "Huggies", "Sets"];

export const getProductById = (id) => {
  return products.find((p) => p.id === parseInt(id));
};

export const getRelatedProducts = (currentProductId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentProductId)
    .slice(0, limit);
};