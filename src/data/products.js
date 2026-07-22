export const placeholderSrc =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export const categories = [
  { id: "earrings", name: "Earrings", slug: "earrings" },
  { id: "necklaces", name: "Necklaces", slug: "necklaces" },
  { id: "huggies", name: "Huggies", slug: "huggies" },
];

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    price: 42,
    originalPrice: null,
    category: "earrings",
    tags: ["ear cuff", "crystal", " bestseller"],
    rating: 4.8,
    reviewCount: 124,
    shortDescription:
      "A sculptural gold ear cuff finished with a single sparkling crystal accent — no piercing required.",
    description:
      "The Vivid Aura Jewels ear cuff is designed to catch light from every angle. Hand-polished 18k gold-plated brass hugs the ear with a secure, adjustable fit, while a petite crystal adds just the right amount of brilliance. Wear it solo or stacked for a modern ear story.",
    materials: "18k gold-plated brass, cubic zirconia accent. Nickel-free and hypoallergenic.",
    care: "Avoid contact with perfumes, lotions, and water. Store in a dry pouch and polish gently with a soft cloth.",
    images: [
      {
        imgId: "product-vivid-aura-1",
        query: "[product-vivid-aura-title] gold ear cuff crystal warm neutral editorial",
        ratio: "4x5",
        width: 800,
      },
      {
        imgId: "product-vivid-aura-2",
        query: "[product-vivid-aura-title] gold ear cuff worn on ear",
        ratio: "4x5",
        width: 800,
      },
    ],
    titleId: "product-vivid-aura-title",
    descId: "product-vivid-aura-desc",
    variants: ["Gold", "Silver"],
    inStock: true,
    isBestseller: true,
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    price: 68,
    originalPrice: 78,
    category: "necklaces",
    tags: ["necklace", "floral", "crystal", "colorful"],
    rating: 4.9,
    reviewCount: 89,
    shortDescription:
      "A delicate strand of multicolor floral crystals suspended from a refined gold chain.",
    description:
      "Majestic Flora Nectar brings garden-inspired romance to your neckline. Each handset crystal petal reflects soft hues of blush, champagne, and violet, set against a warm 18k gold-plated chain. Perfect for layering or as a standalone statement.",
    materials: "18k gold-plated brass chain, handset glass crystals, zinc-free alloy settings.",
    care: "Wipe after wear. Store flat to prevent tangling. Remove before showering or swimming.",
    images: [
      {
        imgId: "product-majestic-flora-1",
        query: "[product-majestic-flora-title] multicolor floral crystal necklace gold chain",
        ratio: "4x5",
        width: 800,
      },
      {
        imgId: "product-majestic-flora-2",
        query: "[product-majestic-flora-title] floral crystal necklace on model",
        ratio: "4x5",
        width: 800,
      },
    ],
    titleId: "product-majestic-flora-title",
    descId: "product-majestic-flora-desc",
    variants: ["Gold"],
    inStock: true,
    isBestseller: true,
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    price: 38,
    originalPrice: null,
    category: "huggies",
    tags: ["huggies", "gold", "minimal"],
    rating: 4.7,
    reviewCount: 156,
    shortDescription:
      "Chunky gold dome huggies with a polished, mirror-like finish for everyday luxury.",
    description:
      "The Golden Sphere Huggies strike the balance between bold and wearable. Their chunky dome silhouette is hollowed for comfort and finished in high-shine 18k gold plating. The hinge closure clicks securely into place.",
    materials: "18k gold-plated brass, surgical steel posts. Lightweight hollow construction.",
    care: "Clean with a soft, dry cloth. Avoid exposure to harsh chemicals and prolonged moisture.",
    images: [
      {
        imgId: "product-golden-sphere-1",
        query: "[product-golden-sphere-title] chunky gold dome huggie earrings",
        ratio: "4x5",
        width: 800,
      },
      {
        imgId: "product-golden-sphere-2",
        query: "[product-golden-sphere-title] gold huggie earrings worn",
        ratio: "4x5",
        width: 800,
      },
    ],
    titleId: "product-golden-sphere-title",
    descId: "product-golden-sphere-desc",
    variants: ["Gold", "Silver"],
    inStock: true,
    isBestseller: true,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    price: 54,
    originalPrice: null,
    category: "earrings",
    tags: ["drop earrings", "filigree", "textured"],
    rating: 4.9,
    reviewCount: 72,
    shortDescription:
      "Textured gold filigree drops inspired by vintage lace, finished with a modern edge.",
    description:
      "Amber Lace Earrings are a love letter to old-world craftsmanship. Intricate filigree patterns are cast in lightweight gold-plated metal and finished with a soft brushed texture that catches candlelight beautifully.",
    materials: "18k gold-plated brass, sterling silver posts. Nickel-free.",
    care: "Keep away from moisture and cosmetics. Store hanging or flat to maintain shape.",
    images: [
      {
        imgId: "product-amber-lace-1",
        query: "[product-amber-lace-title] textured gold filigree drop earrings",
        ratio: "4x5",
        width: 800,
      },
      {
        imgId: "product-amber-lace-2",
        query: "[product-amber-lace-title] gold filigree drop earrings on model",
        ratio: "4x5",
        width: 800,
      },
    ],
    titleId: "product-amber-lace-title",
    descId: "product-amber-lace-desc",
    variants: ["Gold"],
    inStock: true,
    isBestseller: true,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    price: 95,
    originalPrice: 120,
    category: "earrings",
    tags: ["set", "gift", "earrings", "necklace"],
    rating: 5.0,
    reviewCount: 48,
    shortDescription:
      "A gift-boxed pairing of signature earrings and a delicate necklace — ready to give.",
    description:
      "The Royal Heirloom Set is our most giftable offering. It includes a pair of our best-selling huggie earrings and a matching pendant necklace, both nestled in a soft-touch Velmora gift box with a handwritten-style card.",
    materials: "18k gold-plated brass, cubic zirconia details. Includes gift box and care card.",
    care: "Follow individual care instructions included in the box. Keep set stored together to prevent scratches.",
    images: [
      {
        imgId: "product-royal-heirloom-1",
        query: "[product-royal-heirloom-title] gold earring necklace gift set",
        ratio: "4x5",
        width: 800,
      },
      {
        imgId: "product-royal-heirloom-2",
        query: "[product-royal-heirloom-title] gold jewelry gift box set",
        ratio: "4x5",
        width: 800,
      },
    ],
    titleId: "product-royal-heirloom-title",
    descId: "product-royal-heirloom-desc",
    variants: ["Gold", "Silver"],
    inStock: true,
    isBestseller: true,
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getRelatedProducts = (currentId, limit = 4) =>
  products.filter((p) => p.id !== currentId).slice(0, limit);
