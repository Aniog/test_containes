// Seed catalog for Velmora Fine Jewelry.
// Imagery uses Unsplash via a deterministic search-friendly URL pattern.
// When swapping in real photography, replace `images` arrays with local asset paths.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    tagline: "Crystal-Accent Ear Cuff",
    price: 42,
    category: "earrings",
    material: "18k-gold",
    rating: 4.9,
    reviewCount: 128,
    description:
      "An architectural ear cuff, hand-finished in 18K gold plate and set with a single hand-cut crystal. Designed to hug the cartilage without a piercing — the modern heirloom, made effortless.",
    details: [
      "18K gold-plated brass with a hand-cut crystal accent",
      "No piercing required — gentle cartilage fit",
      "Hypoallergenic, nickel-free, lead-free",
      "Sold as a single cuff",
    ],
    care: [
      "Avoid contact with perfume, lotion and water",
      "Store in the pouch provided",
      "Wipe gently with the included polishing cloth",
    ],
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    ],
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#c9a974" },
      { id: "silver", label: "Sterling Silver", swatch: "#d8d4cc" },
    ],
    isBestseller: true,
    colors: ["warm-gold-on-dark"],
  },
  {
    id: "majestic-flora-necklace",
    name: "Majestic Flora Necklace",
    tagline: "Multicolor Floral Crystal Pendant",
    price: 68,
    category: "necklaces",
    material: "18k-gold",
    rating: 4.8,
    reviewCount: 96,
    description:
      "A botanical reverie. Faceted crystals in soft amber, sage and blush cluster around a hand-formed gold bloom — each piece catching light differently, every necklace one-of-a-kind in feeling.",
    details: [
      "18K gold-plated brass chain, 16\" with 2\" extender",
      "Faceted multicolor crystal pendant",
      "Lobster clasp closure",
      "Hypoallergenic and nickel-free",
    ],
    care: [
      "Remove before showering or swimming",
      "Lay flat to store; avoid tangling",
      "Polish with a soft, dry cloth",
    ],
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80",
    ],
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#c9a974" },
    ],
    isBestseller: true,
    colors: ["multicolor-crystals"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky Dome Huggie Earrings",
    price: 38,
    category: "huggies",
    material: "18k-gold",
    rating: 4.9,
    reviewCount: 214,
    description:
      "A modern take on the everyday huggie. Sculptural, weighty, polished to a mirror finish — the earring you'll reach for before anything else.",
    details: [
      "18K gold-plated brass, hollow-form construction",
      "Inner diameter: 8mm; sold as a pair",
      "Hinged click closure for secure fit",
      "Hypoallergenic and tarnish-resistant coating",
    ],
    care: [
      "Remove before sleeping and showering",
      "Wipe with the included cloth after wear",
      "Store dry in the original pouch",
    ],
    images: [
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1620656798932-902f7fc28b3f?auto=format&fit=crop&w=900&q=80",
    ],
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#c9a974" },
      { id: "silver", label: "Sterling Silver", swatch: "#d8d4cc" },
    ],
    isBestseller: true,
    colors: ["solid-gold"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured Gold Filigree Drops",
    price: 54,
    category: "earrings",
    material: "18k-gold",
    rating: 4.7,
    reviewCount: 71,
    description:
      "Inspired by antique lace, reimagined in warm gold. Each drop is delicately filigreed by hand, casting the softest shadow — a whisper of an earring that speaks volumes.",
    details: [
      "18K gold-plated brass, filigree detail",
      "Drop length: 1.5\"; lightweight for all-day wear",
      "Post-and-butterfly closure",
      "Hypoallergenic and nickel-free",
    ],
    care: [
      "Store flat to preserve the filigree",
      "Avoid contact with chemicals and humidity",
      "Polish gently with a soft cloth",
    ],
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80",
    ],
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#c9a974" },
    ],
    isBestseller: true,
    colors: ["filigree-gold"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-Boxed Earring & Necklace Set",
    price: 95,
    category: "sets",
    material: "18k-gold",
    rating: 5.0,
    reviewCount: 52,
    description:
      "Our most-loved earring paired with a delicate chain — presented together in our signature linen-lined box. The heirloom in the making, ready to give or to keep.",
    details: [
      "18K gold-plated brass throughout",
      "Set includes: Golden Sphere Huggies + delicate 16\" chain with pendant",
      "Presented in our linen-lined gift box",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    care: [
      "Remove before showering, swimming or sleeping",
      "Wipe with included polishing cloth",
      "Store in the original gift box between wears",
    ],
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
    ],
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#c9a974" },
    ],
    isBestseller: true,
    colors: ["gold-set"],
  },
];

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id);
export const getBestsellers = () => PRODUCTS.filter((p) => p.isBestseller);
export const getRelated = (product, limit = 4) =>
  PRODUCTS.filter((p) => p.id !== product.id).slice(0, limit);