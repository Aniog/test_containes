export const seedProducts = [
  {
    id: '1',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    images: {
      primary: "[vivid-aura-title] [vivid-aura-desc] jewelry gold crystal ear cuff close-up",
      hover: "[vivid-aura-title] [vivid-aura-desc] gold crystal ear cuff worn by model",
      gallery: [
        "[vivid-aura-title] jewelry gold crystal ear cuff close-up",
        "[vivid-aura-title] gold crystal ear cuff worn by model",
        "[vivid-aura-title] gold crystal ear cuff detail shot"
      ]
    },
    imgIdBase: "vivid-aura",
    slug: 'vivid-aura-jewels',
    description: 'A striking gold ear cuff featuring a delicate crystal accent. Adds a touch of editorial elegance without the need for a piercing.',
    rating: 4.8,
    reviews: 24,
    colors: ['Gold', 'Silver'],
    isBestseller: true
  },
  {
    id: '2',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    images: {
      primary: "[majestic-flora-title] [majestic-flora-desc] floral crystal gold necklace pendant",
      hover: "[majestic-flora-title] [majestic-flora-desc] floral crystal gold necklace worn on neck",
      gallery: [
        "[majestic-flora-title] floral crystal gold necklace pendant",
         "[majestic-flora-title] floral crystal gold necklace worn on neck",
         "[majestic-flora-title] floral crystal gold necklace close-up"
      ]
    },
    imgIdBase: "majestic-flora",
    slug: 'majestic-flora-nectar',
    description: 'An intricate necklace showcasing multicolor floral crystals set in 18K gold vermeil. A statement piece that blooms with vibrant elegance.',
    rating: 5.0,
    reviews: 42,
    colors: ['Gold'],
    isBestseller: true
  },
  {
    id: '3',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    material: '14K Gold Plated',
    images: {
      primary: "[golden-sphere-title] [golden-sphere-desc] chunky gold dome huggie earrings",
      hover: "[golden-sphere-title] [golden-sphere-desc] chunky gold dome huggies worn on ear",
      gallery: [
        "[golden-sphere-title] chunky gold dome huggie earrings",
         "[golden-sphere-title] chunky gold dome huggies worn on ear"
      ]
    },
    imgIdBase: "golden-sphere",
    slug: 'golden-sphere-huggies',
    description: 'Chunky, sculpted dome huggies that reflect light beautifully. The perfect foundational piece for your everyday ear stack.',
    rating: 4.9,
    reviews: 89,
    colors: ['Gold', 'Silver'],
    isBestseller: true
  },
  {
    id: '4',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    images: {
      primary: "[amber-lace-title] [amber-lace-desc] textured gold filigree drop earrings",
      hover: "[amber-lace-title] [amber-lace-desc] textured gold filigree drop earrings on model",
      gallery: [
         "[amber-lace-title] textured gold filigree drop earrings",
         "[amber-lace-title] textured gold filigree drop earrings on model"
      ]
    },
    imgIdBase: "amber-lace",
    slug: 'amber-lace-earrings',
    description: 'Vintage-inspired drop earrings featuring intricate gold filigree work. Warm, textured, and deeply romantic.',
    rating: 4.7,
    reviews: 18,
    colors: ['Gold'],
    isBestseller: true
  },
  {
    id: '5',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    material: '18K Gold Plated',
    images: {
      primary: "[heirloom-set-title] [heirloom-set-desc] gold earring and necklace set in gift box",
      hover: "[heirloom-set-title] [heirloom-set-desc] gold earring and necklace set worn",
      gallery: [
         "[heirloom-set-title] gold earring and necklace set in gift box",
         "[heirloom-set-title] gold earring and necklace set worn detail"
      ]
    },
    imgIdBase: "heirloom-set",
    slug: 'royal-heirloom-set',
    description: 'Our signature gifting experience. A perfectly paired necklace and earring set arriving in an elegant keepsake box.',
    rating: 4.9,
    reviews: 35,
    colors: ['Gold', 'Silver'],
    isBestseller: true
  },
  {
    id: '6',
    name: 'Twilight Pearl Drop',
    price: 48,
    category: 'Earrings',
    material: '18K Gold Plated & Pearl',
    images: {
      primary: "[twilight-pearl-title] pearl drop gold earrings",
      hover: "[twilight-pearl-title] pearl drop gold earrings worn",
      gallery: [
         "[twilight-pearl-title] pearl drop gold earrings close-up"
      ]
    },
    imgIdBase: "twilight-pearl",
    slug: 'twilight-pearl-drop',
    description: 'Luminous freshwater pearls suspended from delicate gold chains. A modern take on classic pearl elegance.',
    rating: 4.6,
    reviews: 12,
    colors: ['Gold'],
    isBestseller: false
  }
];

export const ugcData = [
  {
    id: 'ugc1',
    image: "jewelry UGC woman wearing gold necklace 9:16 editorial",
    imgIdBase: "ugc-1",
    caption: "@emilywears in the Majestic Flora Nectar"
  },
  {
    id: 'ugc2',
    image: "jewelry UGC close up ear stack gold huggies ear cuff 9:16 editorial",
    imgIdBase: "ugc-2",
    caption: "The ultimate stack. Featuring Golden Sphere Huggies."
  },
  {
    id: 'ugc3',
    image: "jewelry UGC woman in sunlight wearing gold earrings 9:16 editorial",
    imgIdBase: "ugc-3",
    caption: "Sunlit mornings with Amber Lace."
  },
  {
    id: 'ugc4',
    image: "jewelry UGC close up neck gold chain necklace 9:16 editorial",
    imgIdBase: "ugc-4",
    caption: "Layered to perfection."
  },
  {
    id: 'ugc5',
    image: "jewelry UGC unboxing gold jewelry gift box 9:16 editorial",
    imgIdBase: "ugc-5",
    caption: "Unboxing the Royal Heirloom Set."
  }
];
