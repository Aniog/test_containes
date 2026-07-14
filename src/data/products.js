// Velmora product seed data.
// Each product carries a stable id, slugs, and rich image-query hints
// so the stock-image system can resolve editorial jewelry photography.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    nameId: "vivid-aura-jewels-title",
    descId: "vivid-aura-jewels-desc",
    imgId: "vivid-aura-jewels-img-a01",
    category: "earrings",
    material: "gold",
    price: 42,
    rating: 4.8,
    reviews: 312,
    badge: "Bestseller",
    shortDescription:
      "A whisper-light gold ear cuff with a single crystal accent. Made to stack, made to layer.",
    description:
      "Vivid Aura Jewels is our most-loved ear cuff — a delicate gold curve that traces the ear's edge, finished with a single hand-set crystal that catches the light without ever feeling loud. Wear one for a clean editorial moment, or stack across the ear for an undone-glam look.",
    materials:
      "18K gold plated over a brass core, hypoallergenic and nickel-free. Hand-set crystal accent.",
    care:
      "Store in the soft pouch provided. Avoid contact with perfume, sunscreen, and water. Wipe gently with the included polishing cloth to restore shine.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Each piece arrives in our signature ivory gift box.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    nameId: "majestic-flora-nectar-title",
    descId: "majestic-flora-nectar-desc",
    imgId: "majestic-flora-nectar-img-b02",
    category: "necklaces",
    material: "gold",
    price: 68,
    rating: 4.9,
    reviews: 184,
    badge: "New",
    shortDescription:
      "A multicolor crystal floral pendant on a fine cable chain. Romance, distilled.",
    description:
      "Inspired by heirloom lockets and old-world gardens, Majestic Flora Nectar is a finely cast floral pendant studded with multicolored crystals. Suspended on a delicate cable chain, it sits just below the collarbone — the kind of piece you'll wear on a Tuesday and a wedding.",
    materials:
      "18K gold plated brass. Multicolor hand-set crystals. Lobster clasp with extender.",
    care:
      "Remove before showering or sleeping. Keep dry and away from lotions. Polish gently with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns. Comes in our signature ivory gift box with a velvet pouch.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    nameId: "golden-sphere-huggies-title",
    descId: "golden-sphere-huggies-desc",
    imgId: "golden-sphere-huggies-img-c03",
    category: "huggies",
    material: "gold",
    price: 38,
    rating: 4.7,
    reviews: 421,
    badge: "Bestseller",
    shortDescription:
      "Chunky gold dome huggies — the everyday staple you'll never take off.",
    description:
      "A modern take on the classic huggie. Golden Sphere features a sculpted dome silhouette with a high-polish finish that catches light from every angle. Lightweight enough for daily wear, substantial enough to feel intentional.",
    materials:
      "18K gold plated brass with a high-polish finish. Hinged snap closure.",
    care:
      "Store dry. Avoid chlorine, perfume, and skincare products. Buff with a soft cloth to maintain the polish.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked.",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    nameId: "amber-lace-earrings-title",
    descId: "amber-lace-earrings-desc",
    imgId: "amber-lace-earrings-img-d04",
    category: "earrings",
    material: "gold",
    price: 54,
    rating: 4.8,
    reviews: 156,
    badge: "Limited",
    shortDescription:
      "Textured gold filigree drop earrings with vintage heirloom energy.",
    description:
      "A love letter to vintage lace. Amber Lace is hand-cast with an intricate filigree texture that catches the light like sun through cutwork. The medium drop length flatters the jaw and moves beautifully — your new occasion-piece uniform.",
    materials:
      "18K gold plated brass with a textured filigree finish. Sterling silver post.",
    care:
      "Remove before showering and sleeping. Keep dry. Store flat in the provided pouch to protect the filigree.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    nameId: "royal-heirloom-set-title",
    descId: "royal-heirloom-set-desc",
    imgId: "royal-heirloom-set-img-e05",
    category: "earrings",
    material: "gold",
    price: 95,
    rating: 5.0,
    reviews: 92,
    badge: "Gifting",
    shortDescription:
      "A gift-boxed earring and necklace set — the heirloom moment, ready to give.",
    description:
      "Our most-asked-about gifting set. Royal Heirloom pairs a delicate crystal drop earring with a matching fine chain necklace, presented together in our signature ivory gift box with a hand-tied ribbon. It's the answer to every birthday, anniversary, and 'I just want to say something' moment.",
    materials:
      "18K gold plated brass, hand-set crystals. Matching earring + necklace. Sterling silver posts.",
    care:
      "Store in the gift box between wears. Avoid water, perfume, and lotion contact. Polish with a soft cloth.",
    shipping:
      "Free worldwide shipping. Gift receipts included on request. 30-day returns.",
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (product, limit = 4) => {
  if (!product) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const sameCat = (x) => (x.category === product.category ? 0 : 1);
      return sameCat(a) - sameCat(b);
    })
    .slice(0, limit);
};

