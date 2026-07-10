// Seed product catalog for Velmora.
// Images are elegant inline SVG placeholders that mimic editorial
// still-life photography of gold jewelry on warm dark/neutral backgrounds.

import { productSVG } from "./placeholders.js";

const p = (id, name, price, category, opts = {}) => ({
  id,
  name,
  price,
  category, // 'earrings' | 'necklaces' | 'huggies' | 'sets'
  tone: opts.tone || "gold",
  rating: opts.rating || 4.8,
  reviews: opts.reviews || 24,
  badge: opts.badge || null, // 'Bestseller' | 'New' | 'Limited'
  short: opts.short || "",
  description: opts.description || "",
  materials: opts.materials || "",
  shipping: opts.shipping || "",
  art: opts.art || "cuff",
});

export const products = [
  p(
    "vivid-aura-cuff",
    "Vivid Aura Cuff",
    42,
    "earrings",
    {
      tone: "gold",
      badge: "Bestseller",
      rating: 4.9,
      reviews: 142,
      art: "cuff",
      short: "A single statement ear cuff, kissed with a single-cut crystal.",
      description:
        "A whisper of light that catches the eye without demanding it. The Vivid Aura Cuff is shaped to hug the upper ear and finished with a hand-set crystal for a flash of warmth in low light.",
      materials:
        "18K gold-plated brass. Lead-, nickel-, and cadmium-free. Hypoallergenic. Avoid water, perfume, and lotion to extend the life of the plating.",
      shipping:
        "Free worldwide shipping on orders over $75. 30-day returns, unworn condition, original packaging.",
    }
  ),
  p(
    "majestic-flora-necklace",
    "Majestic Flora Nectar",
    68,
    "necklaces",
    {
      tone: "gold",
      badge: "New",
      rating: 4.8,
      reviews: 86,
      art: "flora",
      short: "A delicate cluster of multicolor crystal blooms on a fine cable chain.",
      description:
        "Inspired by an English garden in late July. Hand-arranged crystals in champagne, blush, and peridot green cluster into a small pendant that sits just below the collarbone.",
      materials:
        "18K gold-plated brass chain. Crystals are lead-free and ethically sourced. Hypoallergenic.",
      shipping:
        "Free worldwide shipping on orders over $75. 30-day returns, unworn condition.",
    }
  ),
  p(
    "golden-sphere-huggies",
    "Golden Sphere Huggies",
    38,
    "huggies",
    {
      tone: "gold",
      badge: "Bestseller",
      rating: 4.9,
      reviews: 218,
      art: "huggie",
      short: "A chunky dome huggie in solid-feel 18K gold plating. The everyday essential.",
      description:
        "The pair you'll forget you're wearing — until someone stops you to ask. A polished dome silhouette with a secure hinged closure, built to live in your ear stack.",
      materials:
        "18K gold-plated brass with a thick e-coating for daily wear. Hypoallergenic and tarnish-resistant.",
      shipping:
        "Free worldwide shipping on orders over $75. 30-day returns, unworn condition.",
    }
  ),
  p(
    "amber-lace-earrings",
    "Amber Lace Earrings",
    54,
    "earrings",
    {
      tone: "gold",
      rating: 4.7,
      reviews: 64,
      art: "lace",
      short: "Textured gold filigree drops, inspired by antique lace.",
      description:
        "Cast from a vintage lace motif, each pair is hand-finished to keep the soft, imperfect texture of the original. They move like fabric in low light.",
      materials:
        "18K gold-plated brass with an antiqued finish. Hypoallergenic.",
      shipping:
        "Free worldwide shipping on orders over $75. 30-day returns, unworn condition.",
    }
  ),
  p(
    "royal-heirloom-set",
    "Royal Heirloom Set",
    95,
    "sets",
    {
      tone: "gold",
      badge: "Limited",
      rating: 5.0,
      reviews: 31,
      art: "set",
      short: "A gift-boxed earring and necklace set in warm 18K gold plating.",
      description:
        "Our most-loved huggies paired with a fine cable chain — wrapped in a keepsake linen box with a velvet pouch. Made to be gifted, designed to be kept.",
      materials:
        "18K gold-plated brass. Hypoallergenic. Includes linen keepsake box and velvet pouch.",
      shipping:
        "Free worldwide shipping on orders over $75. 30-day returns, unworn condition.",
    }
  ),
];

// Additional related/recommended products for the "You may also like" row
export const related = [
  p("celeste-pearl-stud", "Celeste Pearl Stud", 36, "earrings", { art: "pearl", rating: 4.8, reviews: 92 }),
  p("solstice-chain", "Solstice Chain", 58, "necklaces", { art: "chain", rating: 4.7, reviews: 48 }),
  p("dune-hoops", "Dune Hoops", 44, "huggies", { art: "hoop", rating: 4.8, reviews: 71 }),
  p("willow-cuff", "Willow Cuff", 49, "earrings", { art: "cuff2", rating: 4.6, reviews: 39 }),
];

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
];

export const getProductById = (id) => {
  const all = [...products, ...related];
  return all.find((it) => it.id === id);
};

// Attach a generated artwork to every product (also for related)
products.forEach((it) => {
  it.image = productSVG(it.art, it.name);
  it.material = it.material || "18K Gold Plated";
});
related.forEach((it) => {
  it.image = productSVG(it.art, it.name);
  it.material = it.material || "18K Gold Plated";
});

// UGC reel strip on the homepage
export const reels = [
  { id: "r1", handle: "@velmora · Maya J.", caption: "The huggies I never take off." },
  { id: "r2", handle: "@velmora · Nia P.", caption: "Flora, but make it evening." },
  { id: "r3", handle: "@velmora · Sofie L.", caption: "Layered. Always layered." },
  { id: "r4", handle: "@velmora · Camille R.", caption: "Cuff weather is every weather." },
  { id: "r5", handle: "@velmora · Ana K.", caption: "The heirloom set, gifted." },
  { id: "r6", handle: "@velmora · Priya M.", caption: "Gold and a white tee. That's it." },
  { id: "r7", handle: "@velmora · Bea F.", caption: "Lace for the date night." },
  { id: "r8", handle: "@velmora · Lulu S.", caption: "My everyday stack." },
];

// Customer testimonials
export const testimonials = [
  {
    id: "t1",
    name: "Maya J.",
    product: "Golden Sphere Huggies",
    rating: 5,
    quote:
      "I've worn them in the shower, to bed, on three flights. The plating still looks brand new. The weight feels like real gold.",
  },
  {
    id: "t2",
    name: "Camille R.",
    product: "Vivid Aura Cuff",
    rating: 5,
    quote:
      "Beautifully made, beautifully packaged. I bought it for myself on a Tuesday and felt like it was a small, well-considered gift.",
  },
  {
    id: "t3",
    name: "Priya M.",
    product: "Royal Heirloom Set",
    rating: 5,
    quote:
      "Gifted the heirloom set to my sister for her birthday. The linen box alone is worth it. She wears the necklace every day.",
  },
];
