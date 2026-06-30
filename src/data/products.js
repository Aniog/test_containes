// Seed product catalog for Velmora Fine Jewelry.
// Each product has rich editorial imagery rendered as inline SVG (Artwork component).
// To swap in real photography, replace the `art` field with `{ type: "image", src: "..." }`
// in the product data — the ProductCard and PDP gallery already handle <img> via `image.src`.

export const CATEGORIES = [
  { slug: "earrings", name: "Earrings", blurb: "From huggies to statement drops" },
  { slug: "necklaces", name: "Necklaces", blurb: "Pendants, chains, and layers" },
  { slug: "huggies", name: "Huggies", blurb: "Everyday gold hoops, perfected" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    tagline: "Crystal-accented gold ear cuff",
    price: 42,
    tone: ["Gold"],
    rating: 4.9,
    reviewCount: 128,
    art: "earCuff",
    description:
      "A single ear cuff sculpted in 18K gold plating, finished with a hand-set crystal that catches the light from every angle. Designed to be worn alone as a quiet statement, or stacked for an editorial finish.",
    details: [
      "18K gold plated brass",
      "Hand-set cubic zirconia crystal",
      "Hypoallergenic and nickel-free",
      "No piercing required — hinged cuff",
    ],
    care: [
      "Avoid contact with water, perfume and lotion",
      "Store in the Velmora pouch between wears",
      "Wipe gently with the included polishing cloth",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    tone: ["Gold"],
    rating: 4.8,
    reviewCount: 96,
    art: "floraNecklace",
    description:
      "A delicate gold chain scattered with hand-set crystals in a soft, multicolor palette. A piece that moves with you — refined for the day, romantic for the evening.",
    details: [
      "18K gold plated brass chain, 16–18\" adjustable",
      "Hand-set multicolor crystals",
      "Lobster clasp closure with 2\" extender",
      "Hypoallergenic and nickel-free",
    ],
    care: [
      "Remove before showering or swimming",
      "Lay flat to store; avoid tangling",
      "Polish gently with a soft cloth",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    tone: ["Gold"],
    rating: 5.0,
    reviewCount: 214,
    art: "sphereHuggies",
    description:
      "Bold, weighty, and impossibly wearable. The Golden Sphere Huggies are a study in restraint — a polished dome shape in warm 18K gold plating that hugs the lobe with a satisfying click.",
    details: [
      "18K gold plated brass",
      "12mm dome huggie, hinged closure",
      "Hypoallergenic and nickel-free",
      "Sold as a pair",
    ],
    care: [
      "Avoid contact with lotions and perfume",
      "Store flat in the Velmora pouch",
      "Polish with the included cloth",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    tone: ["Gold"],
    rating: 4.9,
    reviewCount: 87,
    art: "filigreeDrop",
    description:
      "Inspired by heirloom lacework, these drops feature a finely textured gold filigree that catches the light in soft, warm flashes. A romantic piece made for the moments you remember.",
    details: [
      "18K gold plated brass, filigree texture",
      "1.5\" drop, lever-back closure",
      "Hypoallergenic and nickel-free",
      "Sold as a pair",
    ],
    care: [
      "Remove before sleeping and showering",
      "Store upright in the Velmora box",
      "Wipe gently with a soft, dry cloth",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    tagline: "Gift-boxed earring and necklace set",
    price: 95,
    tone: ["Gold"],
    rating: 4.9,
    reviewCount: 162,
    art: "heirloomSet",
    description:
      "The Royal Heirloom Set pairs our most-loved filigree studs with a delicate chain pendant — packaged in our signature gift box, ready to give (or to keep).",
    details: [
      "18K gold plated brass",
      "Matching filigree stud and pendant",
      "16–18\" adjustable chain, lever-back studs",
      "Hypoallergenic and nickel-free",
      "Velmora signature gift box included",
    ],
    care: [
      "Remove before water, perfume and lotion",
      "Store in the original gift box",
      "Polish gently with the included cloth",
    ],
  },
];

// UGC reel captions — vertical 9:16 frames mimicking Instagram Reels.
export const UGC_REELS = [
  {
    id: "reel-1",
    handle: "@amelia.k",
    caption: "Layered three ways",
    art: "ugcEar",
  },
  {
    id: "reel-2",
    handle: "@noor.styles",
    caption: "Golden hour",
    art: "ugcNeck",
  },
  {
    id: "reel-3",
    handle: "@isla.fragments",
    caption: "The huggie edit",
    art: "ugcHuggie",
  },
  {
    id: "reel-4",
    handle: "@maren.edit",
    caption: "Heirloom, reimagined",
    art: "ugcStack",
  },
  {
    id: "reel-5",
    handle: "@the.lina.s",
    caption: "On repeat",
    art: "ugcWrist",
  },
  {
    id: "reel-6",
    handle: "@sienna.mood",
    caption: "Soft gold",
    art: "ugcEar2",
  },
];

export const TESTIMONIALS = [
  {
    name: "Amelia K.",
    rating: 5,
    text: "I bought the sphere huggies for myself and they have not come off. The weight, the finish — they feel like a piece three times the price.",
  },
  {
    name: "Noor S.",
    rating: 5,
    text: "Gifted the Royal Heirloom set to my sister. The packaging alone made me cry. The jewelry is the kind of thing she will keep forever.",
  },
  {
    name: "Isla M.",
    rating: 5,
    text: "Demi-fine that genuinely looks fine. I have sensitive ears and the Amber Lace drops are the first pair I have worn all day without a reaction.",
  },
];

export const TRUST_ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];
