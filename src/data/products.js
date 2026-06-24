// Editorial copy and stock-image search terms for the 5 seed products.
// Image search terms are intentionally short and descriptive so the
// ImageHelper picks close-to-product shots at runtime.

export const products = [
  {
    id: "vivid-aura-jewels",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviews: 412,
    material: "18k Gold Plated · Crystal",
    short:
      "A whisper of crystal set on a slim gold cuff. Designed to be worn stacked or solo.",
    description:
      "Sculpted in 18k gold-plated brass with a hand-set crystal accent, the Vivid Aura Cuff catches light from every angle without weighing the ear. Designed in our atelier and finished by hand for a soft, mirror-like glow.",
    materials:
      "18k gold-plated brass with hypoallergenic posts. Set with a single faceted crystal. Nickel-free, lead-free, and tarnish-resistant when cared for as recommended.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in their original packaging. See our Returns page for full terms.",
    toneOptions: ["gold", "silver"],
    images: [
      { id: "vivid-aura-1", query: "gold ear cuff with crystal on dark warm background" },
      { id: "vivid-aura-2", query: "close up of crystal ear cuff on model ear" },
    ],
    related: ["golden-sphere-huggies", "amber-lace-earrings", "royal-heirloom-set"],
    badge: "Bestseller",
  },
  {
    id: "majestic-flora-nectar",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 487,
    material: "18k Gold Plated · Crystal",
    short:
      "A botanical cluster of multi-color crystals resting on a delicate gold chain.",
    description:
      "Inspired by garden light at dusk, the Majestic Flora Nectar necklace pairs a soft cluster of hand-set crystals with a fine 18k gold-plated chain. Layer it, wear it alone — either way, it reads.",
    materials:
      "18k gold-plated brass chain and findings. Hand-set multicolor crystals. Hypoallergenic, nickel-free, and lead-free. Length: 16–18 inch adjustable.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in their original packaging. See our Returns page for full terms.",
    toneOptions: ["gold"],
    images: [
      { id: "majestic-flora-1", query: "multicolor crystal floral pendant gold necklace" },
      { id: "majestic-flora-2", query: "gold necklace pendant on neck model warm light" },
    ],
    related: ["vivid-aura-jewels", "royal-heirloom-set", "amber-lace-earrings"],
    badge: "New",
  },
  {
    id: "golden-sphere-huggies",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviews: 624,
    material: "18k Gold Plated · Dome",
    short:
      "A chunky dome huggie with the weight of something much more expensive.",
    description:
      "Sculpted as a full dome in polished 18k gold-plated brass, the Golden Sphere Huggies sit close to the ear with a confident, architectural finish. Wear them day, wear them night — they go.",
    materials:
      "18k gold-plated brass with hypoallergenic hinged posts. Nickel-free, lead-free, and tarnish-resistant with proper care. Diameter: 12mm.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in their original packaging. See our Returns page for full terms.",
    toneOptions: ["gold", "silver"],
    images: [
      { id: "golden-sphere-1", query: "chunky gold dome huggie earring close up on dark" },
      { id: "golden-sphere-2", query: "gold huggie earring on model ear editorial" },
    ],
    related: ["amber-lace-earrings", "vivid-aura-jewels", "royal-heirloom-set"],
    badge: "Bestseller",
  },
  {
    id: "amber-lace-earrings",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviews: 298,
    material: "18k Gold Plated · Filigree",
    short:
      "Hand-finished filigree drops that move like lace against the skin.",
    description:
      "Inspired by heirloom lace, the Amber Lace Earrings feature a hand-finished filigree drop in 18k gold-plated brass. Light on the ear, warm against the skin, and quiet enough for everyday.",
    materials:
      "18k gold-plated brass with hypoallergenic posts. Hand-finished filigree. Nickel-free, lead-free, and tarnish-resistant when cared for as recommended. Length: 38mm.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in their original packaging. See our Returns page for full terms.",
    toneOptions: ["gold"],
    images: [
      { id: "amber-lace-1", query: "gold filigree drop earring warm light on linen" },
      { id: "amber-lace-2", query: "gold lace earrings on model ear editorial close" },
    ],
    related: ["vivid-aura-jewels", "golden-sphere-huggies", "majestic-flora-nectar"],
  },
  {
    id: "royal-heirloom-set",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    price: 95,
    rating: 4.9,
    reviews: 156,
    material: "18k Gold Plated · Gift Boxed",
    short:
      "A coordinated earring and necklace set in our signature gift box.",
    description:
      "The Royal Heirloom Set pairs our most-loved studs with a delicate chain, finished in 18k gold-plated brass and presented in our signature gift box. Built to be given — and to be kept.",
    materials:
      "18k gold-plated brass chain, findings and posts. Hypoallergenic, nickel-free, and lead-free. Chain length: 16–18 inch adjustable. Stud diameter: 6mm.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in their original packaging. Gift receipts available at checkout.",
    toneOptions: ["gold", "silver"],
    images: [
      { id: "royal-heirloom-1", query: "gold earring and necklace set in gift box luxury" },
      { id: "royal-heirloom-2", query: "gold jewelry set on warm linen editorial" },
    ],
    related: ["majestic-flora-nectar", "golden-sphere-huggies", "vivid-aura-jewels"],
    badge: "Gift",
  },
];

export const priceRanges = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over-75", label: "Over $75", min: 75.99, max: Infinity },
];

export const materialFilters = [
  { id: "all", label: "All Materials" },
  { id: "18k-gold-plated", label: "18k Gold Plated" },
  { id: "crystal", label: "Crystal" },
  { id: "filigree", label: "Filigree" },
];

export const categoryFilters = [
  { id: "all", label: "All Pieces" },
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const testimonials = [
  {
    id: 1,
    name: "Olivia R.",
    rating: 5,
    body:
      "The huggies are unreal — they look like a designer pair I tried on in Soho. The weight, the finish, the box. Everything feels considered.",
    product: "Golden Sphere Huggies",
  },
  {
    id: 2,
    name: "Amelia K.",
    rating: 5,
    body:
      "Bought the Flora pendant for my sister's birthday. The packaging alone made her cry. She hasn't taken it off.",
    product: "Majestic Flora Nectar",
  },
  {
    id: 3,
    name: "Sophie T.",
    rating: 5,
    body:
      "Finally a demi-fine brand that doesn't feel like every other one online. The tone of the gold is exactly right and the chain feels substantial.",
    product: "Royal Heirloom Set",
  },
];

export const reels = [
  { id: "reel-1", handle: "@maya.studios", caption: "Layered huggies, every day" },
  { id: "reel-2", handle: "@noor.daily", caption: "Morning gold ritual" },
  { id: "reel-3", handle: "@elsa.wears", caption: "Stacks that breathe" },
  { id: "reel-4", handle: "@lila.edits", caption: "Heirloom dressing" },
  { id: "reel-5", handle: "@vee.gold", caption: "Soft gold, soft skin" },
  { id: "reel-6", handle: "@ari.notes", caption: "On the Flora pendant" },
];