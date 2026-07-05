import {
  EarCuffArt,
  FloraNecklaceArt,
  SphereHuggiesArt,
  AmberLaceArt,
  HeirloomSetArt,
} from "@/components/jewelry-illustrations/JewelryArt";

export const CATEGORIES = [
  { id: "earrings", name: "Earrings", tagline: "From everyday studs to evening drops" },
  { id: "necklaces", name: "Necklaces", tagline: "Layered, heirloom, statement" },
  { id: "huggies", name: "Huggies", tagline: "The perfect gold hoop" },
];

export const MATERIALS = [
  { id: "18k-gold", name: "18K Gold Plated" },
  { id: "sterling-silver", name: "Sterling Silver" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    category: "earrings",
    material: "18k-gold",
    price: 42,
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    shortDescription:
      "A sculpted gold ear cuff set with a single hand-set crystal. Wears like a second skin — no piercing required.",
    description:
      "Sculpted by hand from recycled brass and finished in a thick layer of 18K gold, the Vivid Aura Cuff is anchored by a single faceted crystal that catches the light from every angle. Designed to hug the helix without a piercing, it can be stacked with our huggies for an editorial ear.",
    materials:
      "18K gold plated recycled brass, AAA cubic zirconia crystal. Hypoallergenic and nickel-free. Plating is 2.5 microns — five times industry standard — for everyday wear.",
    care: "Avoid contact with water, perfume, and lotion. Store in the suede pouch provided. To restore shine, gently buff with the included polishing cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. Domestic orders ship in 1–2 business days. 30-day returns, no questions asked.",
    variants: [
      { id: "gold", name: "18K Gold", tone: "gold" },
      { id: "silver", name: "Sterling Silver", tone: "silver" },
    ],
    images: [EarCuffArt, EarCuffArt, EarCuffArt],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "18k-gold",
    price: 68,
    rating: 4.8,
    reviews: 96,
    badge: "New",
    shortDescription:
      "A six-petal floral pendant in heritage multicolor crystals on a delicate cable chain. Sits perfectly at the collarbone.",
    description:
      "Inspired by a wildflower pressed in a 1920s locket, the Majestic Flora Nectar is composed of six hand-set crystal petals in soft heritage tones. Suspended on a 16–18\" adjustable cable chain, it sits gently at the collarbone — alone, or layered with the Golden Sphere Huggies.",
    materials:
      "18K gold plated brass chain and pendant, hand-set crystals in six heritage colors. Lead-free, nickel-free, hypoallergenic.",
    care: "Remove before showering or sleeping. Wipe gently with a soft cloth. Avoid direct contact with perfumes and oils.",
    shipping:
      "Free worldwide shipping on orders over $75. Domestic orders ship in 1–2 business days. International orders ship in 5–8 business days. 30-day returns.",
    variants: [
      { id: "gold", name: "18K Gold", tone: "gold" },
      { id: "silver", name: "Sterling Silver", tone: "silver" },
    ],
    images: [FloraNecklaceArt, FloraNecklaceArt, FloraNecklaceArt],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18k-gold",
    price: 38,
    rating: 4.9,
    reviews: 214,
    badge: "Bestseller",
    shortDescription:
      "A modern take on the huggie — a chunky gold dome threaded on a hinged hoop for a clean, sculptural silhouette.",
    description:
      "The Golden Sphere Huggies are the pair you'll never take off. A polished 18K gold dome threaded on a hinged hoop clicks securely into place and reads beautifully on every ear — day to night, suit to slip dress.",
    materials:
      "18K gold plated sterling silver post and hoop. 2.5 micron plating. Hypoallergenic, nickel-free, lead-free.",
    care: "Water-resistant for daily wear. To deep clean, rinse with mild soap and warm water, then dry with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. Domestic orders ship in 1–2 business days. 30-day returns, no questions asked.",
    variants: [
      { id: "gold", name: "18K Gold", tone: "gold" },
      { id: "silver", name: "Sterling Silver", tone: "silver" },
    ],
    images: [SphereHuggiesArt, SphereHuggiesArt, SphereHuggiesArt],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18k-gold",
    price: 54,
    rating: 4.7,
    reviews: 73,
    badge: "Limited",
    shortDescription:
      "Filigree drop earrings in warm amber-gold. Light as a whisper, detailed like vintage lace.",
    description:
      "Each pair of Amber Lace Earrings is cast from an original hand-carved wax, then finished by hand in 18K gold. The filigree catches candlelight and afternoon sun in equal measure — equally at home with a white t-shirt or a wedding dress.",
    materials:
      "18K gold plated brass, hand-finished. Hypoallergenic stainless steel post.",
    care: "Store flat in the suede pouch. Avoid contact with perfume and hairspray. Polish gently with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. Domestic orders ship in 1–2 business days. 30-day returns, no questions asked.",
    variants: [
      { id: "gold", name: "18K Gold", tone: "gold" },
      { id: "silver", name: "Sterling Silver", tone: "silver" },
    ],
    images: [AmberLaceArt, AmberLaceArt, AmberLaceArt],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    material: "18k-gold",
    price: 95,
    rating: 5.0,
    reviews: 41,
    badge: "Giftset",
    shortDescription:
      "A gift-boxed pair of crystal studs and a matching pendant necklace. Ready to gift, ready to treasure.",
    description:
      "The Royal Heirloom Set is our love letter to giving. Two pairs arrive in a hand-wrapped ivory gift box with a matching crystal pendant — a complete set for someone just beginning their jewelry story, or a thoughtful way to mark a moment.",
    materials:
      "18K gold plated brass, hand-set crystals. Nickel-free, lead-free, hypoallergenic. Gift box included.",
    care: "Store in the original gift box when not worn. Keep away from water, perfume, and lotion.",
    shipping:
      "Free gift wrapping and worldwide shipping. Domestic orders ship in 1–2 business days. 30-day returns, no questions asked.",
    variants: [
      { id: "gold", name: "18K Gold", tone: "gold" },
      { id: "silver", name: "Sterling Silver", tone: "silver" },
    ],
    images: [HeirloomSetArt, HeirloomSetArt, HeirloomSetArt],
  },
];

