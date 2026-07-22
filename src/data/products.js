// Velmora seed product data. Image placeholders use the data-strk-img
// system at render time and reference text IDs in the DOM.

import { resolveImageUrl } from "@/lib/stockImages";

export const CATEGORIES = [
  { slug: "earrings", label: "Earrings" },
  { slug: "necklaces", label: "Necklaces" },
  { slug: "huggies", label: "Huggies" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    subtitle: "Crystal ear cuff",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    tone: ["gold"],
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    images: [
      "gold crystal ear cuff on model warm light",
      "gold ear cuff crystal detail closeup",
      "gold ear cuff styled on ear editorial",
      "crystal ear cuff packaging gift box",
    ],
    description:
      "A whisper of crystal, hand-set on a sculpted gold ear cuff. Designed to sit comfortably along the helix — no piercing required.",
    details: {
      Description:
        "Inspired by vintage halo jewelry, the Vivid Aura cuff frames the ear with a single hand-set crystal. Each stone is uniquely faceted so no two pieces are exactly alike. The cuff is fully adjustable and crafted without piercing.",
      "Materials & Care":
        "18K gold plated over a hypoallergenic brass core. Free of nickel, lead, and cadmium. To preserve the finish, avoid contact with perfume, lotion, and water. Store in the included velvet pouch.",
      "Shipping & Returns":
        "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Each order is hand-inspected and ships in 1–2 business days from our studio.",
    },
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Multicolor crystal necklace",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    tone: ["gold"],
    rating: 4.8,
    reviews: 96,
    badge: "New",
    images: [
      "multicolor floral crystal gold necklace model",
      "floral crystal necklace pendant closeup",
      "multicolor gemstone necklace flat lay editorial",
      "floral crystal necklace velvet pouch packaging",
    ],
    description:
      "A hand-arranged cluster of multicolor crystals set in warm gold. The kind of heirloom you wear with a white tee or a wedding dress.",
    details: {
      Description:
        "The Flora Nectar pendant brings together seven hand-set crystals in soft botanical hues — peridot, citrine, rose, and champagne — arranged on a delicate gold vine. Suspended from a fine 16–18\" adjustable chain.",
      "Materials & Care":
        "18K gold plated brass with hand-set crystals. Hypoallergenic. Remove before showering, swimming, or applying lotion. Polish gently with the included cloth.",
      "Shipping & Returns":
        "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces. Ships gift-ready in our signature box with a hand-tied ribbon.",
    },
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky gold dome huggies",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    tone: ["gold", "silver"],
    rating: 4.9,
    reviews: 214,
    badge: "Bestseller",
    images: [
      "chunky gold dome huggie earrings model",
      "gold sphere huggie earring closeup",
      "gold huggie earrings styled editorial",
      "gold huggies gift box packaging",
    ],
    description:
      "A modern take on the classic huggie. Chunky, sculptural, and made to live in your everyday stack.",
    details: {
      Description:
        "Sculpted as a half-dome with a softly polished finish, the Golden Sphere huggies have a satisfying weight and a secure hinged closure. Comfortable enough to sleep in, polished enough to wear to dinner.",
      "Materials & Care":
        "18K gold plated over a brass core. Hypoallergenic and tarnish-resistant with proper care. Available in gold and silver tones.",
      "Shipping & Returns":
        "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces. Sold as a pair.",
    },
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    subtitle: "Textured gold filigree drops",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    tone: ["gold"],
    rating: 4.7,
    reviews: 73,
    images: [
      "textured gold filigree drop earrings model",
      "gold filigree earring closeup detail",
      "amber lace earrings styled editorial portrait",
      "filigree earrings gift box packaging",
    ],
    description:
      "Hand-finished filigree in warm gold. Light enough for day, intricate enough for evening.",
    details: {
      Description:
        "Inspired by antique lace, each Amber Lace drop is cast with an openwork filigree pattern and finished by hand. They catch the light like candlelight through a window — soft, golden, and quietly dramatic.",
      "Materials & Care":
        "18K gold plated brass, hand-finished. Hypoallergenic. Store flat in the included pouch to protect the filigree.",
      "Shipping & Returns":
        "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces.",
    },
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Gift-boxed earring + necklace set",
    price: 95,
    category: "earrings",
    material: "18K Gold Plated",
    tone: ["gold"],
    rating: 5.0,
    reviews: 41,
    badge: "Gift-Ready",
    images: [
      "gift boxed gold earring and necklace set model",
      "royal heirloom jewelry set flat lay editorial",
      "gold earring and necklace set closeup",
      "velvet gift box packaging heirloom set",
    ],
    description:
      "A matching earring and necklace duo, delivered in a keepsake velvet box. The gift that gets remembered.",
    details: {
      Description:
        "The Royal Heirloom Set pairs a delicate chain necklace with a matching pair of polished gold studs. Each set is delivered in a signature velvet gift box with a hand-tied ribbon — ready to give.",
      "Materials & Care":
        "18K gold plated brass. Hypoallergenic. Includes a soft polishing cloth and care card.",
      "Shipping & Returns":
        "Free worldwide shipping on every set. 30-day returns on unworn pieces. Add a gift note at checkout.",
    },
  },
];

