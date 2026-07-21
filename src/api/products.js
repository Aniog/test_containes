export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "VIVID AURA JEWELS",
    price: 42,
    category: "Earrings",
    description: "Elegant gold ear cuff adorned with delicate crystal accents, designed for a modern, effortless statement.",
    materials: "18K Gold Plated Brass, Cubic Zirconia",
    images: ["ear-cuff-gold-1", "ear-cuff-gold-2"],
    variant: "Gold",
    details: "Hypoallergenic and lead-free. Perfect for layering."
  },
  {
    id: "majestic-flora-nectar",
    name: "MAJESTIC FLORA NECTAR",
    price: 68,
    category: "Necklaces",
    description: "A vibrant multicolor floral crystal necklace that captures the soft beauty of a blooming garden.",
    materials: "18K Gold Plated over Sterling Silver, Mixed Crystals",
    images: ["floral-necklace-1", "floral-necklace-2"],
    variant: "Gold",
    details: "Adjustable chain length: 16-18 inches."
  },
  {
    id: "golden-sphere-huggies",
    name: "GOLDEN SPHERE HUGGIES",
    price: 38,
    category: "Huggies",
    description: "Chunky gold dome huggie earrings that offer a bold yet classic silhouette for everyday luxury.",
    materials: "High-Polished 18K Gold Plating",
    images: ["gold-huggies-1", "gold-huggies-2"],
    variant: "Gold",
    details: "Diameter: 12mm. Weight: Light for all-day comfort."
  },
  {
    id: "amber-lace-earrings",
    name: "AMBER LACE EARRINGS",
    price: 54,
    category: "Earrings",
    description: "Textured gold filigree drop earrings, intricately crafted to catch the light with every movement.",
    materials: "18K Gold Plated Brass",
    images: ["filigree-earrings-1", "filigree-earrings-2"],
    variant: "Gold",
    details: "Length: 1.5 inches. Lever-back closure."
  },
  {
    id: "royal-heirloom-set",
    name: "ROYAL HEIRLOOM SET",
    price: 95,
    category: "Sets",
    description: "A specially curated gift-boxed set featuring a matched pair of earrings and a delicate necklace.",
    materials: "18K Gold Plated Vermeil",
    images: ["gift-set-1", "gift-set-2"],
    variant: "Gold",
    details: "Includes premium velvet presentation box. Perfect for gifting."
  }
];

export const getProductById = (id) => PRODUCTS.find(p => p.id === id);
export const getRelatedProducts = (id, limit = 4) => PRODUCTS.filter(p => p.id !== id).slice(0, limit);
