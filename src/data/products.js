// Seed product catalog for Velmora Fine Jewelry.
// Imagery is provided via the runtime stock-image system. The string-IDs are
// globally unique and the image queries reference the product name and the
// page section text. Swap the stock image search with real product photos in
// production without changing the rest of the component tree.

export const products = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    category: "earrings",
    material: "18K Gold Plated",
    price: 42,
    rating: 4.9,
    reviews: 128,
    badge: "New",
    description:
      "A single, sculptural ear cuff traced with a single crystal point of light. Designed to be worn on its own for an asymmetric statement or stacked with your everyday studs.",
    details: [
      "18K gold-plated brass, hypoallergenic",
      "Sculptural crescent silhouette, no piercing required",
      "Hand-set crystal accent with a warm pavé glow",
      "Lightweight, balanced for all-day wear",
    ],
    care: [
      "Avoid contact with water, perfume, and lotion",
      "Store in the velvet pouch provided",
      "Wipe gently with the included polishing cloth",
    ],
    variants: [
      { id: "gold", label: "Gold", swatch: "#C7A878" },
      { id: "silver", label: "Silver", swatch: "#D7D2C9" },
    ],
  },
  {
    id: "majestic-flora-necklace",
    name: "Majestic Flora Necklace",
    category: "necklaces",
    material: "18K Gold Plated",
    price: 68,
    rating: 4.8,
    reviews: 96,
    badge: "Bestseller",
    description:
      "A botanical cluster of multicolor crystals on a whisper-fine chain. Each petal is hand-set, catching the light like a small, wearable garden.",
    details: [
      "18K gold-plated brass chain, 16\" with 2\" extender",
      "Hand-set crystals in champagne, blush and peridot tones",
      "Lobster clasp with our signature teardrop tag",
      "Comes in our signature gift box",
    ],
    care: [
      "Remove before showering or sleeping",
      "Store flat to keep the chain fluid",
      "Polish gently with a soft, dry cloth",
    ],
    variants: [
      { id: "gold", label: "Gold", swatch: "#C7A878" },
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18K Gold Plated",
    price: 38,
    rating: 4.9,
    reviews: 214,
    badge: "Bestseller",
    description:
      "A modern take on the everyday huggie. A soft, chunky gold dome with a satin finish — substantial in the hand, weightless on the ear.",
    details: [
      "18K gold-plated brass with a brushed satin finish",
      "Hinged click-top closure, comfortable for all-day wear",
      "Sold as a pair",
      "Hypoallergenic and nickel-free",
    ],
    care: [
      "Avoid contact with perfumes and lotions",
      "Wipe with a soft cloth after wear",
      "Store in the pouch to prevent tangling",
    ],
    variants: [
      { id: "gold", label: "Gold", swatch: "#C7A878" },
      { id: "silver", label: "Silver", swatch: "#D7D2C9" },
    ],
  },
  {
    id: "amber-lace-drops",
    name: "Amber Lace Drops",
    category: "earrings",
    material: "18K Gold Plated",
    price: 54,
    rating: 4.7,
    reviews: 72,
    badge: null,
    description:
      "Textured gold filigree in the shape of an unfurling leaf. The drop catches movement, casting small, warm shadows along the jawline.",
    details: [
      "18K gold-plated brass, filigree detail",
      "Lightweight post-and-butterfly closure",
      "Approx. 1.6\" drop",
      "Hand-finished for an heirloom feel",
    ],
    care: [
      "Keep dry; remove before bathing",
      "Avoid contact with chemicals",
      "Store in the original pouch",
    ],
    variants: [
      { id: "gold", label: "Gold", swatch: "#C7A878" },
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    material: "18K Gold Plated",
    price: 95,
    rating: 5.0,
    reviews: 41,
    badge: "Gift-Ready",
    description:
      "A matching earring and necklace set, gift-boxed in our signature keepsake. Designed for the moments you want to remember.",
    details: [
      "Includes a pair of studs and a delicate chain necklace",
      "18K gold-plated brass throughout",
      "Comes in a magnetic-close gift box with ribbon",
      "Hypoallergenic, lead- and nickel-free",
    ],
    care: [
      "Remove before sleeping and showering",
      "Polish gently with the included cloth",
      "Store in the gift box to keep pieces paired",
    ],
    variants: [
      { id: "gold", label: "Gold", swatch: "#C7A878" },
    ],
  },
  {
    id: "celeste-hoops",
    name: "Celeste Hoops",
    category: "earrings",
    material: "18K Gold Plated",
    price: 48,
    rating: 4.8,
    reviews: 153,
    badge: null,
    description:
      "A sleek, mid-size hoop with a hand-hammered finish. The kind of everyday staple that quietly elevates anything you wear.",
    details: [
      "18K gold-plated brass, hand-hammered",
      "Hinged snap-post closure",
      "Approx. 1.2\" diameter",
      "Hypoallergenic",
    ],
    care: [
      "Remove before sleeping",
      "Avoid contact with lotions and perfume",
      "Wipe with a soft, dry cloth",
    ],
    variants: [
      { id: "gold", label: "Gold", swatch: "#C7A878" },
      { id: "silver", label: "Silver", swatch: "#D7D2C9" },
    ],
  },
  {
    id: "lumina-pendant",
    name: "Lumina Pendant",
    category: "necklaces",
    material: "18K Gold Plated",
    price: 58,
    rating: 4.9,
    reviews: 88,
    badge: "New",
    description:
      "A single teardrop of light suspended on a fine cable chain. Wear it layered or alone — the silhouette does the talking.",
    details: [
      "18K gold-plated brass, 18\" chain with 2\" extender",
      "Hand-set crystal in a soft champagne tone",
      "Lobster clasp closure",
    ],
    care: [
      "Remove before showering",
      "Store in the velvet pouch",
      "Polish with a soft cloth",
    ],
    variants: [
      { id: "gold", label: "Gold", swatch: "#C7A878" },
    ],
  },
  {
    id: "pearl-crest-huggies",
    name: "Pearl Crest Huggies",
    category: "huggies",
    material: "18K Gold Plated",
    price: 46,
    rating: 4.7,
    reviews: 64,
    badge: null,
    description:
      "A freshwater pearl nestled into the curve of a chunky gold huggie. Refined, romantic, and made for the everyday.",
    details: [
      "18K gold-plated brass with a freshwater pearl",
      "Hinged click-top closure",
      "Hypoallergenic and nickel-free",
    ],
    care: [
      "Avoid water and perfume contact",
      "Wipe with a soft, dry cloth after wear",
      "Store flat in the original pouch",
    ],
    variants: [
      { id: "gold", label: "Gold", swatch: "#C7A878" },
    ],
  },
];

export const productById = (id) => products.find((p) => p.id === id);

export const relatedFor = (product, limit = 4) => {
  if (!product) return [];
  return products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const aMatch = a.category === product.category ? 0 : 1;
      const bMatch = b.category === product.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, limit);
};

