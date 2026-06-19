export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    price: 42,
    category: "earrings",
    material: "gold",
    short_description: "Gold ear cuff with crystal accent",
    description:
      "The Vivid Aura Jewels ear cuff captures light from every angle. Hand-set crystals shimmer against a warm gold-plated finish, designed to hug your ear without the need for a piercing. Stack it or wear it solo — either way, it commands attention with quiet confidence.",
    materials_care:
      "18K gold-plated brass with cubic zirconia accents. Nickel-free and hypoallergenic. To preserve the finish, avoid contact with perfumes, lotions, and water. Store in the provided pouch when not in use.",
    shipping_returns:
      "Free worldwide shipping on all orders over $50. Standard delivery 5–10 business days. Express 2–4 business days. 30-day hassle-free returns — items must be unworn and in original packaging.",
    rating: 4.8,
    review_count: 124,
    image_primary:
      "https://images.unsplash.com/photo-1617038220319-18d1e0056721?w=800&auto=format&fit=crop&q=80",
    image_secondary:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
    variants: ["Gold", "Silver"],
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    price: 68,
    category: "necklaces",
    material: "gold",
    short_description: "Multicolor floral crystal necklace",
    description:
      "A garden of hand-painted enamel petals and prismatic crystals bloom along a delicate gold chain. The Majestic Flora Nectar necklace transforms any neckline into a statement of feminine elegance. Perfect for celebrations, weddings, or simply elevating the everyday.",
    materials_care:
      "18K gold-plated brass, enamel, and glass crystals. Hypoallergenic and lead-free. Wipe gently with a soft cloth after wear. Avoid moisture and direct sunlight during storage.",
    shipping_returns:
      "Free worldwide shipping on all orders over $50. Standard delivery 5–10 business days. Express 2–4 business days. 30-day hassle-free returns — items must be unworn and in original packaging.",
    rating: 4.9,
    review_count: 89,
    image_primary:
      "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=800&auto=format&fit=crop&q=80",
    image_secondary:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=80",
    variants: ["Gold"],
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    price: 38,
    category: "huggies",
    material: "gold",
    short_description: "Chunky gold dome huggie earrings",
    description:
      "Minimalist with a sculptural edge. The Golden Sphere Huggies feature a satisfyingly chunky dome silhouette that catches light in the most flattering way. Lightweight enough for all-day wear, bold enough to turn heads.",
    materials_care:
      "18K gold-plated stainless steel. Hypoallergenic and tarnish-resistant. Clean with a dry microfiber cloth. Avoid abrasive cleaners.",
    shipping_returns:
      "Free worldwide shipping on all orders over $50. Standard delivery 5–10 business days. Express 2–4 business days. 30-day hassle-free returns — items must be unworn and in original packaging.",
    rating: 4.7,
    review_count: 210,
    image_primary:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
    image_secondary:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&auto=format&fit=crop&q=80",
    variants: ["Gold", "Silver"],
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    short_description: "Textured gold filigree drop earrings",
    description:
      "Inspired by vintage lacework and heirloom craftsmanship, the Amber Lace Earrings drape with intricate filigree detail. Each curve is hand-textured to create depth and movement, finished in warm gold for a glow that feels like sunset.",
    materials_care:
      "18K gold-plated brass with hand-textured finish. Nickel-free. Handle with care to protect delicate filigree. Store flat in the provided jewelry box.",
    shipping_returns:
      "Free worldwide shipping on all orders over $50. Standard delivery 5–10 business days. Express 2–4 business days. 30-day hassle-free returns — items must be unworn and in original packaging.",
    rating: 4.6,
    review_count: 76,
    image_primary:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&auto=format&fit=crop&q=80",
    image_secondary:
      "https://images.unsplash.com/photo-1617038220954-15a5e463b7ac?w=800&auto=format&fit=crop&q=80",
    variants: ["Gold"],
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    price: 95,
    category: "sets",
    material: "gold",
    short_description: "Gift-boxed earring + necklace set",
    description:
      "The Royal Heirloom Set is our most loved gift — a perfectly matched pair of signature earrings and a delicate pendant necklace, presented in our signature velvet box. Thoughtfully designed for the woman who deserves something extraordinary.",
    materials_care:
      "18K gold-plated brass. Hypoallergenic and lead-free. Each piece is inspected and polished before boxing. Store in the velvet-lined gift box to maintain luster.",
    shipping_returns:
      "Free worldwide shipping on all orders over $50. Standard delivery 5–10 business days. Express 2–4 business days. 30-day hassle-free returns — items must be unworn and in original packaging.",
    rating: 5.0,
    review_count: 56,
    image_primary:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=80",
    image_secondary:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&auto=format&fit=crop&q=80",
    variants: ["Gold"],
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(currentSlug, limit = 4) {
  return products
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
}
