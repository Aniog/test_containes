// Velmora — seed product catalog
// All visuals come from the stock image system via data-strk-img tags.

export const products = [
  {
    id: 1,
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviewCount: 127,
    bestseller: true,
    description:
      "A weightless, sculptural ear cuff finished in 18K gold plate with a single hand-set crystal. No piercing required — slips on the upper ear with quiet confidence.",
    materials:
      "18K gold plated over hypoallergenic brass. Single cubic zirconia crystal. Polish with a soft cloth. Avoid water, lotion, and perfume to preserve the finish.",
    shipping:
      "Complimentary worldwide shipping on every order. Returns accepted within 30 days, unworn and in original packaging.",
    variants: ["Gold", "Silver"],
    images: [
      { id: "vivid-aura-1", q: "gold ear cuff with crystal accent on neutral background" },
      { id: "vivid-aura-2", q: "model wearing gold ear cuff side profile editorial" },
      { id: "vivid-aura-3", q: "gold ear cuff jewelry flat lay luxury" },
      { id: "vivid-aura-4", q: "gold ear cuff macro detail warm light" },
    ],
  },
  {
    id: 2,
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviewCount: 214,
    bestseller: true,
    description:
      "An heirloom-feeling necklace with hand-set floral crystals strung along a fine box chain. Layers beautifully or stands alone as the centerpiece.",
    materials:
      "18K gold plated over brass. Hand-set glass crystals in muted floral tones. Adjustable 16 to 18 inch chain. Hypoallergenic.",
    shipping:
      "Complimentary worldwide shipping on every order. Returns accepted within 30 days, unworn and in original packaging.",
    variants: ["Gold", "Silver"],
    images: [
      { id: "majestic-flora-1", q: "floral crystal gold necklace on neutral background" },
      { id: "majestic-flora-2", q: "model wearing floral gold necklace editorial" },
      { id: "majestic-flora-3", q: "delicate gold necklace flat lay luxury" },
      { id: "majestic-flora-4", q: "floral pendant necklace macro detail" },
    ],
  },
  {
    id: 3,
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviewCount: 309,
    bestseller: true,
    description:
      "A modern huggie with a generous dome curve, substantial enough to wear alone, simple enough to stack. The everyday earring you'll never take off.",
    materials:
      "18K gold plated over hypoallergenic brass. Hinged closure. 12mm inner diameter. Sold as a pair.",
    shipping:
      "Complimentary worldwide shipping on every order. Returns accepted within 30 days, unworn and in original packaging.",
    variants: ["Gold", "Silver"],
    images: [
      { id: "golden-sphere-1", q: "chunky gold dome huggie earrings warm light" },
      { id: "golden-sphere-2", q: "model wearing gold huggie earrings editorial" },
      { id: "golden-sphere-3", q: "thick gold hoop earrings flat lay" },
      { id: "golden-sphere-4", q: "gold huggie earring macro detail" },
    ],
  },
  {
    id: 4,
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviewCount: 96,
    bestseller: true,
    description:
      "Drop earrings inspired by antique lace, with delicate filigree casting that catches light from every angle. Lightweight despite their presence.",
    materials:
      "18K gold plated over brass. Lever-back closure. Hypoallergenic. 38mm drop length.",
    shipping:
      "Complimentary worldwide shipping on every order. Returns accepted within 30 days, unworn and in original packaging.",
    variants: ["Gold", "Silver"],
    images: [
      { id: "amber-lace-1", q: "textured gold filigree drop earrings warm light" },
      { id: "amber-lace-2", q: "model wearing gold drop earrings editorial" },
      { id: "amber-lace-3", q: "antique style gold earrings flat lay" },
      { id: "amber-lace-4", q: "filigree gold earring macro detail" },
    ],
  },
  {
    id: 5,
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring and necklace set",
    price: 95,
    category: "Sets",
    material: "18K Gold Plated",
    rating: 5.0,
    reviewCount: 142,
    bestseller: true,
    description:
      "Our most-gifted pairing — a coordinated necklace and earring set, presented in a hand-tied gift box. The complete moment, ready to give.",
    materials:
      "18K gold plated over brass. Includes one pendant necklace and matching earring pair. Arrives in a Velmora gift box with care card.",
    shipping:
      "Complimentary worldwide shipping on every order. Returns accepted within 30 days, unworn and in original packaging.",
    variants: ["Gold", "Silver"],
    images: [
      { id: "royal-heirloom-1", q: "gold jewelry gift set in luxury box" },
      { id: "royal-heirloom-2", q: "matching gold necklace and earrings on model" },
      { id: "royal-heirloom-3", q: "elegant jewelry gift box presentation" },
      { id: "royal-heirloom-4", q: "gold jewelry set flat lay luxury" },
    ],
  },
  {
    id: 6,
    slug: "celeste-pearl-drops",
    name: "Celeste Pearl Drops",
    tagline: "Freshwater pearl drop earrings on gold",
    price: 58,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.9,
    reviewCount: 78,
    bestseller: false,
    description:
      "A single freshwater pearl on a slim gold thread. Restrained, romantic, and quietly modern.",
    materials:
      "18K gold plated brass with freshwater pearl. Post closure. Each pearl is unique.",
    shipping:
      "Complimentary worldwide shipping on every order. Returns accepted within 30 days, unworn and in original packaging.",
    variants: ["Gold", "Silver"],
    images: [
      { id: "celeste-pearl-1", q: "freshwater pearl drop earrings gold" },
      { id: "celeste-pearl-2", q: "model wearing pearl drop earrings editorial" },
      { id: "celeste-pearl-3", q: "pearl earrings flat lay editorial" },
      { id: "celeste-pearl-4", q: "single pearl earring macro detail" },
    ],
  },
  {
    id: 7,
    slug: "veneto-chain-necklace",
    name: "Veneto Chain Necklace",
    tagline: "Italian-inspired flat curb chain",
    price: 72,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.8,
    reviewCount: 188,
    bestseller: false,
    description:
      "A flat curb chain with the satisfying weight of fine jewelry. Wear alone, layered with a pendant, or stacked.",
    materials:
      "18K gold plated over brass. Lobster clasp. Adjustable 16 or 18 inch.",
    shipping:
      "Complimentary worldwide shipping on every order. Returns accepted within 30 days, unworn and in original packaging.",
    variants: ["Gold", "Silver"],
    images: [
      { id: "veneto-chain-1", q: "flat gold curb chain necklace" },
      { id: "veneto-chain-2", q: "model wearing gold chain necklace editorial" },
      { id: "veneto-chain-3", q: "minimalist gold chain flat lay" },
      { id: "veneto-chain-4", q: "gold chain link macro detail" },
    ],
  },
  {
    id: 8,
    slug: "lyra-pave-huggies",
    name: "Lyra Pave Huggies",
    tagline: "Pave-set crystal huggie hoops",
    price: 48,
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 4.9,
    reviewCount: 245,
    bestseller: false,
    description:
      "Slim huggies set with a continuous line of pave crystals. Subtle sparkle that reads as quiet, not flashy.",
    materials:
      "18K gold plated brass with pave cubic zirconia. Hinged closure. 10mm inner diameter.",
    shipping:
      "Complimentary worldwide shipping on every order. Returns accepted within 30 days, unworn and in original packaging.",
    variants: ["Gold", "Silver"],
    images: [
      { id: "lyra-pave-1", q: "pave crystal gold huggie hoops warm light" },
      { id: "lyra-pave-2", q: "model wearing pave gold hoops editorial" },
      { id: "lyra-pave-3", q: "diamond gold huggie earrings flat lay" },
      { id: "lyra-pave-4", q: "pave hoop earring macro detail" },
    ],
  },
];

