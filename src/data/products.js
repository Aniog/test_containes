import { slugify } from "@/lib/utils";

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
];

export const PRICE_BUCKETS = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80-plus", label: "$80 +", min: 80, max: Infinity },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    reviews: 218,
    badge: "Bestseller",
    short:
      "A sculptural gold ear cuff set with a single hand-set crystal — the centerpiece of a quiet stack.",
    description:
      "Designed to be worn alone or layered into a personal stack, the Vivid Aura cuff catches the light at the inner ridge of the ear. Each crystal is set by hand in our studio, paired with a comfort-fit band that sits all day without pinching.",
    materials:
      "18K gold plated over a hypoallergenic brass core. Hand-set crystal accent. Free of nickel, lead, and cadmium.",
    care:
      "Remove before showering, sleeping, and exercising. Wipe gently with the included suede cloth; store in the Velmora pouch to keep its finish.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging. Each order is insured and tracked.",
    details: [
      "Sculptural ear cuff silhouette",
      "Single hand-set crystal accent",
      "Hypoallergenic, nickel-free",
      "Comfort-fit band for all-day wear",
    ],
    imgIds: {
      primary: "p-vivid-aura-primary-7c2a",
      secondary: "p-vivid-aura-secondary-7c2a",
      gallery: [
        "p-vivid-aura-g1-7c2a",
        "p-vivid-aura-g2-7c2a",
        "p-vivid-aura-g3-7c2a",
        "p-vivid-aura-g4-7c2a",
      ],
    },
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    material: "18k-gold",
    tone: "gold",
    rating: 4.8,
    reviews: 142,
    badge: "New",
    short:
      "A garden of hand-set crystals in warm honey and blush — suspended on a fine cable chain.",
    description:
      "Inspired by old botanical illustrations, the Majestic Flora pendant lays flat against the collarbone. Seven hand-set crystals in graduated warm tones form a delicate cluster that catches every angle of light.",
    materials:
      "18K gold plated brass with a fine cable chain, finished with a lobster clasp. Hypoallergenic and tarnish-resistant.",
    care:
      "Avoid contact with perfume, lotion, and water. Polish gently with the included cloth and store flat in the Velmora box.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    details: [
      "Multicolor floral cluster",
      "Adjustable 16–18 inch cable chain",
      "Lobster clasp closure",
      "Hypoallergenic, nickel-free",
    ],
    imgIds: {
      primary: "p-flora-primary-9b41",
      secondary: "p-flora-secondary-9b41",
      gallery: [
        "p-flora-g1-9b41",
        "p-flora-g2-9b41",
        "p-flora-g3-9b41",
        "p-flora-g4-9b41",
      ],
    },
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    reviews: 504,
    badge: "Cult Favorite",
    short:
      "A chunky dome huggie with the perfect everyday weight — sold as a pair, made to stack.",
    description:
      "Our most-loved silhouette, refined. The Golden Sphere huggie has a satisfying dome shape that feels substantial without weighing the lobe down. A discreet hinge clasp keeps the line clean.",
    materials:
      "18K gold plated brass with a secure hinge clasp. Hypoallergenic, lead-free, and tarnish-resistant.",
    care:
      "Sleep, sweat, and shower smart — remove before any of the three. Wipe with the suede cloth to maintain the finish.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    details: [
      "Chunky dome silhouette",
      "Secure hinge clasp",
      "Sold as a pair",
      "Hypoallergenic, nickel-free",
    ],
    imgIds: {
      primary: "p-sphere-primary-2d18",
      secondary: "p-sphere-secondary-2d18",
      gallery: [
        "p-sphere-g1-2d18",
        "p-sphere-g2-2d18",
        "p-sphere-g3-2d18",
        "p-sphere-g4-2d18",
      ],
    },
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    material: "18k-gold",
    tone: "gold",
    rating: 4.7,
    reviews: 96,
    badge: "Editorial Pick",
    short:
      "Filigree work in 18K gold plate — an heirloom-inspired drop that moves like lace.",
    description:
      "Hand-finished filigree drops that flutter with movement. The Amber Lace is light enough for day and detailed enough for evening — pair with a simple slip dress or a soft knit.",
    materials:
      "18K gold plated brass with hand-finished filigree. Hypoallergenic post and butterfly back.",
    care:
      "Store flat in the Velmora pouch. Avoid contact with lotions and perfumes to preserve the filigree finish.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    details: [
      "Hand-finished filigree drop",
      "Lightweight, day-to-night",
      "Hypoallergenic post and back",
      "Comes in a Velmora gift box",
    ],
    imgIds: {
      primary: "p-amber-primary-3a55",
      secondary: "p-amber-secondary-3a55",
      gallery: [
        "p-amber-g1-3a55",
        "p-amber-g2-3a55",
        "p-amber-g3-3a55",
        "p-amber-g4-3a55",
      ],
    },
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    price: 95,
    material: "18k-gold",
    tone: "gold",
    rating: 5.0,
    reviews: 47,
    badge: "Gift-Ready",
    short:
      "A matching earring and pendant set, gift-boxed in our signature cream and gold box.",
    description:
      "The Royal Heirloom set is composed of a slim pendant and a small stud — meant to be given, kept, and worn for years. Each set arrives in a cream and gold Velmora box, with a hand-written note on request.",
    materials:
      "18K gold plated brass with a fine cable chain and a secure post back. Hypoallergenic, lead-free, and tarnish-resistant.",
    care:
      "Polish with the included cloth and store in the original box. Remove before showering, sleeping, and exercising.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging. Gift wrapping available at checkout.",
    details: [
      "Matching pendant + stud set",
      "Slim 16 inch cable chain",
      "Hand-written note on request",
      "Velmora cream and gold gift box",
    ],
    imgIds: {
      primary: "p-heirloom-primary-4e72",
      secondary: "p-heirloom-secondary-4e72",
      gallery: [
        "p-heirloom-g1-4e72",
        "p-heirloom-g2-4e72",
        "p-heirloom-g3-4e72",
        "p-heirloom-g4-4e72",
      ],
    },
  },
];

