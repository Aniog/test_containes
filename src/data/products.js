// Velmora seed product catalog.
// Each product has two images for hover swap, a category, an array of
// variants, and a material/price tier. Image slots carry stable
// `imgId` values so the runtime image loader can resolve them and the
// product gallery references the same slot in multiple places.

export const CATEGORIES = [
  { slug: "earrings", label: "Earrings" },
  { slug: "necklaces", label: "Necklaces" },
  { slug: "huggies", label: "Huggies" },
  { slug: "gifts", label: "Gifts" },
];

export const MATERIALS = [
  { slug: "18k-gold-plated", label: "18K Gold Plated" },
  { slug: "sterling-silver", label: "Sterling Silver" },
  { slug: "rose-gold", label: "Rose Gold" },
];

export const VARIANT_TONES = [
  { id: "gold", label: "Gold", swatch: "linear-gradient(135deg,#F0D9A8,#B8893E 60%,#5C4413)" },
  { id: "silver", label: "Silver", swatch: "linear-gradient(135deg,#E8E6E1,#9B9690 60%,#3D3A35)" },
  { id: "rose-gold", label: "Rose Gold", swatch: "linear-gradient(135deg,#F1C8BB,#C97B6B 60%,#7A4639)" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18k-gold-plated",
    price: 42,
    rating: 4.8,
    reviewCount: 312,
    badge: "Bestseller",
    description:
      "A single crystal-lit ear cuff that catches the light from every angle. Designed to sit along the cartilage without a piercing, finished in a warm 18K gold plating.",
    details: [
      "18K gold plated brass with a single cubic zirconia accent",
      "No piercing required — adjustable cuff silhouette",
      "Hypoallergenic and nickel-free",
      "Sold as a single cuff",
    ],
    materials: [
      "Base metal: brass",
      "Plating: 18K gold, 1.0 micron",
      "Stone: 4mm cubic zirconia",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    care: [
      "Remove before showering, swimming, or applying lotions",
      "Store in the soft pouch provided to slow oxidation",
      "Wipe gently with the included polishing cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Standard delivery: 3–6 business days",
      "30-day returns, no questions asked",
    ],
    imgIds: {
      primary: "vivid-aura-primary-1f3a",
      secondary: "vivid-aura-secondary-2b7d",
    },
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "18k-gold-plated",
    price: 68,
    rating: 4.9,
    reviewCount: 184,
    badge: "New",
    description:
      "A botanical cluster of multicolor crystals resting on a delicate cable chain. Hand-set with five distinct stone cuts, finished in warm 18K gold plating.",
    details: [
      "18K gold plated brass chain, 16\" with 2\" extender",
      "Five hand-set crystals in soft champagne, blush, topaz, moss, and smoke",
      "Lobster clasp closure with our signature coin tag",
    ],
    materials: [
      "Base metal: brass",
      "Plating: 18K gold, 1.0 micron",
      "Stones: 5 × crystal, 6mm–9mm mixed cuts",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    care: [
      "Apply lotions and perfume before putting on",
      "Remove before sleeping or exercising",
      "Store flat in the soft pouch provided",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Standard delivery: 3–6 business days",
      "30-day returns, no questions asked",
    ],
    imgIds: {
      primary: "majestic-flora-primary-9c2e",
      secondary: "majestic-flora-secondary-4f8a",
    },
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18k-gold-plated",
    price: 38,
    rating: 4.7,
    reviewCount: 528,
    badge: "Bestseller",
    description:
      "A modern take on the everyday huggie. Sculpted gold-tone dome with a satisfying weight and a hinged click closure that stays put from morning to night.",
    details: [
      "18K gold plated brass, sold as a pair",
      "12mm outer diameter, hinged click closure",
      "Designed for stacking with our Mini Hoop and Pearl Drop",
    ],
    materials: [
      "Base metal: brass",
      "Plating: 18K gold, 1.0 micron",
      "Closure: hinged click with silicone back",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    care: [
      "Avoid contact with chlorine and saltwater",
      "Polish gently with a soft cloth to maintain the glow",
      "Store in the soft pouch provided",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Standard delivery: 3–6 business days",
      "30-day returns, no questions asked",
    ],
    imgIds: {
      primary: "golden-sphere-primary-7d1b",
      secondary: "golden-sphere-secondary-3e9c",
    },
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18k-gold-plated",
    price: 54,
    rating: 4.8,
    reviewCount: 246,
    badge: null,
    description:
      "Filigree-inspired drops with a hand-textured lace pattern, finished in a brushed 18K gold. Light enough for daytime, considered enough for evening.",
    details: [
      "18K gold plated brass, sold as a pair",
      "Hand-textured filigree, 32mm drop",
      "Sterling silver post and butterfly back",
    ],
    materials: [
      "Base metal: brass",
      "Plating: 18K gold, 1.0 micron with brushed finish",
      "Post: sterling silver, hypoallergenic",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    care: [
      "Store flat to preserve the textured finish",
      "Remove before showering or applying perfume",
      "Polish gently with a soft, dry cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Standard delivery: 3–6 business days",
      "30-day returns, no questions asked",
    ],
    imgIds: {
      primary: "amber-lace-primary-5a8f",
      secondary: "amber-lace-secondary-2c4e",
    },
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "gifts",
    material: "18k-gold-plated",
    price: 95,
    rating: 5.0,
    reviewCount: 92,
    badge: "Gifting",
    description:
      "A coordinated earring and necklace set, presented in our signature cream jewelry box with ribbon. The piece you reach for when you want to feel finished.",
    details: [
      "Set includes a 16\" necklace and matching huggie pair",
      "18K gold plated brass, hypoallergenic",
      "Presented in a cream linen-textured gift box with ribbon",
    ],
    materials: [
      "Base metal: brass",
      "Plating: 18K gold, 1.0 micron",
      "Closure: lobster clasp + hinged huggie click",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    care: [
      "Store in the original gift box when not worn",
      "Avoid contact with water, lotion, and perfume",
      "Polish gently with the included cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Standard delivery: 3–6 business days",
      "30-day returns, no questions asked",
    ],
    imgIds: {
      primary: "royal-heirloom-primary-6b9d",
      secondary: "royal-heirloom-secondary-1a2c",
    },
  },
];

// Convenience lookups
export const getProductById = (id) => PRODUCTS.find((p) => p.id === id) || null;

export const getRelatedProducts = (id, limit = 4) => {
  const current = getProductById(id);
  if (!current) return PRODUCTS.slice(0, limit);
  const sameCategory = PRODUCTS.filter(
    (p) => p.id !== id && p.category === current.category
  );
  const rest = PRODUCTS.filter(
    (p) => p.id !== id && p.category !== current.category
  );
  return [...sameCategory, ...rest].slice(0, limit);
};

export const formatPrice = (value) => `$${value.toFixed(0)}`;
