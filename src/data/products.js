// ---------------------------------------------------------------------------
// Velmora seed catalogue
// All imagery is sourced from Unsplash (free editorial photography).
// Each product has 3 curated photos so the hover-swap looks intentional.
// ---------------------------------------------------------------------------

const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    tagline: "Statement drops and refined studs",
    image: u("photo-1535632787350-4e68ef0ac584", 900),
  },
  {
    id: "necklaces",
    name: "Necklaces",
    tagline: "Layered, delicate, considered",
    image: u("photo-1599643478518-a784e5dc4c8f", 900),
  },
  {
    id: "huggies",
    name: "Huggies",
    tagline: "Everyday gold, perfected",
    image: u("photo-1631982690223-8aa4be0a2497", 900),
  },
];

export const products = [
  {
    id: "vivid-aura-jewels",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18K Gold Plated · Crystal",
    price: 42,
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    accent: "Crystal detail",
    description:
      "A whisper of light at the lobe. The Vivid Aura is a sculpted gold ear cuff accented with a single hand-set crystal — designed to catch the sun without ever shouting.",
    details: [
      "Hand-cast brass core, 18K gold plated",
      "Lead-free, nickel-free, hypoallergenic",
      "Lightweight sculpted silhouette for all-day wear",
      "Single clip-cuff construction — no piercing required",
    ],
    care: [
      "Store in the supplied velvet pouch",
      "Avoid contact with perfume, lotion, and water",
      "Wipe gently with a soft dry cloth after wear",
    ],
    images: [
      u("photo-1535632787350-4e68ef0ac584", 1200),
      u("photo-1611652022419-a9419f74343d", 1200),
      u("photo-1602173574767-37ac01994b2a", 1200),
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "champagne" },
      { id: "silver", label: "Silver", tone: "platinum" },
    ],
    inStock: true,
  },
  {
    id: "majestic-flora-nectar",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "18K Gold Plated · Crystal",
    price: 68,
    rating: 4.8,
    reviews: 94,
    badge: "New",
    accent: "Multicolor crystal",
    description:
      "An heirloom in the making. The Majestic Flora Nectar suspends a hand-arranged bouquet of multicolored crystals on a fine 18K gold-plated chain — botanical, romantic, quietly opulent.",
    details: [
      "Fine 18K gold-plated brass chain, 16\" + 2\" extender",
      "Hand-set Swarovski-style crystal cluster",
      "Lobster-claw clasp with branded tag",
      "Hypoallergenic and tarnish-resistant plating",
    ],
    care: [
      "Remove before showering or sleeping",
      "Lay flat in the jewelry box to protect the cluster",
      "Use the polishing cloth monthly to maintain the finish",
    ],
    images: [
      u("photo-1599643478518-a784e5dc4c8f", 1200),
      u("photo-1602173574767-37ac01994b2a", 1200),
      u("photo-1535632787350-4e68ef0ac584", 1200),
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "champagne" },
    ],
    inStock: true,
  },
  {
    id: "golden-sphere-huggies",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18K Gold Plated",
    price: 38,
    rating: 4.9,
    reviews: 312,
    badge: "Bestseller",
    accent: "Chunky dome",
    description:
      "A confident dome huggie with the weight of fine jewelry. The Golden Sphere is polished to a soft sheen that catches candlelight — your new everyday signature.",
    details: [
      "18K gold-plated brass with hinged click-top closure",
      "10mm dome silhouette — substantial without heavy",
      "Hypoallergenic post and clasp",
      "Designed for sleeping, showering, and stacking",
    ],
    care: [
      "Rinse with lukewarm water and mild soap weekly",
      "Pat dry thoroughly before storing",
      "Avoid chlorine and harsh chemical contact",
    ],
    images: [
      u("photo-1631982690223-8aa4be0a2497", 1200),
      u("photo-1605100804763-247f67b3557e", 1200),
      u("photo-1535632787350-4e68ef0ac584", 1200),
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "champagne" },
      { id: "silver", label: "Silver", tone: "platinum" },
    ],
    inStock: true,
  },
  {
    id: "amber-lace-earrings",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18K Gold Plated",
    price: 54,
    rating: 4.7,
    reviews: 76,
    badge: "Editor's Pick",
    accent: "Filigree drop",
    description:
      "Filigree lace, distilled into metal. The Amber Lace drops are a study in negative space — light pours through the openwork to fall in delicate gold patterns on the neck.",
    details: [
      "Hand-finished filigree brass, 18K gold plated",
      "Lightweight post-back construction",
      "45mm drop — sits just below the jawline",
      "Designed in studio, hand-finished in small batches",
    ],
    care: [
      "Store flat to preserve the filigree structure",
      "Polish only with the included suede cloth",
      "Avoid bending the openwork when removing",
    ],
    images: [
      u("photo-1602173574767-37ac01994b2a", 1200),
      u("photo-1611652022419-a9419f74343d", 1200),
      u("photo-1599643478518-a784e5dc4c8f", 1200),
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "champagne" },
    ],
    inStock: true,
  },
  {
    id: "royal-heirloom-set",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    material: "18K Gold Plated · Gift-Boxed",
    price: 95,
    rating: 5.0,
    reviews: 58,
    badge: "Gift-Ready",
    accent: "Earring + necklace set",
    description:
      "A study in considered gifting. The Royal Heirloom Set pairs a sculpted drop earring with its matching pendant, presented in our signature cream jewelry box tied with a champagne silk ribbon.",
    details: [
      "Matching 18K gold-plated earring and pendant",
      "Includes 18\" cable chain with 2\" extender",
      "Arrives in a magnetic gift box with care card",
      "Free handwritten note available at checkout",
    ],
    care: [
      "Use the anti-tarnish strip included in the box",
      "Wipe pieces together to maintain a matched finish",
      "Reuse the gift box for safe long-term storage",
    ],
    images: [
      u("photo-1605100804763-247f67b3557e", 1200),
      u("photo-1631982690223-8aa4be0a2497", 1200),
      u("photo-1535632787350-4e68ef0ac584", 1200),
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "champagne" },
    ],
    inStock: true,
  },
];

export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug);

export const getRelatedProducts = (product, count = 4) =>
  products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const sameCategoryA = a.category === product.category ? 0 : 1;
      const sameCategoryB = b.category === product.category ? 0 : 1;
      return sameCategoryA - sameCategoryB;
    })
    .slice(0, count);

export const getBestsellers = () =>
  products.filter((p) => p.badge?.toLowerCase().includes("bestseller"));

export const priceBounds = () => {
  const prices = products.map((p) => p.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
};