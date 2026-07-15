export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    subtitle: "Gold ear cuff with crystal accent",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.9,
    reviewCount: 128,
    badge: "Bestseller",
    variants: ["Gold Tone", "Silver Tone"],
    description:
      "A sculptural ear cuff that wraps the upper ear in warm 18K gold plating, set with a single faceted crystal that catches the light beautifully. No piercing required — simply slide on for an effortless editorial look.",
    materials:
      "18K gold plated brass, hypoallergenic, nickel-free. Crystal accent: cubic zirconia. Adjustable fit.",
    shipping:
      "Free worldwide shipping on all orders. Delivered in 3–7 business days. 30-day hassle-free returns.",
    imgId: "product-vivid-aura-img-a1b2c3",
    imgId2: "product-vivid-aura-img2-d4e5f6",
    titleId: "product-vivid-aura-title",
    descId: "product-vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    rating: 4.8,
    reviewCount: 94,
    badge: "New",
    variants: ["Gold Tone", "Silver Tone"],
    description:
      "A delicate pendant necklace featuring a hand-set floral motif with multicolor crystals in blush, champagne, and sage. Suspended on a fine 16\" chain with a 2\" extender. A wearable garden, always in bloom.",
    materials:
      "18K gold plated sterling silver base, hypoallergenic. Crystals: mixed cubic zirconia. Chain length: 16\" + 2\" extender.",
    shipping:
      "Free worldwide shipping on all orders. Delivered in 3–7 business days. 30-day hassle-free returns.",
    imgId: "product-flora-nectar-img-g7h8i9",
    imgId2: "product-flora-nectar-img2-j1k2l3",
    titleId: "product-flora-nectar-title",
    descId: "product-flora-nectar-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    rating: 4.9,
    reviewCount: 211,
    badge: "Bestseller",
    variants: ["Gold Tone", "Silver Tone"],
    description:
      "Satisfyingly chunky dome huggies that hug the earlobe in warm 18K gold. The smooth, polished sphere surface catches light from every angle. Sold as a pair. Perfect for everyday stacking or solo wear.",
    materials:
      "18K gold plated brass, hypoallergenic, nickel-free. Huggie diameter: 12mm. Secure click closure.",
    shipping:
      "Free worldwide shipping on all orders. Delivered in 3–7 business days. 30-day hassle-free returns.",
    imgId: "product-sphere-huggies-img-m4n5o6",
    imgId2: "product-sphere-huggies-img2-p7q8r9",
    titleId: "product-sphere-huggies-title",
    descId: "product-sphere-huggies-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    subtitle: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.7,
    reviewCount: 76,
    badge: null,
    variants: ["Gold Tone", "Silver Tone"],
    description:
      "Intricate filigree drop earrings inspired by antique lace. Each piece is hand-finished with a warm amber-gold patina that gives them an heirloom quality. Lightweight despite their presence — you'll forget you're wearing them.",
    materials:
      "18K gold plated brass with antique finish, hypoallergenic. Drop length: 35mm. Post back with butterfly closure.",
    shipping:
      "Free worldwide shipping on all orders. Delivered in 3–7 business days. 30-day hassle-free returns.",
    imgId: "product-amber-lace-img-s1t2u3",
    imgId2: "product-amber-lace-img2-v4w5x6",
    titleId: "product-amber-lace-title",
    descId: "product-amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Gift-boxed earring + necklace set",
    price: 95,
    category: "sets",
    material: "18K Gold Plated",
    rating: 5.0,
    reviewCount: 58,
    badge: "Gift Favourite",
    variants: ["Gold Tone", "Silver Tone"],
    description:
      "A curated pairing of our signature stud earrings and a matching pendant necklace, presented in a Velmora signature gift box with a satin ribbon. The perfect gift — or the perfect treat for yourself.",
    materials:
      "18K gold plated brass, hypoallergenic, nickel-free. Includes: stud earrings (8mm) + pendant necklace (16\" + 2\" extender). Presented in Velmora gift box.",
    shipping:
      "Free worldwide shipping on all orders. Delivered in 3–7 business days. 30-day hassle-free returns. Gift wrapping included.",
    imgId: "product-heirloom-set-img-y7z8a9",
    imgId2: "product-heirloom-set-img2-b1c2d3",
    titleId: "product-heirloom-set-title",
    descId: "product-heirloom-set-desc",
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (id, count = 4) =>
  products.filter((p) => p.id !== id).slice(0, count);
