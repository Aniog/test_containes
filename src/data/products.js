// Seed product data. Replace `imageQuery` strings later with real CDN URLs.
// `imageQuery` is what the strk-img runtime resolves against the stock library,
// so the words chosen here actually drive the result image.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "crystal", label: "Crystal" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    subtitle: "Crystal accent ear cuff in 18K gold plate",
    price: 42,
    compareAt: null,
    rating: 4.8,
    reviews: 124,
    category: "earrings",
    material: ["18k-gold", "crystal"],
    tone: ["gold"],
    badge: "Bestseller",
    description:
      "A single, sculptural ear cuff designed to catch the light from every angle. Set with a hand-set crystal that warms against the skin, Vivid Aura is the piece you forget you're wearing — until someone asks.",
    details: [
      "18K gold plated over a sterling silver base",
      "Hand-set crystal, approximately 4mm",
      "No piercing required — slides onto the ear",
      "Sold as a single cuff",
    ],
    care: [
      "Remove before showering, swimming, or applying lotions",
      "Store dry in the original pouch to slow oxidation",
      "Buff gently with the included polishing cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Ships within 1–2 business days from our studio",
      "30-day returns on unworn pieces in original packaging",
    ],
    imageQuery: "gold crystal ear cuff jewelry on warm dark background",
    imageQueryAlt:
      "gold ear cuff with single crystal detail, side view on warm taupe",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Multicolor floral crystal pendant necklace",
    price: 68,
    compareAt: null,
    rating: 4.9,
    reviews: 86,
    category: "necklaces",
    material: ["18k-gold", "crystal"],
    tone: ["gold"],
    badge: "New",
    description:
      "Inspired by heirloom brooches passed down through generations. A cluster of hand-set crystals in soft champagne, blush, and peridot greens sit on a delicate cable chain — the kind of necklace that earns its own drawer.",
    details: [
      "18K gold plated brass chain, 18\" with 2\" extender",
      "Pendant: 18mm, set with five Czech crystals",
      "Lobster clasp closure",
      "Comes in a velvet pouch and gift box",
    ],
    care: [
      "Apply perfume and lotion before putting jewelry on",
      "Wipe with the polishing cloth after wear",
      "Avoid contact with chlorine and saltwater",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Ships within 1–2 business days",
      "30-day returns, no questions asked",
    ],
    imageQuery:
      "multicolor floral crystal pendant necklace on dark moody background",
    imageQueryAlt:
      "delicate gold chain with floral crystal pendant, top-down flat lay",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky dome huggie hoops in 18K gold plate",
    price: 38,
    compareAt: null,
    rating: 4.7,
    reviews: 312,
    category: "huggies",
    material: ["18k-gold"],
    tone: ["gold", "silver"],
    badge: "Bestseller",
    description:
      "The everyday huggie, refined. A polished gold dome that sits close to the lobe — substantial without weight. Wear them with everything from a t-shirt to evening, alone or stacked with a second piercing.",
    details: [
      "18K gold plated sterling silver, also available in silver tone",
      "Inner diameter: 9mm",
      "Hinged click closure for secure wear",
      "Sold as a pair",
    ],
    care: [
      "Sleep, shower, and sweat-friendly in plated gold",
      "Tarnishing covered under our 1-year guarantee",
      "Wipe dry after exposure to water",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Ships within 1 business day",
      "30-day returns",
    ],
    imageQuery: "chunky gold dome huggie hoop earrings on warm beige",
    imageQueryAlt:
      "pair of polished gold dome huggie earrings, close-up product shot",
  },
  {
    id: "amber-lace-drops",
    name: "Amber Lace Drops",
    subtitle: "Textured gold filigree drop earrings",
    price: 54,
    compareAt: null,
    rating: 4.8,
    reviews: 67,
    category: "earrings",
    material: ["18k-gold"],
    tone: ["gold"],
    badge: null,
    description:
      "Heirloom lacework, cast in 18K gold plate. Each pair is finished by hand to give the filigree a soft, antique warmth — light enough for daylight, dramatic enough for dinner.",
    details: [
      "18K gold plated brass, hand-finished",
      "Drop length: 1.5 inches",
      "French wire earwire, nickel-free",
      "Lightweight for the size",
    ],
    care: [
      "Store flat to preserve the filigree detail",
      "Avoid contact with perfumes and hairspray",
      "Polish with the included cloth only",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Ships within 1–2 business days",
      "30-day returns",
    ],
    imageQuery: "gold filigree drop earrings on deep moody background",
    imageQueryAlt:
      "long gold filigree drop earrings, side view on dark background",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Gift-boxed earrings and necklace duo",
    price: 95,
    compareAt: 110,
    rating: 5.0,
    reviews: 41,
    category: "sets",
    material: ["18k-gold"],
    tone: ["gold"],
    badge: "Giftset",
    description:
      "Two pieces designed to live together. A delicate chain and matching micro huggies, presented in a keepsake box with a hand-tied ribbon. The default for everyone on your list who has taste — and for yourself.",
    details: [
      "Includes the Golden Sphere Huggies + matching cable chain",
      "Chain: 16\" with 2\" extender, 18K gold plated",
      "Huggies: 9mm inner diameter, hinged closure",
      "Comes in a navy keepsake box with hand-tied silk ribbon",
    ],
    care: [
      "Both pieces: remove before sleeping and showering",
      "Buff with the included polishing cloth",
      "Reuse the box for travel — it's built to last",
    ],
    shipping: [
      "Free worldwide express shipping",
      "Ships within 1 business day",
      "30-day returns, items must be unworn",
    ],
    imageQuery: "gold jewelry gift set necklace and earrings in gift box",
    imageQueryAlt:
      "navy gift box opened to reveal a gold necklace and matching huggie earrings",
  },
];

