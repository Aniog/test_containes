// Velmora seed catalog. Each product owns its own data-strk-img queries,
// text reference IDs, and gallery. Real images can be swapped in by replacing
// the data-strk-img and data-strk-bg attributes later.

export const categories = [
  { id: "earrings", name: "Earrings", tagline: "From huggies to statement drops" },
  { id: "necklaces", name: "Necklaces", tagline: "Layered, singular, or gift-set" },
  { id: "huggies", name: "Huggies", tagline: "Everyday gold, perfected" },
];

export const materials = [
  { id: "18k-gold-plated", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
];

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    shortName: "Vivid Aura",
    price: 42,
    category: "earrings",
    material: "18k-gold-plated",
    badge: "New",
    description:
      "A whisper of crystal caught in sculpted gold. The Vivid Aura ear cuff traces the curve of the ear with a single hand-set stone, catching the light from every angle. Designed for the lobe, the helix, or both.",
    details: [
      "18K gold-plated brass",
      "Hand-set crystal accent",
      "No piercing required — cuff silhouette",
      "Hypoallergenic, nickel-free post",
    ],
    materials: [
      "Base: Brass, 18K gold plated (2 microns)",
      "Stone: handset crystal",
      "Post: Stainless steel, hypoallergenic",
    ],
    care: [
      "Avoid contact with water, perfume, and lotion",
      "Remove before sleeping, showering, or exercising",
      "Store in the Velmora pouch to slow oxidation",
    ],
    variants: [
      { id: "gold", label: "Gold", hex: "#C9A961" },
      { id: "silver", label: "Silver", hex: "#D8D8DA" },
    ],
    rating: 4.8,
    reviewCount: 128,
    images: {
      primary: "[vivid-aura-desc] [vivid-aura-name] [trust-bar-title]",
      secondary: "[vivid-aura-desc] [vivid-aura-name] editorial close-up [trust-bar-title]",
      gallery: [
        "[vivid-aura-desc] [vivid-aura-name] [trust-bar-title]",
        "[vivid-aura-desc] [vivid-aura-name] editorial close-up [trust-bar-title]",
        "[vivid-aura-desc] [vivid-aura-name] worn on ear [trust-bar-title]",
        "[vivid-aura-desc] [vivid-aura-name] detail macro [trust-bar-title]",
      ],
    },
    nameId: "vivid-aura-name",
    descId: "vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    shortName: "Majestic Flora",
    price: 68,
    category: "necklaces",
    material: "18k-gold-plated",
    badge: "Bestseller",
    description:
      "A garden rendered in crystal and gold. The Majestic Flora Nectar layers multicolour stones in a delicate floral pendant — a quiet statement that moves with you, weightless and bright.",
    details: [
      "18K gold-plated brass chain, 16–18\" adjustable",
      "Hand-set multicolour crystal cluster",
      "Lobster clasp closure",
      "Hypoallergenic, nickel-free",
    ],
    materials: [
      "Base: Brass, 18K gold plated (2 microns)",
      "Stones: handset multicolour crystal",
      "Clasp: Brass lobster, plated to match",
    ],
    care: [
      "Apply lotion and perfume before putting on",
      "Wipe gently with the included polishing cloth",
      "Store flat to protect the pendant shape",
    ],
    variants: [
      { id: "gold", label: "Gold", hex: "#C9A961" },
    ],
    rating: 4.9,
    reviewCount: 412,
    images: {
      primary: "[majestic-flora-desc] [majestic-flora-name] [trust-bar-title]",
      secondary: "[majestic-flora-desc] [majestic-flora-name] editorial close-up [trust-bar-title]",
      gallery: [
        "[majestic-flora-desc] [majestic-flora-name] [trust-bar-title]",
        "[majestic-flora-desc] [majestic-flora-name] editorial close-up [trust-bar-title]",
        "[majestic-flora-desc] [majestic-flora-name] worn on neck [trust-bar-title]",
        "[majestic-flora-desc] [majestic-flora-name] detail macro [trust-bar-title]",
      ],
    },
    nameId: "majestic-flora-name",
    descId: "majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    shortName: "Golden Sphere",
    price: 38,
    category: "huggies",
    material: "18k-gold-plated",
    badge: "Everyday",
    description:
      "A modern heirloom in miniature. The Golden Sphere huggie sits close to the lobe with a polished dome finish — weighty enough to feel real, light enough to live in.",
    details: [
      "18K gold-plated brass",
      "Hinged click closure, 10mm",
      "Sold as a pair",
      "Hypoallergenic, nickel-free",
    ],
    materials: [
      "Base: Brass, 18K gold plated (2 microns)",
      "Closure: Hinged click, plated to match",
    ],
    care: [
      "Remove before showering or swimming",
      "Buff with a soft dry cloth after wear",
      "Keep pairs together in the Velmora pouch",
    ],
    variants: [
      { id: "gold", label: "Gold", hex: "#C9A961" },
      { id: "silver", label: "Silver", hex: "#D8D8DA" },
    ],
    rating: 4.7,
    reviewCount: 264,
    images: {
      primary: "[golden-sphere-desc] [golden-sphere-name] [trust-bar-title]",
      secondary: "[golden-sphere-desc] [golden-sphere-name] editorial close-up [trust-bar-title]",
      gallery: [
        "[golden-sphere-desc] [golden-sphere-name] [trust-bar-title]",
        "[golden-sphere-desc] [golden-sphere-name] editorial close-up [trust-bar-title]",
        "[golden-sphere-desc] [golden-sphere-name] worn on ear [trust-bar-title]",
        "[golden-sphere-desc] [golden-sphere-name] pair laid flat [trust-bar-title]",
      ],
    },
    nameId: "golden-sphere-name",
    descId: "golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    shortName: "Amber Lace",
    price: 54,
    category: "earrings",
    material: "18k-gold-plated",
    badge: "Editor’s Pick",
    description:
      "Filigree refined to its most delicate. The Amber Lace drop earring traces vintage lacework in warm gold, light enough to sway with every word.",
    details: [
      "18K gold-plated brass",
      "Textured filigree drop, 38mm",
      "Hypoallergenic post",
      "Lightweight, 3g per earring",
    ],
    materials: [
      "Base: Brass, 18K gold plated (2 microns)",
      "Finish: Hand-textured filigree",
      "Post: Stainless steel, hypoallergenic",
    ],
    care: [
      "Avoid bending the filigree — handle by the post",
      "Store hanging or flat to keep the silhouette",
      "Polish gently with the Velmora cloth",
    ],
    variants: [
      { id: "gold", label: "Gold", hex: "#C9A961" },
    ],
    rating: 4.8,
    reviewCount: 187,
    images: {
      primary: "[amber-lace-desc] [amber-lace-name] [trust-bar-title]",
      secondary: "[amber-lace-desc] [amber-lace-name] editorial close-up [trust-bar-title]",
      gallery: [
        "[amber-lace-desc] [amber-lace-name] [trust-bar-title]",
        "[amber-lace-desc] [amber-lace-name] editorial close-up [trust-bar-title]",
        "[amber-lace-desc] [amber-lace-name] worn on ear [trust-bar-title]",
        "[amber-lace-desc] [amber-lace-name] detail macro [trust-bar-title]",
      ],
    },
    nameId: "amber-lace-name",
    descId: "amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    shortName: "Royal Heirloom",
    price: 95,
    category: "earrings",
    material: "18k-gold-plated",
    badge: "Gift-Ready",
    description:
      "The set to give, and to keep. The Royal Heirloom pairs a delicate chain necklace with matching huggies in a keepsake box — finished with a hand-tied ribbon.",
    details: [
      "18K gold-plated brass",
      "Necklace 16–18\" adjustable + huggies pair",
      "Gift-boxed with hand-tied ribbon",
      "Hypoallergenic, nickel-free",
    ],
    materials: [
      "Base: Brass, 18K gold plated (2 microns)",
      "Chain: Fine cable link",
      "Closure: Lobster clasp, plated to match",
    ],
    care: [
      "Untie ribbon carefully to keep the box reusable",
      "Wipe pieces with the included cloth after wear",
      "Store in the box, away from direct sunlight",
    ],
    variants: [
      { id: "gold", label: "Gold", hex: "#C9A961" },
    ],
    rating: 5.0,
    reviewCount: 96,
    images: {
      primary: "[royal-heirloom-desc] [royal-heirloom-name] [trust-bar-title]",
      secondary: "[royal-heirloom-desc] [royal-heirloom-name] editorial close-up [trust-bar-title]",
      gallery: [
        "[royal-heirloom-desc] [royal-heirloom-name] [trust-bar-title]",
        "[royal-heirloom-desc] [royal-heirloom-name] editorial close-up [trust-bar-title]",
        "[royal-heirloom-desc] [royal-heirloom-name] gift box [trust-bar-title]",
        "[royal-heirloom-desc] [royal-heirloom-name] worn together [trust-bar-title]",
      ],
    },
    nameId: "royal-heirloom-name",
    descId: "royal-heirloom-desc",
  },
];

