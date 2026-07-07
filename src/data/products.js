// Seed product data for Velmora Fine Jewelry
// Each product references a placeholder illustration key used by
// src/components/ui/JewelryArt.jsx. Swap the placeholder with real
// photography by replacing the `art` field with a remote `image` URL.

export const products = [
  {
    id: "vivid-aura",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    tone: "gold",
    price: 42,
    rating: 4.9,
    reviews: 184,
    material: "18K Gold Plated · Crystal",
    art: "earCuff",
    palette: "aubergine",
    description:
      "An architectural ear cuff, hand-set with a single warm crystal that catches the light from every angle. Worn alone or stacked, it moves with you.",
    details: [
      "18K gold-plated brass with a tarnish-resistant finish",
      "Single handset crystal, faceted for warm prismatic light",
      "No piercing required — adjusts to sit comfortably on the ear",
      "Hypoallergenic, nickel-free and lead-free",
    ],
    materials: "We plate each piece in 18K gold over a solid brass core, then seal it with an anti-tarnish coating. The result is the look and feel of fine jewelry at a price that lets you collect what you love. To keep your Velmora pieces at their best, avoid contact with perfume, sunscreen and chlorine, and store them in the suede pouch they arrive in.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery is 3–6 business days; express is 1–3. 30-day returns on unworn pieces in their original packaging — we'll email you a prepaid label.",
  },
  {
    id: "majestic-flora",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    tone: "gold",
    price: 68,
    rating: 4.8,
    reviews: 241,
    material: "18K Gold Plated · Multi-Crystal",
    art: "floralNecklace",
    palette: "midnight",
    description:
      "A garden captured in crystal — five hand-set stones in soft, painterly tones cluster on a delicate chain. A forever piece for quiet evenings and long, golden afternoons.",
    details: [
      "Five handset crystals in champagne, blush, olive, smoke and honey",
      "Adjustable 16–18\" chain with lobster clasp",
      "18K gold-plated brass, hypoallergenic",
      "Lightweight — you'll forget you're wearing it",
    ],
    materials: "We plate each piece in 18K gold over a solid brass core, then seal it with an anti-tarnish coating. The result is the look and feel of fine jewelry at a price that lets you collect what you love. To keep your Velmora pieces at their best, avoid contact with perfume, sunscreen and chlorine, and store them in the suede pouch they arrive in.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery is 3–6 business days; express is 1–3. 30-day returns on unworn pieces in their original packaging — we'll email you a prepaid label.",
  },
  {
    id: "golden-sphere",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    tone: "gold",
    price: 38,
    rating: 5.0,
    reviews: 312,
    material: "18K Gold Plated · Chunky Dome",
    art: "sphereHuggie",
    palette: "sand",
    description:
      "A modern take on the everyday huggie — softly domed, satisfyingly weighty. The kind of earring you reach for without thinking.",
    details: [
      "Chunky dome huggie, 14mm",
      "Hinged clasp with secure click closure",
      "18K gold-plated brass, hypoallergenic",
      "Designed for all-day comfort",
    ],
    materials: "We plate each piece in 18K gold over a solid brass core, then seal it with an anti-tarnish coating. The result is the look and feel of fine jewelry at a price that lets you collect what you love. To keep your Velmora pieces at their best, avoid contact with perfume, sunscreen and chlorine, and store them in the suede pouch they arrive in.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery is 3–6 business days; express is 1–3. 30-day returns on unworn pieces in their original packaging — we'll email you a prepaid label.",
  },
  {
    id: "amber-lace",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    tone: "gold",
    price: 54,
    rating: 4.9,
    reviews: 156,
    material: "18K Gold Plated · Filigree",
    art: "laceDrop",
    palette: "rosewood",
    description:
      "Filigree work inspired by heirloom lace. Each pair is hand-finished to give the openwork a warm, gold-lit glow.",
    details: [
      "Hand-finished filigree drop, 32mm",
      "Sterling silver post, 18K gold plated",
      "Lightweight hollow construction",
      "Hypoallergenic, nickel-free",
    ],
    materials: "We plate each piece in 18K gold over a solid brass core, then seal it with an anti-tarnish coating. The result is the look and feel of fine jewelry at a price that lets you collect what you love. To keep your Velmora pieces at their best, avoid contact with perfume, sunscreen and chlorine, and store them in the suede pouch they arrive in.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery is 3–6 business days; express is 1–3. 30-day returns on unworn pieces in their original packaging — we'll email you a prepaid label.",
  },
  {
    id: "royal-heirloom",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    tone: "gold",
    price: 95,
    rating: 4.9,
    reviews: 98,
    material: "18K Gold Plated · Gift Set",
    art: "giftSet",
    palette: "oxblood",
    description:
      "A matching earring and necklace set, presented in our keepsake box with a hand-written card. A ready-made heirloom, or a quiet gesture of love.",
    details: [
      "Earring and necklace sold as a curated set",
      "Pavé-set crystals with 18K gold plating",
      "Velvet-lined gift box included",
      "Hypoallergenic, lead and nickel free",
    ],
    materials: "We plate each piece in 18K gold over a solid brass core, then seal it with an anti-tarnish coating. The result is the look and feel of fine jewelry at a price that lets you collect what you love. To keep your Velmora pieces at their best, avoid contact with perfume, sunscreen and chlorine, and store them in the suede pouch they arrive in.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery is 3–6 business days; express is 1–3. 30-day returns on unworn pieces in their original packaging — we'll email you a prepaid label.",
  },
]

export const collections = [
  {
    id: "earrings",
    name: "Earrings",
    blurb: "From ear cuffs to drops",
    art: "earringsTile",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    blurb: "Layering essentials",
    art: "necklacesTile",
  },
  {
    id: "huggies",
    name: "Huggies",
    blurb: "The everyday hero",
    art: "huggiesTile",
  },
]

export const categories = ["all", "earrings", "necklaces", "huggies", "sets"]

export const priceRanges = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "Over $80", min: 80.01, max: Infinity },
]

export const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price · Low to high" },
  { id: "price-desc", label: "Price · High to low" },
  { id: "rating", label: "Top rated" },
]
