// Testimonials, UGC reels, navigation, brand-story data.

export const TRUST_ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Amelia R.",
    rating: 5,
    text:
      "I bought the Golden Sphere Huggies on a whim and now I haven't taken them off in three weeks. The weight, the warmth, the way they close — everything feels considered.",
    product: "Golden Sphere Huggies",
  },
  {
    id: 2,
    name: "Priya S.",
    rating: 5,
    text:
      "The Royal Heirloom Set was for my sister's birthday. She opened the box and went quiet for a full ten seconds. The packaging alone is a love letter.",
    product: "Royal Heirloom Set",
  },
  {
    id: 3,
    name: "Naomi K.",
    rating: 5,
    text:
      "I've worn the Majestic Flora Nectar with a white tee and to a wedding. It does that thing where people keep asking where it's from.",
    product: "Majestic Flora Nectar",
  },
];

// Reel-style UGC: vertical (9:16) cards with serif caption overlay.
export const UGC_REELS = [
  {
    id: "ugc-1",
    img: "Close-up of gold huggie earrings on ear warm golden hour light editorial portrait",
    caption: "The huggies that never come off.",
    handle: "@amelia.r",
  },
  {
    id: "ugc-2",
    img: "Model wearing floral crystal necklace against linen background soft warm portrait",
    caption: "Flora Nectar, on repeat.",
    handle: "@noa.k",
  },
  {
    id: "ugc-3",
    img: "Ear stack of gold ear cuff with crystal accent on warm skin editorial close-up",
    caption: "Stacked, never too much.",
    handle: "@priya.s",
  },
  {
    id: "ugc-4",
    img: "Model wearing gold filigree drop earrings against cream silk editorial portrait",
    caption: "Amber Lace with cashmere.",
    handle: "@isla.m",
  },
  {
    id: "ugc-5",
    img: "Gold jewelry set in cream gift box with hand-tied ribbon editorial still life",
    caption: "For the ones who deserve heirlooms.",
    handle: "@rosie.j",
  },
  {
    id: "ugc-6",
    img: "Close-up of gold dome huggies on ear with soft warm portrait bokeh background",
    caption: "Quiet gold, loud love.",
    handle: "@thea.b",
  },
  {
    id: "ugc-7",
    img: "Model wearing floral necklace against linen editorial portrait warm light",
    caption: "Sundays in the Majestic.",
    handle: "@cleo.w",
  },
];

export const NAV_LINKS = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop?category=earrings" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
];

export const BRAND_STORY = {
  eyebrow: "Our Story",
  title: "Heirlooms in the making.",
  body:
    "Velmora began with a single question — why does demi-fine have to feel disposable? We design each piece to be worn daily, gifted freely, and kept forever. 18K gold plating over a hypoallergenic base, hand-set crystals, and a slow, considered design process. Jewelry for the women you are and the women you're becoming.",
  cta: "Read our story",
  ctaTo: "/about",
  image: "Craftsperson polishing gold jewelry at warm wooden bench editorial still life",
};
