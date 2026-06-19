// Seed catalog for Velmora Fine Jewelry.
// Image placeholders use the stock-image tagging system (data-strk-img-*).
// Each product exposes stable titleId / descId so image queries can reference
// the actual rendered DOM IDs (titles + descriptions) and stay accurate.

export const CATEGORIES = [
  { slug: "earrings", label: "Earrings" },
  { slug: "necklaces", label: "Necklaces" },
  { slug: "huggies", label: "Huggies" },
];

export const MATERIALS = [
  { slug: "18k-gold-plated", label: "18K Gold Plated" },
  { slug: "sterling-silver", label: "Sterling Silver" },
  { slug: "crystal", label: "Crystal" },
];

export const PRODUCTS = [
  {
    id: "p-aura",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18k-gold-plated",
    price: 42,
    compareAtPrice: null,
    rating: 4.9,
    reviewCount: 184,
    badge: "Bestseller",
    image:
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1635521215608-d16bd0a26135",
    imageAlt: "Vivid Aura ear cuff on a model, warm close-up",
    image2:
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1630041263830-6e1047497ebb",
    gallery: [
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1635521215608-d16bd0a26135",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1630041263830-6e1047497ebb",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1654947624929-5c25e3c3484d",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1655386663061-668e05f85700",
    ],
    shortDescription:
      "A whisper of light. Delicate gold ear cuff traced with a single crystal accent.",
    description:
      "The Vivid Aura ear cuff is sculpted to catch every angle of light — a slender gold band that curves along the ear, finished with a single faceted crystal at its peak. Wear it solo, or pair it with our huggies for a quiet stack that reads as one piece.",
    details: [
      "18K gold plated over recycled brass",
      "Surgical-steel post, hypoallergenic",
      "Single 3mm crystal accent, handset",
      "Lightweight — 2.4g per cuff",
    ],
    care: [
      "Remove before showering, swimming, or applying lotion",
      "Store in the velvet pouch provided",
      "Wipe gently with the included polishing cloth",
      "Avoid contact with perfume and sunscreen",
    ],
    shipping: [
      "Complimentary worldwide shipping on orders over $80",
      "Standard delivery: 4–7 business days",
      "Express delivery: 2–3 business days",
      "30-day returns, prepaid label included",
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "#B8945A" },
      { id: "silver", label: "Silver", tone: "#C8C2BA" },
    ],
  },
  {
    id: "p-flora",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "crystal",
    price: 68,
    compareAtPrice: null,
    rating: 4.8,
    reviewCount: 92,
    badge: "New",
    image:
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1617141124095-1eb475f377c4",
    imageAlt: "Majestic Flora Nectar crystal cluster on a fine chain",
    image2:
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1617259298217-a0d3a3a2500a",
    gallery: [
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1617141124095-1eb475f377c4",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1617259298217-a0d3a3a2500a",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1582110720667-6bbef800b940",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1662976442094-e2d73890d9b3",
    ],
    shortDescription:
      "A garden in bloom. Multicolor floral crystal cluster on a fine chain.",
    description:
      "Inspired by an English garden in late spring, the Flora Nectar necklace suspends a hand-set cluster of multicolored crystals shaped into delicate petals. Each stone catches light differently, so the pendant shifts softly as you move.",
    details: [
      "18K gold plated chain, 18 inch with 2 inch extender",
      "Hand-set Austrian crystals in 5 botanical tones",
      "Lobster-claw clasp with branded tag",
      "Pendant drop: 22mm",
    ],
    care: [
      "Apply lotion and perfume before putting on jewelry",
      "Remove before sleep and showering",
      "Store flat to preserve the chain finish",
      "Wipe with the included polishing cloth",
    ],
    shipping: [
      "Complimentary worldwide shipping on orders over $80",
      "Standard delivery: 4–7 business days",
      "Express delivery: 2–3 business days",
      "30-day returns, prepaid label included",
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "#B8945A" },
    ],
  },
  {
    id: "p-sphere",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18k-gold-plated",
    price: 38,
    compareAtPrice: null,
    rating: 4.9,
    reviewCount: 312,
    badge: "Bestseller",
    image:
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1618480012026-208534c3ce00",
    imageAlt: "Golden Sphere Huggies on a model, polished gold dome close-up",
    image2:
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1664439035767-2badad14724f",
    gallery: [
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1618480012026-208534c3ce00",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1664439035767-2badad14724f",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1618800483241-af5dbc1c336b",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1677107293452-09e3e64df602",
    ],
    shortDescription:
      "A polished dome. Chunky gold huggies that hug the lobe just right.",
    description:
      "An everyday hero. The Golden Sphere huggies are sculpted as a smooth, polished dome that sits close to the ear — substantial enough to feel intentional, light enough to forget you're wearing them.",
    details: [
      "18K gold plated over recycled brass",
      "Hinged click closure, secure and comfortable",
      "Inner diameter: 9mm, 4mm thick",
      "Sold as a pair",
    ],
    care: [
      "Remove before showering or swimming",
      "Store in the velvet pouch provided",
      "Wipe gently with the included polishing cloth",
      "Avoid contact with perfume",
    ],
    shipping: [
      "Complimentary worldwide shipping on orders over $80",
      "Standard delivery: 4–7 business days",
      "Express delivery: 2–3 business days",
      "30-day returns, prepaid label included",
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "#B8945A" },
      { id: "silver", label: "Silver", tone: "#C8C2BA" },
    ],
  },
  {
    id: "p-amber",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18k-gold-plated",
    price: 54,
    compareAtPrice: null,
    rating: 4.7,
    reviewCount: 67,
    badge: null,
    image:
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1654675891805-a2b6337ef37b",
    imageAlt: "Amber Lace filigree drop earrings on a model",
    image2:
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1599557852694-a062d6976bde",
    gallery: [
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1654675891805-a2b6337ef37b",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1599557852694-a062d6976bde",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1667500634417-6a75e512a54f",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1582966149601-f812a41688d1",
    ],
    shortDescription:
      "Textured gold filigree. Statement drops with heirloom detail.",
    description:
      "The Amber Lace earrings draw from vintage filigree — openwork gold in a soft drop silhouette, finished with a single warm amber-toned crystal at the base. They catch the light from every direction and feel as light as air.",
    details: [
      "18K gold plated brass filigree, 38mm drop",
      "Hand-set amber-toned crystal at base",
      "Hypoallergenic lever-back closure",
      "Sold as a pair",
    ],
    care: [
      "Remove before showering or sleeping",
      "Store upright in the velvet pouch provided",
      "Wipe gently with the included polishing cloth",
      "Avoid contact with lotion and perfume",
    ],
    shipping: [
      "Complimentary worldwide shipping on orders over $80",
      "Standard delivery: 4–7 business days",
      "Express delivery: 2–3 business days",
      "30-day returns, prepaid label included",
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "#B8945A" },
    ],
  },
  {
    id: "p-heirloom",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    material: "18k-gold-plated",
    price: 95,
    compareAtPrice: 120,
    rating: 5.0,
    reviewCount: 41,
    badge: "Limited",
    image:
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1582966149601-f812a41688d1",
    imageAlt: "Royal Heirloom Set, gift-boxed earrings and necklace on a model",
    image2:
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1618329358254-7dfebdba0686",
    gallery: [
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1582966149601-f812a41688d1",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1618329358254-7dfebdba0686",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1617696774460-b1b9becb2961",
      "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1660572248312-42af13fd94f8",
    ],
    shortDescription:
      "A duo, gift-boxed. Earring and necklace set designed to be treasured.",
    description:
      "The Royal Heirloom Set pairs our most-loved earring silhouette with a delicate chain necklace, gift-boxed in our signature cream and gold packaging. Made to be gifted — or kept.",
    details: [
      "18K gold plated brass throughout",
      "Includes earrings + 16 inch necklace",
      "Hypoallergenic posts and clasp",
      "Comes in signature cream gift box",
    ],
    care: [
      "Remove before showering or sleeping",
      "Store in the original gift box",
      "Wipe gently with the included polishing cloth",
      "Avoid contact with lotion and perfume",
    ],
    shipping: [
      "Complimentary worldwide shipping on orders over $80",
      "Standard delivery: 4–7 business days",
      "Express delivery: 2–3 business days",
      "30-day returns, prepaid label included",
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "#B8945A" },
    ],
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(product, limit = 4) {
  return PRODUCTS.filter((p) => p.id !== product?.id)
    .sort((a, b) => {
      const aSame = a.category === product?.category ? 0 : 1;
      const bSame = b.category === product?.category ? 0 : 1;
      return aSame - bSame;
    })
    .slice(0, limit);
}

export function getBestsellers(limit = 5) {
  return [...PRODUCTS]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, limit);
}