// Seed product catalog. IDs and unique text-reference IDs are stable so the
// stock image system can reliably look up titles/descriptions when generating
// query strings.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    titleId: "vivid-aura-jewels-title",
    descId: "vivid-aura-jewels-desc",
    imgId: "vivid-aura-jewels-img-1",
    imgIdHover: "vivid-aura-jewels-img-2",
    imgIdDetail: "vivid-aura-jewels-img-3",
    category: "Earrings",
    price: 42,
    toneOptions: ["Gold", "Silver"],
    rating: 4.9,
    reviewCount: 128,
    isBestseller: true,
    shortDescription:
      "A delicate gold ear cuff traced with a single crystal — a whisper of light at the lobe.",
    longDescription:
      "The Vivid Aura cuff is hand-finished in 18K gold plating over a hypoallergenic brass core. Its sculpted silhouette rests along the cartilage without a piercing required, while a single handset crystal catches the light at every turn. Lightweight enough for daily wear; luminous enough for evenings.",
    details: [
      "18K gold plated over brass",
      "Hand-set crystal accent",
      "No piercing required — gentle cartilage clip",
      "Lightweight, 3.2g per cuff",
    ],
    materials: [
      "Base: hypoallergenic brass",
      "Plating: 18K gold (2 microns)",
      "Stone: handset Austrian crystal",
      "Finish: high-polish, tarnish-resistant coating",
    ],
    care: [
      "Avoid contact with perfume, lotion, and water",
      "Remove before showering, sleeping, or exercising",
      "Store in the Velmora pouch to prevent scratches",
      "Wipe gently with the included polishing cloth",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    titleId: "majestic-flora-nectar-title",
    descId: "majestic-flora-nectar-desc",
    imgId: "majestic-flora-nectar-img-1",
    imgIdHover: "majestic-flora-nectar-img-2",
    imgIdDetail: "majestic-flora-nectar-img-3",
    category: "Necklaces",
    price: 68,
    toneOptions: ["Gold"],
    rating: 4.8,
    reviewCount: 96,
    isBestseller: true,
    shortDescription:
      "A multicolor crystal cluster set like petals on a vine — a garden in miniature.",
    longDescription:
      "Inspired by heirloom botanical jewelry, the Majestic Flora Nectar is composed of seven hand-set crystals in champagne, sage, and soft rose. Suspended from a fine 18K gold-plated chain, it rests at the collarbone — substantial enough to make a quiet statement, refined enough to layer with your everyday pieces.",
    details: [
      "Pendant drop: 2.4cm",
      "Chain length: 18 inches with 2 inch extender",
      "Lobster clasp closure",
      "Hand-set multicolor crystals",
    ],
    materials: [
      "Base: hypoallergenic brass",
      "Plating: 18K gold (2 microns)",
      "Stones: seven handset crystals in champagne, sage, blush",
      "Chain: cable link, 1.2mm gauge",
    ],
    care: [
      "Remove before sleeping, showering, or swimming",
      "Avoid direct contact with perfume and oils",
      "Wipe with a soft, dry cloth after wear",
      "Store flat in the Velmora box to protect the setting",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    titleId: "golden-sphere-huggies-title",
    descId: "golden-sphere-huggies-desc",
    imgId: "golden-sphere-huggies-img-1",
    imgIdHover: "golden-sphere-huggies-img-2",
    imgIdDetail: "golden-sphere-huggies-img-3",
    category: "Huggies",
    price: 38,
    toneOptions: ["Gold", "Silver"],
    rating: 4.9,
    reviewCount: 214,
    isBestseller: true,
    shortDescription:
      "Sculpted dome huggies with a quiet, weighty feel — the everyday gold staple.",
    longDescription:
      "A study in restraint. The Golden Sphere huggies are formed as continuous, polished domes that catch the light in a single confident arc. Secure hinged closures make them effortless to wear from morning to evening — the kind of piece you forget you have on, until someone asks.",
    details: [
      "Inner diameter: 9mm",
      "Hinged click-top closure",
      "Sold as a pair",
      "Weight: 4.1g per pair",
    ],
    materials: [
      "Base: hypoallergenic brass",
      "Plating: 18K gold (2 microns)",
      "Closure: precision hinged click-top",
      "Finish: mirror polish",
    ],
    care: [
      "Keep dry; remove before showering or swimming",
      "Store in the Velmora pouch to prevent tangling",
      "Buff with the included polishing cloth to maintain shine",
      "Avoid contact with harsh chemicals and chlorine",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    titleId: "amber-lace-earrings-title",
    descId: "amber-lace-earrings-desc",
    imgId: "amber-lace-earrings-img-1",
    imgIdHover: "amber-lace-earrings-img-2",
    imgIdDetail: "amber-lace-earrings-img-3",
    category: "Earrings",
    price: 54,
    toneOptions: ["Gold"],
    rating: 4.7,
    reviewCount: 73,
    isBestseller: true,
    shortDescription:
      "Filigree drop earrings cast in warm gold — vintage lace, reimagined.",
    longDescription:
      "The Amber Lace earrings are cast from an original filigree mold, recalling the lace heirlooms of the Edwardian era. Each pair is finished by hand to bring out the depth of the openwork. They move gently with the wearer — light through gold, like sunlight through curtain.",
    details: [
      "Drop length: 3.6cm",
      "Post-and-butterfly closure",
      "Sold as a pair",
      "Lightweight filigree casting",
    ],
    materials: [
      "Base: hypoallergenic brass",
      "Plating: 18K gold (2 microns)",
      "Construction: cast filigree, hand-finished",
      "Closure: hypoallergenic post (surgical steel core)",
    ],
    care: [
      "Remove before sleeping, showering, or exercising",
      "Store flat in the Velmora box to protect the openwork",
      "Wipe gently with a soft, dry cloth",
      "Avoid perfume and lotion contact",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    titleId: "royal-heirloom-set-title",
    descId: "royal-heirloom-set-desc",
    imgId: "royal-heirloom-set-img-1",
    imgIdHover: "royal-heirloom-set-img-2",
    imgIdDetail: "royal-heirloom-set-img-3",
    category: "Sets",
    price: 95,
    toneOptions: ["Gold"],
    rating: 5.0,
    reviewCount: 41,
    isBestseller: true,
    shortDescription:
      "A matching earring and necklace set in gift-boxed velvet — the heirloom in the making.",
    longDescription:
      "The Royal Heirloom Set pairs our Golden Sphere huggies with a delicate cable-link pendant, presented together in a keepsake velvet box. Designed to be gifted — and to be kept. The pieces are intended to be worn apart or together; either way, they read as a quiet set with intention.",
    details: [
      "Includes: Golden Sphere huggies + cable pendant",
      "Pendant chain: 18 inches with 2 inch extender",
      "Gift-boxed in signature velvet box",
      "Limited release",
    ],
    materials: [
      "Base: hypoallergenic brass",
      "Plating: 18K gold (2 microns)",
      "Stones: handset accent crystal on pendant",
      "Packaging: keepsake velvet box, recycled card sleeve",
    ],
    care: [
      "Remove both pieces before showering or sleeping",
      "Store together in the velvet box when not worn",
      "Wipe gently with the included polishing cloth",
      "Avoid contact with perfume, lotion, and chlorine",
    ],
  },
];

// UGC / "reel" cards — vertical 9:16 cards. Each card references a piece in
// the catalog and includes its own caption for editorial overlay.
export const ugcCards = [
  {
    id: "reel-1",
    imgId: "reel-1-img",
    captionId: "reel-1-caption",
    caption: "everyday golden",
    product: "golden-sphere-huggies",
  },
  {
    id: "reel-2",
    imgId: "reel-2-img",
    captionId: "reel-2-caption",
    caption: "soft florals",
    product: "majestic-flora-nectar",
  },
  {
    id: "reel-3",
    imgId: "reel-3-img",
    captionId: "reel-3-caption",
    caption: "no piercing, all glow",
    product: "vivid-aura-jewels",
  },
  {
    id: "reel-4",
    imgId: "reel-4-img",
    captionId: "reel-4-caption",
    caption: "the heirloom edit",
    product: "royal-heirloom-set",
  },
  {
    id: "reel-5",
    imgId: "reel-5-img",
    captionId: "reel-5-caption",
    caption: "lace, in gold",
    product: "amber-lace-earrings",
  },
  {
    id: "reel-6",
    imgId: "reel-6-img",
    captionId: "reel-6-caption",
    caption: "worn to weddings",
    product: "majestic-flora-nectar",
  },
  {
    id: "reel-7",
    imgId: "reel-7-img",
    captionId: "reel-7-caption",
    caption: "the second piercing",
    product: "golden-sphere-huggies",
  },
];

// Shop categories.
export const categories = [
  { id: "earrings", label: "Earrings", imgId: "cat-earrings-img" },
  { id: "necklaces", label: "Necklaces", imgId: "cat-necklaces-img" },
  { id: "huggies", label: "Huggies", imgId: "cat-huggies-img" },
];

// Editorial testimonials.
export const testimonials = [
  {
    id: "t-1",
    name: "Amelia R.",
    rating: 5,
    quote:
      "The quality is genuinely beyond the price point. My huggies have lived in my ears for months and still look brand new.",
  },
  {
    id: "t-2",
    name: "Priya S.",
    rating: 5,
    quote:
      "I bought the Royal Heirloom Set for my sister's birthday. The packaging alone made her cry. The jewelry, even more.",
  },
  {
    id: "t-3",
    name: "Naomi K.",
    rating: 5,
    quote:
      "Quiet, considered, beautifully made. Velmora is the kind of brand you keep coming back to.",
  },
];

// Trust bar items under the hero.
export const trustItems = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];
