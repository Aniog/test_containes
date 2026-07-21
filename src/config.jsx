export const STRK_PROJECT_URL = 'https://www.uat.strikingly.com/api/v1/sites/63007/form_entities'
export const STRK_PROJECT_ANON_KEY = 'xx'
export const SITE_ID = '63007'
export const REQUEST_DOMAIN = 'https://www.uat.strikingly.com'
export const S3_DOMAIN = 'https://strikingly-user-asset-images-dev.s3.ap-northeast-1.amazonaws.com'

export const PRODUCTS = [
  { 
    id: "vivid-aura", 
    name: "Vivid Aura Jewels", 
    category: "Earrings", 
    price: 42, 
    imageSearch: "gold ear cuff with crystal accent luxury jewelry macro on skin", 
    imageSearch2: "gold ear cuff crystal jewelry editorial warm lighting",
    description: "A radiant gold ear cuff with shimmering crystal accents, designed to catch the light from every angle. No piercing required for this statement piece.",
    materials: "18K Gold Plated, High-Grade Zirconia Crystals",
    variants: ["Gold"]
  },
  { 
    id: "majestic-flora", 
    name: "Majestic Flora Nectar", 
    category: "Necklaces", 
    price: 68, 
    imageSearch: "multicolor floral crystal necklace gold chain jewelry editorial", 
    imageSearch2: "floral crystal necklace gold on model neck luxury",
    description: "An ethereal necklace featuring a delicate garden of multicolor floral crystals on a fine gold chain. Perfect for adding a touch of whimsy to elegant looks.",
    materials: "18K Gold Plated, Multicolor Glass Crystals, 16-18 inch adjustable chain",
    variants: ["Gold"]
  },
  { 
    id: "golden-sphere", 
    name: "Golden Sphere Huggies", 
    category: "Huggies", 
    price: 38, 
    imageSearch: "chunky gold dome huggie earrings close up jewelry editorial", 
    imageSearch2: "gold dome huggies jewelry flatlay editorial",
    description: "Modern and bold, these chunky gold dome huggies add a sophisticated sculptural element to any look. Lightweight for all-day wear.",
    materials: "18K Gold Plated Brass, Hypoallergenic",
    variants: ["Gold", "Silver"]
  },
  { 
    id: "amber-lace", 
    name: "Amber Lace Earrings", 
    category: "Earrings", 
    price: 54, 
    imageSearch: "textured gold filigree drop earrings luxury jewelry on model", 
    imageSearch2: "gold filigree earrings close up luxury editorial",
    description: "Timeless filigree craftsmanship meets modern design in these textured gold drop earrings. Inspired by vintage heirlooms.",
    materials: "18K Gold Plated, Sterling Silver Posts",
    variants: ["Gold"]
  },
  { 
    id: "royal-heirloom", 
    name: "Royal Heirloom Set", 
    category: "Sets", 
    price: 95, 
    imageSearch: "luxury jewelry gift set earring necklace gold box", 
    imageSearch2: "gold jewelry set box presentation editorial",
    description: "A perfectly curated gift set featuring our signature earrings and matching necklace in an elegant Velmora box. The ultimate gift for yourself or a loved one.",
    materials: "18K Gold Plated, Velvet Lined Gift Box",
    variants: ["Gold"]
  },
];

export const CATEGORIES = ["Earrings", "Necklaces", "Huggies", "Sets"];

export const REELS = [
  { id: 1, caption: "Effortless Elegance", imageSearch: "woman wearing gold huggie earrings closeup fashion editorial 9:16" },
  { id: 2, caption: "The Golden Hour", imageSearch: "woman wearing gold necklace sunlight accessory 9:16" },
  { id: 3, caption: "Curated Stack", imageSearch: "gold earrings multiple piercings close up editorial 9:16" },
  { id: 4, caption: "Timeless Texture", imageSearch: "gold jewelry flatlay warm lighting vertical 9:16" },
  { id: 5, caption: "Signature Shine", imageSearch: "woman wearing gold earrings editorial photography 9:16" },
];
