// Seed product catalog for Velmora Fine Jewelry.
// Replace these with real product data when integrating a backend.

export const PRODUCTS = [
  {
    id: "vivid-aura",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    shortName: "Vivid Aura",
    price: 42,
    category: "earrings",
    categoryLabel: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 214,
    blurb: "A single ear cuff with a hand-set crystal accent, designed to catch the light from every angle.",
    description:
      "The Vivid Aura ear cuff is sculpted from solid brass and finished in 18K gold, then crowned with a hand-set crystal. Wear it solo for a quiet statement, or layer with studs for an editorial stack. No piercing required.",
    materials:
      "Solid brass core. 18K gold plating, 2.5 microns. Single hand-set crystal. Hypoallergenic and nickel-free.",
    shipping:
      "Complimentary worldwide shipping on all orders. Dispatched within 48 hours from our atelier. Free returns within 30 days.",
    variants: ["Gold", "Silver"],
    imgId: "velmora-prod-vivid-aura-primary",
    imgIdHover: "velmora-prod-vivid-aura-hover",
    imgQuery: "gold ear cuff with crystal accent, warm editorial close-up on neutral background",
    gallery: [
      { id: "vivid-aura-1", query: "gold ear cuff with crystal accent, close-up on warm cream background, editorial" },
      { id: "vivid-aura-2", query: "gold ear cuff worn on model ear, warm light, editorial jewelry photography" },
      { id: "vivid-aura-3", query: "gold ear cuff flatlay on linen, warm shadow, luxury jewelry" },
      { id: "vivid-aura-4", query: "gold ear cuff detail macro, sparkling crystal, dark velvet background" },
    ],
  },
  {
    id: "majestic-flora",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    shortName: "Majestic Flora",
    price: 68,
    category: "necklaces",
    categoryLabel: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 168,
    blurb: "A romantic floral pendant strung with multicolor crystals on a fine cable chain.",
    description:
      "The Majestic Flora Nectar necklace is our love letter to garden romance. A delicate gold floret holds five hand-cut crystals in soft amber, blush and champagne tones, hung from a 16-inch fine cable chain with a 2-inch extender.",
    materials:
      "18K gold plating over recycled brass. Cubic zirconia and crystal stones. Lobster clasp. Adjustable 16–18 inches.",
    shipping:
      "Free worldwide shipping. 30-day returns. Arrives in our signature champagne gift box, ready for gifting.",
    variants: ["Gold", "Silver"],
    imgId: "velmora-prod-majestic-flora-primary",
    imgIdHover: "velmora-prod-majestic-flora-hover",
    imgQuery: "gold floral pendant necklace with multicolor crystal flowers, editorial close-up",
    gallery: [
      { id: "majestic-flora-1", query: "gold floral pendant necklace with multicolor crystals on warm cream background" },
      { id: "majestic-flora-2", query: "gold floral necklace worn on neckline of model, warm editorial light" },
      { id: "majestic-flora-3", query: "gold pendant necklace flatlay on silk, soft champagne tones" },
      { id: "majestic-flora-4", query: "gold floral pendant macro detail, crystal sparkle, dark background" },
    ],
  },
  {
    id: "golden-sphere",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    shortName: "Golden Sphere",
    price: 38,
    category: "huggies",
    categoryLabel: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 392,
    blurb: "Chunky dome huggies with a polished finish — the everyday earring that does more.",
    description:
      "Our most-loved huggie. A sculpted gold dome that hugs the lobe comfortably enough for all-day wear, weighty enough to feel like real fine jewelry. Sold as a pair.",
    materials:
      "Solid sterling silver core. 18K gold plating, 3 microns. Hinged snap-back closure. Hypoallergenic, water-safe.",
    shipping:
      "Complimentary worldwide shipping. Free 30-day returns. Ships in protective velvet pouch.",
    variants: ["Gold", "Silver"],
    imgId: "velmora-prod-golden-sphere-primary",
    imgIdHover: "velmora-prod-golden-sphere-hover",
    imgQuery: "chunky gold dome huggie hoop earrings, polished, editorial close-up neutral background",
    gallery: [
      { id: "golden-sphere-1", query: "chunky gold dome huggie hoop earrings on warm cream background, editorial" },
      { id: "golden-sphere-2", query: "gold huggie earrings worn on model ear, warm editorial light, close-up" },
      { id: "golden-sphere-3", query: "pair of gold dome huggie earrings flatlay on linen, soft shadow" },
      { id: "golden-sphere-4", query: "gold huggie earring macro detail, polished surface, dark background" },
    ],
  },
  {
    id: "amber-lace",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    shortName: "Amber Lace",
    price: 54,
    category: "earrings",
    categoryLabel: "Earrings",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 127,
    blurb: "Filigree drop earrings inspired by antique lacework — light as breath, dramatic in motion.",
    description:
      "Each Amber Lace earring is cast from a hand-engraved master, capturing the intricate pattern of vintage Venetian lace. Long enough to graze the collarbone, light enough to forget you're wearing.",
    materials:
      "18K gold plating over recycled brass. Sterling silver posts. Hypoallergenic. Length: 65mm. Weight: 4g per earring.",
    shipping:
      "Free worldwide shipping. 30-day returns. Presented in our signature champagne gift box.",
    variants: ["Gold", "Silver"],
    imgId: "velmora-prod-amber-lace-primary",
    imgIdHover: "velmora-prod-amber-lace-hover",
    imgQuery: "textured gold filigree drop earrings, antique lace pattern, editorial neutral background",
    gallery: [
      { id: "amber-lace-1", query: "textured gold filigree drop earrings on warm cream background, editorial" },
      { id: "amber-lace-2", query: "gold filigree drop earrings worn on model, side profile, warm light" },
      { id: "amber-lace-3", query: "gold lace earrings flatlay on silk, soft champagne shadow" },
      { id: "amber-lace-4", query: "gold filigree earring macro detail, intricate pattern, dark velvet" },
    ],
  },
  {
    id: "royal-heirloom",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    shortName: "Royal Heirloom",
    price: 95,
    category: "necklaces",
    categoryLabel: "Sets",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 89,
    blurb: "The matched earring-and-necklace set, gift-boxed in our signature champagne packaging.",
    description:
      "A considered pairing of our most loved silhouettes — a fine pendant necklace alongside complementary drop earrings. Arrives boxed and ribboned, ready to be received.",
    materials:
      "18K gold plating over recycled brass. Sterling silver posts. Crystal accents. Necklace: 16–18 inches adjustable.",
    shipping:
      "Free worldwide shipping. 30-day returns. Arrives in our champagne keepsake box with hand-tied ribbon.",
    variants: ["Gold", "Silver"],
    imgId: "velmora-prod-royal-heirloom-primary",
    imgIdHover: "velmora-prod-royal-heirloom-hover",
    imgQuery: "gold earring and necklace gift set in champagne box, editorial luxury jewelry packaging",
    gallery: [
      { id: "royal-heirloom-1", query: "gold earring and necklace set in champagne gift box, editorial" },
      { id: "royal-heirloom-2", query: "gold jewelry gift set styled with ribbon, warm cream background" },
      { id: "royal-heirloom-3", query: "matching gold necklace and earrings flatlay on silk, luxury" },
      { id: "royal-heirloom-4", query: "gold heirloom jewelry set close-up detail, warm editorial light" },
    ],
  },
];

