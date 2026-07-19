// Velmora — seed product catalog
// Image queries below are picked up by the runtime image system to populate
// data-strk-img tags with real photos at preview time.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets & Gifts" },
];

export const MATERIALS = [
  { id: "gold", label: "Gold Plated" },
  { id: "silver", label: "Sterling Silver" },
];

// Each product: id, slug, name, price, originalPrice?, category, material,
// variants, rating, reviewCount, badge?, images[], description, details,
// materials, shipping
export const PRODUCTS = [
  {
    id: "p1",
    slug: "vivid-aura-ear-cuff",
    name: "Vivid Aura Ear Cuff",
    price: 42,
    category: "earrings",
    material: "gold",
    badge: "Bestseller",
    rating: 4.9,
    reviewCount: 218,
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    images: [
      {
        ratio: "4x5",
        query: "single gold ear cuff with tiny crystal detail, warm studio lighting, dark background, editorial jewelry photography",
      },
      {
        ratio: "4x5",
        query: "model wearing gold ear cuff earring with crystal, side profile, warm soft lighting, premium jewelry campaign",
      },
    ],
    description:
      "A whisper of light, sculpted around the ear. The Vivid Aura cuff is hand-finished in 18K gold plating with a hand-set crystal that catches every gesture.",
    details:
      "No piercing required. Designed to sit securely on the helix — adjustable for a tailored fit. Sold as a single cuff; pair with the Vivid Aura Stud for a stacked look.",
    materials:
      "18K gold plated over hypoallergenic brass core. Cubic zirconia crystal. Lead- and nickel-free. Tarnish-resistant coating.",
    shipping:
      "Ships within 1–2 business days from our atelier. Free worldwide shipping on orders over $80. 30-day returns, unworn.",
  },
  {
    id: "p2",
    slug: "majestic-flora-nectar-necklace",
    name: "Majestic Flora Nectar Necklace",
    price: 68,
    category: "necklaces",
    material: "gold",
    badge: "New",
    rating: 4.8,
    reviewCount: 142,
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    images: [
      {
        ratio: "4x5",
        query: "delicate gold necklace with multicolor floral crystal pendant on dark moody background, editorial jewelry photography",
      },
      {
        ratio: "4x5",
        query: "model close up wearing multicolor floral crystal gold pendant necklace on bare skin, warm lighting",
      },
    ],
    description:
      "A garden in full bloom, suspended on a hand-drawn chain. Five hand-set crystals in amber, rose, and peridot tones — each one slightly different, like petals.",
    details:
      "Adjustable 16–18 inch cable chain with lobster clasp. Pendant measures 14mm. Layer with the Golden Sphere Huggies for a softly editorial set.",
    materials:
      "18K gold plated brass chain and setting. Hand-set Austrian crystals in amber, rose quartz, peridot, and clear. Hypoallergenic.",
    shipping:
      "Ships within 1–2 business days. Free worldwide shipping on orders over $80. 30-day returns, unworn.",
  },
  {
    id: "p3",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "gold",
    badge: "Bestseller",
    rating: 4.9,
    reviewCount: 487,
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    images: [
      {
        ratio: "4x5",
        query: "pair of chunky gold dome huggie hoop earrings on dark stone surface, warm side lighting, premium jewelry photography",
      },
      {
        ratio: "4x5",
        query: "model wearing chunky gold dome huggie hoops close up, warm soft lighting, editorial",
      },
    ],
    description:
      "A modern heirloom. The Golden Sphere huggies are sculpted with a soft, almost weightless dome and a satisfying click closure.",
    details:
      "12mm outside diameter. Hinged click closure for pierced ears. Sold as a pair. The substantial silhouette wears lighter than it looks.",
    materials:
      "18K gold plated over a hypoallergenic brass core with a tarnish-resistant coating. Lead- and nickel-free.",
    shipping:
      "Ships within 1–2 business days. Free worldwide shipping on orders over $80. 30-day returns, unworn.",
  },
  {
    id: "p4",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    rating: 4.7,
    reviewCount: 96,
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
    ],
    images: [
      {
        ratio: "4x5",
        query: "textured gold filigree drop earrings on dark background, warm studio lighting, jewelry editorial photography",
      },
      {
        ratio: "4x5",
        query: "model wearing textured gold lace filigree drop earrings, close up, warm tone-on-tone",
      },
    ],
    description:
      "A length of antique lace, translated in gold. The Amber Lace earrings are pressed from a hand-carved master, so every line is uniquely imperfect.",
    details:
      "38mm drop with post and butterfly back. Sold as a pair. Lightweight enough for all-day wear — 3.2g per earring.",
    materials:
      "18K gold plated brass. Hand-pressed filigree with a soft satin finish. Hypoallergenic.",
    shipping:
      "Ships within 1–2 business days. Free worldwide shipping on orders over $80. 30-day returns, unworn.",
  },
  {
    id: "p5",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "gold",
    badge: "Gifting",
    rating: 5.0,
    reviewCount: 64,
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    images: [
      {
        ratio: "4x5",
        query: "gift boxed gold earring and necklace jewelry set on warm cream linen, premium packaging editorial photography",
      },
      {
        ratio: "4x5",
        query: "gold jewelry gift set unwrapped on dark velvet, earring and necklace on display, warm lighting",
      },
    ],
    description:
      "Our heirloom, in a box. The Royal Heirloom Set pairs our signature Golden Sphere huggies with a delicate chain — wrapped in our hand-tied ribbon and a velveteen pouch.",
    details:
      "Includes: Golden Sphere Huggies + matching 16–18 inch cable chain necklace. Gift-ready in a hinged cream box with ribbon and a personal note option at checkout.",
    materials:
      "18K gold plated brass throughout. Tarnish-resistant coating. Hypoallergenic and lead- and nickel-free.",
    shipping:
      "Ships within 1–2 business days, with a complimentary express upgrade on all gift orders. 30-day returns.",
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function getProductsByCategory(categoryId) {
  if (!categoryId || categoryId === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === categoryId);
}

export function getRelated(product, n = 4) {
  return PRODUCTS.filter((p) => p.id !== product.id).slice(0, n);
}

// UGC reel captions
export const UGC_REEL = [
  {
    id: "ugc-1",
    caption: "Morning light on the Golden Sphere",
    handle: "@maya.k",
    query: "vertical 9:16 model wearing chunky gold dome huggie hoops, soft morning light, ear close up, candid",
  },
  {
    id: "ugc-2",
    caption: "Flora, with the Majestic",
    handle: "@amelia.wears",
    query: "vertical 9:16 model wearing floral crystal gold pendant necklace, hand on collarbone, warm tone",
  },
  {
    id: "ugc-3",
    caption: "Stacked, the way I like it",
    handle: "@noa.studios",
    query: "vertical 9:16 model wearing layered gold necklaces and crystal pendant, neutral linen top, soft side light",
  },
  {
    id: "ugc-4",
    caption: "The Lace, in candlelight",
    handle: "@lila.editorial",
    query: "vertical 9:16 model wearing gold filigree drop earrings, candlelight close up, warm glow",
  },
  {
    id: "ugc-5",
    caption: "Unboxing the Heirloom",
    handle: "@priya.s",
    query: "vertical 9:16 jewelry unboxing in cream gift box, ribbon, hands opening, warm overhead light",
  },
  {
    id: "ugc-6",
    caption: "Vivid Aura, on the helix",
    handle: "@studio.thirteen",
    query: "vertical 9:16 close up of gold ear cuff with crystal on model ear, hair tucked, warm soft light",
  },
];

// Category tile content
export const CATEGORY_TILES = [
  {
    id: "earrings",
    label: "Earrings",
    sub: "Studs · Drops · Cuffs",
    query: "assortment of gold earrings on dark linen, editorial flat lay, warm lighting",
    to: "/shop?cat=earrings",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    sub: "Pendants · Chains",
    query: "assortment of gold necklaces and pendants on dark velvet, editorial flat lay, warm side light",
    to: "/shop?cat=necklaces",
  },
  {
    id: "huggies",
    label: "Huggies",
    sub: "Domes · Classics",
    query: "collection of gold huggie hoop earrings standing on edge on cream surface, editorial",
    to: "/shop?cat=huggies",
  },
];
