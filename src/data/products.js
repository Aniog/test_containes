export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "gold",
    rating: 4.8,
    reviewCount: 124,
    description: "A sculptural gold ear cuff with a single luminous crystal accent. Designed to sit comfortably along the ear without piercing, it catches candlelight beautifully and layers effortlessly with studs and huggies.",
    materials: "18k gold-plated brass with a hypoallergenic titanium post. Nickel-free and water-resistant for everyday wear.",
    care: "Store in a dry pouch. Avoid direct contact with perfume, lotions, and household cleaners. Wipe gently with a soft cloth after wear.",
    images: {
      primary: "gold ear cuff crystal model ear",
      secondary: "gold ear cuff crystal detail",
      gallery: [
        "gold ear cuff worn on ear",
        "gold ear cuff packaging gift box",
        "gold ear cuff layered styling",
      ],
    },
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "gold",
    rating: 4.9,
    reviewCount: 89,
    description: "A delicate pendant necklace featuring a bouquet of multicolor floral crystals set in warm gold. The adjustable chain lets you wear it close to the collarbone or layered over a silk blouse.",
    materials: "18k gold-plated brass chain with handset glass crystals. Lead-free and nickel-free.",
    care: "Lay flat to store. Remove before swimming or showering. Polish with a jewelry cloth to maintain brilliance.",
    images: {
      primary: "multicolor floral crystal necklace gold",
      secondary: "floral crystal necklace detail petals",
      gallery: [
        "floral crystal necklace on model neck",
        "floral crystal necklace layering",
        "floral crystal necklace gift box",
      ],
    },
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "gold",
    rating: 4.7,
    reviewCount: 215,
    description: "Chunky dome huggies with a polished golden finish. Lightweight enough for all-day wear, bold enough to become your signature pair.",
    materials: "18k gold-plated stainless steel. Hypoallergenic, tarnish-resistant, and safe for sensitive ears.",
    care: "Keep away from harsh chemicals. Store separately to avoid scratches. Clean with a soft, dry cloth.",
    images: {
      primary: "chunky gold dome huggie earrings",
      secondary: "gold dome huggies pair detail",
      gallery: [
        "gold dome huggies on ear",
        "gold dome huggies stacked",
        "gold dome huggies packaging",
      ],
    },
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    rating: 4.9,
    reviewCount: 76,
    description: "Textured filigree drops inspired by vintage lace. Each curve is cast and finished by hand for an heirloom feel that remains surprisingly light.",
    materials: "18k gold-plated brass with surgical-steel posts. Lightweight and nickel-free.",
    care: "Avoid moisture and beauty products. Store hanging or flat in a jewelry box. Buff gently to restore shine.",
    images: {
      primary: "textured gold filigree drop earrings",
      secondary: "gold filigree drop earrings detail",
      gallery: [
        "gold filigree drop earrings on model",
        "gold filigree drop earrings back detail",
        "gold filigree drop earrings gift wrap",
      ],
    },
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "gold",
    rating: 5.0,
    reviewCount: 52,
    description: "A thoughtfully gift-boxed set of coordinated earrings and necklace. Designed for celebrations, milestones, or simply making an ordinary day feel extraordinary.",
    materials: "18k gold-plated brass with handset crystals. Includes a embossed Velmora gift box and care card.",
    care: "Store pieces separately in the provided pouch. Remove before bathing or exercising. Wipe clean after each wear.",
    images: {
      primary: "gold earring necklace gift set",
      secondary: "jewelry gift set flat lay",
      gallery: [
        "gold jewelry gift set on model",
        "jewelry gift set box open",
        "gold necklace earrings pairing",
      ],
    },
  },
];

export const categories = [
  { id: "earrings", label: "Earrings", query: "gold earrings editorial jewelry" },
  { id: "necklaces", label: "Necklaces", query: "gold necklace model editorial jewelry" },
  { id: "huggies", label: "Huggies", query: "gold huggie earrings ear closeup" },
];

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit);
}

export const testimonials = [
  {
    id: 1,
    name: "Claire M.",
    text: "The kind of jewelry that makes you feel pulled together even in a white t-shirt. Beautiful packaging too.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya S.",
    text: "I bought the huggies as a gift and ended up keeping a pair for myself. Subtle, weighty, and so wearable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma T.",
    text: "Finally demi-fine jewelry that doesn't look mass-produced. The ear cuff is my everyday signature now.",
    rating: 5,
  },
];

export const ugcReels = [
  {
    id: "reel-1",
    caption: "Morning light, golden layers",
    query: "gold huggie earrings ear closeup natural light",
  },
  {
    id: "reel-2",
    caption: "A little sparkle for Tuesday",
    query: "gold necklace pendant neck closeup editorial",
  },
  {
    id: "reel-3",
    caption: "Ear stack of the day",
    query: "gold ear cuff stacked earrings editorial",
  },
  {
    id: "reel-4",
    caption: "Gifted myself flowers",
    query: "floral crystal gold necklace model portrait",
  },
  {
    id: "reel-5",
    caption: "Quiet luxury, loud confidence",
    query: "gold drop earrings filigree woman editorial",
  },
  {
    id: "reel-6",
    caption: "The heirloom set in action",
    query: "gold jewelry set earrings necklace model",
  },
];
