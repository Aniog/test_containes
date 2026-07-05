export const products = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Jewels",
    price: 42,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&crop=center",
    imageAlt: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop&crop=center",
    category: "earrings",
    rating: 4.8,
    reviewCount: 127,
    description: "A delicate gold ear cuff adorned with a brilliant crystal accent. No piercing required — simply slide on and adjust for effortless sparkle.",
    material: "18K Gold Plated Sterling Silver with Cubic Zirconia",
    care: "Avoid water, perfume, and chemicals. Store in the provided pouch when not wearing. Gently polish with a soft cloth.",
    shipping: "Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns.",
    variants: [
      { name: "Gold", color: "#C8A55A" },
      { name: "Silver", color: "#C0C0C0" }
    ],
    slug: "vivid-aura-jewels",
    badge: null
  },
  {
    id: "majestic-flora-necklace",
    name: "Majestic Flora Nectar",
    price: 68,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop&crop=center",
    imageAlt: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&h=600&fit=crop&crop=center",
    category: "necklaces",
    rating: 4.9,
    reviewCount: 89,
    description: "An enchanting multicolor floral crystal necklace that captures light from every angle. Each petal is meticulously set to create a garden of brilliance.",
    material: "18K Gold Plated with Multi-color Crystals",
    care: "Store flat in the jewelry box provided. Avoid exposure to moisture and chemicals. Clean with a dry soft cloth.",
    shipping: "Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns.",
    variants: [
      { name: "Gold", color: "#C8A55A" },
      { name: "Silver", color: "#C0C0C0" }
    ],
    slug: "majestic-flora-nectar",
    badge: "Bestseller"
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop&crop=center",
    imageAlt: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop&crop=center",
    category: "huggies",
    rating: 4.7,
    reviewCount: 203,
    description: "Chunky gold dome huggie earrings with a luxurious polished finish. The perfect everyday statement piece that transitions seamlessly from day to night.",
    material: "18K Gold Plated Sterling Silver",
    care: "Remove before swimming or showering. Store in a dry place. Polish gently with the included cloth.",
    shipping: "Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns.",
    variants: [
      { name: "Gold", color: "#C8A55A" },
      { name: "Silver", color: "#C0C0C0" }
    ],
    slug: "golden-sphere-huggies",
    badge: "Popular"
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop&crop=center",
    imageAlt: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop&crop=center",
    category: "earrings",
    rating: 4.6,
    reviewCount: 64,
    description: "Textured gold filigree drop earrings inspired by vintage lace patterns. Intricate detailing creates a romantic, heirloom-quality piece.",
    material: "18K Gold Plated with Textured Filigree Finish",
    care: "Handle with care due to delicate filigree. Store separately to avoid tangling. Clean with a soft dry cloth.",
    shipping: "Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns.",
    variants: [
      { name: "Gold", color: "#C8A55A" },
      { name: "Silver", color: "#C0C0C0" }
    ],
    slug: "amber-lace-earrings",
    badge: null
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop&crop=center",
    imageAlt: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop&crop=center",
    category: "sets",
    rating: 5.0,
    reviewCount: 41,
    description: "A luxurious gift-boxed set featuring matching earrings and necklace. The perfect present for someone special — or yourself.",
    material: "18K Gold Plated Sterling Silver with Crystal Accents",
    care: "Store in the provided gift box. Avoid water, perfume, and chemicals. Gently polish each piece with a soft cloth.",
    shipping: "Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns. Gift wrapping available at checkout.",
    variants: [
      { name: "Gold", color: "#C8A55A" },
      { name: "Silver", color: "#C0C0C0" }
    ],
    slug: "royal-heirloom-set",
    badge: "Gift Set"
  }
];

export const categories = [
  { id: "earrings", name: "Earrings", count: 2 },
  { id: "necklaces", name: "Necklaces", count: 1 },
  { id: "huggies", name: "Huggies", count: 1 },
  { id: "sets", name: "Gift Sets", count: 1 }
];

export const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 — $75", min: 50, max: 75 },
  { label: "$75+", min: 75, max: Infinity }
];

export const getRelatedProducts = (productId, limit = 3) => {
  return products.filter(p => p.id !== productId).slice(0, limit);
};
