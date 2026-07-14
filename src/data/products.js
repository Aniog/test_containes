// Seed catalog for Velmora Fine Jewelry.
// Image references use Velmora's stock image tag system (data-strk-img).
// Each text element has a deterministic id so the image query can reference it.

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
  { id: "u50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "o80", label: "Over $80", min: 80.01, max: Infinity },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    subtitle: "Crystal accent ear cuff in 18K gold plating",
    price: 42,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    reviewCount: 218,
    badge: "Bestseller",
    images: [
      {
        id: "vivid-aura-cuff-1",
        query:
          "[vivid-aura-cuff-desc] [vivid-aura-cuff-name] gold ear cuff crystal accent editorial jewelry photography",
        alt: "Vivid Aura Cuff — front view",
      },
      {
        id: "vivid-aura-cuff-2",
        query:
          "[vivid-aura-cuff-desc] [vivid-aura-cuff-name] gold ear cuff on model warm lighting jewelry",
        alt: "Vivid Aura Cuff — on model",
      },
    ],
    titleId: "vivid-aura-cuff-name",
    descId: "vivid-aura-cuff-desc",
    description:
      "An ear cuff that catches the light from every angle. A single crystal sits at the centre, framed in hand-set 18K gold plating for a piece that feels both delicate and intentional.",
    details:
      "Handcrafted in 18K gold-plated brass with a prong-set cubic crystal. Hypoallergenic, nickel-free, and tarnish-resistant with proper care.",
    materials:
      "18K gold-plated brass · cubic crystal · hypoallergenic post · designed in studio, finished by hand.",
    care: "Store in the suede pouch provided. Avoid contact with perfume, sunscreen, and chlorine. Polish gently with the included cloth to maintain the brushed finish.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 3–6 business days. 30-day returns — see our policy for full details.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Multicolor floral crystal pendant necklace",
    price: 68,
    category: "necklaces",
    material: "18k-gold",
    tone: "gold",
    rating: 4.8,
    reviewCount: 174,
    badge: "New",
    images: [
      {
        id: "majestic-flora-1",
        query:
          "[majestic-flora-desc] [majestic-flora-name] multicolor floral crystal pendant necklace on dark background",
        alt: "Majestic Flora Nectar — pendant",
      },
      {
        id: "majestic-flora-2",
        query:
          "[majestic-flora-desc] [majestic-flora-name] floral crystal necklace on model editorial portrait",
        alt: "Majestic Flora Nectar — on model",
      },
    ],
    titleId: "majestic-flora-name",
    descId: "majestic-flora-desc",
    description:
      "A bouquet of hand-set crystals arranged in a soft floral silhouette. Each stone catches the light differently, so the piece shifts quietly through the day.",
    details:
      "Adjustable 16–18″ cable chain with a lobster clasp. Centerpiece features six multicolor crystals in a prong setting on a 14K gold-plated brass base.",
    materials:
      "14K gold-plated brass · multicolor cubic crystals · adjustable cable chain · hypoallergenic.",
    care: "Remove before showering, swimming, or applying lotions. Store flat in the original box to protect the chain finish.",
    shipping:
      "Complimentary worldwide shipping on orders over $75. Express options available at checkout. 30-day returns accepted on unworn pieces.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    reviewCount: 412,
    badge: "Cult Favorite",
    images: [
      {
        id: "golden-sphere-1",
        query:
          "[golden-sphere-desc] [golden-sphere-name] chunky gold dome huggie earrings editorial",
        alt: "Golden Sphere Huggies — pair",
      },
      {
        id: "golden-sphere-2",
        query:
          "[golden-sphere-desc] [golden-sphere-name] gold huggie earrings on ear closeup",
        alt: "Golden Sphere Huggies — on ear",
      },
    ],
    titleId: "golden-sphere-name",
    descId: "golden-sphere-desc",
    description:
      "Smooth, sculptural, substantial. Our signature dome huggie in a weight that feels reassuring without being heavy — a quiet anchor in your everyday stack.",
    details:
      "Solid-feel huggies cast in 18K gold-plated brass with a hinged clicker closure. Approximately 12mm outer diameter.",
    materials:
      "18K gold-plated brass · hypoallergenic clicker post · suitable for sensitive ears.",
    care: "Wipe with a soft cloth after wear. Avoid sleeping in your huggies to extend the plating life.",
    shipping:
      "Free standard shipping over $75. International express available at checkout. 30-day returns.",
  },
  {
    id: "amber-lace-drops",
    name: "Amber Lace Drops",
    subtitle: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.7,
    reviewCount: 96,
    badge: null,
    images: [
      {
        id: "amber-lace-1",
        query:
          "[amber-lace-desc] [amber-lace-name] textured gold filigree drop earrings editorial warm light",
        alt: "Amber Lace Drops — pair",
      },
      {
        id: "amber-lace-2",
        query:
          "[amber-lace-desc] [amber-lace-name] gold filigree drop earrings on model side profile",
        alt: "Amber Lace Drops — on model",
      },
    ],
    titleId: "amber-lace-name",
    descId: "amber-lace-desc",
    description:
      "Inspired by antique lacework, each drop is hand-finished with a delicate filigree pattern that catches the light in soft, shifting waves.",
    details:
      "Drop earrings in 18K gold-plated brass with a French hook closure. Approximately 38mm drop length.",
    materials:
      "18K gold-plated brass · hypoallergenic French hook · hand-finished filigree detail.",
    care: "Store hanging or in the divided jewelry box to prevent tangling. Avoid contact with hairspray and perfume.",
    shipping:
      "Complimentary standard shipping over $75. Express options at checkout. 30-day returns.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Gift-boxed earring and necklace set",
    price: 95,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 5.0,
    reviewCount: 58,
    badge: "Gift Edit",
    images: [
      {
        id: "royal-heirloom-1",
        query:
          "[royal-heirloom-desc] [royal-heirloom-name] gold jewelry gift set editorial box",
        alt: "Royal Heirloom Set — boxed",
      },
      {
        id: "royal-heirloom-2",
        query:
          "[royal-heirloom-desc] [royal-heirloom-name] gold jewelry set on model earring necklace editorial",
        alt: "Royal Heirloom Set — on model",
      },
    ],
    titleId: "royal-heirloom-name",
    descId: "royal-heirloom-desc",
    description:
      "A matching huggie and pendant, presented in a keepsake velvet box. Designed to be gifted — and to be kept.",
    details:
      "Set includes a pair of Golden Sphere Huggies and a scaled-down Flora pendant on an adjustable 16–18″ chain.",
    materials:
      "18K gold-plated brass · cubic crystals · velvet presentation box · hypoallergenic.",
    care: "Both pieces store flat in the original box. Polish gently with the included cloth.",
    shipping:
      "Gift-wrapped at no extra charge. Add a handwritten note at checkout. Free standard shipping over $75.",
  },
];

