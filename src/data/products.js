// Seed product data for Velmora Fine Jewelry
// Images are populated at runtime via the strk-img system using data-strk-img attributes.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'Ear Cuff',
    price: 42,
    rating: 4.8,
    reviews: 126,
    tone: 'Gold',
    shortDesc:
      'A sculptural gold ear cuff crowned with a single crystal accent — no piercing required.',
    description:
      'The Vivid Aura ear cuff is an everyday statement piece, hand-finished in 18K gold plating over sterling silver. A hand-set crystal catches the light with every turn, while the open cuff design adjusts gently to hug the ear. Wear it solo or stacked with huggies for a curated ear.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.',
    care: 'Avoid contact with water, perfume, and lotion. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns for a full refund.',
    imgId: 'p-vivid-aura-a1',
    imgIdAlt: 'p-vivid-aura-b2',
    galleryIds: ['p-vivid-aura-g1', 'p-vivid-aura-g2', 'p-vivid-aura-g3'],
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'Pendant Necklace',
    price: 68,
    rating: 4.9,
    reviews: 203,
    tone: 'Gold',
    shortDesc:
      'A multicolor floral crystal pendant suspended from a delicate gold chain.',
    description:
      'The Majestic Flora Nectar necklace blooms with a multicolor floral cluster of crystals, each petal reflecting a different hue. The fine gold-plated chain sits gracefully at the collarbone, making it the perfect centerpiece for both day and evening wear.',
    materials:
      '18K gold plating over 925 sterling silver. Multicolor cubic zirconia crystals. Adjustable 40–45cm chain with 5cm extender.',
    care: 'Keep dry and away from perfumes. Store flat in the provided box to protect the crystal setting. Polish with a microfiber cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns for a full refund.',
    imgId: 'p-majestic-flora-a1',
    imgIdAlt: 'p-majestic-flora-b2',
    galleryIds: ['p-majestic-flora-g1', 'p-majestic-flora-g2', 'p-majestic-flora-g3'],
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'Huggie Earrings',
    price: 38,
    rating: 4.7,
    reviews: 318,
    tone: 'Gold',
    shortDesc:
      'Chunky gold dome huggie earrings with a polished, sculptural finish.',
    description:
      'The Golden Sphere huggies reimagine the classic hoop with a chunky, polished dome silhouette. Lightweight and comfortable for all-day wear, they hug the lobe closely and pair effortlessly with everything from a white tee to an evening dress.',
    materials:
      '18K gold plating over 925 sterling silver. Polished dome finish. Secure hinged huggie closure. Hypoallergenic.',
    care: 'Wipe clean after each wear. Avoid water and chemicals. Store in a dry, separate pouch to prevent scratching.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns for a full refund.',
    imgId: 'p-golden-sphere-a1',
    imgIdAlt: 'p-golden-sphere-b2',
    galleryIds: ['p-golden-sphere-g1', 'p-golden-sphere-g2', 'p-golden-sphere-g3'],
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'Drop Earrings',
    price: 54,
    rating: 4.8,
    reviews: 91,
    tone: 'Gold',
    shortDesc:
      'Textured gold filigree drop earrings with an intricate lace-like pattern.',
    description:
      'The Amber Lace earrings are a study in craftsmanship, with hand-textured gold filigree forming an intricate lace-like drop. They move softly with the wearer, catching warm light and adding quiet drama to any look.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-textured filigree. Lightweight drop construction. Hypoallergenic posts.',
    care: 'Handle with care to preserve the filigree detail. Keep dry and store in the provided box. Clean with a soft, dry cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns for a full refund.',
    imgId: 'p-amber-lace-a1',
    imgIdAlt: 'p-amber-lace-b2',
    galleryIds: ['p-amber-lace-g1', 'p-amber-lace-g2', 'p-amber-lace-g3'],
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    type: 'Earring + Necklace Set',
    price: 95,
    rating: 5.0,
    reviews: 64,
    tone: 'Gold',
    shortDesc:
      'A gift-boxed earring and necklace set, designed to be treasured together.',
    description:
      'The Royal Heirloom Set unites a pair of crystal-studded earrings with a matching pendant necklace, presented in a signature Velmora gift box. Coordinated in tone and proportion, the set is the ultimate gifting piece — or a self-purchase to mark a moment worth keeping.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-set cubic zirconia. Includes earrings, pendant necklace, and gift box. Hypoallergenic.',
    care: 'Store each piece separately in the gift box to prevent tangling and scratching. Avoid water and perfume. Polish gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns for a full refund.',
    imgId: 'p-royal-heirloom-a1',
    imgIdAlt: 'p-royal-heirloom-b2',
    galleryIds: ['p-royal-heirloom-g1', 'p-royal-heirloom-g2', 'p-royal-heirloom-g3'],
    variants: ['Gold', 'Silver'],
  },
]

export const categories = [
  { id: 'Earrings', name: 'Earrings', desc: 'Studs, drops & cuffs' },
  { id: 'Necklaces', name: 'Necklaces', desc: 'Pendants & chains' },
  { id: 'Huggies', name: 'Huggies', desc: 'Hoop huggies' },
]

export const testimonials = [
  {
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold plating is genuinely beautiful — it looks far more expensive than it was. I wear my huggies every single day.',
  },
  {
    name: 'Amara K.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift and the presentation was stunning. My sister cried. The quality is unreal for the price.',
  },
  {
    name: 'Elena R.',
    rating: 5,
    text: 'I have sensitive ears and these are the first earrings I can wear all day with zero irritation. Quietly luxurious.',
  },
]

export const reels = [
  { id: 'r1', caption: 'Stacked huggies, golden hour', imgId: 'reel-1-a' },
  { id: 'r2', caption: 'The Vivid Aura cuff, up close', imgId: 'reel-2-a' },
  { id: 'r3', caption: 'Flora Nectar on bare skin', imgId: 'reel-3-a' },
  { id: 'r4', caption: 'Amber Lace, evening light', imgId: 'reel-4-a' },
  { id: 'r5', caption: 'The Heirloom set, unboxed', imgId: 'reel-5-a' },
  { id: 'r6', caption: 'Everyday gold, no effort', imgId: 'reel-6-a' },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit)
