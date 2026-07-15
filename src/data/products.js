// Seed product data for Velmora Fine Jewelry
// All copy uses elegant product names. Images are real CDN URLs.

const IMG = {
  vividAuraPrimary:
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1602751584549-44d0f48236a5",
  vividAuraSecondary:
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1652949714701-1be8cdac08d0",
  majesticFloraPrimary:
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1660380188204-300748f1f3b8",
  majesticFloraSecondary:
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1609971919698-283e897e56a4",
  goldenSpherePrimary:
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1653376142552-497627e49d3e",
  goldenSphereSecondary:
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1443365935720-5b9b27bde825",
  amberLacePrimary:
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1549655397-9ec01cb3ee82",
  amberLaceSecondary:
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1620916118276-77fd7ba727a0",
  royalHeirloomPrimary:
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1638964327749-53436bcccdca",
  royalHeirloomSecondary:
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_800/unsplashcom/photo-1521805533-7852d87c86f6",
};

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.9,
    reviews: 128,
    material: "18K Gold Plated",
    tone: "gold",
    badges: ["Bestseller"],
    image: IMG.vividAuraPrimary,
    imageAlt: IMG.vividAuraSecondary,
    short:
      "A whisper of crystal caught in warm gold. Hand-set with hand-cut stone for a soft, daily shimmer.",
    description:
      "The Vivid Aura Jewels are inspired by the play of morning light through crystal. Each ear cuff is hand-finished in 18K gold plating and set with a single, hand-cut crystal accent that catches the light from every angle. Designed to be worn alone, stacked, or paired with the Aura huggie for a layered ear.",
    materials:
      "18K gold plated over a hypoallergenic brass core. Hand-set crystal accent. Nickel-free and lead-free. Suitable for sensitive ears.",
    care:
      "Avoid contact with perfume, lotion, and water. Store in the soft pouch provided. Wipe gently with the included polishing cloth to maintain the finish.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces. Each order arrives in our signature ivory gift box with a polishing cloth.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.8,
    reviews: 96,
    material: "18K Gold Plated",
    tone: "gold",
    badges: ["New"],
    image: IMG.majesticFloraPrimary,
    imageAlt: IMG.majesticFloraSecondary,
    short:
      "A garden of multicolor crystals strung along a fine gold chain. The piece you'll reach for daily.",
    description:
      "Majestic Flora Nectar is a romantic, hand-strung necklace that captures the colors of an English garden in late bloom. Multicolor crystals are individually set along a delicate 18K gold-plated chain, finished with an adjustable extender for the perfect drop.",
    materials:
      "18K gold plated brass chain and findings. Hand-set multicolor crystals. Hypoallergenic and nickel-free.",
    care:
      "Remove before showering or sleeping. Lay flat in the provided pouch. Avoid exposure to chemicals and rough surfaces.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces. Gift wrapping available at checkout.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.9,
    reviews: 214,
    material: "18K Gold Plated",
    tone: "gold",
    badges: ["Bestseller"],
    image: IMG.goldenSpherePrimary,
    imageAlt: IMG.goldenSphereSecondary,
    short:
      "A polished gold dome that hugs the lobe. Quiet, considered, and impossibly easy to wear.",
    description:
      "A modern take on the everyday huggie. The Golden Sphere is a chunky gold dome with a smooth, high-shine finish — designed to sit close to the lobe for a clean, sculpted look. The secure hinge closure keeps them comfortably in place from morning to evening.",
    materials:
      "18K gold plated brass. Hypoallergenic, nickel-free, and lead-free.",
    care:
      "Wipe with a soft, dry cloth after wear. Store in the pouch provided. Remove before swimming or showering.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces.",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.7,
    reviews: 71,
    material: "18K Gold Plated",
    tone: "gold",
    badges: [],
    image: IMG.amberLacePrimary,
    imageAlt: IMG.amberLaceSecondary,
    short:
      "Hand-formed filigree drops with the warmth of late-afternoon light. A quiet heirloom in the making.",
    description:
      "Inspired by antique lacework, the Amber Lace Earrings are hand-formed in 18K gold-plated brass with a delicate filigree pattern. Lightweight and fluid, they catch the light beautifully and pair as easily with denim as with evening wear.",
    materials:
      "18K gold plated brass. Hand-formed filigree. Hypoallergenic and nickel-free.",
    care:
      "Store flat in the provided pouch. Avoid contact with perfume and water. Polish gently with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    rating: 5.0,
    reviews: 58,
    material: "18K Gold Plated",
    tone: "gold",
    badges: ["Gift-Ready"],
    image: IMG.royalHeirloomPrimary,
    imageAlt: IMG.royalHeirloomSecondary,
    short:
      "A gift-boxed earring and necklace set, finished in warm gold. Made to be remembered.",
    description:
      "The Royal Heirloom Set pairs a delicate gold necklace with a matching pair of stud earrings. Each piece is hand-finished in 18K gold plating and arrives in our signature ivory gift box, ready to give. Save $15 versus purchasing the pieces separately.",
    materials:
      "18K gold plated brass. Hypoallergenic, nickel-free, and lead-free.",
    care:
      "Store in the included gift box. Remove before showering, swimming, or sleeping. Polish gently with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces. Gift messaging available at checkout.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Amelia R.",
    quote:
      "The quality is genuinely stunning for the price. I wear my Golden Sphere Huggies almost every day and they still look brand new.",
    rating: 5,
  },
  {
    name: "Sofia M.",
    quote:
      "I bought the Royal Heirloom Set for my sister's birthday. The packaging alone made her cry. The jewelry is the real star though.",
    rating: 5,
  },
  {
    name: "Hannah K.",
    quote:
      "Quiet, considered, and never goes out of style. Velmora has quietly become my favorite jewelry brand.",
    rating: 5,
  },
];

export const UGC_REELS = [
  {
    id: "reel-1",
    caption: "The everyday huggie, considered.",
    handle: "@velmora",
  },
  {
    id: "reel-2",
    caption: "Layered, never loud.",
    handle: "@velmora",
  },
  {
    id: "reel-3",
    caption: "Morning light on gold.",
    handle: "@velmora",
  },
  {
    id: "reel-4",
    caption: "A garden at the neckline.",
    handle: "@velmora",
  },
  {
    id: "reel-5",
    caption: "The heirloom in the making.",
    handle: "@velmora",
  },
  {
    id: "reel-6",
    caption: "Stacked stories.",
    handle: "@velmora",
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(id, limit = 4) {
  return PRODUCTS.filter((p) => p.id !== id).slice(0, limit);
}

export const PRICE_RANGES = [
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75to100", label: "$75 – $100", min: 75, max: 100 },
  { id: "over100", label: "Over $100", min: 100, max: Infinity },
];
