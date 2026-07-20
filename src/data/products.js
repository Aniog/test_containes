// Velmora seed product catalog.
// Image queries intentionally reference descriptive text on the page so the
// strk-img runtime can pull editorial, on-brand gold jewelry imagery.

export const products = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Jewels",
    category: "earrings",
    subcategory: "Ear Cuff",
    price: 42,
    compareAt: null,
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    tone: "gold",
    material: "18K Gold Plated · Hypoallergenic",
    short:
      "A delicate ear cuff traced with a single crystal accent — sculpted to catch the light from every angle.",
    description:
      "Designed for the everyday edit, the Vivid Aura cuff wraps the ear in a whisper of gold, anchored by a single hand-set crystal. Hand-finished in our atelier, it layers effortlessly with studs and huggies for a curated, undone look.",
    materials:
      "18K gold plated over a brass core, hypoallergenic and nickel-free. Set with a faceted cubic zirconia crystal. Solid construction — no glued components.",
    care: "Remove before showering, swimming, or applying lotion and perfume. Wipe gently with the included polishing cloth; store in the pouch to slow tarnish.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5–7 business days. 30-day returns, no questions asked.",
    colors: ["gold", "silver"],
    sizes: ["One Size"],
    inStock: true,
    imgId: "vivid-aura-cuff-main",
    imgIdAlt: "vivid-aura-cuff-alt",
    imgQuery: "[vivid-aura-cuff-desc] [vivid-aura-cuff-name] [velmora-section-title]",
    imgQueryAlt: "vivid-aura-cuff-name gold crystal ear cuff worn on ear",
  },
  {
    id: "majestic-flora-necklace",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    subcategory: "Pendant",
    price: 68,
    compareAt: null,
    rating: 4.9,
    reviews: 211,
    badge: "New",
    tone: "multicolor",
    material: "18K Gold Plated · Crystal",
    short:
      "A botanical cluster of multicolored crystals on a fine cable chain — the heirloom in the making.",
    description:
      "Inspired by wildflower gatherings at golden hour, the Majestic Flora pendant clusters hand-set crystals in soft amber, blush, and sage. Suspended on a fine 16–18\" cable chain that adjusts to your neckline.",
    materials:
      "18K gold plated brass chain and setting, faceted glass crystals in amber, blush, and sage. Lobster clasp closure with a 2\" extender.",
    care: "Avoid contact with water, perfume, and lotion. Store flat in the original pouch; polish gently with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5–7 business days. 30-day returns, no questions asked.",
    colors: ["multicolor"],
    sizes: ["16–18\" Adjustable"],
    inStock: true,
    imgId: "majestic-flora-necklace-main",
    imgIdAlt: "majestic-flora-necklace-alt",
    imgQuery: "[majestic-flora-necklace-desc] [majestic-flora-necklace-name] [velmora-section-title]",
    imgQueryAlt: "majestic-flora-necklace-name multicolor floral crystal necklace on model",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "earrings",
    subcategory: "Huggies",
    price: 38,
    compareAt: null,
    rating: 4.7,
    reviews: 308,
    badge: "Bestseller",
    tone: "gold",
    material: "18K Gold Plated · Hypoallergenic",
    short:
      "A chunky dome huggie with a satin finish — the everyday gold hoop, refined.",
    description:
      "The Golden Sphere huggie is a modern classic: a sculpted dome with a soft satin finish, hinged for easy everyday wear. Sold as a pair, the perfect anchor for any ear stack.",
    materials:
      "18K gold plated brass with a satin polish, hypoallergenic and nickel-free. Secure hinged closure.",
    care: "Remove before showering or sleeping. Wipe with a soft cloth after wear and store in the pouch to keep the satin finish bright.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5–7 business days. 30-day returns, no questions asked.",
    colors: ["gold", "silver"],
    sizes: ["One Size"],
    inStock: true,
    imgId: "golden-sphere-huggies-main",
    imgIdAlt: "golden-sphere-huggies-alt",
    imgQuery: "[golden-sphere-huggies-desc] [golden-sphere-huggies-name] [velmora-section-title]",
    imgQueryAlt: "golden-sphere-huggies-name chunky gold dome huggie earrings on model",
  },
  {
    id: "amber-lace-drops",
    name: "Amber Lace Earrings",
    category: "earrings",
    subcategory: "Drop",
    price: 54,
    compareAt: null,
    rating: 4.8,
    reviews: 97,
    badge: null,
    tone: "gold",
    material: "18K Gold Plated · Filigree",
    short:
      "Filigree drop earrings with a lacework texture — heirloom detail, modern weight.",
    description:
      "Hand-finished filigree work gives the Amber Lace drops their intricate lacework texture. The silhouette is weightless on the ear but reads as quiet statement — perfect with a slip dress or a linen shirt.",
    materials:
      "18K gold plated brass, hand-finished filigree. Lightweight post-and-butterfly back.",
    care: "Store flat in the original pouch. Avoid contact with perfume, hairspray, and water. Polish gently with a soft, dry cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5–7 business days. 30-day returns, no questions asked.",
    colors: ["gold"],
    sizes: ["One Size"],
    inStock: true,
    imgId: "amber-lace-drops-main",
    imgIdAlt: "amber-lace-drops-alt",
    imgQuery: "[amber-lace-drops-desc] [amber-lace-drops-name] [velmora-section-title]",
    imgQueryAlt: "amber-lace-drops-name textured gold filigree drop earrings on model",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    subcategory: "Set",
    price: 95,
    compareAt: 120,
    rating: 4.9,
    reviews: 64,
    badge: "Gift-Ready",
    tone: "gold",
    material: "18K Gold Plated · Gift Boxed",
    short:
      "A coordinated earring and necklace set, presented in our signature gift box.",
    description:
      "Our Royal Heirloom Set pairs a fine cable necklace with a matching pair of delicate studs — the edit we gift most. Finished in 18K gold plating, presented in a keepsake velvet box with a hand-written card.",
    materials:
      "18K gold plated brass. Cable chain 16\" with 2\" extender. Stud earrings with hypoallergenic post backs.",
    care: "Remove before showering, sleeping, or applying product. Store in the original velvet box to slow tarnish.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 5–7 business days. 30-day returns, no questions asked. Gift wrapping included.",
    colors: ["gold"],
    sizes: ["One Size"],
    inStock: true,
    imgId: "royal-heirloom-set-main",
    imgIdAlt: "royal-heirloom-set-alt",
    imgQuery: "[royal-heirloom-set-desc] [royal-heirloom-set-name] [velmora-section-title]",
    imgQueryAlt: "royal-heirloom-set-name gold earring and necklace gift set in velvet box",
  },
];

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    blurb: "Studs, drops, and cuffs to anchor every stack.",
    imgId: "category-earrings",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    blurb: "Pendants and chains, layered to your line.",
    imgId: "category-necklaces",
  },
  {
    id: "huggies",
    name: "Huggies",
    blurb: "The everyday hoop, refined.",
    imgId: "category-huggies",
  },
];

export const filtersConfig = {
  category: [
    { id: "all", label: "All Pieces" },
    { id: "earrings", label: "Earrings" },
    { id: "necklaces", label: "Necklaces" },
    { id: "huggies", label: "Huggies" },
  ],
  price: [
    { id: "all", label: "All Prices" },
    { id: "u50", label: "Under $50", min: 0, max: 50 },
    { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
    { id: "80up", label: "$80 & Up", min: 80, max: Infinity },
  ],
  material: [
    { id: "all", label: "All Materials" },
    { id: "18k-gold", label: "18K Gold Plated" },
    { id: "hypoallergenic", label: "Hypoallergenic" },
    { id: "crystal", label: "Crystal" },
  ],
};

export const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      // Same category first
      if (a.category === current.category && b.category !== current.category) return -1;
      if (b.category === current.category && a.category !== current.category) return 1;
      return 0;
    })
    .slice(0, limit);
}
