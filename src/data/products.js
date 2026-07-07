// Seed product catalog for Velmora Fine Jewelry
// Images are warm gold jewelry on dark/neutral backgrounds.
// Replace these with real product imagery by swapping the `image` URLs.

export const CATEGORIES = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
  { id: "sets", name: "Sets" },
];

export const MATERIALS = [
  { id: "18k-gold", name: "18K Gold Plated" },
  { id: "sterling-silver", name: "Sterling Silver" },
  { id: "rose-gold", name: "Rose Gold Plated" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    tagline: "Crystal-accented gold ear cuff",
    price: 42,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    description:
      "A sculptural ear cuff with a single hand-set crystal accent. Designed to wear solo or stacked with your daily studs. The kind of piece that quietly out-trends itself season after season.",
    details: [
      "18K gold plated over brass",
      "Hand-set Austrian crystal",
      "Hypoallergenic, nickel-free",
      "Sold as a single cuff",
    ],
    materials:
      "Plated in 18K gold over a brass core for a weighty, real-jewelry feel. Hypoallergenic and free of nickel and lead. Store dry and remove before showering or swimming.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Orders ship within 1–2 business days from our studio in Lisbon.",
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Vivid Aura Cuff — gold ear cuff with crystal accent on warm neutral background",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    material: "18k-gold",
    tone: "gold",
    rating: 4.8,
    reviews: 84,
    badge: "New",
    description:
      "A clustered floral pendant in soft jewel tones, suspended from a fine cable chain. Lightweight, layered-ready, and built to catch candlelight.",
    details: [
      "18K gold plated chain & setting",
      "Multicolor crystal pavé",
      "16\" + 2\" extender",
      "Lobster clasp closure",
    ],
    materials:
      "Crafted in 18K gold plated brass with a multicolor crystal pavé centerpiece. Nickel-free and hypoallergenic. Avoid contact with perfume and lotion to extend the plating life.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Expedited options available at checkout.",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Majestic Flora Nectar — multicolor floral crystal pendant on a fine gold chain",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggies",
    price: 38,
    category: "huggies",
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    reviews: 312,
    badge: "Bestseller",
    description:
      "A modern take on the classic huggie. Bold dome silhouette, secure hinged clasp, and a polished mirror finish that catches every angle.",
    details: [
      "18K gold plated brass",
      "10mm dome, hinged clasp",
      "Sold as a pair",
      "Lightweight for everyday",
    ],
    materials:
      "Solid brass core plated in 18K gold with a high-polish finish. Hypoallergenic, nickel-free, and tarnish-resistant with basic care.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Orders ship within 1–2 business days.",
    image:
      "https://images.unsplash.com/photo-1635767582909-345c4f0aa0a0?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Golden Sphere Huggies — chunky gold dome huggie earrings on a soft surface",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drops",
    price: 54,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.7,
    reviews: 56,
    badge: null,
    description:
      "Delicate filigree drops with a vintage lace motif. Light enough to wear from desk to dinner, detailed enough to feel like an heirloom.",
    details: [
      "18K gold plated brass",
      "Filigree drop, 28mm",
      "Sterling silver posts",
      "Sold as a pair",
    ],
    materials:
      "Cast in brass, plated in 18K gold with a textured filigree finish. Sterling silver posts for sensitive ears. Store in the included pouch to slow oxidation.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Amber Lace Earrings — textured gold filigree drop earrings on a dark surface",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring & necklace set",
    price: 95,
    category: "sets",
    material: "18k-gold",
    tone: "gold",
    rating: 5.0,
    reviews: 42,
    badge: "Gift-Ready",
    description:
      "Our most-loved studs paired with a matching dainty chain, presented in a keepsake gift box. The set she reopens long after the occasion.",
    details: [
      "18K gold plated brass",
      "Matching studs + 16\" chain",
      "Velvet-lined gift box",
      "Ready to gift, no wrap needed",
    ],
    materials:
      "Both pieces are 18K gold plated brass with a polished finish. Hypoallergenic and nickel-free. The set is hand-packed in a velvet-lined gift box made from recycled materials.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Express shipping available — order by 2pm for next-day delivery in the US & EU.",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Royal Heirloom Set — gold studs and matching necklace in a gift box",
  },
];

// Editorial imagery (used on the homepage, story, UGC reel)
export const EDITORIAL = {
  hero: {
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1800&q=85",
    alt: "Warm-lit close-up of gold jewelry on a model's neck and ear",
  },
  story: {
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1400&q=85",
    alt: "Artisan hands finishing a piece of gold jewelry at a studio bench",
  },
  categoryEarrings: {
    image:
      "https://images.unsplash.com/photo-1535632066274-66c2dc55a166?auto=format&fit=crop&w=900&q=85",
    alt: "Earrings collection — gold studs and drops on a warm neutral surface",
  },
  categoryNecklaces: {
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    alt: "Necklaces collection — fine gold chains laid on dark fabric",
  },
  categoryHuggies: {
    image:
      "https://images.unsplash.com/photo-1635767582909-345c4f0aa0a0?auto=format&fit=crop&w=900&q=85",
    alt: "Huggies collection — chunky gold huggie earrings on neutral backdrop",
  },
  ugc: [
    {
      image:
        "https://images.unsplash.com/photo-1631982690923-4f50b30d4e2a?auto=format&fit=crop&w=900&q=85",
      caption: "The huggies I never take off",
      handle: "@maya.k",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?auto=format&fit=crop&w=900&q=85",
      caption: "Layered, always",
      handle: "@elena.studios",
    },
    {
      image:
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=900&q=85",
      caption: "Sunlit heirloom",
      handle: "@noor.m",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?auto=format&fit=crop&w=900&q=85",
      caption: "Office to evening",
      handle: "@rosie.t",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605493725784-56d4a7a18f8c?auto=format&fit=crop&w=900&q=85",
      caption: "My forever cuff",
      handle: "@jules.e",
    },
    {
      image:
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=85",
      caption: "The daily uniform",
      handle: "@sienna.l",
    },
  ],
  testimonials: [
    {
      name: "Amelia R.",
      rating: 5,
      quote:
        "I wear the Royal Heirloom Set almost every day — it layers with everything and still looks like the first time I opened the box.",
    },
    {
      name: "Naomi K.",
      rating: 5,
      quote:
        "Finally a demi-fine brand that doesn't feel cheap. The huggies have the weight of fine jewelry, and the gold still looks perfect after months.",
    },
    {
      name: "Sophie M.",
      rating: 5,
      quote:
        "Bought the cuff for myself after a rough month. It's the small, beautiful thing I reach for every morning now. Quietly perfect.",
    },
  ],
};

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category,
  ).slice(0, limit);
}

export function getBestsellers(limit = 5) {
  return PRODUCTS.filter((p) => p.badge === "Bestseller").slice(0, limit);
}
