export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    price: 42,
    category: "earrings",
    material: "gold",
    description: "An exquisite ear cuff adorned with a delicate crystal accent, designed to catch the light with every movement. Crafted for the modern woman who appreciates subtle luxury.",
    materials_care: "18K gold plated over brass. Hypoallergenic. Avoid contact with water, perfume, and lotions. Store in provided pouch when not wearing.",
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop",
    ],
    variants: [
      { name: "Gold Tone", value: "gold" },
      { name: "Silver Tone", value: "silver" },
    ],
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    price: 68,
    category: "necklaces",
    material: "gold",
    description: "A breathtaking floral crystal necklace featuring multicolor stones set in a delicate gold chain. Each petal is carefully crafted to create a garden-inspired masterpiece.",
    materials_care: "18K gold plated with Austrian crystals. Chain length: 18 inches with 2 inch extender. Clean with soft cloth only.",
    rating: 4.9,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop",
    ],
    variants: [
      { name: "Gold Tone", value: "gold" },
      { name: "Silver Tone", value: "silver" },
    ],
    badge: "New",
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    price: 38,
    category: "huggies",
    material: "gold",
    description: "Chunky gold dome huggie earrings that sit perfectly on the earlobe. A timeless everyday essential with a modern sculptural twist.",
    materials_care: "18K gold plated over surgical steel. Hypoallergenic and nickel-free. Diameter: 12mm. Post back closure.",
    rating: 4.7,
    reviews: 203,
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop",
    ],
    variants: [
      { name: "Gold Tone", value: "gold" },
      { name: "Silver Tone", value: "silver" },
    ],
    badge: null,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    description: "Textured gold filigree drop earrings inspired by vintage lacework. These statement pieces add an editorial touch to any ensemble.",
    materials_care: "18K gold plated over brass. Drop length: 2.5 inches. French hook closure. Store flat to maintain shape.",
    rating: 4.6,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop",
    ],
    variants: [
      { name: "Gold Tone", value: "gold" },
      { name: "Silver Tone", value: "silver" },
    ],
    badge: null,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    price: 95,
    category: "sets",
    material: "gold",
    description: "A beautifully gift-boxed set featuring matching earrings and necklace. The perfect present for someone special — or a treat for yourself.",
    materials_care: "18K gold plated over brass. Set includes: stud earrings (8mm) and pendant necklace (16 inch chain). Presented in signature velvet box.",
    rating: 5.0,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop",
    ],
    variants: [
      { name: "Gold Tone", value: "gold" },
      { name: "Silver Tone", value: "silver" },
    ],
    badge: "Gift Set",
  },
];

export const categories = [
  { id: "earrings", name: "Earrings", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=800&fit=crop" },
  { id: "necklaces", name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop" },
  { id: "huggies", name: "Huggies", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop" },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The quality is incredible for the price. I've worn my Vivid Aura cuffs every day for months and they still look brand new.",
  },
  {
    id: 2,
    name: "Emma L.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift for my sister. She absolutely loved it — the packaging is so beautiful and luxurious.",
  },
  {
    id: 3,
    name: "Jessica R.",
    rating: 5,
    text: "Finally found jewelry that feels premium without the premium price tag. The Golden Sphere Huggies are my new everyday staples.",
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop",
    caption: "Everyday elegance",
    handle: "@sarahstyle",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop",
    caption: "Golden hour glow",
    handle: "@emmajewels",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=700&fit=crop",
    caption: "Stacked & styled",
    handle: "@jessicawears",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop",
    caption: "Necklace layering 101",
    handle: "@luxelife",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=700&fit=crop",
    caption: "Gift season ready",
    handle: "@giftedbyvel",
  },
];
