// Seed catalog for Velmora Fine Jewelry.
// Image fields carry descriptive queries used by the stock-image system.

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    short: "A sculptural gold ear cuff traced with a single crystal accent — light-catching, no piercing required.",
    description:
      "The Vivid Aura Jewels ear cuff wraps the ear in a smooth arc of 18K gold, finished with a hand-set crystal that catches the light with every turn. Designed to be worn alone as a quiet statement or layered into a curated ear.",
    materials:
      "18K gold plating over a hypoallergenic brass core. Hand-set cubic zirconia accent. Nickel-free and safe for sensitive ears. Wipe gently with a soft dry cloth; avoid water, perfume and lotions to preserve the finish.",
    imageQuery: "gold ear cuff with crystal accent on dark elegant background, macro jewelry photography, warm light",
    hoverQuery: "gold crystal ear cuff worn on ear close up, editorial jewelry photography",
    tone: "gold",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    rating: 4.9,
    reviews: 96,
    badge: "New",
    short: "A delicate chain blooming with multicolor floral crystals — romantic, luminous, unforgettable.",
    description:
      "Majestic Flora Nectar gathers hand-set floral crystals in soft multicolor tones along a fine 18K gold chain. Each bloom is placed to rest gracefully at the collarbone, bringing a whisper of color to both day and evening.",
    materials:
      "18K gold plated chain, hypoallergenic and nickel-free. Multicolor cubic zirconia florals. Adjustable 16–18 inch length with a secure lobster clasp. Store flat in the provided pouch; keep away from moisture.",
    imageQuery: "multicolor floral crystal necklace gold chain on dark neutral background, luxury jewelry photography",
    hoverQuery: "floral crystal necklace worn on neck close up, editorial fashion jewelry photography",
    tone: "gold",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    rating: 4.7,
    reviews: 211,
    badge: "Bestseller",
    short: "Chunky polished dome huggies that hug the lobe — the everyday gold essential, perfected.",
    description:
      "Golden Sphere Huggies are the archetypal everyday hoop, reimagined with a softly domed, light-polished silhouette. Substantial in look yet feather-light in wear, they close with a seamless hinge for all-day comfort.",
    materials:
      "18K gold plating over hypoallergenic brass. Nickel-free, secure hinged closure. Polish with the enclosed soft cloth; remove before swimming or showering to protect the plating.",
    imageQuery: "chunky gold dome huggie earrings on dark neutral background, macro jewelry photography, warm studio light",
    hoverQuery: "gold dome huggie earrings worn on ear close up, editorial jewelry photography",
    tone: "gold",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    rating: 4.8,
    reviews: 87,
    badge: "Limited",
    short: "Textured gold filigree drops that move like lace — intricate, airy, and quietly opulent.",
    description:
      "Amber Lace Earrings are cut in an open filigree that drapes like fabric, catching warm light across their textured surface. A graceful drop length flatters the neckline while remaining light enough for evening-long wear.",
    materials:
      "18K gold plated filigree over a hypoallergenic core. Nickel-free posts for sensitive ears. Store hanging or flat in the provided box; avoid bending the delicate lace work.",
    imageQuery: "textured gold filigree drop earrings on dark elegant background, macro jewelry photography, warm amber light",
    hoverQuery: "gold filigree drop earrings worn close up on model, editorial jewelry photography",
    tone: "gold",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    rating: 5.0,
    reviews: 64,
    badge: "Gift Ready",
    short: "A gift-boxed pairing of earrings and necklace — the heirloom gesture, ready to give.",
    description:
      "The Royal Heirloom Set arrives in our signature gift box: a coordinated earring and necklace pairing in warm 18K gold, chosen to be worn together or treasured separately. An effortless, deeply thoughtful gift.",
    materials:
      "18K gold plating over hypoallergenic brass, nickel-free throughout. Presented in a velvet-lined Velmora gift box with care card. Keep pieces in the box when not worn; avoid contact with water and fragrance.",
    imageQuery: "gift boxed gold earring and necklace jewelry set on dark elegant background, luxury packaging photography",
    hoverQuery: "gold necklace and earring set in velvet gift box close up, luxury jewelry photography",
    tone: "gold",
  },
];

export const CATEGORIES = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

export const PRICE_RANGES = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over-75", label: "Over $75", min: 75, max: Infinity },
];

export const TONES = ["gold", "silver"];

export const formatPrice = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);