// Attach static data-strk-img-id slots for each product so the build-time
// strk-img plugin can resolve the placeholder src at build time. We also
// resolve the final https URL up front so the bundle ships real image
// URLs (and never a data:image/svg+xml placeholder).
PRODUCTS.forEach((p) => {
  p.imgPrimaryId = `${p.id}-primary`;
  p.imgAltId = `${p.id}-alt`;
  p.imgMainId = `${p.id}-main`;
  p.imgThumbIds = [0, 1, 2, 3].map((i) => `${p.id}-thumb-${i}`);
  p.imgPrimaryUrl = resolveImageUrl(p.imgPrimaryId);
  p.imgAltUrl = resolveImageUrl(p.imgAltId);
  p.imgMainUrl = resolveImageUrl(p.imgMainId);
  p.imgThumbUrls = p.imgThumbIds.map((id) => resolveImageUrl(id));
});

export const UGC_REELS = [
  {
    id: "reel-1",
    title: "The Vivid Aura, caught in golden hour.",
    query: "woman gold ear cuff portrait warm sunset light editorial",
    imgId: "reel-reel-1-img",
  },
  {
    id: "reel-2",
    title: "Flora Nectar with a glass of wine.",
    query: "multicolor crystal gold necklace woman portrait soft light",
    imgId: "reel-reel-2-img",
  },
  {
    id: "reel-3",
    title: "Everyday stack, every single day.",
    query: "gold huggie earrings closeup ear portrait warm tone",
    imgId: "reel-reel-3-img",
  },
  {
    id: "reel-4",
    title: "Amber Lace for slow Sundays.",
    query: "gold filigree drop earrings portrait soft window light",
    imgId: "reel-reel-4-img",
  },
  {
    id: "reel-5",
    title: "Heirloom set, unboxing.",
    query: "woman opening gold jewelry gift box portrait warm",
    imgId: "reel-reel-5-img",
  },
  {
    id: "reel-6",
    title: "Layered three ways.",
    query: "gold necklaces layered on woman portrait editorial",
    imgId: "reel-reel-6-img",
  },
];

// Resolve the final image URL for each reel so the bundle ships real
// https URLs and we never carry a data:image/svg+xml placeholder.
UGC_REELS.forEach((r) => {
  r.imgUrl = resolveImageUrl(r.imgId);
});

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Amelia R.",
    rating: 5,
    text: "I bought the Vivid Aura cuff on a whim and now I barely take it off. The gold has held up beautifully after months of daily wear.",
  },
  {
    id: "t2",
    name: "Sophia K.",
    rating: 5,
    text: "The Royal Heirloom set was the easiest gift I've ever given. Beautiful box, even more beautiful jewelry. My sister cried.",
  },
  {
    id: "t3",
    name: "Naomi T.",
    rating: 5,
    text: "Finally, demi-fine that actually feels like fine. The weight, the finish, the packaging — every detail is considered.",
  },
];