export const CATEGORIES = [
  {
    id: "earrings",
    label: "Earrings",
    blurb: "Studs, drops and statement pieces.",
    imgId: "velmora-cat-earrings",
    query: "gold earrings collection editorial flatlay, warm light, luxury jewelry",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    blurb: "Pendants, chains and layering stories.",
    imgId: "velmora-cat-necklaces",
    query: "gold necklaces collection editorial flatlay, warm light, luxury demi-fine jewelry",
  },
  {
    id: "huggies",
    label: "Huggies",
    blurb: "The everyday hoops you'll never take off.",
    imgId: "velmora-cat-huggies",
    query: "gold huggie hoop earrings collection editorial, warm light, luxury jewelry",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Sophia M.",
    quote:
      "I bought the Amber Lace as a treat after a long year — they have not left my ears since. The weight, the finish, the box it arrives in. Everything feels considered.",
  },
  {
    id: "t2",
    name: "Elena R.",
    quote:
      "Gifted the Royal Heirloom Set to my sister for her birthday and she nearly cried. The packaging alone is worth it. The pieces themselves are heirloom quality.",
  },
  {
    id: "t3",
    name: "Naomi K.",
    quote:
      "I have sensitive ears and most gold-plated jewelry is a disaster. The Golden Sphere huggies I wear every single day — to sleep, to the shower, everywhere. No reaction.",
  },
];

export const REELS = [
  {
    id: "r1",
    caption: "Layered Mornings",
    imgId: "velmora-reel-1",
    query: "model wearing layered gold necklaces, morning light, vertical editorial jewelry reel",
  },
  {
    id: "r2",
    caption: "Golden Hour",
    imgId: "velmora-reel-2",
    query: "close up of gold huggie earrings on model, golden hour vertical reel",
  },
  {
    id: "r3",
    caption: "Quiet Glow",
    imgId: "velmora-reel-3",
    query: "model wearing gold ear cuff, vertical editorial portrait, warm neutral palette",
  },
  {
    id: "r4",
    caption: "Heirloom Stories",
    imgId: "velmora-reel-4",
    query: "hands holding gold pendant necklace, vertical jewelry reel, warm light",
  },
  {
    id: "r5",
    caption: "Everyday Ritual",
    imgId: "velmora-reel-5",
    query: "model fastening gold necklace in mirror, vertical reel, warm editorial",
  },
  {
    id: "r6",
    caption: "Soft Statement",
    imgId: "velmora-reel-6",
    query: "model in linen wearing gold drop earrings, vertical editorial portrait",
  },
];