export const TESTIMONIALS = [
  {
    name: "Amelia R.",
    rating: 5,
    quote:
      "I bought the Golden Sphere Huggies as a gift to myself and wear them almost daily. The weight is exactly right — they feel expensive without being heavy.",
    product: "Golden Sphere Huggies",
  },
  {
    name: "Priya S.",
    rating: 5,
    quote:
      "The packaging is as beautiful as the jewelry. The Royal Heirloom set arrived in the cream box with a handwritten note — I cried a little.",
    product: "Royal Heirloom Set",
  },
  {
    name: "Sofia M.",
    rating: 5,
    quote:
      "Quiet, refined, and never flashy. Velmora is the only demi-fine brand I keep coming back to — the Vivid Aura cuff is on permanent rotation.",
    product: "Vivid Aura Jewels",
  },
];

export const UGC_REELS = [
  {
    id: "ugc-1",
    caption: "Layered, never loud.",
    product: "Vivid Aura Jewels",
  },
  {
    id: "ugc-2",
    caption: "The everyday ritual.",
    product: "Golden Sphere Huggies",
  },
  {
    id: "ugc-3",
    caption: "Heirloom in the making.",
    product: "Royal Heirloom Set",
  },
  {
    id: "ugc-4",
    caption: "Botanical, set in gold.",
    product: "Majestic Flora Nectar",
  },
  {
    id: "ugc-5",
    caption: "Lace, in metal.",
    product: "Amber Lace Earrings",
  },
  {
    id: "ugc-6",
    caption: "Stack of three.",
    product: "Vivid Aura Jewels",
  },
];

export const CATEGORIES_FOR_HOMEPAGE = [
  {
    id: "earrings",
    label: "Earrings",
    imgId: "cat-earrings-5a01",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    desc: "Drops, cuffs, studs",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    imgId: "cat-necklaces-6b02",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    desc: "Pendants, chains",
  },
  {
    id: "huggies",
    label: "Huggies",
    imgId: "cat-huggies-7c03",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    desc: "Daily-wear hoops",
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => slugify(p.name) === slug || p.id === slug);
}

export function getRelated(product, limit = 4) {
  if (!product) return [];
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, limit);
}
