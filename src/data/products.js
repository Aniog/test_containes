// Seed product catalog for Velmora Fine Jewelry.
// Each product has 2-4 gallery images, two tone variants (gold/silver),
// a category, and a stable list of reference text IDs for the strk-img system.
//
// All images are populated at build time by the vite-plugin-strk-img plugin
// using the AI image-search backend. To swap in real product photography,
// replace these queries with a direct CDN URL.

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const MATERIALS = [
  { id: "18k-gold-plated", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "crystal", label: "Crystal" },
];

const make = (id) => {
  const s = slug(id);
  return {
    titleId: `p-${s}-title`,
    descId: `p-${s}-desc`,
    catId: `p-${s}-cat`,
  };
};

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18k-gold-plated",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    shortDescription:
      "A sculptural ear cuff with a single hand-set crystal accent. Made to catch the light from every angle.",
    description:
      "Inspired by the quiet drama of evening light on metal, the Vivid Aura cuff is sculpted in 18K gold-plated brass with a single hand-set crystal. The flexible silhouette hugs the ear and stacks effortlessly with studs and huggies.",
    materials:
      "18K gold plated over a brass core. Hand-set crystal accent. Hypoallergenic and nickel-free. Tarnish-resistant coating.",
    care:
      "Remove before showering, swimming, or applying lotions. Store in the suede pouch provided. Polish gently with a soft, dry cloth to restore the original luster.",
    shipping:
      "Free worldwide shipping on all orders over $75. Standard delivery 5–8 business days. Express options available at checkout. 30-day returns on unworn pieces in their original packaging.",
    images: [
      {
        id: "vivid-aura-jewels-img-1",
        query: `gold crystal ear cuff editorial jewelry on dark background Vivid Aura Jewels earrings`,
        ratio: "4x5",
        width: 900,
      },
      {
        id: "vivid-aura-jewels-img-2",
        query: `gold ear cuff worn on model ear close up warm light Vivid Aura Jewels Vivid Aura Jewels`,
        ratio: "4x5",
        width: 900,
      },
      {
        id: "vivid-aura-jewels-img-3",
        query: `gold crystal jewelry detail macro on warm cream surface Vivid Aura Jewels earrings`,
        ratio: "1x1",
        width: 700,
      },
    ],
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    inStock: true,
    isBestseller: true,
    refs: make("vivid-aura-jewels"),
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "crystal",
    price: 68,
    rating: 4.9,
    reviewCount: 208,
    shortDescription:
      "A multicolor floral crystal necklace with hand-set petals on a fine cable chain. Wear it alone, or layered.",
    description:
      "The Majestic Flora necklace is composed of fourteen hand-set crystal petals in soft amber, blush, and clear tones. Each stone is set by hand in a delicate gold-toned mount and suspended from a 16–18 inch adjustable cable chain.",
    materials:
      "Multicolor crystals hand-set in 18K gold-plated brass mounts. Fine cable chain with a lobster clasp. Hypoallergenic, nickel-free, and tarnish-resistant.",
    care:
      "Apply lotions and perfume before putting on your jewelry. Remove before sleeping and exercising. Wipe gently with the suede polishing cloth included with every order.",
    shipping:
      "Complimentary worldwide shipping on orders over $75. Standard delivery 5–8 business days. Expedited options at checkout. 30-day returns on unworn pieces.",
    images: [
      {
        id: "majestic-flora-nectar-img-1",
        query: `multicolor floral crystal necklace on warm neutral background Majestic Flora Nectar necklaces`,
        ratio: "4x5",
        width: 900,
      },
      {
        id: "majestic-flora-nectar-img-2",
        query: `gold floral crystal pendant worn on neckline model close up Majestic Flora Nectar Majestic Flora Nectar`,
        ratio: "4x5",
        width: 900,
      },
      {
        id: "majestic-flora-nectar-img-3",
        query: `multicolor crystal jewelry flat lay on cream linen Majestic Flora Nectar necklaces`,
        ratio: "1x1",
        width: 700,
      },
    ],
    variants: [
      { id: "gold", label: "Gold" },
    ],
    inStock: true,
    isBestseller: true,
    refs: make("majestic-flora-nectar"),
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18k-gold-plated",
    price: 38,
    rating: 4.7,
    reviewCount: 312,
    shortDescription:
      "A chunky dome huggie with a soft brushed finish. The everyday gold hoop, refined.",
    description:
      "A modern take on the classic huggie. The Golden Sphere is a sculptural dome with a soft brushed finish, hinged for a secure and comfortable fit. Substantial without feeling heavy, they sit close to the lobe and layer effortlessly with studs and cuffs.",
    materials:
      "18K gold plated over a brass core with a brushed finish. Hinged clicker closure. Hypoallergenic and nickel-free.",
    care:
      "Avoid contact with water, perfume, and lotion. Store in the suede pouch provided. Polish gently with a dry cloth to maintain the brushed finish.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5–8 business days. 30-day returns on unworn pieces in their original packaging.",
    images: [
      {
        id: "golden-sphere-huggies-img-1",
        query: `chunky gold dome huggie hoop earring on dark background Golden Sphere Huggies huggies`,
        ratio: "4x5",
        width: 900,
      },
      {
        id: "golden-sphere-huggies-img-2",
        query: `gold huggie earrings worn on model ear editorial warm light Golden Sphere Huggies Golden Sphere Huggies`,
        ratio: "4x5",
        width: 900,
      },
      {
        id: "golden-sphere-huggies-img-3",
        query: `gold hoop earring pair detail macro on cream surface Golden Sphere Huggies huggies`,
        ratio: "1x1",
        width: 700,
      },
    ],
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    inStock: true,
    isBestseller: true,
    refs: make("golden-sphere-huggies"),
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18k-gold-plated",
    price: 54,
    rating: 4.8,
    reviewCount: 96,
    shortDescription:
      "Textured gold filigree drop earrings, light enough to wear all day and detailed enough to dress up for evening.",
    description:
      "The Amber Lace drop is a study in texture. Each earring is cast in a delicate filigree pattern inspired by antique lace, then hand-finished with a soft 18K gold plating. The result is a pair with the warmth of an heirloom and the lightness of a modern staple.",
    materials:
      "18K gold plated over brass with a hand-finished filigree texture. Hypoallergenic and nickel-free. Lightweight construction for all-day wear.",
    care:
      "Remove before showering, swimming, or sleeping. Store flat in the suede pouch provided. Wipe gently with a soft, dry cloth — do not use chemical cleaners.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5–8 business days. 30-day returns on unworn pieces in their original packaging.",
    images: [
      {
        id: "amber-lace-earrings-img-1",
        query: `gold filigree drop earrings on warm neutral background Amber Lace Earrings earrings`,
        ratio: "4x5",
        width: 900,
      },
      {
        id: "amber-lace-earrings-img-2",
        query: `gold lace drop earrings worn on model editorial portrait Amber Lace Earrings Amber Lace Earrings`,
        ratio: "4x5",
        width: 900,
      },
      {
        id: "amber-lace-earrings-img-3",
        query: `gold filigree jewelry detail on dark background macro Amber Lace Earrings earrings`,
        ratio: "1x1",
        width: 700,
      },
    ],
    variants: [
      { id: "gold", label: "Gold" },
    ],
    inStock: true,
    isBestseller: true,
    refs: make("amber-lace-earrings"),
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    material: "18k-gold-plated",
    price: 95,
    rating: 4.9,
    reviewCount: 178,
    shortDescription:
      "A gift-boxed earring and necklace set, designed to be unwrapped together. The most-asked-for gift of the season.",
    description:
      "The Royal Heirloom Set pairs our most-loved stud and a delicate chain necklace in a keepsake gift box. Each piece is finished in 18K gold plating and arrives in a soft-touch box with a handwritten card — ready to give, ready to keep.",
    materials:
      "18K gold plated over brass. Hypoallergenic and nickel-free. Gift box made from FSC-certified recycled paper with a suede lining.",
    care:
      "Remove before showering, swimming, or sleeping. Polish gently with the suede cloth included. Store in the gift box to keep the set together.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5–8 business days. Express options available at checkout. 30-day returns on unworn pieces.",
    images: [
      {
        id: "royal-heirloom-set-img-1",
        query: `gold earring and necklace gift set on cream linen Royal Heirloom Set sets`,
        ratio: "4x5",
        width: 900,
      },
      {
        id: "royal-heirloom-set-img-2",
        query: `gold jewelry gift box opened on warm dark background Royal Heirloom Set Royal Heirloom Set`,
        ratio: "4x5",
        width: 900,
      },
      {
        id: "royal-heirloom-set-img-3",
        query: `gold jewelry set worn on model editorial portrait warm Royal Heirloom Set sets`,
        ratio: "1x1",
        width: 700,
      },
    ],
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    inStock: true,
    isBestseller: true,
    refs: make("royal-heirloom-set"),
  },
];

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id) || null;

export const getRelatedProducts = (id, limit = 4) => {
  return PRODUCTS.filter((p) => p.id !== id).slice(0, limit);
};

export const getBestsellers = () => PRODUCTS.filter((p) => p.isBestseller);