export const TESTIMONIALS = [
  {
    name: "Ava M.",
    rating: 5,
    quote:
      "I've been searching for demi-fine gold that doesn't look like fast fashion. The Golden Sphere Huggies are the first pair I've worn every single day without taking them off.",
  },
  {
    name: "Priya K.",
    rating: 5,
    quote:
      "Bought the Royal Heirloom Set for my sister's birthday. The packaging alone made her cry. The jewelry is even more beautiful in person — substantial, weighty, real.",
  },
  {
    name: "Eleanor D.",
    rating: 5,
    quote:
      "Quietly the most beautiful jewelry I've owned. The Vivid Aura Cuff gets a compliment every time I wear it. Will be a forever customer.",
  },
];

export const UGC_REELS = [
  { caption: "the everyday stack", handle: "@ava.morgan" },
  { caption: "morning light, gold", handle: "@leah.sorensen" },
  { caption: "the wedding edit", handle: "@noor.kapoor" },
  { caption: "sunday slow", handle: "@mira.deluca" },
  { caption: "just one more hoop", handle: "@camille.jane" },
  { caption: "gifted and treasured", handle: "@rosie.kim" },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

export function getRelatedProducts(productId, limit = 4) {
  const current = getProductById(productId);
  if (!current) return PRODUCTS.slice(0, limit);
  const sameCategory = PRODUCTS.filter(
    (p) => p.id !== productId && p.category === current.category
  );
  const others = PRODUCTS.filter(
    (p) => p.id !== productId && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

// --- Journal posts ---
// (Art components are passed in from the page that imports them, to avoid
// a circular import between catalog.js and JewelryArt.jsx.)
export const POSTS_META = [
  {
    id: "stack-the-heirloom",
    title: "How to stack the heirloom",
    excerpt:
      "Our stylist breaks down three ways to layer the Royal Heirloom Set, from a quiet desk morning to a candlelit dinner.",
    date: "May 14, 2026",
    readTime: "4 min read",
    artKey: "HeirloomSetArt",
    category: "Styling",
  },
  {
    id: "inside-the-bench",
    title: "Inside the bench, Jaipur",
    excerpt:
      "Meet the four artisans who hand-finish every Vivid Aura Cuff — and learn why slow work makes the strongest jewelry.",
    date: "April 22, 2026",
    readTime: "7 min read",
    artKey: "EarCuffArt",
    category: "Behind the Bench",
  },
  {
    id: "caring-for-gold",
    title: "A small ritual for caring for gold",
    excerpt:
      "Five minutes, once a month. A simple care ritual that will keep your demi-fine pieces luminous for years to come.",
    date: "March 6, 2026",
    readTime: "3 min read",
    artKey: "FloraNecklaceArt",
    category: "Care",
  },
];

export const POST_BODIES = {
  "stack-the-heirloom": [
    {
      type: "lede",
      text: "The Royal Heirloom Set was designed to layer. Here are three ways our stylist wears it — beginning with the quietest, and ending with the most candlelit.",
    },
    { type: "h2", text: "1. The desk morning" },
    { type: "p", text: "A single stud on the second hole, the pendant hung just above a soft cashmere crew. Nothing else. The crystal catches the morning light against the warm of the cashmere, and the rest of the day begins." },
    { type: "p", text: "Layering rule: when the rest of the outfit is quiet, let one piece do the talking." },
    { type: "h2", text: "2. The lunch edit" },
    { type: "p", text: "Add the second pair of studs, the huggies tucked into the first. The pendant lengthens by an inch; the chain now grazes a silk collar. Everything still feels considered, but it has a voice." },
    { type: "h2", text: "3. The candlelit dinner" },
    { type: "p", text: "All three together. The pendant now sits a finger's width above the heart, the studs catch candlelight in soft heritage tones, and the huggies ground the silhouette from the side. The whole set, finally, in conversation." },
    { type: "p", text: "Layering rule: the best stacks are uneven. Let one piece hang lower, let one piece shine brighter." },
    { type: "h2", text: "A small note" },
    { type: "p", text: "Stacks are not rules. They are conversations. Wear what feels true — the heirloom will keep its quietness either way." },
  ],
  "inside-the-bench": [
    {
      type: "lede",
      text: "Jaipur has been the heart of fine jewelry for nine hundred years. The four artisans who finish our Vivid Aura Cuff are part of that unbroken thread.",
    },
    { type: "h2", text: "The first hand" },
    { type: "p", text: "Rekha has been setting stones for thirty-one years. She works under a single lamp, with a small bowl of facets to her left, and the cuff clamped softly to her bench. A single stone takes her between four and seven minutes." },
    { type: "p", text: "“The metal tells you where it wants the stone to sit,” she says. “You cannot force it. You can only listen.”" },
    { type: "h2", text: "The second hand" },
    { type: "p", text: "Anil polishes. He has been polishing the same style of brass for nineteen years. He knows exactly how much pressure to use on the inside curve so the gold catches the light, and how little to use on the edges so the silhouette stays sharp." },
    { type: "h2", text: "The slow part" },
    { type: "p", text: "A single Vivid Aura Cuff passes through twelve pairs of hands before it reaches yours. None of them are rushed. The bench is patient; the bench has time." },
  ],
  "caring-for-gold": [
    {
      type: "lede",
      text: "Demi-fine jewelry wants very little. Five minutes, once a month, and the gold will keep its quiet warmth for years.",
    },
    { type: "h2", text: "What you need" },
    { type: "p", text: "A soft cloth (the one we ship with every order, or any untreated cotton), a bowl of lukewarm water, and a drop of mild soap. That is the entire kit." },
    { type: "h2", text: "The ritual" },
    { type: "p", text: "Wipe the piece gently along the grain of the gold, not against it. If it has been worn often, dip the cloth in the soapy water and wring it nearly dry before you wipe. Set the piece on a soft towel for ten minutes." },
    { type: "p", text: "Do not use jewelry cleaners. They are made for solid gold, and our pieces are 18K plated — they prefer to be left alone." },
    { type: "h2", text: "What to avoid" },
    { type: "p", text: "Perfume, sunscreen, and chlorine are the three quiet enemies of plated gold. A small habit — perfume first, then jewelry, last — will keep the plating bright for years." },
  ],
};

