// Velmora seed products. Image queries use the strk stock image system
// and are resolved at runtime by ImageHelper.loadImages. Each product
// has two images: a primary and a "hover" image shown on card hover.

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
]

export const materials = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
]

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    subtitle: "Crystal ear cuff",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    category: "earrings",
    material: "18k-gold",
    isBestseller: true,
    isNew: false,
    description:
      "A single, sculptural ear cuff finished with a hand-set crystal. Designed to be worn alone as a quiet statement or stacked along the lobe.",
    details: [
      "18K gold plated over recycled brass",
      "Hand-set Austrian crystal accent",
      "Hypoallergenic, nickel-free post",
      "Sold as a single cuff",
    ],
    care: [
      "Avoid contact with water, perfume and lotion",
      "Store in the velvet pouch provided",
      "Wipe gently with the included polishing cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "30-day returns, no questions asked",
      "Comes in our signature ribbon-tied gift box",
    ],
    images: [
      {
        query: "minimalist gold crystal ear cuff on warm beige closeup editorial jewelry photography",
        ratio: "4x5",
        width: 900,
        alt: "Vivid Aura Jewels — crystal ear cuff, editorial close-up",
      },
      {
        query: "gold crystal ear cuff worn on model ear soft natural light editorial portrait",
        ratio: "4x5",
        width: 900,
        alt: "Vivid Aura Jewels — worn on the ear",
      },
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Floral crystal necklace",
    price: 68,
    rating: 4.9,
    reviewCount: 86,
    category: "necklaces",
    material: "18k-gold",
    isBestseller: true,
    isNew: true,
    description:
      "A botanical cluster of hand-set crystals in soft honey, blush and sage, suspended on a delicate 18-inch chain. A piece that earns its place in your daily rotation.",
    details: [
      "18K gold plated brass chain, 18\" with 2\" extender",
      "Hand-set crystals in three soft jewel tones",
      "Lobster clasp closure",
      "Lightweight for everyday wear",
    ],
    care: [
      "Remove before showering or sleeping",
      "Avoid contact with harsh chemicals",
      "Polish gently with a soft, dry cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "30-day returns, no questions asked",
      "Arrives in our signature gift box",
    ],
    images: [
      {
        query: "multicolor floral crystal pendant necklace on dark warm background editorial product photography",
        ratio: "4x5",
        width: 900,
        alt: "Majestic Flora Nectar — floral crystal pendant",
      },
      {
        query: "multicolor floral crystal necklace worn by model neckline soft window light portrait",
        ratio: "4x5",
        width: 900,
        alt: "Majestic Flora Nectar — worn on the neckline",
      },
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky gold dome huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 211,
    category: "huggies",
    material: "18k-gold",
    isBestseller: true,
    isNew: false,
    description:
      "Our take on a modern classic. A polished, dome-shaped huggie with just enough weight to feel substantial without weighing the lobe down.",
    details: [
      "18K gold plated over sterling silver",
      "12mm diameter, 6mm depth",
      "Hinged click closure",
      "Suitable for sensitive ears",
    ],
    care: [
      "Remove before sleeping and showering",
      "Store flat in the pouch provided",
      "Wipe with a soft cloth after wear",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "30-day returns, no questions asked",
      "Comes in our signature gift box",
    ],
    images: [
      {
        query: "chunky gold dome huggie hoop earrings on dark warm background minimal product photography",
        ratio: "4x5",
        width: 900,
        alt: "Golden Sphere Huggies — chunky gold hoops",
      },
      {
        query: "gold dome huggie hoops worn on model ear soft natural light closeup",
        ratio: "4x5",
        width: 900,
        alt: "Golden Sphere Huggies — worn on the ear",
      },
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    subtitle: "Filigree drop earrings",
    price: 54,
    rating: 4.8,
    reviewCount: 97,
    category: "earrings",
    material: "18k-gold",
    isBestseller: true,
    isNew: false,
    description:
      "Inspired by heirloom lace, these filigree drops are cast in warm 18K gold plate. Light enough for daytime, distinctive enough for evening.",
    details: [
      "18K gold plated brass, filigree cast",
      "Approximately 1.5\" drop",
      "Hypoallergenic post and back",
      "Lightweight filigree design",
    ],
    care: [
      "Store flat to preserve the filigree shape",
      "Avoid contact with perfume and lotion",
      "Polish gently with the included cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "30-day returns, no questions asked",
      "Comes in our signature gift box",
    ],
    images: [
      {
        query: "textured gold filigree drop earrings on warm beige background editorial product photo",
        ratio: "4x5",
        width: 900,
        alt: "Amber Lace Earrings — filigree drops",
      },
      {
        query: "gold filigree drop earrings worn by model soft natural light ear closeup portrait",
        ratio: "4x5",
        width: 900,
        alt: "Amber Lace Earrings — worn on the ear",
      },
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Earring and necklace gift set",
    price: 95,
    oldPrice: 120,
    rating: 5.0,
    reviewCount: 64,
    category: "earrings",
    material: "18k-gold",
    isBestseller: true,
    isNew: true,
    description:
      "Our most-loved studs paired with a delicate chain, gift-boxed and ribbon-tied. A quiet heirloom in the making — for someone you love, or for yourself.",
    details: [
      "18K gold plated over sterling silver",
      "Studs: 6mm pavé set crystals",
      "Chain: 16\" with 2\" extender",
      "Comes in a ribbon-tied keepsake box",
    ],
    care: [
      "Remove before sleeping, showering, or working out",
      "Store in the keepsake box when not worn",
      "Polish gently with the included cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "30-day returns, no questions asked",
      "Gift note available at checkout",
    ],
    images: [
      {
        query: "gold crystal stud earrings and delicate matching necklace gift set on warm beige ribbon box",
        ratio: "4x5",
        width: 900,
        alt: "Royal Heirloom Set — earrings and necklace in gift box",
      },
      {
        query: "gold crystal earrings and necklace gift set worn by model soft window light portrait",
        ratio: "4x5",
        width: 900,
        alt: "Royal Heirloom Set — worn",
      },
    ],
  },
  // Additional products for shop-page variety
  {
    id: "petal-drop-earrings",
    name: "Petal Drop Earrings",
    subtitle: "Dainty petal drop",
    price: 44,
    rating: 4.7,
    reviewCount: 53,
    category: "earrings",
    material: "18k-gold",
    isBestseller: false,
    isNew: true,
    description:
      "Sculpted in the shape of a single, falling petal. Quiet, considered, and the kind of piece you never want to take off.",
    details: [
      "18K gold plated brass",
      "Approximately 1\" drop",
      "Hypoallergenic post and back",
    ],
    care: [
      "Store flat in the pouch provided",
      "Avoid contact with perfume and lotion",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "30-day returns, no questions asked",
    ],
    images: [
      {
        query: "dainty gold petal drop earrings on dark warm editorial product photography minimal",
        ratio: "4x5",
        width: 900,
        alt: "Petal Drop Earrings",
      },
      {
        query: "dainty gold petal drop earrings worn on model soft natural light ear closeup",
        ratio: "4x5",
        width: 900,
        alt: "Petal Drop Earrings — worn",
      },
    ],
  },
  {
    id: "celeste-chain-necklace",
    name: "Celeste Chain Necklace",
    subtitle: "Layering chain",
    price: 56,
    rating: 4.8,
    reviewCount: 71,
    category: "necklaces",
    material: "18k-gold",
    isBestseller: false,
    isNew: false,
    description:
      "A paperclip-style chain in warm 18K gold plate. Layer it with the Majestic Flora, or wear it solo as a quiet statement.",
    details: [
      "18K gold plated brass, 18\" with 2\" extender",
      "Lobster clasp closure",
      "Lightweight for daily wear",
    ],
    care: [
      "Remove before showering and sleeping",
      "Polish gently with a soft, dry cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "30-day returns, no questions asked",
    ],
    images: [
      {
        query: "gold paperclip chain layering necklace on warm beige background editorial product photography",
        ratio: "4x5",
        width: 900,
        alt: "Celeste Chain Necklace",
      },
      {
        query: "gold paperclip chain necklace layered on model neckline soft window light portrait",
        ratio: "4x5",
        width: 900,
        alt: "Celeste Chain Necklace — worn",
      },
    ],
  },
  {
    id: "twin-flame-huggies",
    name: "Twin Flame Huggies",
    subtitle: "Pavé mini huggies",
    price: 48,
    rating: 4.9,
    reviewCount: 142,
    category: "huggies",
    material: "18k-gold",
    isBestseller: false,
    isNew: true,
    description:
      "A row of hand-set crystals traces the curve of these mini huggies. Small, but never quiet.",
    details: [
      "18K gold plated sterling silver",
      "10mm diameter",
      "Hinged click closure",
    ],
    care: [
      "Remove before sleeping and showering",
      "Wipe with a soft cloth after wear",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "30-day returns, no questions asked",
    ],
    images: [
      {
        query: "small gold pavé crystal huggie hoops on warm beige editorial product photography",
        ratio: "4x5",
        width: 900,
        alt: "Twin Flame Huggies",
      },
      {
        query: "small gold pavé crystal huggie hoops worn on model ear soft natural light closeup",
        ratio: "4x5",
        width: 900,
        alt: "Twin Flame Huggies — worn",
      },
    ],
  },
]

export const bestsellers = products.filter((p) => p.isBestseller)

export function getProductById(id) {
  return products.find((p) => p.id === id) || null
}

export function getRelatedProducts(currentId, limit = 4) {
  const current = getProductById(currentId)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== currentId)
    .sort((a, b) => {
      // Prioritize same category, then same material
      const aScore = (a.category === current.category ? 2 : 0) + (a.material === current.material ? 1 : 0)
      const bScore = (b.category === current.category ? 2 : 0) + (b.material === current.material ? 1 : 0)
      return bScore - aScore
    })
    .slice(0, limit)
}

export const testimonials = [
  {
    id: 1,
    name: "Isabella R.",
    rating: 5,
    text: "The Royal Heirloom Set was a gift to myself after a hard year. The weight, the finish, the way it catches the light — it feels like a quiet little luxury every single day.",
    product: "Royal Heirloom Set",
  },
  {
    id: 2,
    name: "Maya K.",
    rating: 5,
    text: "I have sensitive ears and the Golden Sphere Huggies are the first pair I can wear all day without irritation. They look far more expensive than they are.",
    product: "Golden Sphere Huggies",
  },
  {
    id: 3,
    name: "Elena T.",
    rating: 5,
    text: "The packaging alone made me gasp. But the jewelry — the jewelry is what made me a customer for life. Velmora gets it.",
    product: "Majestic Flora Nectar",
  },
]

export const ugcReels = [
  {
    id: "reel-1",
    caption: "First date earrings",
    handle: "@isabella.r",
    query: "vertical portrait woman wearing gold huggie hoop earrings soft natural window light 9:16",
  },
  {
    id: "reel-2",
    caption: "Layered for the office",
    handle: "@maya.k",
    query: "vertical portrait woman wearing layered gold necklaces cream blouse soft light 9:16",
  },
  {
    id: "reel-3",
    caption: "The everyday set",
    handle: "@elena.t",
    query: "vertical portrait woman wearing gold ear cuff and crystal necklace closeup 9:16",
  },
  {
    id: "reel-4",
    caption: "For the dinner reservation",
    handle: "@noor.s",
    query: "vertical portrait woman wearing gold filigree drop earrings elegant evening 9:16",
  },
  {
    id: "reel-5",
    caption: "Wrapped for her",
    handle: "@clara.j",
    query: "vertical portrait woman opening gold jewelry gift box ribbon warm light 9:16",
  },
  {
    id: "reel-6",
    caption: "On repeat",
    handle: "@rae.m",
    query: "vertical portrait woman gold dome huggie hoops cream sweater soft daylight 9:16",
  },
]
