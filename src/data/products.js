// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern take on classic elegance.",
    details: "18K gold plated brass with crystal embellishment. Lightweight and comfortable for all-day wear.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns accepted.",
    rating: 4.8,
    reviews: 124,
    images: {
      primary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A stunning multicolor floral crystal necklace that captures light with every movement.",
    details: "18K gold plated chain with hand-set crystal pendants. Adjustable length from 16-18 inches.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns accepted.",
    rating: 4.9,
    reviews: 89,
    images: {
      primary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural, modern silhouette.",
    details: "18K gold plated brass. Secure hinged closure. Lightweight despite their bold presence.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns accepted.",
    rating: 4.7,
    reviews: 156,
    images: {
      primary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing.",
    details: "18K gold plated brass with delicate filigree work. French wire backs for comfort.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns accepted.",
    rating: 4.6,
    reviews: 72,
    images: {
      primary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    material: "Gold",
    description: "A gift-boxed earring and necklace set, perfect for gifting or treating yourself.",
    details: "Includes matching earrings and necklace in our signature 18K gold plating. Presented in a premium gift box.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns accepted.",
    rating: 4.9,
    reviews: 203,
    images: {
      primary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);