export const PRODUCT_BY_ID = Object.fromEntries(
  PRODUCTS.map((p) => [p.id, p])
);

export const RELATED_BY_ID = {
  "vivid-aura-cuff": ["golden-sphere-huggies", "amber-lace-drops", "majestic-flora-nectar"],
  "majestic-flora-nectar": ["royal-heirloom-set", "golden-sphere-huggies", "amber-lace-drops"],
  "golden-sphere-huggies": ["vivid-aura-cuff", "amber-lace-drops", "royal-heirloom-set"],
  "amber-lace-drops": ["vivid-aura-cuff", "golden-sphere-huggies", "royal-heirloom-set"],
  "royal-heirloom-set": ["majestic-flora-nectar", "golden-sphere-huggies", "amber-lace-drops"],
};

export const UGC_REELS = [
  {
    id: "reel-1",
    imgId: "ugc-reel-1",
    imgQuery:
      "gold hoop earrings worn by woman side profile warm light editorial portrait",
    titleId: "ugc-reel-1-caption",
    caption: "Everyday hoops",
  },
  {
    id: "reel-2",
    imgId: "ugc-reel-2",
    imgQuery:
      "gold crystal necklace on woman neckline editorial closeup warm tones",
    titleId: "ugc-reel-2-caption",
    caption: "Flora on Sunday",
  },
  {
    id: "reel-3",
    imgId: "ugc-reel-3",
    imgQuery:
      "gold ear cuff on woman ear editorial closeup jewelry detail warm",
    titleId: "ugc-reel-3-caption",
    caption: "Stacked with Aura",
  },
  {
    id: "reel-4",
    imgId: "ugc-reel-4",
    imgQuery:
      "gold huggie earrings closeup on woman ear warm golden hour lighting",
    titleId: "ugc-reel-4-caption",
    caption: "Golden hour",
  },
  {
    id: "reel-5",
    imgId: "ugc-reel-5",
    imgQuery:
      "woman styling gold jewelry in mirror editorial portrait warm light minimal",
    titleId: "ugc-reel-5-caption",
    caption: "Getting ready",
  },
  {
    id: "reel-6",
    imgId: "ugc-reel-6",
    imgQuery:
      "gold jewelry laid out on warm beige linen editorial flat lay elegant",
    titleId: "ugc-reel-6-caption",
    caption: "Velmora rituals",
  },
  {
    id: "reel-7",
    imgId: "ugc-reel-7",
    imgQuery:
      "gold pendant necklace closeup on woman neckline soft warm editorial portrait",
    titleId: "ugc-reel-7-caption",
    caption: "Soft light",
  },
  {
    id: "reel-8",
    imgId: "ugc-reel-8",
    imgQuery:
      "woman wearing layered gold jewelry editorial portrait warm tones jewelry detail",
    titleId: "ugc-reel-8-caption",
    caption: "Layered love",
  },
];

export const TESTIMONIALS = [
  {
    id: "t-1",
    name: "Amelia R.",
    rating: 5,
    body: "The huggies are the perfect weight — substantial without feeling heavy. They’ve become my everyday staple.",
  },
  {
    id: "t-2",
    name: "Priya K.",
    rating: 5,
    body: "Gifted the Royal Heirloom Set to my sister. The packaging alone made me cry. The pieces are even better in person.",
  },
  {
    id: "t-3",
    name: "Sophie M.",
    rating: 5,
    body: "Quietly the most flattering jewelry I own. It looks like it should cost three times the price.",
  },
];
