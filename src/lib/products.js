// Seed product data for Velmora Fine Jewelry.
// Imagery is delivered by the StrkImg system; these search queries
// shape what gets pulled from the stock image API at runtime.

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
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviews: 142,
    tone: "Gold",
    material: "18k-gold",
    shortDescription:
      "An ear cuff with a single crystal accent — quiet sparkle, sculptural line.",
    description:
      "A modern heirloom in the making. The Vivid Aura ear cuff traces the curve of the ear with a hand-finished gold line, set with a single faceted crystal that catches light without shouting. Designed to wear solo or stacked with the rest of the Velmora edit.",
    materials:
      "18K gold-plated brass, hypoallergenic and nickel-free. Set with a lab-grown crystal. Tarnish-resistant coating; safe for sensitive ears.",
    care: "Store in the suede pouch provided. Avoid contact with perfume, lotion, and chlorinated water. Wipe gently with the included polishing cloth to maintain the brushed finish.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging. Carbon-neutral delivery.",
    query:
      "minimalist gold ear cuff crystal accent on warm dark background editorial jewelry photography",
    alt: "Gold ear cuff with crystal accent on a warm neutral background",
    gallery: [
      "minimalist gold ear cuff crystal accent close up editorial jewelry photography",
      "gold ear cuff with crystal worn on model ear warm light editorial",
      "gold ear cuff crystal detail macro shot on linen",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 218,
    tone: "Gold",
    material: "crystal",
    shortDescription:
      "A multicolor crystal cluster that reads like pressed flowers in metal.",
    description:
      "Inspired by apothecary jars of wildflower honey, the Majestic Flora necklace layers a hand-set cluster of pastel crystals along a delicate gold chain. Each stone is slightly different, each piece slightly its own.",
    materials:
      "18K gold-plated brass chain, multicolor crystal cluster pendant. Hypoallergenic, nickel-free, lead-free.",
    care: "Remove before showering or sleeping. Store flat in the suede pouch. Avoid prolonged exposure to direct sunlight to preserve crystal color.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    query:
      "delicate multicolor crystal floral pendant necklace on warm dark background editorial",
    alt: "Multicolor floral crystal pendant necklace on warm dark background",
    gallery: [
      "delicate multicolor crystal floral pendant necklace on dark background",
      "multicolor crystal cluster necklace worn by model editorial warm light",
      "gold floral crystal pendant close up detail on linen",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviews: 386,
    tone: "Gold",
    material: "18k-gold",
    shortDescription:
      "A chunky dome huggie with a brushed, almost weightless finish.",
    description:
      "The Golden Sphere huggie is the everyday anchor of the Velmora edit. Chunky enough to read from across a table, light enough to forget you're wearing them. A brushed dome finish softens the silhouette into something quietly sculptural.",
    materials:
      "18K gold-plated brass with a brushed finish. Hypoallergenic, nickel-free. Hinged click-closure for a secure fit.",
    care: "Store in the suede pouch. Wipe gently with a soft cloth. Avoid contact with perfume and chlorinated water.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    query:
      "chunky gold dome huggie hoop earrings on warm dark background editorial",
    alt: "Chunky gold dome huggie earrings on warm dark background",
    gallery: [
      "chunky gold dome huggie hoop earrings close up editorial",
      "gold dome huggies worn on model ear warm light editorial portrait",
      "pair of gold huggie earrings on linen",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviews: 174,
    tone: "Gold",
    material: "18k-gold",
    shortDescription:
      "Textured gold filigree drops — lacework cast in metal.",
    description:
      "Each pair of Amber Lace earrings is cast from a hand-drawn filigree original, then finished by hand to bring out the warmth of the metal. Light on the ear, heavy with craft.",
    materials:
      "18K gold-plated brass, cast filigree. Hypoallergenic, nickel-free. Shepherd-hook closure.",
    care: "Store flat to preserve the filigree shape. Avoid contact with perfume and lotion. Polish gently with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    query:
      "textured gold filigree lace drop earrings on warm dark background editorial",
    alt: "Textured gold filigree lace drop earrings on warm dark background",
    gallery: [
      "textured gold filigree drop earrings close up editorial",
      "gold filigree lace earrings worn on model warm light editorial",
      "pair of gold lace drop earrings on linen",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    rating: 5.0,
    reviews: 96,
    tone: "Gold",
    material: "18k-gold",
    shortDescription:
      "A gift-boxed earring and necklace set — the most-asked-for gift of the season.",
    description:
      "The Royal Heirloom Set pairs a delicate chain necklace with a matching pair of huggies, presented in a keepsake box tied with a velvet ribbon. A modern heirloom, ready to give.",
    materials:
      "18K gold-plated brass, hypoallergenic and nickel-free. Includes a velvet-lined gift box and suede pouch.",
    care: "Store in the gift box when not worn. Avoid contact with perfume, lotion, and chlorinated water. Polish gently with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging. Gift notes available at checkout.",
    query:
      "gold jewelry gift set necklace and earrings in velvet box editorial",
    alt: "Gold jewelry gift set with necklace and earrings in velvet box",
    gallery: [
      "gold jewelry gift set necklace and earrings in velvet box close up",
      "gold necklace and earring set in gift box on linen",
      "gold jewelry gift set worn by model editorial warm light",
    ],
  },
];

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id);

export const getRelatedProducts = (id, n = 4) => {
  const current = getProductById(id);
  if (!current) return PRODUCTS.slice(0, n);
  return PRODUCTS.filter((p) => p.id !== id).slice(0, n);
};
