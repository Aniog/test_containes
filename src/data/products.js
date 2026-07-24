export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "18k-gold-plated",
    description:
      "A sculptural gold ear cuff with a delicate crystal accent. Designed to hug the ear without piercing, it catches light beautifully and adds an instant touch of quiet glamour to any look.",
    materialsCare:
      "18K gold-plated brass. Nickel-free and hypoallergenic. Avoid contact with perfumes, lotions, and water. Store in the provided pouch to maintain brilliance.",
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
    ],
    rating: 4.8,
    reviews: 124,
    tags: ["bestseller", "new"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "18k-gold-plated",
    description:
      "A statement necklace featuring hand-set multicolor floral crystals on a delicate gold chain. Each petal is individually placed for an artisanal finish that feels both modern and heirloom.",
    materialsCare:
      "18K gold-plated brass with crystal detailing. Wipe gently with a soft cloth after wear. Keep away from moisture and store flat to prevent tangling.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    ],
    rating: 4.9,
    reviews: 89,
    tags: ["bestseller"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "18k-gold-plated",
    description:
      "Chunky gold dome huggie earrings that sit close to the lobe with satisfying weight. Polished to a mirror finish, they transition seamlessly from desk to dinner.",
    materialsCare:
      "18K gold-plated stainless steel. Hypoallergenic and tarnish-resistant. Clean with a dry microfiber cloth. Avoid abrasive surfaces.",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    ],
    rating: 4.7,
    reviews: 210,
    tags: ["bestseller"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "18k-gold-plated",
    description:
      "Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight and intricate, they frame the face with warm golden light.",
    materialsCare:
      "18K gold-plated brass with textured finish. Handle with care to preserve delicate filigree. Store separately to avoid scratching.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    ],
    rating: 4.6,
    reviews: 76,
    tags: ["new"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "18k-gold-plated",
    description:
      "A curated gift set featuring a matching earring and necklace duo, presented in a signature Velmora box. The perfect gesture for birthdays, anniversaries, or just because.",
    materialsCare:
      "18K gold-plated brass. Includes anti-tarnish pouch and care card. Each piece is inspected and polished before boxing.",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    rating: 4.9,
    reviews: 52,
    tags: ["bestseller", "gift"],
  },
];

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const priceRanges = [
  { id: "under-40", label: "Under $40", min: 0, max: 40 },
  { id: "40-60", label: "$40 – $60", min: 40, max: 60 },
  { id: "60-100", label: "$60 – $100", min: 60, max: 100 },
  { id: "100-plus", label: "$100+", min: 100, max: Infinity },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    text: "The quality exceeded my expectations. These feel like pieces I will keep forever.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily R.",
    text: "Bought the Heirloom Set as a gift and ended up ordering one for myself. Absolutely stunning.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica T.",
    text: "Beautiful, minimal packaging and the earrings are so lightweight I forget I am wearing them.",
    rating: 5,
  },
];

export const ugcItems = [
  {
    id: 1,
    caption: "Everyday gold",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80",
  },
  {
    id: 2,
    caption: "Layered up",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
  },
  {
    id: 3,
    caption: "Date night",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80",
  },
  {
    id: 4,
    caption: "Gift ready",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
  },
  {
    id: 5,
    caption: "Morning light",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80",
  },
  {
    id: 6,
    caption: "Stacked huggies",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80",
  },
];
