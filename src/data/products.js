// Seed product data for Velmora Fine Jewelry
const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "Gold",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    details: "A stunning gold ear cuff adorned with sparkling crystal accents. Perfect for adding a touch of elegance to any outfit. Hypoallergenic and nickel-free.",
    materials: "18K Gold Plated Brass, Crystal Accents",
    inStock: true
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    description: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    details: "A beautiful multicolor floral crystal necklace that captures the essence of a blooming garden. Each crystal is carefully selected for its brilliance.",
    materials: "18K Gold Plated Brass, Multi-color Crystals",
    inStock: true
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "Gold",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    details: "Chunky gold dome huggie earrings that make a bold statement while maintaining elegance. Perfect for everyday wear or special occasions.",
    materials: "18K Gold Plated Brass",
    inStock: true
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    details: "Delicate textured gold filigree drop earrings with intricate lace-like patterns. A perfect blend of vintage charm and modern elegance.",
    materials: "18K Gold Plated Brass",
    inStock: true
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "Gold",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    details: "A luxurious gift-boxed set featuring matching earrings and necklace. The perfect gift for someone special or a treat for yourself.",
    materials: "18K Gold Plated Brass, Crystal Accents",
    inStock: true
  }
];

// Helper function to get products (for compatibility with components)
export const getProducts = () => products;

export default products;
