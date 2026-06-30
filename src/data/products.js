// Seed product data. The strk-img plugin statically evaluates
// the imgId / titleId / descId fields at build/dev time and resolves
// the data-strk-img `[titleId]` and `[descId]` references against
// the actual rendered DOM ids of <h3> and <p> elements in ProductCard.
//
// IMPORTANT: every `imgId` here is a globally unique image slot id.
// Every `titleId` / `descId` must EXACTLY match the `id` attribute
// rendered on the title and description elements in the markup.

export const products = [
  {
    id: "vivid-aura-jewels",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Crystal-Accent Ear Cuff",
    description:
      "A single ear cuff sculpted to catch the light from every angle. A delicate crystal drop adds a whisper of color, while the hand-polished 18K gold plating sits warm against the skin.",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    tone: "gold",
    toneOptions: [
      { value: "gold", label: "Gold" },
      { value: "silver", label: "Silver" },
    ],
    rating: 4.8,
    reviewCount: 312,
    badge: "Bestseller",
    images: [
      {
        imgId: "vivid-aura-1",
        ratio: "1x1",
        width: 900,
        query: "[vivid-aura-tagline] [vivid-aura-name]",
      },
      {
        imgId: "vivid-aura-2",
        ratio: "1x1",
        width: 900,
        query: "[vivid-aura-desc] [vivid-aura-name]",
      },
      {
        imgId: "vivid-aura-3",
        ratio: "1x1",
        width: 900,
        query: "[vivid-aura-name] [vivid-aura-tagline]",
      },
      {
        imgId: "vivid-aura-4",
        ratio: "1x1",
        width: 900,
        query: "[vivid-aura-desc] [vivid-aura-tagline]",
      },
    ],
    titleId: "vivid-aura-name",
    descId: "vivid-aura-desc",
    taglineId: "vivid-aura-tagline",
  },
  {
    id: "majestic-flora-nectar",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor Floral Crystal Necklace",
    description:
      "Hand-set floral crystals in champagne, blush, and peridot. A quiet celebration of color, suspended on a fine cable chain finished in 18K gold plating.",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated · Crystal",
    tone: "gold",
    toneOptions: [
      { value: "gold", label: "Gold" },
      { value: "silver", label: "Silver" },
    ],
    rating: 4.9,
    reviewCount: 207,
    badge: "New",
    images: [
      {
        imgId: "majestic-flora-1",
        ratio: "1x1",
        width: 900,
        query: "[majestic-flora-tagline] [majestic-flora-name]",
      },
      {
        imgId: "majestic-flora-2",
        ratio: "1x1",
        width: 900,
        query: "[majestic-flora-desc] [majestic-flora-name]",
      },
      {
        imgId: "majestic-flora-3",
        ratio: "1x1",
        width: 900,
        query: "[majestic-flora-name] [majestic-flora-tagline]",
      },
      {
        imgId: "majestic-flora-4",
        ratio: "1x1",
        width: 900,
        query: "[majestic-flora-desc] [majestic-flora-tagline]",
      },
    ],
    titleId: "majestic-flora-name",
    descId: "majestic-flora-desc",
    taglineId: "majestic-flora-tagline",
  },
  {
    id: "golden-sphere-huggies",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky Gold Dome Huggie Earrings",
    description:
      "Sculpted domes with a soft, brushed sheen. These huggies sit close to the lobe for an everyday silhouette that looks intentional, never overdone.",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    tone: "gold",
    toneOptions: [
      { value: "gold", label: "Gold" },
      { value: "silver", label: "Silver" },
    ],
    rating: 4.7,
    reviewCount: 514,
    badge: "Bestseller",
    images: [
      {
        imgId: "golden-sphere-1",
        ratio: "1x1",
        width: 900,
        query: "[golden-sphere-tagline] [golden-sphere-name]",
      },
      {
        imgId: "golden-sphere-2",
        ratio: "1x1",
        width: 900,
        query: "[golden-sphere-desc] [golden-sphere-name]",
      },
      {
        imgId: "golden-sphere-3",
        ratio: "1x1",
        width: 900,
        query: "[golden-sphere-name] [golden-sphere-tagline]",
      },
      {
        imgId: "golden-sphere-4",
        ratio: "1x1",
        width: 900,
        query: "[golden-sphere-desc] [golden-sphere-tagline]",
      },
    ],
    titleId: "golden-sphere-name",
    descId: "golden-sphere-desc",
    taglineId: "golden-sphere-tagline",
  },
  {
    id: "amber-lace-earrings",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured Gold Filigree Drop Earrings",
    description:
      "Inspired by heirloom lace, each pair is finished by hand in 18K gold plating. Light enough for day, detailed enough for evening.",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    tone: "gold",
    toneOptions: [
      { value: "gold", label: "Gold" },
      { value: "silver", label: "Silver" },
    ],
    rating: 4.8,
    reviewCount: 189,
    badge: null,
    images: [
      {
        imgId: "amber-lace-1",
        ratio: "1x1",
        width: 900,
        query: "[amber-lace-tagline] [amber-lace-name]",
      },
      {
        imgId: "amber-lace-2",
        ratio: "1x1",
        width: 900,
        query: "[amber-lace-desc] [amber-lace-name]",
      },
      {
        imgId: "amber-lace-3",
        ratio: "1x1",
        width: 900,
        query: "[amber-lace-name] [amber-lace-tagline]",
      },
      {
        imgId: "amber-lace-4",
        ratio: "1x1",
        width: 900,
        query: "[amber-lace-desc] [amber-lace-tagline]",
      },
    ],
    titleId: "amber-lace-name",
    descId: "amber-lace-desc",
    taglineId: "amber-lace-tagline",
  },
  {
    id: "royal-heirloom-set",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-Boxed Earring & Necklace Set",
    description:
      "A matching earring and necklace set, presented in a keepsake velvet box. Designed to be given — and kept — for the moments that matter.",
    price: 95,
    category: "sets",
    material: "18K Gold Plated · Gift Boxed",
    tone: "gold",
    toneOptions: [
      { value: "gold", label: "Gold" },
      { value: "silver", label: "Silver" },
    ],
    rating: 4.9,
    reviewCount: 96,
    badge: "Gift-Ready",
    images: [
      {
        imgId: "royal-heirloom-1",
        ratio: "1x1",
        width: 900,
        query: "[royal-heirloom-tagline] [royal-heirloom-name]",
      },
      {
        imgId: "royal-heirloom-2",
        ratio: "1x1",
        width: 900,
        query: "[royal-heirloom-desc] [royal-heirloom-name]",
      },
      {
        imgId: "royal-heirloom-3",
        ratio: "1x1",
        width: 900,
        query: "[royal-heirloom-name] [royal-heirloom-tagline]",
      },
      {
        imgId: "royal-heirloom-4",
        ratio: "1x1",
        width: 900,
        query: "[royal-heirloom-desc] [royal-heirloom-tagline]",
      },
    ],
    titleId: "royal-heirloom-name",
    descId: "royal-heirloom-desc",
    taglineId: "royal-heirloom-tagline",
  },
]

export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug)

export const getRelatedProducts = (slug, count = 4) => {
  const current = getProductBySlug(slug)
  if (!current) return products.slice(0, count)
  const others = products.filter((p) => p.slug !== slug)
  return others.slice(0, count)
}

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
]
