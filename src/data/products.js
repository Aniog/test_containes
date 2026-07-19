// Seed product catalog for Velmora Fine Jewelry.
// `imgId` / `imgIdHover` are the application-wide unique ids used by
// the strk-img-config.json image system. Search queries are built from
// nearby text element ids, in most-specific-first order.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings", plural: "Earrings" },
  { id: "necklaces", label: "Necklaces", plural: "Necklaces" },
  { id: "huggies", label: "Huggies", plural: "Huggies" },
];

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "gold-vermeil", label: "Gold Vermeil" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    handle: "vivid-aura-cuff",
    price: 42,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.8,
    reviewCount: 124,
    shortDescription:
      "Sculptural gold ear cuff with a single crystal accent — wear it solo or stack it.",
    description:
      "A single, hand-set crystal punctuates the curved silhouette of the Vivid Aura Cuff. Crafted in 18k gold-plated brass with a brushed finish, it slides comfortably along the ear and stays put from morning meetings to late dinners. Designed to be worn without a piercing.",
    materials:
      "18k gold-plated brass, hypoallergenic titanium post, handset crystal. Free of nickel, lead and cadmium. Tarnish-resistant PVD coating.",
    care: "Avoid contact with perfume, lotion and water. Store in the suede pouch provided. Wipe gently with the included polishing cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, unworn condition. Orders ship within 1–2 business days from our studio.",
    imgId: "prod-vivid-aura-1",
    imgIdHover: "prod-vivid-aura-2",
    bestseller: true,
  },
  {
    id: "majestic-flora-necklace",
    name: "Majestic Flora Necklace",
    handle: "majestic-flora-necklace",
    price: 68,
    category: "necklaces",
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    reviewCount: 211,
    shortDescription:
      "Multicolor floral crystal pendant on a fine cable chain — a quiet statement.",
    description:
      "Inspired by old-world botanical illustrations, the Majestic Flora pendant clusters hand-set crystals in muted champagne, sage and rose. Suspended from a 16–18\" adjustable cable chain, it sits at the perfect spot below the collarbone.",
    materials:
      "18k gold-plated brass chain and setting, handset crystals, hypoallergenic and nickel-free.",
    care: "Remove before showering or sleeping. Store flat. Polish with the included cloth every few wears.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, unworn condition.",
    imgId: "prod-flora-1",
    imgIdHover: "prod-flora-2",
    bestseller: true,
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    handle: "golden-sphere-huggies",
    price: 38,
    category: "huggies",
    material: "18k-gold",
    tone: "gold",
    rating: 4.7,
    reviewCount: 358,
    shortDescription:
      "Chunky gold dome huggies with a soft brushed finish — the everyday classic.",
    description:
      "A modern take on the classic huggie. The Golden Sphere is a domed silhouette with a soft brushed finish that catches light without ever feeling loud. Hinged closure, comfortable for all-day wear.",
    materials:
      "18k gold-plated brass, hypoallergenic hinge, 12mm outer diameter.",
    care: "Remove before showering. Store in pouch. Wipe with included cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, unworn condition.",
    imgId: "prod-sphere-1",
    imgIdHover: "prod-sphere-2",
    bestseller: true,
  },
  {
    id: "amber-lace-drops",
    name: "Amber Lace Drops",
    handle: "amber-lace-drops",
    price: 54,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.8,
    reviewCount: 96,
    shortDescription:
      "Textured gold filigree drop earrings — heirloom-inspired, light as air.",
    description:
      "Filigree work, the kind that takes a steady hand and a long afternoon, lends the Amber Lace Drops their delicate silhouette. The filigree catches the light through every cut-out, and at 3 grams each they're surprisingly weightless on the ear.",
    materials:
      "18k gold-plated brass, hypoallergenic titanium post.",
    care: "Avoid perfume and water. Store flat. Polish gently with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, unworn condition.",
    imgId: "prod-amber-1",
    imgIdHover: "prod-amber-2",
    bestseller: true,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    handle: "royal-heirloom-set",
    price: 95,
    category: "earrings",
    material: "gold-vermeil",
    tone: "gold",
    rating: 5.0,
    reviewCount: 47,
    shortDescription:
      "Gift-boxed earring and necklace set — the house signature, ready to give.",
    description:
      "The Royal Heirloom Set pairs our most-loved ear silhouette with the matching pendant on an 18\" cable chain. Presented in our signature ivory jewelry box with a hand-tied ribbon and a soft card. Ready to gift — no wrapping required.",
    materials:
      "Gold vermeil (sterling silver heavily plated in 18k gold). Hypoallergenic, nickel-free.",
    care: "Remove before showering or sleeping. Store in the box. Wipe with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, unworn condition.",
    imgId: "prod-heirloom-1",
    imgIdHover: "prod-heirloom-2",
    bestseller: true,
  },
];

export function getProductByHandle(handle) {
  return PRODUCTS.find((p) => p.handle === handle) || null;
}

export function getRelatedProducts(product, count = 4) {
  if (!product) return PRODUCTS.slice(0, count);
  return PRODUCTS.filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const aSame = a.category === product.category ? 0 : 1;
      const bSame = b.category === product.category ? 0 : 1;
      return aSame - bSame;
    })
    .slice(0, count);
}

// Price range buckets used by the Collection filter.
export const PRICE_BUCKETS = [
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over-75", label: "Over $75", min: 75.01, max: Infinity },
];
