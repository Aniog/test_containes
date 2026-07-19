// Seed catalog for Velmora Fine Jewelry
// Image references use the strk-img runtime: the actual asset is resolved
// at build/dev time by the Vite plugin via stock image search.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    tone: "gold",
    titleId: "prod-vivid-aura-title",
    descId: "prod-vivid-aura-desc",
    imgId: "prod-vivid-aura-img-1",
    img2Id: "prod-vivid-aura-img-2",
    img3Id: "prod-vivid-aura-img-3",
    shortDescription:
      "Crystal-accented ear cuff that catches the light with every turn.",
    description:
      "A delicate statement piece, the Vivid Aura Jewels ear cuff is hand-finished in 18K gold plating over a hypoallergenic brass core. A single crystal accent rests at the lobe for an unexpected moment of brilliance — no piercing required, designed to wear from morning to evening.",
    details: [
      "18K gold plated over brass",
      "Surgical steel post, hypoallergenic",
      "Crystal accent, handset",
      "Sold as single cuff",
    ],
    care: [
      "Avoid contact with perfume and lotion",
      "Remove before showering or swimming",
      "Store in the included velvet pouch",
      "Polish gently with the provided cloth",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 218,
    badge: "New",
    tone: "gold",
    titleId: "prod-majestic-flora-title",
    descId: "prod-majestic-flora-desc",
    imgId: "prod-majestic-flora-img-1",
    img2Id: "prod-majestic-flora-img-2",
    img3Id: "prod-majestic-flora-img-3",
    shortDescription:
      "Multicolor floral crystal necklace — a garden at the décolletage.",
    description:
      "Inspired by heirloom posies, the Majestic Flora Nectar arranges hand-set crystals in soft amber, blush, and sage. Suspended from a fine 18K gold-plated chain, it sits just below the collarbone — the kind of piece you reach for again and again.",
    details: [
      "18K gold plated chain and setting",
      "Hand-set multicolor crystals",
      "Adjustable 16–18 inch chain",
      "Lobster clasp closure",
    ],
    care: [
      "Wipe gently with a soft dry cloth after wear",
      "Store flat to prevent chain tangling",
      "Avoid water and chemicals",
      "Use the velvet pouch for travel",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviews: 356,
    badge: "Bestseller",
    tone: "gold",
    titleId: "prod-golden-sphere-title",
    descId: "prod-golden-sphere-desc",
    imgId: "prod-golden-sphere-img-1",
    img2Id: "prod-golden-sphere-img-2",
    img3Id: "prod-golden-sphere-img-3",
    shortDescription:
      "Chunky gold dome huggies — the everyday heirloom.",
    description:
      "A modern take on the classic huggie, the Golden Sphere is sculpted in a soft dome and finished in warm 18K gold plating. Comfortable enough for daily wear, weighty enough to feel like an heirloom in the making.",
    details: [
      "18K gold plated brass",
      "Hinged click-top closure",
      "12mm outer diameter",
      "Sold as a pair",
    ],
    care: [
      "Remove before sleeping or exercising",
      "Keep away from lotions and sprays",
      "Polish with the included cloth",
      "Store in the velvet pouch",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviews: 89,
    badge: null,
    tone: "gold",
    titleId: "prod-amber-lace-title",
    descId: "prod-amber-lace-desc",
    imgId: "prod-amber-lace-img-1",
    img2Id: "prod-amber-lace-img-2",
    img3Id: "prod-amber-lace-img-3",
    shortDescription:
      "Textured gold filigree drops — a whisper of vintage romance.",
    description:
      "Inspired by 1920s lacework, the Amber Lace Earrings are pressed in fine filigree and finished in 18K gold plating. They move softly as you walk, casting delicate shadows on the neck — quiet drama, worn close.",
    details: [
      "18K gold plated brass",
      "Filigree press detail",
      "Hypoallergenic posts",
      "35mm drop length",
    ],
    care: [
      "Handle the filigree edge with care",
      "Avoid water and chemicals",
      "Store in the velvet pouch",
      "Wipe with a soft dry cloth",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    price: 95,
    rating: 5.0,
    reviews: 47,
    badge: "Gift Edit",
    tone: "gold",
    titleId: "prod-royal-heirloom-title",
    descId: "prod-royal-heirloom-desc",
    imgId: "prod-royal-heirloom-img-1",
    img2Id: "prod-royal-heirloom-img-2",
    img3Id: "prod-royal-heirloom-img-3",
    shortDescription:
      "Gift-boxed earring and necklace set — for the moments that matter.",
    description:
      "The Royal Heirloom Set pairs our most-loved studs with a delicate pendant chain, presented in a keepsake velvet box. Finished in 18K gold plating with a soft brushed sheen, it arrives ready to gift — and to be kept.",
    details: [
      "18K gold plated brass",
      "Includes matching stud earrings and pendant necklace",
      "Velvet keepsake gift box",
      "Hypoallergenic and nickel-free",
    ],
    care: [
      "Polish with the included cloth",
      "Store in the gift box between wears",
      "Remove before sleeping and showering",
      "Avoid contact with perfume",
    ],
  },
];

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    description: "Studs, drops, cuffs.",
    imgId: "cat-earrings-img",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Pendants, chains, layers.",
    imgId: "cat-necklaces-img",
  },
  {
    id: "huggies",
    name: "Huggies",
    description: "The everyday heirloom.",
    imgId: "cat-huggies-img",
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (id, limit = 4) => {
  const current = getProductById(id);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      if (a.category === current.category && b.category !== current.category) return -1;
      if (b.category === current.category && a.category !== current.category) return 1;
      return 0;
    })
    .slice(0, limit);
};

export const getBestsellers = (limit = 5) => {
  return products
    .filter((p) => p.badge === "Bestseller" || p.rating >= 4.8)
    .slice(0, limit);
};
