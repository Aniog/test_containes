// Seed catalog for Velmora Fine Jewelry.
// Image IDs / references are kept stable and used by the runtime image helper
// to look up a stock image of the described piece.

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

// Helper: build a stable DOM id (used by the image-query interpolation).
const t = (slug, label) => `prod-${slug}-title`
const d = (slug, label) => `prod-${slug}-desc`

export const products = [
  {
    id: "vivid-aura-jewels",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    titleId: t("vivid-aura", "Vivid Aura Jewels"),
    descId: d("vivid-aura", "Vivid Aura Jewels"),
    price: 42,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.8,
    reviews: 312,
    shortDescription:
      "A whisper of crystal at the lobe. Sculpted gold ear cuff finished with a single faceted stone.",
    description:
      "A sculptural ear cuff, sculpted in 18K gold-plated brass and finished with a single faceted crystal. Designed to sit comfortably on the lobe, it adds a quiet point of light to every outfit — from morning meetings to candlelit dinners.",
    images: [
      {
        imgId: "vivid-aura-img-1",
        ratio: "4x5",
        width: 900,
        query: "Vivid Aura Jewels prod-vivid-aura-desc prod-vivid-aura-title",
      },
      {
        imgId: "vivid-aura-img-2",
        ratio: "4x5",
        width: 900,
        query: "Vivid Aura Jewels worn on ear prod-vivid-aura-title",
      },
      {
        imgId: "vivid-aura-img-3",
        ratio: "1x1",
        width: 600,
        query: "Vivid Aura Jewels crystal detail macro prod-vivid-aura-title",
      },
      {
        imgId: "vivid-aura-img-4",
        ratio: "1x1",
        width: 600,
        query: "Vivid Aura Jewels flat lay prod-vivid-aura-title",
      },
    ],
    related: ["golden-sphere-huggies", "amber-lace-earrings", "majestic-flora", "royal-heirloom"],
  },
  {
    id: "majestic-flora",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    titleId: t("majestic-flora", "Majestic Flora Nectar"),
    descId: d("majestic-flora", "Majestic Flora Nectar"),
    price: 68,
    category: "necklaces",
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    reviews: 528,
    shortDescription:
      "A garden in metal. Hand-set multicolor crystals in a delicate floral silhouette.",
    description:
      "Inspired by heirloom botanical jewelry, the Majestic Flora Nectar necklace suspends a cluster of hand-set multicolor crystals from a delicate gold chain. Each stone is chosen for its tone and clarity, catching the light from every angle.",
    images: [
      {
        imgId: "majestic-flora-img-1",
        ratio: "4x5",
        width: 900,
        query: "Majestic Flora Nectar prod-majestic-flora-desc prod-majestic-flora-title",
      },
      {
        imgId: "majestic-flora-img-2",
        ratio: "4x5",
        width: 900,
        query: "Majestic Flora Nectar worn on neck prod-majestic-flora-title",
      },
      {
        imgId: "majestic-flora-img-3",
        ratio: "1x1",
        width: 600,
        query: "Majestic Flora Nectar crystal close-up prod-majestic-flora-title",
      },
      {
        imgId: "majestic-flora-img-4",
        ratio: "1x1",
        width: 600,
        query: "Majestic Flora Nectar packaging prod-majestic-flora-title",
      },
    ],
    related: ["royal-heirloom", "amber-lace-earrings", "vivid-aura-jewels", "golden-sphere-huggies"],
  },
  {
    id: "golden-sphere-huggies",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    titleId: t("golden-sphere", "Golden Sphere Huggies"),
    descId: d("golden-sphere", "Golden Sphere Huggies"),
    price: 38,
    category: "huggies",
    material: "18k-gold",
    tone: "gold",
    rating: 4.7,
    reviews: 940,
    shortDescription:
      "The everyday huggie, perfected. Chunky gold dome with a hinge that clicks closed.",
    description:
      "A modern take on the classic huggie. The Golden Sphere Huggies sit close to the lobe with a substantial, dome-shaped silhouette and a secure hinged closure. Polished by hand, lightweight enough to wear from morning to night.",
    images: [
      {
        imgId: "golden-sphere-img-1",
        ratio: "4x5",
        width: 900,
        query: "Golden Sphere Huggies prod-golden-sphere-desc prod-golden-sphere-title",
      },
      {
        imgId: "golden-sphere-img-2",
        ratio: "4x5",
        width: 900,
        query: "Golden Sphere Huggies stacked on ear prod-golden-sphere-title",
      },
      {
        imgId: "golden-sphere-img-3",
        ratio: "1x1",
        width: 600,
        query: "Golden Sphere Huggies hinge detail prod-golden-sphere-title",
      },
      {
        imgId: "golden-sphere-img-4",
        ratio: "1x1",
        width: 600,
        query: "Golden Sphere Huggies pair flat lay prod-golden-sphere-title",
      },
    ],
    related: ["vivid-aura-jewels", "amber-lace-earrings", "majestic-flora", "royal-heirloom"],
  },
  {
    id: "amber-lace-earrings",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    titleId: t("amber-lace", "Amber Lace Earrings"),
    descId: d("amber-lace", "Amber Lace Earrings"),
    price: 54,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.8,
    reviews: 416,
    shortDescription:
      "Textured gold filigree drops that sway with movement. Lightweight, never heavy.",
    description:
      "Inspired by antique lace, these filigree drops are cast in 18K gold-plated brass and hand-finished. The openwork pattern catches the light, and the soft drop gives them an elegant, fluid motion.",
    images: [
      {
        imgId: "amber-lace-img-1",
        ratio: "4x5",
        width: 900,
        query: "Amber Lace Earrings prod-amber-lace-desc prod-amber-lace-title",
      },
      {
        imgId: "amber-lace-img-2",
        ratio: "4x5",
        width: 900,
        query: "Amber Lace Earrings worn model prod-amber-lace-title",
      },
      {
        imgId: "amber-lace-img-3",
        ratio: "1x1",
        width: 600,
        query: "Amber Lace Earrings filigree detail prod-amber-lace-title",
      },
      {
        imgId: "amber-lace-img-4",
        ratio: "1x1",
        width: 600,
        query: "Amber Lace Earrings pair on linen prod-amber-lace-title",
      },
    ],
    related: ["golden-sphere-huggies", "vivid-aura-jewels", "majestic-flora", "royal-heirloom"],
  },
  {
    id: "royal-heirloom",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    titleId: t("royal-heirloom", "Royal Heirloom Set"),
    descId: d("royal-heirloom", "Royal Heirloom Set"),
    price: 95,
    category: "sets",
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    reviews: 207,
    shortDescription:
      "A pair and pendant, gift-boxed together. Made to be given, made to be kept.",
    description:
      "A matching earring and necklace set, presented in our signature keepsake box. The Royal Heirloom Set pairs a sculptural stud with a delicate pendant — an effortless gift for a moment worth marking.",
    images: [
      {
        imgId: "royal-heirloom-img-1",
        ratio: "4x5",
        width: 900,
        query: "Royal Heirloom Set prod-royal-heirloom-desc prod-royal-heirloom-title",
      },
      {
        imgId: "royal-heirloom-img-2",
        ratio: "4x5",
        width: 900,
        query: "Royal Heirloom Set gift box prod-royal-heirloom-title",
      },
      {
        imgId: "royal-heirloom-img-3",
        ratio: "1x1",
        width: 600,
        query: "Royal Heirloom Set pendant detail prod-royal-heirloom-title",
      },
      {
        imgId: "royal-heirloom-img-4",
        ratio: "1x1",
        width: 600,
        query: "Royal Heirloom Set earring detail prod-royal-heirloom-title",
      },
    ],
    related: ["majestic-flora", "vivid-aura-jewels", "amber-lace-earrings", "golden-sphere-huggies"],
  },
]

