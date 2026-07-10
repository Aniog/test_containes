import { scenes } from "./scenery.js"

const svg = (markup) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(markup)}`

// Generates a refined product card image. Two variants per product so the
// hover state has a believable second view.
const productImage = ({
  width = 900,
  height = 1100,
  bg = "#1A120C",
  mid = "#2A1F1A",
  glow = "#3A2A1F",
  accent = "#B89466",
  accentSoft = "#D9B888",
  shape = "earrings",
  seed = 1,
  rotate = 0,
}) => svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <radialGradient id="pbg-${seed}" cx="50%" cy="38%" r="70%">
      <stop offset="0%" stop-color="${glow}"/>
      <stop offset="55%" stop-color="${mid}"/>
      <stop offset="100%" stop-color="${bg}"/>
    </radialGradient>
    <radialGradient id="phaze-${seed}" cx="50%" cy="22%" r="55%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.22"/>
      <stop offset="60%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#pbg-${seed})"/>
  <rect width="100%" height="100%" fill="url(#phaze-${seed})"/>
  <g transform="translate(${width / 2}, ${height * 0.55}) rotate(${rotate})">
    ${shape === "earrings" ? `
      <ellipse cx="-110" cy="0" rx="34" ry="34" fill="${accent}"/>
      <ellipse cx="-110" cy="0" rx="20" ry="20" fill="${accentSoft}"/>
      <ellipse cx="110" cy="0" rx="34" ry="34" fill="${accent}"/>
      <ellipse cx="110" cy="0" rx="20" ry="20" fill="${accentSoft}"/>
      <circle cx="-110" cy="-58" r="5" fill="${accent}"/>
      <circle cx="110" cy="-58" r="5" fill="${accent}"/>
    ` : ""}
    ${shape === "huggies" ? `
      <circle cx="-90" cy="0" r="56" fill="none" stroke="${accent}" stroke-width="12"/>
      <circle cx="90" cy="0" r="56" fill="none" stroke="${accent}" stroke-width="12"/>
    ` : ""}
    ${shape === "necklace" ? `
      <path d="M -220 0 Q 0 180 220 0" fill="none" stroke="${accent}" stroke-width="3.5"/>
      <circle cx="0" cy="150" r="20" fill="${accent}"/>
      <circle cx="0" cy="150" r="9" fill="${accentSoft}"/>
      <circle cx="-50" cy="130" r="5" fill="${accent}"/>
      <circle cx="50" cy="130" r="5" fill="${accent}"/>
    ` : ""}
    ${shape === "cuff" ? `
      <path d="M -130 -30 Q 0 -90 130 -30 L 130 30 Q 0 90 -130 30 Z" fill="none" stroke="${accent}" stroke-width="5"/>
      <circle cx="0" cy="0" r="10" fill="${accent}"/>
    ` : ""}
    ${shape === "set" ? `
      <ellipse cx="-120" cy="-20" rx="42" ry="42" fill="${accent}"/>
      <ellipse cx="-120" cy="-20" rx="24" ry="24" fill="${accentSoft}"/>
      <ellipse cx="120" cy="-20" rx="42" ry="42" fill="${accent}"/>
      <ellipse cx="120" cy="-20" rx="24" ry="24" fill="${accentSoft}"/>
      <path d="M -160 60 Q 0 170 160 60" fill="none" stroke="${accent}" stroke-width="2.5"/>
      <circle cx="0" cy="135" r="12" fill="${accent}"/>
    ` : ""}
    ${shape === "drops" ? `
      <circle cx="-90" cy="-40" r="8" fill="${accent}"/>
      <path d="M -90 -32 L -90 0 Q -120 25 -90 50 Q -60 25 -90 0 Z" fill="${accent}"/>
      <circle cx="90" cy="-40" r="8" fill="${accent}"/>
      <path d="M 90 -32 L 90 0 Q 120 25 90 50 Q 60 25 90 0 Z" fill="${accent}"/>
    ` : ""}
  </g>
</svg>`)

