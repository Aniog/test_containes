// Seed catalog for Velmora Fine Jewelry.
// Each product includes `titleId` / `descId` so that any image query
// referencing the product can be constructed deterministically.

export const categories = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
  { id: "sets", name: "Sets" },
];

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    badge: "Bestseller",
    tone: "Gold",
    desc: "A delicate gold ear cuff set with a single crystal accent — sculpted to catch the light from every angle.",
    details:
      "Hand-finished in 18K gold-plated brass with a clear pavé crystal. Lightweight, sculptural, and made for everyday wear. Sold as a single cuff.",
    materials:
      "18K gold-plated brass, hypoallergenic titanium post, pavé crystal accent. Lead-free, nickel-free.",
    care: "Store dry in the suede pouch provided. Avoid perfume, water, and lotions. Wipe gently with the included polishing cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces. Most orders ship within 1–2 business days.",
    images: ["aura-1", "aura-2", "aura-3", "aura-4"],
    titleId: "prod-vivid-aura-jewels-title",
    descId: "prod-vivid-aura-jewels-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviewCount: 218,
    badge: "New",
    tone: "Gold",
    desc: "A multicolor floral crystal cluster on a fine gold chain — a whisper of color, set on a barely-there chain.",
    details:
      "Inspired by heirloom florals. Each piece is hand-set with handset crystals in champagne, blush, and moss green tones on a 16–18\" adjustable cable chain.",
    materials:
      "18K gold-plated brass, multicolor handset crystals. Adjustable 16–18\" chain with lobster clasp.",
    care: "Remove before showering or sleeping. Polish gently with a dry cloth. Keep away from moisture and perfume.",
    shipping:
      "Free worldwide shipping on orders over $75. Gift-ready packaging included. 30-day returns.",
    images: ["flora-1", "flora-2", "flora-3", "flora-4"],
    titleId: "prod-majestic-flora-nectar-title",
    descId: "prod-majestic-flora-nectar-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 312,
    badge: "Bestseller",
    tone: "Gold",
    desc: "A chunky gold dome huggie — the everyday hoop, refined. Hugs the lobe with sculptural weight.",
    details:
      "Our signature dome huggie in a polished 18K gold-plated finish. Hinged post for secure, easy wear. Substantial without feeling heavy.",
    materials:
      "18K gold-plated brass with a hinged post closure. Hypoallergenic and tarnish-resistant coating.",
    care: "Wipe with the included polishing cloth. Avoid water, lotion, and perfume for longest wear.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pairs.",
    images: ["sphere-1", "sphere-2", "sphere-3", "sphere-4"],
    titleId: "prod-golden-sphere-huggies-title",
    descId: "prod-golden-sphere-huggies-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviewCount: 96,
    badge: "Limited",
    tone: "Gold",
    desc: "Textured gold filigree drops that move like lace. Light on the ear, heavy on the detail.",
    details:
      "Inspired by antique lacework, each pair is cast with an open filigree pattern. The drops are 1.5\" long and featherlight at 4g each.",
    materials:
      "18K gold-plated brass with a brushed filigree finish. Hypoallergenic post.",
    care: "Store flat in the suede pouch. Avoid contact with water, perfume, and lotions.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pairs.",
    images: ["lace-1", "lace-2", "lace-3", "lace-4"],
    titleId: "prod-amber-lace-earrings-title",
    descId: "prod-amber-lace-earrings-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    rating: 5.0,
    reviewCount: 47,
    badge: "Gift Edit",
    tone: "Gold",
    desc: "A gift-boxed earring and necklace set — the heirloom starter. Pavé crystals on a delicate cable chain, paired with a domed huggie.",
    details:
      "Our most-loved pieces, paired. Includes a pair of Golden Sphere Huggies and the Vivid Aura pendant on a 16–18\" chain. Presented in a keepsake velvet box.",
    materials:
      "18K gold-plated brass, pavé crystals, hypoallergenic posts. Lead-free, nickel-free.",
    care: "Store in the included velvet box. Wipe gently with a polishing cloth. Keep dry.",
    shipping:
      "Free worldwide shipping on orders over $75. Gift receipts available at checkout. 30-day returns.",
    images: ["heirloom-1", "heirloom-2", "heirloom-3", "heirloom-4"],
    titleId: "prod-royal-heirloom-set-title",
    descId: "prod-royal-heirloom-set-desc",
  },
];

export const ugcItems = [
  {
    id: "ugc-1",
    handle: "@noor.styles",
    caption: "Everyday layer",
    imgId: "ugc-noor-7e4a",
  },
  {
    id: "ugc-2",
    handle: "@amelia.jewels",
    caption: "Stacked in gold",
    imgId: "ugc-amelia-1c2b",
  },
  {
    id: "ugc-3",
    handle: "@kira.daily",
    caption: "Soft minimal",
    imgId: "ugc-kira-9d8f",
  },
  {
    id: "ugc-4",
    handle: "@lila.wears",
    caption: "Golden hour",
    imgId: "ugc-lila-3a10",
  },
  {
    id: "ugc-5",
    handle: "@sienna.kim",
    caption: "In the wild",
    imgId: "ugc-sienna-44b2",
  },
  {
    id: "ugc-6",
    handle: "@maeve.co",
    caption: "Brunch stack",
    imgId: "ugc-maeve-77c1",
  },
];

export const testimonials = [
  {
    id: "t-1",
    name: "Olivia R.",
    rating: 5,
    quote:
      "I've owned my Vivid Aura cuff for almost a year — it still looks brand new. I wear it daily and get compliments constantly.",
  },
  {
    id: "t-2",
    name: "Sarah M.",
    rating: 5,
    quote:
      "The packaging made it feel like a real gift, and the huggies are honestly the best-fitting hoops I've ever owned.",
  },
  {
    id: "t-3",
    name: "Priya N.",
    rating: 5,
    quote:
      "Finally demi-fine jewelry that doesn't look like fast fashion. The Majestic Flora is unreal in person.",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id);
  if (!current) return products.slice(0, limit);
  const sameCategory = products.filter(
    (p) => p.id !== id && p.category === current.category,
  );
  const others = products.filter(
    (p) => p.id !== id && p.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