// Editorial UGC reel data for the homepage. Captions live here so the
// data-strk-img queries on each card can reference stable text IDs.
export const ugcReels = [
  {
    id: "reel-1",
    caption: "morning light on golden spheres",
    captionId: "reel-1-caption",
    image:
      "[reel-1-caption] gold jewelry on ear editorial [hero-headline] [hero-subhead]",
  },
  {
    id: "reel-2",
    caption: "the new everyday huggie",
    captionId: "reel-2-caption",
    image:
      "[reel-2-caption] gold huggie earring editorial [hero-headline] [hero-subhead]",
  },
  {
    id: "reel-3",
    caption: "flora, layered three ways",
    captionId: "reel-3-caption",
    image:
      "[reel-3-caption] floral crystal necklace editorial [hero-headline] [hero-subhead]",
  },
  {
    id: "reel-4",
    caption: "a cuff, no piercing",
    captionId: "reel-4-caption",
    image:
      "[reel-4-caption] gold ear cuff editorial [hero-headline] [hero-subhead]",
  },
  {
    id: "reel-5",
    caption: "lace, after hours",
    captionId: "reel-5-caption",
    image:
      "[reel-5-caption] filigree drop earring editorial [hero-headline] [hero-subhead]",
  },
  {
    id: "reel-6",
    caption: "the heirloom, unboxed",
    captionId: "reel-6-caption",
    image:
      "[reel-6-caption] gold jewelry gift set editorial [hero-headline] [hero-subhead]",
  },
  {
    id: "reel-7",
    caption: "golden hour, every hour",
    captionId: "reel-7-caption",
    image:
      "[reel-7-caption] gold jewelry on warm skin editorial [hero-headline] [hero-subhead]",
  },
];

export const testimonials = [
  {
    id: "t-1",
    name: "Amelia R.",
    quote:
      "I bought the Golden Sphere huggies on a whim — six months in, they still look new. The weight of them feels intentional.",
  },
  {
    id: "t-2",
    name: "Priya S.",
    quote:
      "The Royal Heirloom set was a gift to myself. The box, the ribbon, the pieces — it all felt like a love letter.",
  },
  {
    id: "t-3",
    name: "Maya L.",
    quote:
      "I have sensitive skin and Velmora is the only demi-fine brand that has never reacted. I wear the Flora necklace daily.",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit);
}
