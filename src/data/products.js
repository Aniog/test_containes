// Seed product catalog for Velmora Fine Jewelry.
// Images are loaded via the strk-img system (data-strk-img) so the
// placeholder srcs are intentionally blank SVGs.

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const materials = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "pearl", label: "Freshwater Pearl" },
  { id: "crystal", label: "Crystal" },
];

export const priceRanges = [
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-100", label: "$75 – $100", min: 75, max: 100 },
  { id: "100-plus", label: "$100 +", min: 100, max: 10000 },
];

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18k-gold",
    price: 42,
    rating: 4.9,
    reviewCount: 312,
    tag: "Bestseller",
    shortDescription:
      "A whisper of crystal set into a sculpted gold ear cuff. Worn solo, it catches the light like a quiet second skin.",
    description:
      "Inspired by 1920s Parisian salons, the Vivid Aura cuff is hand-finished in 18K gold plate over brass and set with a single brilliant-cut crystal. Designed to hug the helix without piercing — slip it on, walk out the door.",
    materials:
      "18K gold-plated brass, lead-free crystal. Hypoallergenic and nickel-free. Each piece is hand-finished.",
    care: "Avoid water, perfume, and lotion. Store dry in the suede pouch provided. Polish gently with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Carbon-neutral delivery.",
    variants: [
      { id: "gold", label: "Gold", tone: "#A8814C" },
      { id: "silver", label: "Silver", tone: "#C7C2BA" },
   ],
    colors: ["#1A130E", "#F7F1E6"],
    images: [
      {
        id: "vivid-aura-img-1-7c2a",
        query:
          "gold ear cuff with crystal on model [vivid-aura-title]",
        alt: "Model wearing the Vivid Aura gold ear cuff",
        ratio: "4x5",
        width: 900,
      },
      {
        id: "vivid-aura-img-2-9d4e",
        query:
          "gold ear cuff detail on taupe backdrop [vivid-aura-title]",
        alt: "Detail of the Vivid Aura ear cuff on a soft taupe backdrop",
        ratio: "4x5",
        width: 900,
      },
      {
        id: "vivid-aura-img-3-b1f8",
        query:
          "gold ear cuff with crystal accent still life [vivid-aura-title]",
        alt: "Vivid Aura ear cuff styled with golden hour light",
        ratio: "1x1",
        width: 700,
      },
   ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "crystal",
    price: 68,
    rating: 4.8,
    reviewCount: 184,
    tag: "New",
    shortDescription:
      "A garden of pastel crystals strung along a whisper-thin chain. The kind of piece you forget you’re wearing — until someone asks.",
    description:
      "Hand-strung in our atelier, Majestic Flora layers hand-set crystals in champagne, blush, and peridot over a delicate 18K gold-plated chain. A piece designed to move with you, all day.",
    materials:
      "Hand-set glass crystals, 18K gold-plated brass chain, lobster clasp. Nickel-free, hypoallergenic.",
    care: "Remove before showering or sleeping. Lay flat in the suede pouch. Avoid contact with香水 and lotions.",
    shipping:
      "Free worldwide shipping over $80. 30-day returns. Each necklace arrives in a keepsake box.",
    variants: [
      { id: "gold", label: "Gold", tone: "#A8814C" },
      { id: "silver", label: "Silver", tone: "#C7C2BA" },
   ],
    colors: ["#3A2A1C", "#F7F1E6"],
    images: [
      {
        id: "majestic-flora-img-1-2a90",
        query:
          "multicolor floral crystal necklace on model warm light [majestic-flora-title]",
        alt: "Majestic Flora necklace on a model with soft warm light",
        ratio: "4x5",
        width: 900,
      },
      {
        id: "majestic-flora-img-2-77be",
        query:
          "multicolor floral crystal necklace detail still life [majestic-flora-title]",
        alt: "Crystal cluster detail of the Majestic Flora necklace",
        ratio: "1x1",
        width: 700,
      },
      {
        id: "majestic-flora-img-3-c3d1",
        query:
          "gold crystal necklace closeup on dark backdrop [majestic-flora-title]",
        alt: "Majestic Flora necklace styled on dark backdrop",
        ratio: "1x1",
        width: 700,
      },
   ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18k-gold",
    price: 38,
    rating: 4.9,
    reviewCount: 540,
    tag: "Cult Favorite",
    shortDescription:
      "A solid gold dome you can sleep in. The huggie you’ll reach for on a Tuesday — and again on Saturday.",
    description:
      "Cast in substantial brass and finished in 18K gold, the Golden Sphere huggies have a satisfying weight and a hinge that clicks shut with intention. 12mm outside diameter.",
    materials:
      "18K gold-plated brass, hypoallergenic post and hinge. 12mm outer diameter.",
    care: "Water-resistant for daily wear. Polish with the included cloth to keep the gold warm.",
    shipping:
      "Free worldwide shipping over $80. 30-day returns. Pairs arrive in a soft pouch.",
    variants: [
      { id: "gold", label: "Gold", tone: "#A8814C" },
      { id: "silver", label: "Silver", tone: "#C7C2BA" },
   ],
    colors: ["#1A130E", "#F7F1E6"],
    images: [
      {
        id: "golden-sphere-img-1-44ab",
        query:
          "chunky gold dome huggie earrings on model ear [golden-sphere-title]",
        alt: "Model wearing the Golden Sphere huggies",
        ratio: "4x5",
        width: 900,
      },
      {
        id: "golden-sphere-img-2-ef20",
        query:
          "chunky gold dome huggie earrings still life on taupe [golden-sphere-title]",
        alt: "Pair of Golden Sphere huggies on taupe",
        ratio: "1x1",
        width: 700,
      },
      {
        id: "golden-sphere-img-3-91cc",
        query:
          "gold hoop huggie earrings closeup editorial [golden-sphere-title]",
        alt: "Close-up detail of Golden Sphere huggies",
        ratio: "1x1",
        width: 700,
      },
   ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18k-gold",
    price: 54,
    rating: 4.7,
    reviewCount: 96,
    tag: "Limited",
    shortDescription:
      "Filigree in motion. Hand-textured drops that look like sunlight caught in lace — weightless, but never quiet.",
    description:
      "Each pair is hand-textured by our atelier in small batches. The lace pattern catches light at every angle, the way heirloom jewelry used to.",
    materials:
      "18K gold-plated brass, hand-textured finish. Hypoallergenic sterling silver post.",
    care: "Store in the suede pouch. Avoid water and perfume to preserve the textured finish.",
    shipping:
      "Free worldwide shipping over $80. 30-day returns. Limited-run pieces are final sale.",
    variants: [
      { id: "gold", label: "Gold", tone: "#A8814C" },
      { id: "silver", label: "Silver", tone: "#C7C2BA" },
   ],
    colors: ["#1A130E", "#F7F1E6"],
    images: [
      {
        id: "amber-lace-img-1-66de",
        query:
          "textured gold filigree drop earrings on model [amber-lace-title]",
        alt: "Amber Lace filigree drop earrings on a model",
        ratio: "4x5",
        width: 900,
      },
      {
        id: "amber-lace-img-2-13a7",
        query:
          "textured gold filigree drop earrings detail [amber-lace-title]",
        alt: "Filigree detail of the Amber Lace earrings",
        ratio: "1x1",
        width: 700,
      },
      {
        id: "amber-lace-img-3-fc08",
        query:
          "gold lace drop earrings editorial warm light [amber-lace-title]",
        alt: "Amber Lace earrings styled in editorial warm light",
        ratio: "1x1",
        width: 700,
      },
   ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    material: "18k-gold",
    price: 95,
    rating: 5.0,
    reviewCount: 71,
    tag: "Gift Edit",
    shortDescription:
      "A pendant and earring set in our keepsake box. The gift you give when you mean it — and the one you keep for yourself.",
    description:
      "A matching set designed to be layered or worn apart. Pendant on an adjustable 16–18″ chain; petite drop earrings. Arrives in our signature keepsake box, ribbon-tied.",
    materials:
      "18K gold-plated brass, freshwater pearl accent, sterling silver posts. Hypoallergenic.",
    care: "Store in the included box. Avoid water, perfume, and lotion.",
    shipping:
      "Complimentary gift wrap. Free worldwide shipping over $80. 30-day returns.",
    variants: [
      { id: "gold", label: "Gold", tone: "#A8814C" },
      { id: "silver", label: "Silver", tone: "#C7C2BA" },
   ],
    colors: ["#1A130E", "#F7F1E6"],
    images: [
      {
        id: "royal-heirloom-img-1-77ab",
        query:
          "gold pendant earrings gift set on model [royal-heirloom-title]",
        alt: "Royal Heirloom gift set with model wearing pendant and earrings",
        ratio: "4x5",
        width: 900,
      },
      {
        id: "royal-heirloom-img-2-3c91",
        query:
          "gold jewelry gift box ribbon editorial [royal-heirloom-title]",
        alt: "Royal Heirloom keepsake gift box",
        ratio: "1x1",
        width: 700,
      },
      {
        id: "royal-heirloom-img-3-aa55",
        query:
          "gold pendant and matching earrings flatlay on cream [royal-heirloom-title]",
        alt: "Royal Heirloom set flatlay",
        ratio: "1x1",
        width: 700,
      },
   ],
  },
];

export const productById = (id) => products.find((p) => p.id === id);

export const productsByCategory = (categoryId) =>
  categoryId && categoryId !== "all"
    ? products.filter((p) => p.category === categoryId)
    : products;

export const relatedProducts = (productId, limit = 4) => {
  const current = productById(productId);
  if (!current) return products.slice(0, limit);
  const sameCategory = products.filter(
    (p) => p.id !== productId && p.category === current.category
  );
  const others = products.filter(
    (p) => p.id !== productId && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
};
