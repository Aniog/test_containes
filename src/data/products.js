export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    subtitle: 'Gold Ear Cuff with Crystal Accent',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviews: 124,
    description: 'A sculptural ear cuff that hugs the curve of your ear, accented with a delicate crystal that catches the light with every movement. Designed for effortless elegance.',
    materials: '18K gold plated over sterling silver base. Hypoallergenic. Crystal accent: cubic zirconia.',
    care: 'Avoid contact with water, perfume, and lotions. Store in the provided velvet pouch when not wearing.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    subtitle: 'Multicolor Floral Crystal Necklace',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviews: 89,
    description: 'A delicate pendant necklace featuring a cluster of multicolor crystals arranged in a floral motif. The chain drapes gracefully at the collarbone.',
    materials: '18K gold plated chain. Multicolor cubic zirconia stones. Adjustable 16-18 inch chain.',
    care: 'Store flat in the provided jewelry box. Clean gently with a soft, dry cloth.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    subtitle: 'Chunky Gold Dome Huggie Earrings',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviews: 203,
    description: 'Modern huggie earrings with a sculptural dome silhouette. These everyday essentials add a touch of quiet luxury to any look.',
    materials: '18K gold plated over brass. Secure hinged closure. 12mm diameter.',
    care: 'Keep away from moisture and chemicals. Polish with a soft jewelry cloth.',
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    subtitle: 'Textured Gold Filigree Drop Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviews: 67,
    description: 'Intricate filigree work creates a lace-like effect in these statement drop earrings. Lightweight despite their dramatic appearance.',
    materials: '18K gold plated over sterling silver. French wire closure. Drop length: 45mm.',
    care: 'Handle by the wire to avoid bending. Store separately to prevent tangling.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    subtitle: 'Gift-Boxed Earring + Necklace Set',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    rating: 5.0,
    reviews: 45,
    description: 'A curated set of matching earrings and necklace, presented in our signature gift box. The perfect expression of timeless elegance.',
    materials: '18K gold plated over sterling silver. Includes velvet gift box and care card.',
    care: 'Store each piece separately in the provided compartments. Clean with included polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getProductsByCategory = (category) =>
  products.filter((p) => p.category === category);

export const getBestsellers = () => products.filter((p) => p.bestseller);

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== productId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};