export const categories = [
  {
    slug: "earrings",
    name: "Earrings",
    description: "Studs, drops, and statement pieces",
    image: { id: "cat-earrings", q: "gold earrings collection editorial dark background" },
  },
  {
    slug: "necklaces",
    name: "Necklaces",
    description: "Chains, pendants, and layering favorites",
    image: { id: "cat-necklaces", q: "gold necklaces collection editorial neutral" },
  },
  {
    slug: "huggies",
    name: "Huggies",
    description: "Everyday hoops, hinged closures",
    image: { id: "cat-huggies", q: "gold huggie hoop earrings editorial" },
  },
];

export const ugcCaptions = [
  { id: "ugc-1", q: "woman wearing gold hoop earrings selfie warm light", caption: "Wears the Lyra hoops every day" },
  { id: "ugc-2", q: "close up gold necklace on collarbone editorial", caption: "Layered with the Veneto chain" },
  { id: "ugc-3", q: "gold ear cuff close up portrait warm light", caption: "The Vivid Aura, dressed up" },
  { id: "ugc-4", q: "gold necklace on dark sweater editorial portrait", caption: "Heirloom set, gifted" },
  { id: "ugc-5", q: "model wearing gold drop earrings golden hour", caption: "Amber Lace at sunset" },
  { id: "ugc-6", q: "stack of gold rings and necklaces flat lay editorial", caption: "Stacked with Velmora" },
  { id: "ugc-7", q: "woman gold earrings warm lighting close portrait", caption: "Pearl drops, off duty" },
];

export const testimonials = [
  {
    id: 1,
    name: "Marisa K.",
    text:
      "I bought the Heirloom Set as a gift for my sister. She cried opening it. The packaging alone is the kind of thing you keep.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anika R.",
    text:
      "I've worn the Golden Sphere huggies in the shower, the ocean, every day for four months. Still flawless. I went back and bought them in silver too.",
    rating: 5,
  },
  {
    id: 3,
    name: "Eleanor P.",
    text:
      "Velmora hits the sweet spot — feels like real jewelry, priced like an everyday treat. My ear cuff gets compliments every time.",
    rating: 5,
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentId, category, limit = 4) {
  const sameCategory = products.filter((p) => p.id !== currentId && p.category === category);
  const others = products.filter((p) => p.id !== currentId && p.category !== category);
  return [...sameCategory, ...others].slice(0, limit);
}
