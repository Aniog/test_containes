export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "gold-plated",
    rating: 4.8,
    reviewCount: 124,
    shortDescription: "A sculptural gold ear cuff with a single luminous crystal accent — no piercing required.",
    description: "The Vivid Aura Jewels ear cuff catches light from every angle. Hand-polished 18k gold plating wraps the ear in a gentle embrace, finished with a single precision-set crystal for a hint of evening sparkle.",
    materials: "18k gold-plated brass, cubic zirconia accent. Nickel-free and hypoallergenic.",
    care: "Store in a dry pouch. Avoid contact with perfumes, lotions, and water to preserve the gold finish.",
    shipping: "Free worldwide shipping on orders over $50. Delivered in 5–10 business days.",
    returns: "30-day hassle-free returns. Items must be unworn and in original packaging.",
    variants: ["gold", "silver"],
    tags: ["bestseller", "new"],
    inStock: true,
    imageQuery: "gold ear cuff crystal accent on ear warm lighting",
    hoverQuery: "gold ear cuff jewelry detail dark background",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "gold-plated",
    rating: 4.9,
    reviewCount: 89,
    shortDescription: "A delicate necklace featuring multicolor floral crystals on a fine gold chain.",
    description: "Inspired by overgrown gardens at golden hour, the Majestic Flora Nectar necklace layers petite blossoms in soft crystal tones along a whisper-thin chain. Wear it solo or layered.",
    materials: "18k gold-plated brass chain, hand-set glass crystals. Length: 40cm + 5cm extender.",
    care: "Gently wipe with a soft cloth after wear. Store flat to prevent tangling.",
    shipping: "Free worldwide shipping on orders over $50. Delivered in 5–10 business days.",
    returns: "30-day hassle-free returns. Items must be unworn and in original packaging.",
    variants: ["gold"],
    tags: ["bestseller"],
    inStock: true,
    imageQuery: "multicolor floral crystal necklace gold chain editorial",
    hoverQuery: "delicate flower necklace on model neck close up",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "gold-plated",
    rating: 4.7,
    reviewCount: 210,
    shortDescription: "Chunky gold dome huggie earrings with a polished mirror finish.",
    description: "The Golden Sphere Huggies are our everyday statement. A rounded dome silhouette feels substantial yet lightweight, finished in high-polish 18k gold plating.",
    materials: "18k gold-plated brass, hinged huggie closure. Diameter: 12mm.",
    care: "Avoid water and chemicals. Clean with a soft jewelry cloth.",
    shipping: "Free worldwide shipping on orders over $50. Delivered in 5–10 business days.",
    returns: "30-day hassle-free returns. Items must be unworn and in original packaging.",
    variants: ["gold", "silver"],
    tags: ["bestseller"],
    inStock: true,
    imageQuery: "chunky gold dome huggie earrings on ear close up",
    hoverQuery: "gold huggie hoop earrings pair dark background",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "gold-plated",
    rating: 4.9,
    reviewCount: 76,
    shortDescription: "Textured gold filigree drop earrings inspired by vintage lace.",
    description: "Intricate filigree work gives the Amber Lace Earrings their heirloom character. Each pair is cast from an original hand-carved pattern and finished in warm gold.",
    materials: "18k gold-plated brass, surgical steel posts. Length: 45mm.",
    care: "Keep dry and store separately to avoid scratching. Clean gently with a dry cloth.",
    shipping: "Free worldwide shipping on orders over $50. Delivered in 5–10 business days.",
    returns: "30-day hassle-free returns. Items must be unworn and in original packaging.",
    variants: ["gold"],
    tags: ["bestseller"],
    inStock: true,
    imageQuery: "gold filigree drop earrings vintage lace texture",
    hoverQuery: "gold lace earrings worn editorial close up",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "gold-plated",
    rating: 5.0,
    reviewCount: 52,
    shortDescription: "A gift-boxed earring and necklace set for effortless gifting.",
    description: "The Royal Heirloom Set pairs our signature dome huggies with a matching pendant necklace, presented in a Velmora gift box. Ready for birthdays, anniversaries, or just because.",
    materials: "18k gold-plated brass, cubic zirconia details. Necklace length: 42cm + 5cm extender.",
    care: "Store in the provided box. Avoid contact with water and beauty products.",
    shipping: "Free worldwide shipping. Delivered in 5–10 business days.",
    returns: "30-day hassle-free returns. Items must be unworn and in original packaging.",
    variants: ["gold", "silver"],
    tags: ["bestseller", "gift"],
    inStock: true,
    imageQuery: "gold jewelry gift set necklace earrings box elegant",
    hoverQuery: "gold huggie earrings and pendant necklace set",
  },
]

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(currentProduct, limit = 4) {
  const sameCategory = products.filter(
    (p) => p.id !== currentProduct.id && p.category === currentProduct.category
  )
  const others = products.filter(
    (p) => p.id !== currentProduct.id && p.category !== currentProduct.category
  )
  return [...sameCategory, ...others].slice(0, limit)
}