// UGC reel captions for the homepage strip.
export const reelCards = [
  {
    id: "reel-1",
    handle: "@maren.k",
    caption: "Golden Sphere Huggies, every day.",
    productId: "golden-sphere-huggies",
  },
  {
    id: "reel-2",
    handle: "@elise.w",
    caption: "Layered with Lumina.",
    productId: "lumina-pendant",
  },
  {
    id: "reel-3",
    handle: "@noor.a",
    caption: "Vivid Aura, single ear.",
    productId: "vivid-aura-cuff",
  },
  {
    id: "reel-4",
    handle: "@rosa.m",
    caption: "Majestic Flora, the garden party edit.",
    productId: "majestic-flora-necklace",
  },
  {
    id: "reel-5",
    handle: "@hana.j",
    caption: "Royal Heirloom, gifted.",
    productId: "royal-heirloom-set",
  },
  {
    id: "reel-6",
    handle: "@cleo.b",
    caption: "Pearl Crest, my new everyday.",
    productId: "pearl-crest-huggies",
  },
];

// Customer reviews for the testimonial section.
export const testimonials = [
  {
    id: "t1",
    name: "Amelia R.",
    rating: 5,
    text: "The Golden Sphere Huggies are the most-worn piece in my collection. They feel like real gold — at this price, I'm still in disbelief.",
  },
  {
    id: "t2",
    name: "Priya S.",
    rating: 5,
    text: "I bought the Royal Heirloom set for my sister's birthday. The packaging alone made her tear up. The pieces are even more beautiful in person.",
  },
  {
    id: "t3",
    name: "Jordyn M.",
    rating: 5,
    text: "Quietly the best demi-fine I've found. It looks like fine jewelry, the finishes are thoughtful, and I get compliments every time I wear it.",
  },
];

// Categories used in the homepage tile row and shop filters.
export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

// Sort options used by the shop page.
export const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "newest", label: "Newest" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

// Material filter values.
export const materials = [
  { id: "18K Gold Plated", label: "18K Gold Plated" },
  { id: "Sterling Silver", label: "Sterling Silver" },
];

// Price buckets for the shop filter.
export const priceBuckets = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", label: "Over $80", min: 80, max: 9999 },
];
