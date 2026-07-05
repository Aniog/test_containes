export const categories = ["Earrings", "Necklaces", "Huggies", "Sets"];

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    rating: 4.8,
    reviewCount: 124,
    shortDescription:
      "A sculptural gold ear cuff with a single luminous crystal accent — no piercing required.",
    description:
      "The Vivid Aura Jewels ear cuff catches light with every turn. Hand-finished in 18k gold plating over brass, it features a delicate crystal accent set into a modern, sculptural silhouette. Designed to sit comfortably on the ear without a piercing, it layers beautifully with studs and huggies.",
    materials:
      "18k gold-plated brass. Crystal accent. Nickel-free and hypoallergenic. Avoid contact with perfume, lotion, and water to preserve the finish.",
    variants: [
      { name: "Gold", inStock: true },
      { name: "Silver", inStock: true },
    ],
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3ddc1d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
    ],
    hoverImage:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    rating: 4.9,
    reviewCount: 89,
    shortDescription:
      "A multicolor floral crystal necklace inspired by heirloom gardens at golden hour.",
    description:
      "The Majestic Flora Nectar necklace blooms with handset crystals in soft pastel tones. Suspended from a delicate gold chain, the floral pendant feels both vintage and modern — a statement piece that still whispers.",
    materials:
      "18k gold-plated chain and setting. Glass crystals in mixed floral tones. Lobster clasp with 2-inch extender. Store flat and dry.",
    variants: [
      { name: "Gold", inStock: true },
      { name: "Silver", inStock: false },
    ],
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba420552259?auto=format&fit=crop&w=1200&q=80",
    ],
    hoverImage:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    badge: "New",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Huggies",
    rating: 4.7,
    reviewCount: 211,
    shortDescription:
      "Chunky gold dome huggie earrings with a polished, mirror-like finish.",
    description:
      "Our Golden Sphere Huggies are the everyday staple elevated. A chunky, polished dome sits on a snug huggie closure for a sculptural silhouette that transitions effortlessly from morning meetings to evening plans.",
    materials:
      "18k gold-plated brass with high-polish finish. Hinged huggie closure. Lightweight and comfortable for all-day wear.",
    variants: [
      { name: "Gold", inStock: true },
      { name: "Silver", inStock: true },
    ],
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a51?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba420552259?auto=format&fit=crop&w=1200&q=80",
    ],
    hoverImage:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
    badge: null,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    rating: 4.9,
    reviewCount: 76,
    shortDescription:
      "Textured gold filigree drop earrings with an intricate lace-like pattern.",
    description:
      "Inspired by antique Venetian lace, the Amber Lace Earrings feature an airy filigree pattern etched into gold-plated drops. They catch the light like woven sunlight and bring warmth to every complexion.",
    materials:
      "18k gold-plated brass with etched filigree detail. Surgical steel posts. Nickel-free.",
    variants: [
      { name: "Gold", inStock: true },
      { name: "Silver", inStock: true },
    ],
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3ddc1d3e?auto=format&fit=crop&w=1200&q=80",
    ],
    hoverImage:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "Sets",
    rating: 5.0,
    reviewCount: 43,
    shortDescription:
      "A gift-boxed earring and necklace set made for moments worth remembering.",
    description:
      "The Royal Heirloom Set pairs a pair of petite statement earrings with a matching pendant necklace, all nestled in a Velmora gift box. A thoughtful ready-to-give choice for birthdays, anniversaries, or just because.",
    materials:
      "18k gold-plated brass. Includes matching necklace and earrings. Gift box and polishing cloth included.",
    variants: [
      { name: "Gold", inStock: true },
      { name: "Silver", inStock: true },
    ],
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
    ],
    hoverImage:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    badge: "Gift Set",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit);
}

export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}
