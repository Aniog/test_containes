// Seed product data for Velmora Fine Jewelry.
// Each product uses inline SVG illustrations rendered as the visual
// (the "elegant placeholder" approach described in the brief).
// To swap in real photography, replace the `illustration` field on each
// product with an <img src=...> or pass `images: [{ src, alt }]` to the
// <ProductCard> / <ProductGallery> components.

export const CATEGORIES = [
  { slug: "earrings", label: "Earrings" },
  { slug: "necklaces", label: "Necklaces" },
  { slug: "huggies", label: "Huggies" },
  { slug: "sets", label: "Sets" },
];

export const MATERIALS = [
  { slug: "18k-gold", label: "18K Gold Plated" },
  { slug: "sterling-silver", label: "Sterling Silver" },
];

// Curated Unsplash image URLs (real photos for hero / editorial / UGC strip).
// These are stable image IDs and load directly from images.unsplash.com.
const PHOTO = {
  // Hero: warm-lit editorial close-up of model with gold jewelry
  heroMain: "https://images.unsplash.com/photo-1610214354095-684029c14300?auto=format&fit=crop&w=1600&q=80",
  heroAlt: "https://images.unsplash.com/photo-1722410180687-b05b50922362?auto=format&fit=crop&w=1200&q=80",
  // UGC reel (8 vertical lifestyle / model shots)
  ugc1: "https://images.unsplash.com/photo-1610214354095-684029c14300?auto=format&fit=crop&w=600&h=1066&q=80",
  ugc2: "https://images.unsplash.com/photo-1722410180651-efd51636f260?auto=format&fit=crop&w=600&h=1066&q=80",
  ugc3: "https://images.unsplash.com/photo-1688382654723-a7366006519b?auto=format&fit=crop&w=600&h=1066&q=80",
  ugc4: "https://images.unsplash.com/photo-1722410180687-b05b50922362?auto=format&fit=crop&w=600&h=1066&q=80",
  ugc5: "https://images.unsplash.com/photo-1688382654723-a7366006519b?auto=format&fit=crop&w=600&h=1066&q=80",
  ugc6: "https://images.unsplash.com/photo-1722410180687-b05b50922362?auto=format&fit=crop&w=600&h=1066&q=80",
  ugc7: "https://images.unsplash.com/photo-1610214354095-684029c14300?auto=format&fit=crop&w=600&h=1066&q=80",
  ugc8: "https://images.unsplash.com/photo-1722410180651-efd51636f260?auto=format&fit=crop&w=600&h=1066&q=80",
  // Story
  story: "https://images.unsplash.com/photo-1610214354095-684029c14300?auto=format&fit=crop&w=1200&q=80",
};

export const heroPhoto = PHOTO.heroMain;

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    eyebrow: "Ear Cuff · Crystal",
    price: 42,
    category: "earrings",
    material: "18k-gold",
    rating: 4.8,
    reviewCount: 312,
    shortDescription:
      "A sculpted gold ear cuff set with a single hand-set crystal. Worn alone, stacked, or as a subtle statement.",
    illustration: "earCuff",
    illustrationAlt: "Gold ear cuff with crystal accent",
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    description:
      "Sculpted in our atelier, the Vivid Aura ear cuff wraps the ear with a soft, hand-formed curve. A single faceted crystal is set by hand to catch the light without overpowering the silhouette. Hypoallergenic, water-resistant, and crafted to be worn every day.",
    materials:
      "18K gold-plated brass core, hand-set crystal. Lead-free, nickel-free, hypoallergenic. Designed to last with mindful wear — avoid lotions and perfumes directly on the metal.",
    shipping:
      "Free worldwide shipping on orders over $80. Standard delivery 3–7 business days. 30-day returns on unworn pieces in original packaging.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    eyebrow: "Necklace · Floral Crystal",
    price: 68,
    category: "necklaces",
    material: "18k-gold",
    rating: 4.9,
    reviewCount: 198,
    shortDescription:
      "A delicate chain strung with a hand-arranged cluster of multicolor floral crystals. Romantic, lightweight, made to be layered.",
    illustration: "floralNecklace",
    illustrationAlt: "Multicolor floral crystal necklace",
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    description:
      "Inspired by old-world botanical drawings, each floral petal is hand-set in a soft multicolor gradient — emerald, blush, citrine, and a soft sapphire. A whisper of romance for day, a quiet sparkle for evening.",
    materials:
      "18K gold-plated brass chain, hand-set glass crystals. Adjustable 16–18 inch length. Hypoallergenic, lead-free, nickel-free.",
    shipping:
      "Free worldwide shipping on orders over $80. Standard delivery 3–7 business days. 30-day returns on unworn pieces in original packaging.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    eyebrow: "Huggies · Dome",
    price: 38,
    category: "huggies",
    material: "18k-gold",
    rating: 4.7,
    reviewCount: 421,
    shortDescription:
      "Chunky gold dome huggies with a satisfying weight. The everyday staple, refined.",
    illustration: "sphereHuggies",
    illustrationAlt: "Chunky gold dome huggie earrings",
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    description:
      "Sculpted with a soft dome profile, the Golden Sphere huggies sit close to the lobe for a clean, considered silhouette. Substantial without weighty, secure without effort.",
    materials:
      "18K gold-plated brass with a hinged snap closure. Hypoallergenic, lead-free, nickel-free. Water-resistant for everyday wear.",
    shipping:
      "Free worldwide shipping on orders over $80. Standard delivery 3–7 business days. 30-day returns on unworn pieces in original packaging.",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    eyebrow: "Earrings · Filigree Drop",
    price: 54,
    category: "earrings",
    material: "18k-gold",
    rating: 4.8,
    reviewCount: 156,
    shortDescription:
      "Textured gold filigree drop earrings with the warmth of a setting sun. Light on the ear, generous on detail.",
    illustration: "filigreeDrop",
    illustrationAlt: "Textured gold filigree drop earrings",
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    description:
      "Hand-finished in a lace-like filigree, the Amber Lace drop moves with the wearer — never stiff, always considered. Pair them up or wear them with a single ear cuff for an editorial finish.",
    materials:
      "18K gold-plated brass, filigree hand-finishing. Hypoallergenic, lead-free, nickel-free.",
    shipping:
      "Free worldwide shipping on orders over $80. Standard delivery 3–7 business days. 30-day returns on unworn pieces in original packaging.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    eyebrow: "Set · Earring + Necklace",
    price: 95,
    category: "sets",
    material: "18k-gold",
    rating: 5.0,
    reviewCount: 89,
    shortDescription:
      "A matching earring and necklace set, gift-boxed in our signature cream paper. For the moment that matters.",
    illustration: "heirloomSet",
    illustrationAlt: "Gift-boxed earring and necklace set",
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    description:
      "The Royal Heirloom is the set you'll reach for when the moment asks for a little more. A delicate pendant and matching drop earring, finished to feel quietly opulent — and presented in our signature cream keepsake box.",
    materials:
      "18K gold-plated brass, hand-set glass stones. Hypoallergenic, lead-free, nickel-free. Includes cream gift box and care card.",
    shipping:
      "Complimentary gift wrapping. Free worldwide shipping on orders over $80. Standard delivery 3–7 business days. 30-day returns on unworn pieces in original packaging.",
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
export const getProductsByCategory = (slug) =>
  products.filter((p) => p.category === slug);
export const getRelatedProducts = (id, limit = 4) => {
  const current = getProductById(id);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      if (a.category === current.category && b.category !== current.category) return -1;
      if (a.category !== current.category && b.category === current.category) return 1;
      return 0;
    })
    .slice(0, limit);
};

export { PHOTO };
