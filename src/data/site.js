// Categories used in the storefront. Kept stable and referenced everywhere.
export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies",   label: "Huggies" },
];

export const MATERIALS = [
  { id: "18k-gold",  label: "18K Gold Plated" },
  { id: "sterling",  label: "Sterling Silver" },
  { id: "crystal",   label: "Crystal" },
];

export const PRICE_BUCKETS = [
  { id: "under-50",  label: "Under $50",  min: 0,   max: 49.99 },
  { id: "50-to-80",  label: "$50 – $80",  min: 50,  max: 80 },
  { id: "80-plus",   label: "$80+",       min: 80,  max: 9999 },
];

export const SORTS = [
  { id: "featured",  label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc",label: "Price: High to Low" },
  { id: "newest",    label: "Newest" },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    quote: "The finish is unreal — feels like a piece three times the price. I wear the Vivid Aura cuff almost daily and have not taken it off.",
    name: "Amelia R.",
    role: "Verified Buyer",
  },
  {
    id: "t2",
    quote: "Bought the Royal Heirloom set as a gift. The packaging alone made it feel like opening something heirloom. She never takes it off.",
    name: "Priya S.",
    role: "Verified Buyer",
  },
  {
    id: "t3",
    quote: "I have sensitive ears and most gold turns me green within hours. Velmora is the first brand I can actually live in. Quietly obsessed.",
    name: "Naomi K.",
    role: "Verified Buyer",
  },
];

// Vertical UGC reel cards (9:16). Caption overlay + handle.
export const REELS = [
  {
    id: "reel-1",
    handle: "@velmora",
    caption: "Layered for dinner.",
    imgId: "reel-1-img",
    titleId: "reel-1-title",
    captionId: "reel-1-caption",
  },
  {
    id: "reel-2",
    handle: "@velmora",
    caption: "Golden hour, golden ear.",
    imgId: "reel-2-img",
    titleId: "reel-2-title",
    captionId: "reel-2-caption",
  },
  {
    id: "reel-3",
    handle: "@velmora",
    caption: "Huggies, every day.",
    imgId: "reel-3-img",
    titleId: "reel-3-title",
    captionId: "reel-3-caption",
  },
  {
    id: "reel-4",
    handle: "@velmora",
    caption: "A floral kind of love.",
    imgId: "reel-4-img",
    titleId: "reel-4-title",
    captionId: "reel-4-caption",
  },
  {
    id: "reel-5",
    handle: "@velmora",
    caption: "Quiet heirloom energy.",
    imgId: "reel-5-img",
    titleId: "reel-5-title",
    captionId: "reel-5-caption",
  },
  {
    id: "reel-6",
    handle: "@velmora",
    caption: "Worn in, well loved.",
    imgId: "reel-6-img",
    titleId: "reel-6-title",
    captionId: "reel-6-caption",
  },
];

export const TRUST_PILLS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];
