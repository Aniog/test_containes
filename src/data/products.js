// Seed product catalog for Velmora Fine Jewelry.
// Images use Picsum Photos (deterministic seed-based URLs) for reliable
// editorial imagery. A warm-tone CSS treatment is applied at the component
// level (sepia + saturate + warm) so the photography reads as
// on-brand "warm gold on neutral". Swap these URLs with real product
// photography when ready.

const pic = (seed, w = 900, h = null) =>
  h
    ? `https://picsum.photos/seed/${seed}/${w}/${h}`
    : `https://picsum.photos/seed/${seed}/${w}`;

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    tone: "gold",
    rating: 4.8,
    reviews: 124,
    shortDescription:
      "A whisper of crystal nestled against the ear — like light caught mid-motion.",
    description:
      "The Vivid Aura Jewels are sculpted to catch even the softest light. A single crystal sits at the heart of a fluid 18K gold-plated silhouette, designed to drape the ear like a quiet halo. Lightweight enough for daily wear, considered enough for the evening.",
    materials:
      "18K gold plated over a hypoallergenic brass core. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.",
    care: "Avoid contact with water, perfume and lotions. Store in the velvet pouch provided. Wipe gently with the included polishing cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Most orders ship within 1–2 business days.",
    images: [pic("velmora-aura-1", 1100), pic("velmora-aura-2", 1100), pic("velmora-aura-3", 1100)],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    tone: "gold",
    rating: 4.9,
    reviews: 211,
    shortDescription:
      "A multicolor floral crystal pendant — the garden, suspended on a chain.",
    description:
      "Inspired by an old botanical print, the Majestic Flora Nectar is a hand-set cluster of soft-tone crystals in a gold-plated setting. The pendant hangs from a delicate 16–18 inch adjustable cable chain, designed to sit just above the décolletage.",
    materials:
      "18K gold plated brass base. Multicolor crystals. Lead-free, nickel-free, hypoallergenic clasp.",
    care: "Remove before showering or sleeping. Store flat in the velvet pouch. Polish with a soft dry cloth only.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Most orders ship within 1–2 business days.",
    images: [pic("velmora-flora-1", 1100), pic("velmora-flora-2", 1100), pic("velmora-flora-3", 1100)],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    tone: "gold",
    rating: 4.7,
    reviews: 342,
    shortDescription:
      "A chunky, sculpted dome — the everyday huggie, refined.",
    description:
      "The Golden Sphere Huggies are an update on our most-loved silhouette. A solid, dome-shaped huggie in a polished 18K gold-plated finish, hinged for easy on-and-off. Substantial in feel, light on the ear — designed to be the piece you never take off.",
    materials:
      "18K gold plated over brass. Hinged click-closure post. Hypoallergenic, nickel-free, lead-free.",
    care: "Water-resistant, but we recommend removing before showering. Wipe with a soft cloth to maintain the polish.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Most orders ship within 1–2 business days.",
    images: [pic("velmora-sphere-1", 1100), pic("velmora-sphere-2", 1100), pic("velmora-sphere-3", 1100)],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    tone: "gold",
    rating: 4.8,
    reviews: 89,
    shortDescription:
      "Hand-finished filigree — old-world craft, modern silhouette.",
    description:
      "Each pair of Amber Lace Earrings is finished by hand, the gold filigree catching light in soft, lace-like detail. A drop silhouette with movement, made to be worn from morning to evening. Inspired by heirloom pieces reimagined for the everyday.",
    materials:
      "18K gold plated brass with hand-finished filigree. Hypoallergenic lever-back closure. Lead-free, nickel-free.",
    care: "Store in the velvet pouch. Avoid contact with perfume and hairspray. Polish with a soft, dry cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Most orders ship within 1–2 business days.",
    images: [pic("velmora-amber-1", 1100), pic("velmora-amber-2", 1100), pic("velmora-amber-3", 1100)],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    price: 95,
    tone: "gold",
    rating: 5.0,
    reviews: 56,
    shortDescription:
      "A matching earring and pendant set, gift-boxed. The heirloom, delivered.",
    description:
      "Our Royal Heirloom Set pairs a sculpted drop earring with a matching pendant, both finished in 18K gold plating and presented in a keepsake gift box. Designed to be gifted — and to be kept.",
    materials:
      "18K gold plated brass. Matching earring + pendant. Premium magnetic-close gift box with velvet interior. Hypoallergenic.",
    care: "Store in the gift box when not in use. Avoid water, perfume and lotion. Polish gently with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Gift wrapping available at checkout.",
    images: [pic("velmora-heirloom-1", 1100), pic("velmora-heirloom-2", 1100), pic("velmora-heirloom-3", 1100)],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
export const getProductsByCategory = (cat) =>
  products.filter((p) => p.category === cat);
export const getRelated = (product) =>
  products.filter((p) => p.id !== product.id).slice(0, 4);

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const categoryTiles = [
  {
    id: "earrings",
    label: "Earrings",
    sub: "Drop · Stud · Hoop",
    image: pic("velmora-cat-earrings", 1200, 1200),
  },
  {
    id: "necklaces",
    label: "Necklaces",
    sub: "Pendant · Layered · Chain",
    image: pic("velmora-cat-necklaces", 1200, 1200),
  },
  {
    id: "huggies",
    label: "Huggies",
    sub: "Sculpted · Dome · Polished",
    image: pic("velmora-cat-huggies", 1200, 1200),
  },
];

export const ugcCards = [
  { id: "ugc-1", caption: "Worn with a white tee.", image: pic("velmora-ugc-1", 720, 1280) },
  { id: "ugc-2", caption: "Golden hour, on repeat.", image: pic("velmora-ugc-2", 720, 1280) },
  { id: "ugc-3", caption: "Stacked, never too much.", image: pic("velmora-ugc-3", 720, 1280) },
  { id: "ugc-4", caption: "The everyday heirloom.", image: pic("velmora-ugc-4", 720, 1280) },
  { id: "ugc-5", caption: "Glow, by candlelight.", image: pic("velmora-ugc-5", 720, 1280) },
  { id: "ugc-6", caption: "For the one who notices.", image: pic("velmora-ugc-6", 720, 1280) },
];

export const testimonials = [
  {
    id: "t-1",
    name: "Amelia R.",
    quote:
      "I have worn the Golden Sphere Huggies every single day for the past year. They have never lost their warmth, never tarnished. They feel like a quiet luxury I gave myself.",
  },
  {
    id: "t-2",
    name: "Priya S.",
    quote:
      "I bought the Royal Heirloom Set for my sister's birthday. The packaging alone made her tear up. The jewelry is even more beautiful in person.",
  },
  {
    id: "t-3",
    name: "Sophie L.",
    quote:
      "The Majestic Flora Nectar is everything. It catches the light like a watercolor. I get compliments every time I wear it.",
  },
];
