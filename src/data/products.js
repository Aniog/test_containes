// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern interpretation of classic elegance.",
    details: "18K gold plated brass with premium crystal. Hypoallergenic and tarnish-resistant.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be unworn with original packaging.",
    rating: 4.8,
    reviewCount: 124,
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
    description: "A statement necklace adorned with multicolor floral crystals. Each piece is hand-assembled with care.",
    details: "18K gold plated chain with premium crystal pendants. Adjustable length 16-18 inches.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be unworn with original packaging.",
    rating: 4.9,
    reviewCount: 87,
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
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    details: "18K gold plated brass. Secure hinged closure. Lightweight design for all-day comfort.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be unworn with original packaging.",
    rating: 4.7,
    reviewCount: 156,
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
    description: "Intricate textured gold filigree drop earrings inspired by vintage lacework. Timeless sophistication.",
    details: "18K gold plated brass with delicate filigree detailing. French wire hooks.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be unworn with original packaging.",
    rating: 4.6,
    reviewCount: 92,
    images: {
      primary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Earrings",
    price: 95,
    material: "Gold",
    description: "A curated gift set featuring matching earrings and necklace. Presented in our signature velvet box.",
    details: "18K gold plated brass with premium crystal accents. Includes both earrings and necklace.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    shipping: "Free worldwide shipping on all orders. Ships within 1-2 business days.",
    returns: "30-day returns accepted. Items must be unworn with original packaging.",
    rating: 4.9,
    reviewCount: 63,
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