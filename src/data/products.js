export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    short:
      "A sculptural gold ear cuff traced with a single row of brilliant crystals — no piercing required.",
    description:
      "The Vivid Aura Jewels cuff wraps the ear in a gentle arc of 18k gold-plated brass, finished with hand-set crystals that catch the light with every turn. Designed to be worn alone as a quiet statement or layered with your favorite huggies, it slips on comfortably and stays secure from morning to midnight.",
    materials:
      "18k gold plating over recycled brass. AAA-grade cubic zirconia crystals. Nickel-free and hypoallergenic. To care for your piece, avoid water, perfume, and lotions; wipe gently with the soft pouch provided and store away from humidity.",
    images: ["cuff", "worn", "detail"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 89,
    badge: "New",
    short:
      "A blooming strand of multicolor floral crystals suspended from a fine gold chain.",
    description:
      "Majestic Flora Nectar gathers hand-set floral crystals in honey, blush, and champagne tones along a delicate 18k gold-plated chain. Each stone is cut to mimic petals in full bloom, creating a necklace that feels gathered from a garden at golden hour. Adjustable from 16 to 18 inches for the perfect drape.",
    materials:
      "18k gold plating over recycled brass. Multicolor AAA cubic zirconia. 16–18 inch adjustable chain with lobster clasp. Nickel-free and hypoallergenic. Keep dry, store flat in the provided pouch, and polish with a soft cloth.",
    images: ["necklace", "worn", "detail"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviews: 212,
    badge: "Bestseller",
    short:
      "Chunky domed huggies in polished gold — the everyday pair you will never take off.",
    description:
      "The Golden Sphere Huggies are our love letter to the perfect everyday hoop. A softly domed silhouette in high-polish 18k gold plating hugs the lobe with satisfying weight, while the hinged closure clicks shut securely. Wear them solo for minimal polish or stack them with cuffs and studs.",
    materials:
      "18k gold plating over recycled brass. Hinged click closure. 12mm diameter. Nickel-free and hypoallergenic. Avoid water and perfume; wipe with a soft cloth after wear.",
    images: ["huggies", "worn", "detail"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviews: 67,
    badge: null,
    short:
      "Textured filigree drops that move like lace and glow like candlelight.",
    description:
      "Amber Lace Earrings are cast from vintage lace molds, giving each drop an intricate filigree texture that flickers in warm light. Suspended from comfortable lever-back hooks, they sway gracefully with every movement — an heirloom feel, made for modern evenings.",
    materials:
      "18k gold plating over recycled brass with antiqued finish. Lever-back closures. 34mm drop length. Nickel-free and hypoallergenic. Store in pouch; avoid moisture and hairspray.",
    images: ["drops", "worn", "detail"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    rating: 5.0,
    reviews: 45,
    badge: "Gift Ready",
    short:
      "A gift-boxed pairing of crystal drops and a matching pendant — made to be given.",
    description:
      "The Royal Heirloom Set arrives in our signature velvet-lined gift box: a pair of crystal-tipped drop earrings and a matching pendant necklace, designed to be worn together or treasured separately. Each set includes a hand-stamped keepsake card and a polishing cloth, ready for the moment you give it away — or keep it.",
    materials:
      "18k gold plating over recycled brass. AAA cubic zirconia. Necklace adjustable 16–18 inches; earrings with secure posts. Nickel-free and hypoallergenic. Presented in a velvet-lined gift box with care card.",
    images: ["set", "box", "detail"],
  },
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

export const formatPrice = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
