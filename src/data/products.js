// Seed product catalog. Image IDs / queries feed the stock-image system via ImageHelper.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
]

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "gold-vermeil", label: "Gold Vermeil" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18k-gold",
    price: 42,
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    short:
      "A single, faceted crystal cradled in 18K gold — light catches it from every angle.",
    long:
      "Hand-set in our atelier, the Vivid Aura ear cuff is finished with a hand-faceted crystal that catches light like a small flame. No piercing required; the open-cuff silhouette sits comfortably along the helix for an instant editorial finish.",
    care:
      "Remove before showering, swimming or applying fragrance. Wipe gently with the included suede cloth and store in the velvet pouch to keep its soft gold sheen.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in their original packaging.",
    variants: [
      { id: "gold", label: "Gold", swatch: "#c9a875" },
      { id: "silver", label: "Silver", swatch: "#d9d4ca" },
    ],
    imgIds: {
      main: "vivid-aura-main-7c1a3b",
      alt: "vivid-aura-alt-9f0a22",
    },
    imgQuery: "single gold ear cuff with small faceted crystal on warm dark editorial background",
    altQuery: "gold crystal ear cuff worn on ear close up warm light",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "18k-gold",
    price: 68,
    rating: 4.8,
    reviews: 214,
    badge: "New",
    short:
      "A garden of warm-toned crystals, hand-set into a delicate floral pendant.",
    long:
      "Inspired by pressed botanicals, the Majestic Flora pendant gathers amber, citrine and honey-toned crystals into a single, weightless bloom. Suspended on a fine 18K gold-plated cable chain, it rests just below the collarbone.",
    care:
      "Avoid contact with perfume and lotion. Store flat in the included pouch; do not bend the chain.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in their original packaging.",
    variants: [
      { id: "gold", label: "Gold", swatch: "#c9a875" },
    ],
    imgIds: {
      main: "majestic-flora-main-1e8c4f",
      alt: "majestic-flora-alt-3b1d09",
    },
    imgQuery: "multicolor floral crystal pendant necklace on dark warm background editorial",
    altQuery: "floral gold pendant necklace worn on neck close up",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18k-gold",
    price: 38,
    rating: 4.9,
    reviews: 412,
    badge: "Bestseller",
    short:
      "A chunky dome huggie in 18K gold — the everyday piece you'll never take off.",
    long:
      "Polished by hand to a soft mirror finish, the Golden Sphere huggie is the most-loved silhouette in the Velmora archive. Its weighted dome sits flush to the lobe; the secure click-hinge keeps it in place from morning to night.",
    care:
      "Sleep, sweat and shower-friendly. Wipe with a soft cloth after wear to maintain its warmth.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in their original packaging.",
    variants: [
      { id: "gold", label: "Gold", swatch: "#c9a875" },
      { id: "silver", label: "Silver", swatch: "#d9d4ca" },
    ],
    imgIds: {
      main: "golden-sphere-main-5a92e1",
      alt: "golden-sphere-alt-c4b8d6",
    },
    imgQuery: "chunky gold dome huggie hoop earrings pair on warm dark background",
    altQuery: "gold huggie hoops worn on ear editorial portrait warm light",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "gold-vermeil",
    price: 54,
    rating: 4.7,
    reviews: 96,
    badge: "",
    short:
      "Filigree drop earrings cast in warm gold — lacework that moves with you.",
    long:
      "Cast from a hand-drawn lace motif, the Amber Lace drop is one of the lightest pieces in the collection. Each pair is finished in gold vermeil over a sterling silver base for lasting warmth.",
    care:
      "Remove before sleeping or showering. Store flat in the included pouch so the filigree holds its shape.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in their original packaging.",
    variants: [
      { id: "gold", label: "Gold", swatch: "#c9a875" },
    ],
    imgIds: {
      main: "amber-lace-main-2f8b1d",
      alt: "amber-lace-alt-8d72c4",
    },
    imgQuery: "gold filigree drop earrings delicate lace texture on warm dark background",
    altQuery: "gold filigree drop earrings worn on ear editorial portrait",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    material: "18k-gold",
    price: 95,
    rating: 5.0,
    reviews: 64,
    badge: "Gift-Ready",
    short:
      "A matching earring and necklace duo, presented in a keepsake gift box.",
    long:
      "The Royal Heirloom Set pairs our most-loved silhouette with a delicate chain. Hand-finished, weight-balanced and presented in a matte cream gift box with a hand-tied ribbon — ready to gift, ready to keep.",
    care:
      "Remove before showering, sleeping or applying fragrance. Buff gently with the included suede cloth.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in their original packaging.",
    variants: [
      { id: "gold", label: "Gold", swatch: "#c9a875" },
    ],
    imgIds: {
      main: "royal-heirloom-main-9e2a07",
      alt: "royal-heirloom-alt-44cd8b",
    },
    imgQuery: "gold earring and necklace gift set on warm cream editorial background",
    altQuery: "gold jewelry gift set in cream box with ribbon editorial warm light",
  },
  // Extended (for the shop page to feel like a real catalog)
  {
    id: "solstice-crystal-huggies",
    name: "Solstice Crystal Huggies",
    category: "huggies",
    material: "18k-gold",
    price: 44,
    rating: 4.8,
    reviews: 178,
    badge: "",
    short: "A line of warm champagne crystals along a slim gold huggie.",
    long:
      "Hand-set pavé crystals trace the inner curve of the Solstice huggie for a quiet, all-day sparkle. Slim profile, secure hinge.",
    care:
      "Remove before showering or sleeping. Polish with the included cloth to revive the gold finish.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in their original packaging.",
    variants: [
      { id: "gold", label: "Gold", swatch: "#c9a875" },
      { id: "silver", label: "Silver", swatch: "#d9d4ca" },
    ],
    imgIds: {
      main: "solstice-huggies-main-3a8e2c",
      alt: "solstice-huggies-alt-1bd09f",
    },
    imgQuery: "small gold huggie hoops with line of champagne crystals on warm dark background",
    altQuery: "crystal gold huggies worn on ear editorial warm light",
  },
  {
    id: "halo-thread-necklace",
    name: "Halo Thread Necklace",
    category: "necklaces",
    material: "18k-gold",
    price: 52,
    rating: 4.7,
    reviews: 142,
    badge: "",
    short: "A whisper-thin 18K chain with a single hand-set crystal pendant.",
    long:
      "Layer it or wear it alone. The Halo Thread chain is our finest, finished with a micro-pavé crystal pendant that catches light as you move.",
    care:
      "Remove before sleeping or applying fragrance. Store flat to keep the chain from kinking.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in their original packaging.",
    variants: [
      { id: "gold", label: "Gold", swatch: "#c9a875" },
    ],
    imgIds: {
      main: "halo-thread-main-71bf03",
      alt: "halo-thread-alt-2c4a88",
    },
    imgQuery: "delicate thin gold chain necklace with small crystal pendant on warm dark background",
    altQuery: "fine gold chain necklace worn on neck editorial warm light",
  },
  {
    id: "petal-cuff-earring",
    name: "Petal Cuff Earring",
    category: "earrings",
    material: "18k-gold",
    price: 46,
    rating: 4.8,
    reviews: 87,
    badge: "New",
    short: "A sculptural gold petal that hugs the curve of the ear.",
    long:
      "Inspired by the soft curl of a single petal, this open cuff rests along the helix with no piercing required. A single sweep of 18K gold.",
    care:
      "Remove before showering or sleeping. Polish gently with a soft cloth to maintain the mirror finish.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in their original packaging.",
    variants: [
      { id: "gold", label: "Gold", swatch: "#c9a875" },
    ],
    imgIds: {
      main: "petal-cuff-main-4d8e0a",
      alt: "petal-cuff-alt-bbf201",
    },
    imgQuery: "sculptural gold petal ear cuff single on warm dark background",
    altQuery: "gold petal ear cuff worn on ear editorial warm light",
  },
]

export const productById = (id) => PRODUCTS.find((p) => p.id === id)
export const relatedProducts = (id, n = 4) =>
  PRODUCTS.filter((p) => p.id !== id).slice(0, n)
