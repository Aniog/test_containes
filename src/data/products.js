export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    category: "Earrings",
    price: 42,
    description: "A delicate gold ear cuff adorned with a single crystal accent. Perfect for stacking or wearing alone for a subtle statement.",
    longDescription: "The Vivid Aura Jewels ear cuff captures light with its refined crystal detail. Handcrafted in 18K gold plating over sterling silver, this piece is designed for everyday elegance with a touch of brilliance.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfumes, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      { id: 'gold', url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80', alt: 'Gold ear cuff with crystal' },
      { id: 'silver', url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80', alt: 'Silver ear cuff with crystal' }
    ],
    variants: ['gold', 'silver'],
    inStock: true
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    category: "Necklaces",
    price: 68,
    description: "A romantic multicolor floral crystal necklace that catches the light with every movement. The perfect piece for special occasions.",
    longDescription: "Inspired by blooming gardens, the Majestic Flora Nectar necklace features a delicate chain with a cluster of hand-set crystals in warm, complementary tones. Each crystal is carefully chosen for its unique hue and brilliance.",
    material: "18K Gold Plated Brass, Multicolor Crystals",
    care: "Avoid contact with water, perfumes, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      { id: 'gold', url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80', alt: 'Floral crystal necklace in gold' },
      { id: 'silver', url: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80', alt: 'Floral crystal necklace in silver' }
    ],
    variants: ['gold', 'silver'],
    inStock: true
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    category: "Huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the everyday statement you've been looking for.",
    longDescription: "The Golden Sphere Huggies feature a substantial dome shape that sits comfortably on the ear. Their sculptural form adds dimension to any look, from casual to evening.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfumes, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      { id: 'gold', url: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80', alt: 'Gold dome huggie earrings' },
      { id: 'silver', url: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80', alt: 'Silver dome huggie earrings' }
    ],
    variants: ['gold', 'silver'],
    inStock: true
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    category: "Earrings",
    price: 54,
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A timeless silhouette with modern craftsmanship.",
    longDescription: "The Amber Lace Earrings showcase the beauty of traditional filigree work reimagined for today. Each delicate pattern is hand-finished to create a piece that feels both heirloom and contemporary.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfumes, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      { id: 'gold', url: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80', alt: 'Gold filigree drop earrings' },
      { id: 'silver', url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80', alt: 'Silver filigree drop earrings' }
    ],
    variants: ['gold', 'silver'],
    inStock: true
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    category: "Necklaces",
    price: 95,
    description: "A curated gift-boxed set featuring a matching earring and necklace duo. The ultimate expression of refined gifting.",
    longDescription: "The Royal Heirloom Set pairs our signature filigree drop earrings with a delicate pendant necklace. Presented in a premium gift box, this set is designed for those moments that deserve something truly special.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfumes, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      { id: 'gold', url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80', alt: 'Gold jewelry gift set' },
      { id: 'silver', url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80', alt: 'Silver jewelry gift set' }
    ],
    variants: ['gold', 'silver'],
    inStock: true
  }
]

export const categories = ['Earrings', 'Necklaces', 'Huggies']

export const materials = ['18K Gold Plated', 'Sterling Silver']

export function getProductById(id) {
  return products.find(p => p.id === parseInt(id))
}

export function getRelatedProducts(currentId, limit = 4) {
  return products
    .filter(p => p.id !== parseInt(currentId))
    .slice(0, limit)
}
