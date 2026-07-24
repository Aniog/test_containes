// Static editorial / marketing content for the storefront.
// All ids are kept stable so that the strk-img system can resolve them.

export const trustItems = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export const testimonials = [
  {
    id: "t-amelia",
    name: "Amelia R.",
    quote:
      "I bought the Golden Sphere huggies for myself and they’ve barely left my ears. They feel like an old friend.",
    product: "Golden Sphere Huggies",
  },
  {
    id: "t-sloane",
    name: "Sloane K.",
    quote:
      "The Majestic Flora necklace is the most complimented piece I own. I gifted my sister one for her birthday — she cried.",
    product: "Majestic Flora Nectar",
  },
  {
    id: "t-priya",
    name: "Priya M.",
    quote:
      "Quiet, considered, beautifully made. Velmora is what I’ve been waiting for — demi-fine that actually feels fine.",
    product: "Royal Heirloom Set",
  },
];

// Reel-style UGC cards. Each is a 9:16 vertical card.
export const ugcReels = [
  {
    id: "reel-aria",
    handle: "@aria.linen",
    caption: "Sunday in the Golden Sphere.",
    imgId: "reel-aria-img-2af0",
    query: "[reel-aria-caption] [reel-section-subtitle] [reel-section-title]",
  },
  {
    id: "reel-noor",
    handle: "@noor.studios",
    caption: "The huggies, layered with everything.",
    imgId: "reel-noor-img-91b4",
    query: "[reel-noor-caption] [reel-section-subtitle] [reel-section-title]",
  },
  {
    id: "reel-mira",
    handle: "@mira.kim",
    caption: "Flora, with my morning coffee.",
    imgId: "reel-mira-img-7d11",
    query: "[reel-mira-caption] [reel-section-subtitle] [reel-section-title]",
  },
  {
    id: "reel-elena",
    handle: "@elena.vega",
    caption: "Aura, for the dinner I almost didn’t go to.",
    imgId: "reel-elena-img-4e72",
    query: "[reel-elena-caption] [reel-section-subtitle] [reel-section-title]",
  },
  {
    id: "reel-juno",
    handle: "@juno.daily",
    caption: "Heirloom set, gifted to my mother.",
    imgId: "reel-juno-img-1cc5",
    query: "[reel-juno-caption] [reel-section-subtitle] [reel-section-title]",
  },
  {
    id: "reel-sasha",
    handle: "@sasha.studio",
    caption: "Lace earrings, golden hour, soft launch.",
    imgId: "reel-sasha-img-88b6",
    query: "[reel-sasha-caption] [reel-section-subtitle] [reel-section-title]",
  },
];

export const categoryTiles = [
  {
    id: "cat-earrings",
    label: "Earrings",
    href: "/shop?category=earrings",
    imgId: "tile-earrings-img-a1b2",
    query: "[cat-earrings-label] [cat-section-subtitle] [cat-section-title]",
  },
  {
    id: "cat-necklaces",
    label: "Necklaces",
    href: "/shop?category=necklaces",
    imgId: "tile-necklaces-img-c3d4",
    query: "[cat-necklaces-label] [cat-section-subtitle] [cat-section-title]",
  },
  {
    id: "cat-huggies",
    label: "Huggies",
    href: "/shop?category=huggies",
    imgId: "tile-huggies-img-e5f6",
    query: "[cat-huggies-label] [cat-section-subtitle] [cat-section-title]",
  },
];

export const journalPosts = [
  {
    id: "journal-1",
    category: "Style Notes",
    title: "How to Layer Necklaces Without the Tangle",
    excerpt:
      "A short guide from our atelier on chain lengths, pendant weights, and the quiet art of stacking.",
    readTime: "4 min read",
    imgId: "journal-1-img-7a3c",
    query: "layered gold necklaces flatlay editorial still life [journal-1-title]",
  },
  {
    id: "journal-2",
    category: "Behind the Atelier",
    title: "What ‘Demi-Fine’ Actually Means",
    excerpt:
      "The middle ground between costume and fine — how we think about gold plating, base metals, and longevity.",
    readTime: "6 min read",
    imgId: "journal-2-img-4d1f",
    query: "goldsmith working on jewelry at bench [journal-2-title]",
  },
];

export const navLinks = [
  { id: "shop", label: "Shop", to: "/shop" },
  { id: "collections", label: "Collections", to: "/shop" },
  { id: "about", label: "About", to: "/about" },
  { id: "journal", label: "Journal", to: "/journal" },
];
