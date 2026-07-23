// Seed product catalog for Velmora Fine Jewelry.
// All product names are uppercase & wide-tracked at render-time via .product-name.
// Image references use the data-strk-img runtime (query built from nearby text IDs).

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
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
    material: ["18k-gold", "crystal"],
    price: 42,
    rating: 4.8,
    reviewCount: 312,
    shortDescription:
      "An ear cuff that catches the light like a small constellation. Sculpted to sit just so, with a single crystal accent.",
    toneOptions: [
      { id: "gold", label: "Gold", swatch: "#B68A4E" },
      { id: "silver", label: "Silver", swatch: "#C9C5BE" },
    ],
    description:
      "Hand-finished ear cuff, cast in 18K gold-plated brass with a single hand-set crystal accent. Designed to sit on the ear without piercing, the curved silhouette follows the natural line of the lobe. Wear one, or layer two for an editorial finish.",
    materials:
      "18K gold-plated brass, lead-free and nickel-free. Hand-set Swarovski-style crystal accent. Hypoallergenic titanium post backing on the optional pierced pair.",
    care: "Avoid water, perfume, and lotion. Store in the included velvet pouch. Gently polish with the suede cloth provided to maintain the finish.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Most orders ship within 1–2 business days from our studio.",
    images: [
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: ["18k-gold", "crystal"],
    price: 68,
    rating: 4.9,
    reviewCount: 487,
    shortDescription:
      "A multicolor floral crystal cluster that moves with the body — like pressed petals worn at the throat.",
    toneOptions: [
      { id: "gold", label: "Gold", swatch: "#B68A4E" },
    ],
    description:
      "A delicate cluster of hand-set crystals in soft champagne, blush, and amber, suspended from a fine 18K gold-plated chain. The pendant rests just below the collarbone, catching light from every angle.",
    materials:
      "18K gold-plated brass chain, lead-free and nickel-free. Hand-set crystals in three soft tones. Adjustable 16–18 inch length.",
    care: "Remove before showering, sleeping, and exercising. Store flat in the original pouch. Polish gently with a soft, dry cloth.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Most orders ship within 1–2 business days from our studio.",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: ["18k-gold"],
    price: 38,
    rating: 4.7,
    reviewCount: 1024,
    shortDescription:
      "A chunky dome huggie in warm 18K gold. The everyday piece you'll forget you're wearing — until someone asks.",
    toneOptions: [
      { id: "gold", label: "Gold", swatch: "#B68A4E" },
      { id: "silver", label: "Silver", swatch: "#C9C5BE" },
    ],
    description:
      "A statement huggie cast in solid-feeling 18K gold-plated brass. The dome catches light in a single, quiet curve. Hinged for easy on, easy off — the kind of piece you sleep in.",
    materials:
      "18K gold-plated brass, lead-free and nickel-free. Hypoallergenic titanium post. Hinged closure.",
    care: "Water-resistant, but we recommend removing before showering for longevity. Wipe with the suede cloth provided.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Most orders ship within 1–2 business days from our studio.",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: ["18k-gold"],
    price: 54,
    rating: 4.85,
    reviewCount: 256,
    shortDescription:
      "Filigree drop earrings, light as breath. Inspired by heirloom lace, cast in warm 18K gold.",
    toneOptions: [
      { id: "gold", label: "Gold", swatch: "#B68A4E" },
    ],
    description:
      "Hand-cast filigree drops inspired by Victorian heirloom lace. Each earring is light enough for all-day wear and detailed enough to be the only thing you put on.",
    materials:
      "18K gold-plated brass, lead-free and nickel-free. Hypoallergenic titanium post. Approximately 1.4 inches in length.",
    care: "Avoid water, perfume, and lotion. Store in the included pouch to prevent tangling. Polish gently with a soft, dry cloth.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Most orders ship within 1–2 business days from our studio.",
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    material: ["18k-gold", "crystal"],
    price: 95,
    rating: 5.0,
    reviewCount: 178,
    shortDescription:
      "A gift-boxed earring and necklace set, ready to give. The set she'll keep on her dresser forever.",
    toneOptions: [
      { id: "gold", label: "Gold", swatch: "#B68A4E" },
    ],
    description:
      "The Royal Heirloom Set pairs our signature drop earrings with a matching pendant necklace — the same warm gold tone, the same hand-set crystal accent. Packaged in a keepsake velvet box with a hand-tied ribbon. The set is ready to gift, no wrapping required.",
    materials:
      "18K gold-plated brass, lead-free and nickel-free. Hand-set crystals. Hypoallergenic titanium posts. Adjustable chain 16–18 inches.",
    care: "Remove before showering, sleeping, and exercising. Store in the included velvet box. Polish gently with the suede cloth provided.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Most orders ship within 1–2 business days from our studio.",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

// Stable image IDs used in data-strk-img-id (must be application-wide unique).
// Mapped to query strings built from sibling text element IDs.
export const PRODUCT_IMAGE_IDS = {
  "vivid-aura-jewels": {
    primary: "img-vivid-aura-primary-7f3a2c",
    hover: "img-vivid-aura-hover-8b1e44",
    primaryQuery: "[product-vivid-aura-jewels-short] [product-vivid-aura-jewels-name]",
    hoverQuery: "[product-vivid-aura-jewels-name] gold ear cuff crystal",
  },
  "majestic-flora-nectar": {
    primary: "img-majestic-flora-primary-9d4c1a",
    hover: "img-majestic-flora-hover-2e7f5b",
    primaryQuery: "[product-majestic-flora-nectar-short] [product-majestic-flora-nectar-name]",
    hoverQuery: "[product-majestic-flora-nectar-name] floral crystal necklace",
  },
  "golden-sphere-huggies": {
    primary: "img-golden-sphere-primary-3a8e2f",
    hover: "img-golden-sphere-hover-5b9c7d",
    primaryQuery: "[product-golden-sphere-huggies-short] [product-golden-sphere-huggies-name]",
    hoverQuery: "[product-golden-sphere-huggies-name] chunky gold dome huggie",
  },
  "amber-lace-earrings": {
    primary: "img-amber-lace-primary-6c1d8e",
    hover: "img-amber-lace-hover-4f2a9b",
    primaryQuery: "[product-amber-lace-earrings-short] [product-amber-lace-earrings-name]",
    hoverQuery: "[product-amber-lace-earrings-name] filigree drop earring gold",
  },
  "royal-heirloom-set": {
    primary: "img-royal-heirloom-primary-8e4b2c",
    hover: "img-royal-heirloom-hover-1a6d3f",
    primaryQuery: "[product-royal-heirloom-set-short] [product-royal-heirloom-set-name]",
    hoverQuery: "[product-royal-heirloom-set-name] gift set earrings necklace",
  },
};

export const TESTIMONIALS = [
  {
    name: "Amelia R.",
    rating: 5,
    text: "I bought the Golden Sphere Huggies as a gift for my sister. The box, the weight, the gold — it feels like something three times the price. She's worn them every single day since.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "The Majestic Flora necklace is the only piece I reach for when I don't know what to wear. It dresses up a t-shirt and it dresses up a wedding.",
  },
  {
    name: "Camille D.",
    rating: 5,
    text: "I've been burned by gold-plated jewelry that turned my ears green within a week. Velmora hasn't. Six months in, the Vivid Aura cuff still looks like the day it arrived.",
  },
];

export const CATEGORY_TILES = [
  {
    id: "earrings",
    label: "Earrings",
    imageId: "tile-earrings-3b1a72",
    imageQuery: "[category-tile-label-earrings] [homepage-section-title] gold earrings model editorial",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    imageId: "tile-necklaces-4c9d31",
    imageQuery: "[category-tile-label-necklaces] [homepage-section-title] gold necklace model editorial",
  },
  {
    id: "huggies",
    label: "Huggies",
    imageId: "tile-huggies-7e2b08",
    imageQuery: "[category-tile-label-huggies] [homepage-section-title] gold huggie earrings model editorial",
  },
];

export const UGC_REELS = [
  {
    id: "reel-1",
    caption: "Stacked hugs for the everyday",
    imageId: "ugc-reel-1-2a8c4f",
    query: "[ugc-caption-reel-1] gold huggie earrings on ear editorial",
  },
  {
    id: "reel-2",
    caption: "Flora, between sips",
    imageId: "ugc-reel-2-9e3b7d",
    query: "[ugc-caption-reel-2] floral crystal necklace on model editorial warm",
  },
  {
    id: "reel-3",
    caption: "Morning light, one cuff",
    imageId: "ugc-reel-3-5c1a82",
    query: "[ugc-caption-reel-3] gold ear cuff editorial morning light",
  },
  {
    id: "reel-4",
    caption: "Heirloom, unwrapped",
    imageId: "ugc-reel-4-7f4d2e",
    query: "[ugc-caption-reel-4] gold jewelry gift set editorial velvet box",
  },
  {
    id: "reel-5",
    caption: "Amber, by the window",
    imageId: "ugc-reel-5-1b8c3a",
    query: "[ugc-caption-reel-5] filigree drop earrings on model editorial",
  },
  {
    id: "reel-6",
    caption: "The everyday edit",
    imageId: "ugc-reel-6-6d9e1c",
    query: "[ugc-caption-reel-6] gold jewelry stack editorial portrait",
  },
  {
    id: "reel-7",
    caption: "Quiet gold, loud mood",
    imageId: "ugc-reel-7-4a7b5f",
    query: "[ugc-caption-reel-7] gold necklace model editorial portrait warm light",
  },
  {
    id: "reel-8",
    caption: "Sunday stack",
    imageId: "ugc-reel-8-8c2d6e",
    query: "[ugc-caption-reel-8] gold earrings on model weekend casual editorial",
  },
];