export const productById = (id) => products.find((p) => p.id === id)
export const productBySlug = (slug) => products.find((p) => p.slug === slug)

export const bestsellers = products.slice(0, 5)

export const ugcReels = [
  {
    id: "reel-1",
    imgId: "reel-1-img",
    handle: "@marigoldstudio",
    caption: "Stacked huggies, all week long",
    query: "Stacked gold huggies on ear editorial",
  },
  {
    id: "reel-2",
    imgId: "reel-2-img",
    handle: "@june.amber",
    caption: "A whisper of crystal",
    query: "Crystal ear cuff editorial portrait",
  },
  {
    id: "reel-3",
    imgId: "reel-3-img",
    handle: "@noor.eden",
    caption: "Layered, never loud",
    query: "Layered gold necklaces editorial close up",
  },
  {
    id: "reel-4",
    imgId: "reel-4-img",
    handle: "@the.linen.edit",
    caption: "Morning light on filigree",
    query: "Filigree drop earrings in natural light",
  },
  {
    id: "reel-5",
    imgId: "reel-5-img",
    handle: "@velmora.daily",
    caption: "A gift that keeps giving",
    query: "Jewelry gift set in linen box editorial",
  },
  {
    id: "reel-6",
    imgId: "reel-6-img",
    handle: "@sienna.mae",
    caption: "Flora, on repeat",
    query: "Floral crystal pendant editorial portrait",
  },
  {
    id: "reel-7",
    imgId: "reel-7-img",
    handle: "@cara.lit",
    caption: "Three little things",
    query: "Gold huggie hoops stack on ear editorial",
  },
]

export const testimonials = [
  {
    id: "t1",
    name: "Amelia R.",
    quote:
      "I wear the Golden Sphere Huggies almost every day — they go with absolutely everything and the gold has not faded at all.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sasha K.",
    quote:
      "The Majestic Flora necklace is the most complimented piece I own. It looks like a true heirloom, not a fast-fashion piece.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Naomi B.",
    quote:
      "Beautiful packaging, fast shipping, and the quality far exceeds the price. The Royal Heirloom Set made the perfect gift.",
    rating: 5,
  },
]
