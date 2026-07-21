// Seed product data for Velmora Fine Jewelry
const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      "https://picsum.photos/800/800?random=1",
      "https://picsum.photos/800/800?random=2"
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    images: [
      "https://picsum.photos/800/800?random=3",
      "https://picsum.photos/800/800?random=4"
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    images: [
      "https://picsum.photos/800/800?random=5",
      "https://picsum.photos/800/800?random=6"
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      "https://picsum.photos/800/800?random=7",
      "https://picsum.photos/800/800?random=8"
    ],
    rating: 4.6,
    reviews: 97,
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "18K Gold Plated",
    images: [
      "https://picsum.photos/800/800?random=9",
      "https://picsum.photos/800/800?random=10"
    ],
    rating: 5.0,
    reviews: 62,
    inStock: true,
    featured: true
  }
];

export const getProducts = () => products;
export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category) => 
  products.filter(p => p.category.toLowerCase() === category.toLowerCase());
