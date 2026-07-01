import { productImage } from "@/lib/placeholder";

// Seed catalog for Velmora Fine Jewelry.
// Each product has 2+ gallery images so cards can show hover-swap behavior.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    shortName: "Vivid Aura",
    category: "earrings",
    price: 42,
    tone: ["gold"],
    material: "18K Gold Plated · Crystal",
    rating: 4.9,
    reviewCount: 128,
    shortDescription: "A whisper of gold with a single crystal accent — designed for the every-day stacker.",
    description:
      "Hand-finished in 18K gold plate, the Vivid Aura Jewels are a quiet study in restraint. A single cubic zirconia crystal catches the light at the lobe, set into a slim ear cuff that disappears into your stack. Wear it solo for a sculptural accent; layer it with huggies for a considered, editorial ear.",
    materials:
      "• 18K gold plated brass\n• Cubic zirconia crystal, 4mm\n• Hypoallergenic, nickel-free post\n• Tarnish-resistant coating",
    care: "Store dry in the velvet pouch provided. Avoid perfume, chlorine and lotions. Wipe gently with the included polishing cloth to maintain the finish.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5–8 business days. Express options available at checkout. 30-day returns, no questions asked.",
    badge: "Bestseller",
    images: [
      productImage({ scene: "earring", palette: "cocoa", w: 1000, h: 1200 }),
      productImage({ scene: "earring", palette: "champagne", w: 1000, h: 1200 }),
      productImage({ scene: "earring", palette: "noir", w: 1000, h: 1200 }),
      productImage({ scene: "earring", palette: "sand", w: 1000, h: 1200 }),
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    shortName: "Majestic Flora",
    category: "necklaces",
    price: 68,
    tone: ["gold"],
    material: "18K Gold Plated · Multicolor Crystal",
    rating: 5.0,
    reviewCount: 96,
    shortDescription: "A multicolor floral crystal cluster on a delicate chain — statement without weight.",
    description:
      "Inspired by pressed botanicals and the soft shimmer of a summer garden, the Majestic Flora Nectar sits at the collarbone like a small, wearable bouquet. Each handset crystal catches a different hue — amber, peridot, blush — for a piece that reads as one warm, considered accent.",
    materials:
      "• 18K gold plated brass chain, 16–18\"\n• Hand-set multicolor crystals\n• Hypoallergenic, nickel-free\n• Tarnish-resistant finish",
    care: "Remove before showering, sleeping or exercise. Store in the included pouch, separate from other metals.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Gift wrap available at checkout.",
    badge: "New",
    images: [
      productImage({ scene: "necklace", palette: "noir", w: 1000, h: 1200 }),
      productImage({ scene: "necklace", palette: "cocoa", w: 1000, h: 1200 }),
      productImage({ scene: "necklace", palette: "champagne", w: 1000, h: 1200 }),
      productImage({ scene: "necklace", palette: "sand", w: 1000, h: 1200 }),
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    shortName: "Golden Sphere",
    category: "huggies",
    price: 38,
    tone: ["gold", "silver"],
    material: "18K Gold Plated · Sterling Silver",
    rating: 4.8,
    reviewCount: 214,
    shortDescription: "Chunky gold dome huggies — sculptural, weightless, endlessly wearable.",
    description:
      "The huggie, refined. A softly domed sphere in polished gold hugs the lobe with the quiet confidence of a staple. Sized to wear 24/7 — sleep, swim, repeat — and engineered with a secure click-hinge closure you can feel click into place.",
    materials:
      "• 18K gold plated sterling silver (gold tone)\n• Recycled sterling silver (silver tone)\n• 12mm outer diameter\n• Click-hinge closure",
    care: "The most forgiving piece in the collection. Rinse with warm water and mild soap; pat dry.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Available in gift packaging.",
    badge: "Bestseller",
    images: [
      productImage({ scene: "huggie", palette: "cocoa", w: 1000, h: 1200 }),
      productImage({ scene: "huggie", palette: "champagne", w: 1000, h: 1200 }),
      productImage({ scene: "huggie", palette: "noir", w: 1000, h: 1200 }),
      productImage({ scene: "huggie", palette: "sand", w: 1000, h: 1200 }),
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    shortName: "Amber Lace",
    category: "earrings",
    price: 54,
    tone: ["gold"],
    material: "18K Gold Plated · Filigree",
    rating: 4.9,
    reviewCount: 71,
    shortDescription: "Textured gold filigree drops — heirloom-inspired, lightweight on the ear.",
    description:
      "Drawn from a vintage filigree motif and re-sculpted for the modern ear, the Amber Lace Earrings have the warmth of a passed-down piece. Light enough for all-day wear, detailed enough to read as one quiet statement at the table.",
    materials:
      "• 18K gold plated brass\n• Laser-cut filigree\n• Hypoallergenic post\n• 38mm drop",
    care: "Store flat in the included pouch. Polish gently with the included cloth. Avoid contact with perfume.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns.",
    images: [
      productImage({ scene: "lace", palette: "noir", w: 1000, h: 1200 }),
      productImage({ scene: "lace", palette: "cocoa", w: 1000, h: 1200 }),
      productImage({ scene: "lace", palette: "champagne", w: 1000, h: 1200 }),
      productImage({ scene: "lace", palette: "sand", w: 1000, h: 1200 }),
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    shortName: "Royal Heirloom",
    category: "earrings",
    price: 95,
    tone: ["gold"],
    material: "18K Gold Plated · Gift-Boxed",
    rating: 5.0,
    reviewCount: 58,
    shortDescription: "A matching earring and necklace set, gift-boxed — for the moments that matter.",
    description:
      "Two pieces, one story. The Royal Heirloom Set pairs a slim pendant necklace with a coordinating stud, finished in warm 18K gold plate and presented in a keepsake box. A modern heirloom, ready to be passed along.",
    materials:
      "• 18K gold plated brass\n• Matching necklace (16–18\") and stud earrings\n• Hypoallergenic, nickel-free\n• Presented in a velvet-lined keepsake box",
    care: "Polish with the included cloth. Store in the keepsake box between wears.",
    shipping:
      "Free worldwide shipping on orders over $75. Gift wrap available at no extra charge.",
    badge: "Gift-Ready",
    images: [
      productImage({ scene: "set", palette: "noir", w: 1000, h: 1200 }),
      productImage({ scene: "set", palette: "cocoa", w: 1000, h: 1200 }),
      productImage({ scene: "set", palette: "champagne", w: 1000, h: 1200 }),
      productImage({ scene: "set", palette: "sand", w: 1000, h: 1200 }),
    ],
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id);
  if (!current) return products.slice(0, limit);
  // Prefer same category first, then mix
  const sameCat = products.filter((p) => p.id !== id && p.category === current.category);
  const others = products.filter((p) => p.id !== id && p.category !== current.category);
  return [...sameCat, ...others].slice(0, limit);
}

export const categories = [
  { id: "earrings", name: "Earrings", tagline: "Studs, cuffs & drops" },
  { id: "necklaces", name: "Necklaces", tagline: "Layering essentials" },
  { id: "huggies", name: "Huggies", tagline: "The every-day staple" },
];

export const toneOptions = [
  { id: "gold", label: "Gold", swatch: "#C99A4A" },
  { id: "silver", label: "Silver", swatch: "#C7C5C0" },
];