const lightProductImage = (opts) =>
  productImage({
    bg: "#EFE7D9",
    mid: "#E5D8C7",
    glow: "#FBF7F0",
    accent: "#8C6E48",
    accentSoft: "#B89466",
    ...opts,
  })

export const products = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    eyebrow: "Ear Cuff",
    category: "earrings",
    price: 42,
    tone: "gold",
    rating: 4.8,
    reviewCount: 312,
    shape: "cuff",
    badge: "Bestseller",
    description:
      "A single ear cuff sculpted to wrap the cartilage with the warmth of 18K gold. Set with a hand-cut crystal that catches every glance.",
    details:
      "Hand-finished in small batches by our atelier in Jaipur. Each crystal is hand-set and polished by a single craftsperson, so no two cuffs are exactly alike. Designed to be worn solo on the left ear for an asymmetric, editorial finish.",
    materials:
      "18K gold-plated brass core, hypoallergenic stainless post, hand-set cubic zirconia crystal. Free of nickel, lead, and cadmium. Tarnish-resistant coating keeps its glow for daily wear.",
    care: "Store in the pouch provided. Avoid contact with perfume, chlorine, and lotions. Wipe gently with the included polishing cloth to restore shine.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Most orders ship within 1–2 business days from our New York studio.",
    images: {
      primary: productImage({ shape: "cuff", seed: 101, rotate: -8 }),
      secondary: productImage({ shape: "cuff", seed: 102, rotate: 6 }),
      gallery: [
        productImage({ shape: "cuff", seed: 101, rotate: -8 }),
        productImage({ shape: "cuff", seed: 102, rotate: 6 }),
        productImage({ shape: "cuff", seed: 103, rotate: 14 }),
        productImage({ shape: "cuff", seed: 104, rotate: -2 }),
      ],
    },
  },
  {
    id: "majestic-flora-necklace",
    name: "Majestic Flora Nectar",
    eyebrow: "Floral Necklace",
    category: "necklaces",
    price: 68,
    tone: "gold",
    rating: 4.9,
    reviewCount: 218,
    shape: "necklace",
    badge: "New",
    description:
      "A whisper of a chain suspending a hand-set bouquet of warm crystals. Built to layer, made to be remembered.",
    details:
      "Inspired by Mughal garden motifs, the Flora Nectar is cast from a hand-carved original and finished with a constellation of champagne, blush, and smoke crystals. Adjustable 16–18 inch chain.",
    materials:
      "18K gold-plated brass, hand-set crystals in champagne / blush / smoke, hypoallergenic brass clasp. Nickel-free, lead-free, cadmium-free.",
    care: "Remove before showering or sleeping. Keep away from harsh chemicals. Polish gently with a soft, dry cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Most orders ship within 1–2 business days.",
    images: {
      primary: productImage({ shape: "necklace", seed: 201 }),
      secondary: productImage({ shape: "necklace", seed: 202, rotate: 10 }),
      gallery: [
        productImage({ shape: "necklace", seed: 201 }),
        productImage({ shape: "necklace", seed: 202, rotate: 10 }),
        productImage({ shape: "necklace", seed: 203, rotate: -6 }),
        productImage({ shape: "necklace", seed: 204, rotate: 4 }),
      ],
    },
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    eyebrow: "Huggies",
    category: "earrings",
    price: 38,
    tone: "gold",
    rating: 4.7,
    reviewCount: 506,
    shape: "huggies",
    description:
      "Chunky, sculptural, impossibly light. The huggies you'll forget you're wearing — until someone asks where they're from.",
    details:
      "Inspired by archive Parisian jewelry of the 1970s, the Golden Sphere huggies are hollow-cast to feel weightless while reading as bold. A secure hinged clasp keeps them comfortably in place from morning to night.",
    materials:
      "18K gold-plated hollow brass, hypoallergenic stainless steel post and hinge. Nickel-free, lead-free, cadmium-free. Suitable for sensitive ears.",
    care: "Store flat in the velvet pouch. Avoid water, perfume, and lotion. Polish with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Most orders ship within 1–2 business days.",
    images: {
      primary: productImage({ shape: "huggies", seed: 301 }),
      secondary: productImage({ shape: "huggies", seed: 302, rotate: 12 }),
      gallery: [
        productImage({ shape: "huggies", seed: 301 }),
        productImage({ shape: "huggies", seed: 302, rotate: 12 }),
        productImage({ shape: "huggies", seed: 303, rotate: -8 }),
        productImage({ shape: "huggies", seed: 304, rotate: 18 }),
      ],
    },
  },
  {
    id: "amber-lace-drops",
    name: "Amber Lace Drops",
    eyebrow: "Drop Earrings",
    category: "earrings",
    price: 54,
    tone: "gold",
    rating: 4.8,
    reviewCount: 174,
    shape: "drops",
    description:
      "Filigree that's actually filigree — cast from hand-drawn lace originals in 18K gold plate. Wear them to weddings. Wear them to Tuesdays.",
    details:
      "Every pair begins as a hand-drawn filigree pattern, which is then digitally translated and cast in small batches. The result is the intricate detail of fine lace with the durability of demi-fine metalwork.",
    materials:
      "18K gold-plated brass filigree, hypoallergenic stainless steel post, secure butterfly back. Nickel-free, lead-free, cadmium-free.",
    care: "Remove before showering or sleeping. Avoid perfumes and lotions on the metal. Polish gently with a soft, dry cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Most orders ship within 1–2 business days.",
    images: {
      primary: productImage({ shape: "drops", seed: 401 }),
      secondary: productImage({ shape: "drops", seed: 402, rotate: 8 }),
      gallery: [
        productImage({ shape: "drops", seed: 401 }),
        productImage({ shape: "drops", seed: 402, rotate: 8 }),
        productImage({ shape: "drops", seed: 403, rotate: -10 }),
        productImage({ shape: "drops", seed: 404, rotate: 16 }),
      ],
    },
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    eyebrow: "Earring & Necklace Set",
    category: "sets",
    price: 95,
    tone: "gold",
    rating: 5.0,
    reviewCount: 89,
    shape: "set",
    badge: "Gifts",
    description:
      "A matching earring and necklace set, gift-boxed in our signature ivory and champagne. For the woman you remember everything by.",
    details:
      "A curated pairing designed to be worn together or apart. Comes nestled in a soft-touch ivory keepsake box with a hand-tied champagne ribbon — ready to gift, ready to keep.",
    materials:
      "18K gold-plated brass, hand-set crystals, hypoallergenic posts and clasp. Nickel-free, lead-free, cadmium-free.",
    care: "Store in the keepsake box provided. Avoid contact with perfume, chlorine, and lotions.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Most orders ship within 1–2 business days. Gift notes available at checkout.",
    images: {
      primary: productImage({ shape: "set", seed: 501 }),
      secondary: productImage({ shape: "set", seed: 502, rotate: 6 }),
      gallery: [
        productImage({ shape: "set", seed: 501 }),
        productImage({ shape: "set", seed: 502, rotate: 6 }),
        productImage({ shape: "set", seed: 503, rotate: -8 }),
        productImage({ shape: "set", seed: 504, rotate: 12 }),
      ],
    },
  },
]

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "earrings-huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
]

export const priceRanges = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-plus", label: "$75 & up", min: 75, max: Infinity },
]

export const materialFilters = [
  { id: "gold", label: "18K Gold Plated" },
  { id: "silver", label: "Sterling Silver" },
  { id: "crystal", label: "Crystal" },
]

export const findProductById = (id) => products.find((p) => p.id === id)

export const getRelated = (id, limit = 4) => {
  const current = findProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      if (a.category === current.category && b.category !== current.category) return -1
      if (b.category === current.category && a.category !== current.category) return 1
      return 0
    })
    .slice(0, limit)
}
