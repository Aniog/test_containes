// Seed product catalog for Velmora Fine Jewelry.
// Each product references stock image search terms via stable ids used in
// data-strk-img queries throughout the UI. Keeping these ids in one place
// guarantees that the DOM `id` attributes and the [id] query references
// can never drift apart.

export const products = [
  {
    id: "vivid-aura-jewels",
    titleId: "vivid-aura-jewels-title",
    descId: "vivid-aura-jewels-desc",
    cartImgId: "vivid-aura-jewels-cart",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    material: "18K Gold Plated",
    tone: ["gold"],
    rating: 4.8,
    reviews: 124,
    short: "A whisper of light, hand-set along the ear.",
    description:
      "Sculpted in 18K gold plating over a brass core, the Vivid Aura cuff sits weightlessly along the ear's edge. A single hand-set crystal catches the light from every angle — a piece made to be noticed, not to shout.",
    details: [
      "18K gold plating over brass",
      "Hand-set Austrian crystal",
      "Hypoallergenic, nickel-free post",
      "Lightweight, no-pinch fit",
    ],
    care: [
      "Avoid contact with perfume and lotion",
      "Remove before showering or swimming",
      "Store in the soft pouch provided",
      "Polish gently with the included cloth",
    ],
    imageQuery: "gold ear cuff crystal jewelry on model",
    hoverImageQuery: "close up gold ear cuff crystal detail",
  },
  {
    id: "majestic-flora-nectar",
    titleId: "majestic-flora-nectar-title",
    descId: "majestic-flora-nectar-desc",
    cartImgId: "majestic-flora-nectar-cart",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    material: "18K Gold Plated",
    tone: ["gold"],
    rating: 4.9,
    reviews: 207,
    short: "A garden of color, gathered at the throat.",
    description:
      "Inspired by heirloom botanical drawings, the Majestic Flora Nectar suspends a constellation of hand-set multicolored crystals along a fine gold chain. Designed to layer or wear solo — quietly opulent.",
    details: [
      "18K gold plating over a brass chain",
      "Six hand-set multicolor crystals",
      "Adjustable 16–18 inch chain",
      "Lobster clasp closure",
    ],
    care: [
      "Apply skincare before putting on",
      "Wipe with a soft, dry cloth after wear",
      "Store flat in the velvet box",
      "Avoid sleeping in the piece",
    ],
    imageQuery: "multicolor floral crystal gold necklace on woman",
    hoverImageQuery: "floral crystal pendant necklace detail warm light",
  },
  {
    id: "golden-sphere-huggies",
    titleId: "golden-sphere-huggies-title",
    descId: "golden-sphere-huggies-desc",
    cartImgId: "golden-sphere-huggies-cart",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    material: "18K Gold Plated",
    tone: ["gold"],
    rating: 4.7,
    reviews: 312,
    short: "The everyday huggie, elevated.",
    description:
      "A clean architectural dome, the Golden Sphere huggie is the kind of earring you forget you're wearing — until you catch its reflection. Polished to a high sheen, sold as a pair.",
    details: [
      "18K gold plating over brass",
      "10mm dome diameter",
      "Hinged click closure",
      "Hypoallergenic, nickel-free",
    ],
    care: [
      "Remove before exercising",
      "Keep dry, away from humidity",
      "Polish monthly with the included cloth",
      "Store in the branded pouch",
    ],
    imageQuery: "chunky gold dome huggie hoop earrings product",
    hoverImageQuery: "gold sphere huggie earrings on ear detail",
  },
  {
    id: "amber-lace-earrings",
    titleId: "amber-lace-earrings-title",
    descId: "amber-lace-earrings-desc",
    cartImgId: "amber-lace-earrings-cart",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    material: "18K Gold Plated",
    tone: ["gold"],
    rating: 4.8,
    reviews: 98,
    short: "Filigree, redrawn in warm gold.",
    description:
      "Inspired by the lacework of a vintage bridal veil, each Amber Lace earring is cast in finely textured gold. The drops catch the light like sun through a window — delicate, never delicate-looking.",
    details: [
      "18K gold plating over brass",
      "Filigree-cast drop design",
      "3cm drop length",
      "Lightweight fish-hook post",
    ],
    care: [
      "Avoid bending the hook",
      "Store flat, not hanging",
      "Wipe gently after each wear",
      "Remove before bed",
    ],
    imageQuery: "textured gold filigree drop earrings on woman",
    hoverImageQuery: "gold lace drop earrings detail close up",
  },
  {
    id: "royal-heirloom-set",
    titleId: "royal-heirloom-set-title",
    descId: "royal-heirloom-set-desc",
    cartImgId: "royal-heirloom-set-cart",
    name: "Royal Heirloom Set",
    category: "earrings",
    price: 95,
    material: "18K Gold Plated",
    tone: ["gold"],
    rating: 5.0,
    reviews: 64,
    short: "The heirloom in waiting — gift-boxed.",
    description:
      "A matching earring and pendant set, presented in a keepsake velvet box. The Royal Heirloom is our most gifted piece for good reason: it feels like something passed down, made new.",
    details: [
      "18K gold plating over brass",
      "Matching earring and pendant set",
      "Adjustable 16–18 inch chain",
      "Velvet keepsake gift box included",
    ],
    care: [
      "Keep box out of direct sunlight",
      "Polish only with the included cloth",
      "Remove before bathing",
      "A great everyday piece — but treat it kindly",
    ],
    imageQuery: "gold earring and necklace gift set velvet box",
    hoverImageQuery: "gold jewelry gift set on woman editorial",
  },
  {
    id: "celeste-pearl-drops",
    titleId: "celeste-pearl-drops-title",
    descId: "celeste-pearl-drops-desc",
    cartImgId: "celeste-pearl-drops-cart",
    name: "Celeste Pearl Drops",
    category: "earrings",
    price: 48,
    material: "18K Gold Plated",
    tone: ["gold"],
    rating: 4.7,
    reviews: 142,
    short: "Pearl and gold, in conversation.",
    description:
      "Freshwater pearls sit cradled beneath a soft gold arc, dropping just below the lobe. The Celeste is a study in restraint — the kind of piece that earns a second glance.",
    details: [
      "18K gold plating over brass",
      "Genuine freshwater pearls",
      "2.5cm drop",
      "Hypoallergenic, nickel-free",
    ],
    care: [
      "Wipe pearls with a damp cloth after wear",
      "Keep away from hairspray",
      "Store flat in the pouch",
      "Avoid ultrasonic cleaners",
    ],
    imageQuery: "pearl and gold drop earrings on woman",
    hoverImageQuery: "freshwater pearl drop earrings detail gold",
  },
  {
    id: "sienna-hoops",
    titleId: "sienna-hoops-title",
    descId: "sienna-hoops-desc",
    cartImgId: "sienna-hoops-cart",
    name: "Sienna Hoops",
    category: "huggies",
    price: 44,
    material: "18K Gold Plated",
    tone: ["gold"],
    rating: 4.8,
    reviews: 178,
    short: "A hoop that wears every day.",
    description:
      "Medium-weight, medium-sized — the Sienna hoop is calibrated to sit just right, never too thin, never too heavy. The slightly oval shape softens the silhouette.",
    details: [
      "18K gold plating over brass",
      "20mm oval hoop",
      "Hinged click closure",
      "Hypoallergenic, nickel-free",
    ],
    care: [
      "Remove before showering",
      "Polish with a soft cloth",
      "Store in the branded pouch",
      "Avoid contact with lotion",
    ],
    imageQuery: "medium gold hoop earrings on woman close up",
    hoverImageQuery: "gold oval hoop earring detail editorial",
  },
  {
    id: "maren-pendant",
    titleId: "maren-pendant-title",
    descId: "maren-pendant-desc",
    cartImgId: "maren-pendant-cart",
    name: "Maren Pendant",
    category: "necklaces",
    price: 58,
    material: "18K Gold Plated",
    tone: ["gold"],
    rating: 4.9,
    reviews: 156,
    short: "A single stone, set just so.",
    description:
      "A bezel-set citrine quartz hangs from a fine gold cable chain. The Maren is a quiet love letter — small, considered, made to be worn against the skin.",
    details: [
      "18K gold plating over brass",
      "Natural citrine quartz",
      "Adjustable 16–18 inch chain",
      "Spring ring clasp",
    ],
    care: [
      "Avoid impact and pressure",
      "Remove before sleeping",
      "Wipe with a soft, dry cloth",
      "Store separately to prevent scratches",
    ],
    imageQuery: "gold citrine pendant necklace on woman",
    hoverImageQuery: "citrine pendant gold chain detail warm",
  },
];

export const categories = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product, count = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, count);
}
