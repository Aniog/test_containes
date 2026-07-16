export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone.",
    rating: 4.8,
    reviews: 124,
    images: {
      primary: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A stunning multicolor floral crystal necklace that captures light with every movement.",
    rating: 4.9,
    reviews: 89,
    images: {
      primary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    rating: 4.7,
    reviews: 156,
    images: {
      primary: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework.",
    rating: 4.6,
    reviews: 73,
    images: {
      primary: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    category: "Sets",
    price: 95,
    material: "Gold",
    description: "A beautifully gift-boxed earring and necklace set. The perfect present for someone special.",
    rating: 4.9,
    reviews: 201,
    images: {
      primary: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);