export const categories = [
  {
    id: "earrings",
    slug: "earrings",
    name: "Earrings",
    label: "Earrings",
    blurb: "Studs, drops & cuffs",
    titleId: "category-earrings-title",
    imgId: "category-earrings-img-4d2e",
  },
  {
    id: "necklaces",
    slug: "necklaces",
    name: "Necklaces",
    label: "Necklaces",
    blurb: "Pendants & chains",
    titleId: "category-necklaces-title",
    imgId: "category-necklaces-img-91a7",
  },
  {
    id: "huggies",
    slug: "huggies",
    name: "Huggies",
    label: "Huggies",
    blurb: "Everyday gold",
    titleId: "category-huggies-title",
    imgId: "category-huggies-img-3b5f",
  },
];

export const priceRanges = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "u50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80p", label: "$80 & above", min: 80, max: Infinity },
];

export const materials = [
  { id: "all", label: "All Materials" },
  { id: "gold", label: "18K Gold Plated" },
];

export const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
];

export const testimonials = [
  {
    id: 1,
    name: "Amelia R.",
    quote:
      "I bought the Golden Sphere Huggies on a whim and they have not left my ears in three months. Quietly the best jewelry purchase I've ever made.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya S.",
    quote:
      "The Royal Heirloom Set was a birthday gift for my sister. She opened it, paused, and said 'this is the most thoughtful thing anyone's ever given me'. Quality, packaging, weight — everything feels considered.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jordana K.",
    quote:
      "I've owned demi-fine from four different brands. Velmora is the only one that doesn't tarnish, doesn't turn my ears green, and doesn't feel cheap. It's my new forever brand.",
    rating: 5,
  },
];

export const reels = [
  {
    id: "reel-ear-stack",
    caption: "The everyday ear stack",
    handle: "@noor.styles",
    titleId: "reel-ear-stack-title",
    captionId: "reel-ear-stack-caption",
    imgId: "reel-ear-stack-img-7c1f",
  },
  {
    id: "reel-amber-lace",
    caption: "Amber Lace, golden hour",
    handle: "@marlow.co",
    titleId: "reel-amber-lace-title",
    captionId: "reel-amber-lace-caption",
    imgId: "reel-amber-lace-img-92aa",
  },
  {
    id: "reel-flora",
    caption: "Flora on a Sunday",
    handle: "@elena.weekday",
    titleId: "reel-flora-title",
    captionId: "reel-flora-caption",
    imgId: "reel-flora-img-4b12",
  },
  {
    id: "reel-sphere",
    caption: "Huggies, never off",
    handle: "@celeste.daily",
    titleId: "reel-sphere-title",
    captionId: "reel-sphere-caption",
    imgId: "reel-sphere-img-1a9c",
  },
  {
    id: "reel-heirloom",
    caption: "Heirloom unboxing",
    handle: "@the.gift.edit",
    titleId: "reel-heirloom-title",
    captionId: "reel-heirloom-caption",
    imgId: "reel-heirloom-img-77ee",
  },
  {
    id: "reel-aura",
    caption: "One cuff, every look",
    handle: "@studio.nine",
    titleId: "reel-aura-title",
    captionId: "reel-aura-caption",
    imgId: "reel-aura-img-3d8b",
  },
];