// UGC reel captions — vertical 9:16 lifestyle imagery.
export const REELS = [
  {
    id: "reel-1",
    caption: "Wedding guest, in champagne",
    credit: "@maya.k",
    imageQuery: "woman wearing gold drop earrings wedding guest close up",
  },
  {
    id: "reel-2",
    caption: "Layered for the office",
    credit: "@noor.styles",
    imageQuery: "woman wearing layered gold necklaces at desk, soft window light",
  },
  {
    id: "reel-3",
    caption: "Brunch, always the huggies",
    credit: "@simone.e",
    imageQuery: "woman wearing gold huggie earrings at brunch, candid",
  },
  {
    id: "reel-4",
    caption: "Birthday girl energy",
    credit: "@tess.r",
    imageQuery: "woman wearing crystal floral necklace, soft smile close up",
  },
  {
    id: "reel-5",
    caption: "Sunday reset, the ear cuff stays",
    credit: "@harriet.b",
    imageQuery: "woman wearing single gold ear cuff, hair pulled back, side profile",
  },
  {
    id: "reel-6",
    caption: "Date night, on repeat",
    credit: "@iris.l",
    imageQuery: "woman wearing gold filigree earrings, evening warm light",
  },
  {
    id: "reel-7",
    caption: "The set, gifted and kept",
    credit: "@olivia.p",
    imageQuery: "woman opening gold jewelry gift box, soft candlelight",
  },
  {
    id: "reel-8",
    caption: "Stacked, never enough",
    credit: "@maren.k",
    imageQuery: "close up of stacked gold necklaces on bare skin",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Amelia R.",
    rating: 5,
    quote:
      "The huggies are the only earrings I forget to take off. The finish is unreal for the price — I keep buying them as gifts.",
    product: "Golden Sphere Huggies",
  },
  {
    id: "t2",
    name: "Priya S.",
    rating: 5,
    quote:
      "Bought the Royal Heirloom Set for my sister's birthday. The packaging alone made her cry. The pieces are even better in person.",
    product: "Royal Heirloom Set",
  },
  {
    id: "t3",
    name: "Elena M.",
    rating: 5,
    quote:
      "I've worn the floral necklace almost every day for six months. No tarnish, no green ears. I finally have a brand I trust.",
    product: "Majestic Flora Nectar",
  },
];

export const TRUST_BADGES = [
  { id: "shipping", label: "Free Worldwide Shipping" },
  { id: "returns", label: "30-Day Returns" },
  { id: "gold", label: "18K Gold Plated" },
  { id: "hypo", label: "Hypoallergenic" },
];

export const HERO_IMAGE_QUERY =
  "woman wearing gold jewelry warm window light, editorial portrait";
