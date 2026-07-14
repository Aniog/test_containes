export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern interpretation of classic elegance.",
    details: "18K gold plated brass with crystal embellishment. Lightweight and comfortable for all-day wear.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be in original condition with tags attached.",
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A stunning multicolor floral crystal necklace that captures light with every movement. Perfect for both day and evening.",
    details: "18K gold plated chain with hand-set crystal pendants. Adjustable length from 16-18 inches.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be in original condition with tags attached.",
    rating: 4.9,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are destined to become everyday favorites.",
    details: "18K gold plated brass. Secure hinged closure. Measures approximately 15mm in diameter.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be in original condition with tags attached.",
    rating: 4.7,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework. Each piece is a work of art.",
    details: "18K gold plated brass with delicate filigree detailing. French wire hooks. Length: 2.5 inches.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be in original condition with tags attached.",
    rating: 4.6,
    reviews: 72,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Earrings",
    price: 95,
    material: "Gold",
    description: "A beautifully curated gift set featuring matching earrings and necklace. Presented in an elegant gift box, perfect for gifting or treating yourself.",
    details: "18K gold plated brass. Set includes: drop earrings (2.25 inches) and pendant necklace (18 inches). Gift box included.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be in original condition with tags attached.",
    rating: 4.9,
    reviews: 203,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);