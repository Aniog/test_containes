// Seed product data for Velmora Fine Jewelry
const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    isNew: false,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    description: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop"
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
    isNew: true,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: true,
    isNew: false,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
    ],
    rating: 4.6,
    reviews: 98,
    inStock: true,
    featured: true,
    isNew: false,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "Gold",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop"
    ],
    rating: 5.0,
    reviews: 67,
    inStock: true,
    featured: true,
    isNew: false,
  },
];

// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: "Sarah",
    initial: "S",
    rating: 5,
    text: "Absolutely stunning pieces. The quality is exceptional and I receive compliments every time I wear Velmora jewelry.",
    date: "2024-01-15",
  },
  {
    id: 2,
    name: "Emily",
    initial: "E",
    rating: 5,
    text: "I've purchased multiple items and they all exceed expectations. Beautiful, delicate, and perfect for everyday wear.",
    date: "2024-02-20",
  },
  {
    id: 3,
    name: "Michael",
    initial: "M",
    rating: 5,
    text: "Bought the Royal Heirloom Set for my wife's anniversary. She hasn't taken it off since. Worth every penny.",
    date: "2024-03-10",
  },
];

export default products;
