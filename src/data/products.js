// Seed product catalog for Velmora Fine Jewelry.
// Imagery is rendered via the runtime stock image system using data-strk-img
// attributes on the actual <img> elements. The search query strings here
// describe the editorial mood and are intentionally warm + jewelry-specific.

export const products = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    category: "earrings",
    subcategory: "Ear Cuff",
    price: 42,
    compareAt: null,
    tone: "gold",
    material: "18K Gold Plated Brass",
    rating: 4.9,
    reviewCount: 128,
    badge: "Bestseller",
    shortDescription:
      "A single ear cuff with a hand-set crystal accent — weightless, luminous, made for everyday wear.",
    description:
      "Designed in studio, the Vivid Aura Cuff sits like a whispered detail along the helix. A single cubic zirconia is hand-set into a warm gold frame, catching the light with every turn of the head. No piercing required.",
    materials:
      "18K gold plated over hypoallergenic brass. Cubic zirconia crystal. Lead- and nickel-free. Tarnish-resistant coating.",
    care: "Remove before showering, swimming, or applying lotions. Store in the Velmora pouch. Wipe gently with the included polishing cloth.",
    images: [
      "vivid-aura-cuff-1",
      "vivid-aura-cuff-2",
      "vivid-aura-cuff-3",
    ],
    imageQueries: [
      "single gold ear cuff with small crystal on a woman, close up, warm light",
      "gold ear cuff with crystal detail on neutral linen backdrop, still life",
      "model wearing single ear cuff with crystal, soft beauty light, editorial",
    ],
  },
  {
    id: "majestic-flora-necklace",
    name: "Majestic Flora Necklace",
    category: "necklaces",
    subcategory: "Pendant",
    price: 68,
    compareAt: null,
    tone: "gold",
    material: "18K Gold Plated · Crystal",
    rating: 4.8,
    reviewCount: 96,
    badge: "New",
    shortDescription:
      "A delicate floral pendant in multicolored crystals — botanical, romantic, quietly bold.",
    description:
      "Inspired by heirloom lockets, the Majestic Flora holds a cluster of pastel crystals arranged like a small pressed bouquet. Suspended from a fine 16–18 inch cable chain, it layers beautifully or wears alone.",
    materials:
      "18K gold plated brass chain and frame. Multi-tone crystal stones. Hypoallergenic and tarnish-resistant.",
    care: "Avoid contact with perfume and water. Store flat in the Velmora box. Polish gently with the included cloth.",
    images: [
      "majestic-flora-1",
      "majestic-flora-2",
      "majestic-flora-3",
    ],
    imageQueries: [
      "delicate gold floral pendant necklace with multicolor crystals, on linen",
      "close up of pastel crystal flower necklace, warm beauty light",
      "model wearing small gold floral pendant necklace, soft editorial portrait",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "earrings",
    subcategory: "Huggies",
    price: 38,
    compareAt: null,
    tone: "gold",
    material: "18K Gold Plated Sterling Silver",
    rating: 4.9,
    reviewCount: 312,
    badge: "Bestseller",
    shortDescription:
      "Chunky, polished gold dome huggies — a clean architectural staple that goes with everything.",
    description:
      "Sculptural yet soft, the Golden Sphere Huggies are an everyday signature. The dome silhouette catches light from every angle, and the secure hinged clasp keeps them comfortably in place from morning to night.",
    materials:
      "Sterling silver core plated in 18K gold. Hypoallergenic, nickel-free, tarnish-resistant.",
    care: "Sleep in them, swim in them, live in them. Wipe with the included cloth to maintain shine.",
    images: [
      "golden-sphere-1",
      "golden-sphere-2",
      "golden-sphere-3",
    ],
    imageQueries: [
      "chunky gold dome huggie hoop earrings on neutral background, still life",
      "model wearing polished gold huggie earrings, close up of ear",
      "pair of gold sphere huggie earrings on linen, soft natural light",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    subcategory: "Drop Earrings",
    price: 54,
    compareAt: null,
    tone: "gold",
    material: "18K Gold Plated Brass",
    rating: 4.7,
    reviewCount: 74,
    badge: null,
    shortDescription:
      "Textured filigree drops with the warmth of amber — a love letter to vintage lace.",
    description:
      "Hand-textured in a delicate lace pattern, the Amber Lace drops are lightweight enough for all-day wear and detailed enough to feel like a small piece of jewelry history. They sway gently with movement.",
    materials:
      "18K gold plated brass with hand-applied filigree texture. Hypoallergenic, lead- and nickel-free.",
    care: "Store in the Velmora pouch to protect the texture. Avoid contact with water and perfume.",
    images: [
      "amber-lace-1",
      "amber-lace-2",
      "amber-lace-3",
    ],
    imageQueries: [
      "textured gold filigree drop earrings, warm amber light, on linen",
      "close up of gold lace-patterned drop earrings, editorial detail",
      "model wearing gold filigree drop earrings, soft warm portrait",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    subcategory: "Gift Set",
    price: 95,
    compareAt: 120,
    tone: "gold",
    material: "18K Gold Plated · Gift Boxed",
    rating: 5.0,
    reviewCount: 58,
    badge: "Gift Edit",
    shortDescription:
      "A gift-boxed earring and necklace set — ready to give, impossible to forget.",
    description:
      "Our most-loved studs paired with a fine cable chain, presented in a keepsake Velmora box with a hand-tied ribbon. The Royal Heirloom Set is the answer to every gift occasion — birthdays, bridesmaids, the person who has everything.",
    materials:
      "18K gold plated brass and sterling silver. Hypoallergenic, lead- and nickel-free. Includes velvet pouch and signature gift box.",
    care: "Both pieces store separately in the included pouches. Polish gently with the included cloth.",
    images: [
      "royal-heirloom-1",
      "royal-heirloom-2",
      "royal-heirloom-3",
    ],
    imageQueries: [
      "gold earring and necklace gift set in an elegant cream gift box, ribbon",
      "matching gold stud earrings and fine chain necklace, flat lay on linen",
      "model wearing delicate gold stud earrings and layered necklace, soft light",
    ],
  },
];

export const categories = [
  { id: "earrings", name: "Earrings", tagline: "From huggies to drops." },
  { id: "necklaces", name: "Necklaces", tagline: "Layered, considered, quiet." },
  { id: "huggies", name: "Huggies", tagline: "The everyday signature." },
  { id: "sets", name: "Sets", tagline: "Ready to give." },
];

export const testimonials = [
  {
    name: "Amelia R.",
    location: "London",
    rating: 5,
    text: "I bought the Golden Sphere Huggies as a gift for myself and I haven't taken them off. They feel like real gold — and the weight is perfect.",
  },
  {
    name: "Priya S.",
    location: "New York",
    rating: 5,
    text: "The Royal Heirloom Set arrived in the most beautiful box. It genuinely felt like opening a present. The pieces are even prettier in person.",
  },
  {
    name: "Sofia M.",
    location: "Paris",
    rating: 5,
    text: "Velmora is the only demi-fine brand I trust not to turn my ears green. I have four pieces now and they all still look brand new.",
  },
];

export const ugcPosts = [
  {
    id: "ugc-ear-stack",
    caption: "Layered for the studio",
    handle: "@velmora.loves",
    query: "gold ear stack with huggies and cuffs on a model, vertical portrait",
  },
  {
    id: "ugc-necklace",
    caption: "The Flora, daily",
    handle: "@amelia.r",
    query: "woman wearing delicate gold floral pendant necklace, soft window light, vertical",
  },
  {
    id: "ugc-sphere",
    caption: "The everyday huggie",
    handle: "@sofia.m",
    query: "close up of woman wearing chunky gold dome huggie earrings, vertical frame",
  },
  {
    id: "ugc-gift",
    caption: "For my best friend",
    handle: "@priya.s",
    query: "gold jewelry gift set in cream box held by smiling woman, vertical",
  },
  {
    id: "ugc-lace",
    caption: "With linen, always",
    handle: "@noor.k",
    query: "woman wearing textured gold filigree drop earrings, neutral linen outfit, vertical",
  },
  {
    id: "ugc-self",
    caption: "A small ritual",
    handle: "@isla.t",
    query: "woman adjusting small gold necklace at mirror, soft morning light, vertical",
  },
];

export function findProduct(id) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(id, limit = 4) {
  const current = findProduct(id);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 0 : 1;
      const bMatch = b.category === current.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, limit);
}
