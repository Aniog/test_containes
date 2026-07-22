export const CATEGORIES = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    short: "A sculptural gold ear cuff traced with a single row of brilliant crystals — no piercing required.",
    description:
      "The Vivid Aura Jewels cuff hugs the ear in a sweep of warm 18K gold plating, finished with a channel of hand-set crystals that catch the light with every turn. Designed to slip on gently and stay put from morning meetings to midnight.",
    materials:
      "18K gold plated over recycled brass. Hand-set cubic zirconia crystals. Hypoallergenic, nickel- and lead-free. To care: avoid water, perfume and lotions; wipe gently with the soft pouch provided.",
    tones: ["Gold", "Silver"],
    imgIds: {
      primary: "prod-vivid-aura-a1",
      hover: "prod-vivid-aura-b2",
      gallery: ["prod-vivid-aura-a1", "prod-vivid-aura-g3", "prod-vivid-aura-g4", "prod-vivid-aura-b2"],
    },
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    rating: 4.9,
    reviews: 86,
    badge: "New",
    short: "A delicate chain blooming with multicolor floral crystals — a garden captured in gold.",
    description:
      "Majestic Flora Nectar gathers hand-set crystals in soft botanical hues along a fine 18K gold plated chain. Each petal is placed by hand, so no two necklaces catch the light in quite the same way. Adjustable length for effortless layering.",
    materials:
      "18K gold plated over recycled brass. Multicolor hand-set crystals. 16–18 in adjustable chain with lobster clasp. Hypoallergenic, nickel- and lead-free. Store flat in the Velmora pouch away from humidity.",
    tones: ["Gold", "Silver"],
    imgIds: {
      primary: "prod-flora-nectar-a1",
      hover: "prod-flora-nectar-b2",
      gallery: ["prod-flora-nectar-a1", "prod-flora-nectar-g3", "prod-flora-nectar-g4", "prod-flora-nectar-b2"],
    },
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    rating: 4.7,
    reviews: 212,
    badge: "Bestseller",
    short: "Chunky dome huggies in polished gold — the everyday pair you will never take off.",
    description:
      "Golden Sphere Huggies are our signature dome: softly rounded, mirror-polished and perfectly weighted to feel substantial without pulling. Hinged closure clicks securely shut. Made for first holes, second holes, and every stack in between.",
    materials:
      "18K gold plated over recycled brass. Hinged click closure. Hypoallergenic, nickel- and lead-free. To care: remove before swimming or showering; polish with a dry soft cloth.",
    tones: ["Gold", "Silver"],
    imgIds: {
      primary: "prod-sphere-huggies-a1",
      hover: "prod-sphere-huggies-b2",
      gallery: ["prod-sphere-huggies-a1", "prod-sphere-huggies-g3", "prod-sphere-huggies-g4", "prod-sphere-huggies-b2"],
    },
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    rating: 4.8,
    reviews: 97,
    badge: null,
    short: "Textured filigree drops that move like lace and glow like candlelight.",
    description:
      "Amber Lace Earrings are cast from vintage-inspired filigree, each openwork curve catching warm light as you move. Feather-light on the lobe with a graceful drop that frames the face — evening elegance that still works with denim.",
    materials:
      "18K gold plated over recycled brass. Secure post backs. Hypoallergenic, nickel- and lead-free. To care: keep dry, store hanging or flat to protect the filigree.",
    tones: ["Gold", "Silver"],
    imgIds: {
      primary: "prod-amber-lace-a1",
      hover: "prod-amber-lace-b2",
      gallery: ["prod-amber-lace-a1", "prod-amber-lace-g3", "prod-amber-lace-g4", "prod-amber-lace-b2"],
    },
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    rating: 5.0,
    reviews: 63,
    badge: "Gift Ready",
    short: "A gift-boxed earring and necklace pairing, made to be given — or kept.",
    description:
      "The Royal Heirloom Set pairs our most-loved drop earrings with a matching pendant necklace, presented in the signature Velmora gift box with a care pouch and note card. A complete look in one gesture, ready for birthdays, anniversaries and just-because.",
    materials:
      "18K gold plated over recycled brass. Hand-set crystal accents. Necklace 16–18 in adjustable. Hypoallergenic, nickel- and lead-free. Arrives in a keepsake gift box with pouch and blank note card.",
    tones: ["Gold", "Silver"],
    imgIds: {
      primary: "prod-heirloom-set-a1",
      hover: "prod-heirloom-set-b2",
      gallery: ["prod-heirloom-set-a1", "prod-heirloom-set-g3", "prod-heirloom-set-g4", "prod-heirloom-set-b2"],
    },
  },
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

export const relatedProducts = (product, count = 4) =>
  PRODUCTS.filter((p) => p.id !== product.id).slice(0, count);

export const formatPrice = (value) => `$${value.toFixed(0)}`;
