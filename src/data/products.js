export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    material: "gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern interpretation of classic elegance.",
    details: "18K gold plated brass with crystal embellishment. Lightweight and comfortable for all-day wear.",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    rating: 4.8,
    reviewCount: 124,
    images: {
      gold: {
        primary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
      },
      silver: {
        primary: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
      }
    }
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    material: "gold",
    description: "A statement necklace adorned with multicolor floral crystals. Each piece tells a story of natural beauty.",
    details: "18K gold plated chain with hand-set crystal pendants. Adjustable length with lobster clasp.",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    rating: 4.9,
    reviewCount: 89,
    images: {
      gold: {
        primary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
      },
      silver: {
        primary: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
      }
    }
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    material: "gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    details: "18K gold plated brass. Secure hinged closure. Lightweight despite their substantial appearance.",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    rating: 4.7,
    reviewCount: 156,
    images: {
      gold: {
        primary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
      },
      silver: {
        primary: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
      }
    }
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    material: "gold",
    description: "Intricately textured gold filigree drop earrings. A celebration of artisanal craftsmanship.",
    details: "18K gold plated brass with delicate filigree work. French wire backs for comfortable wear.",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    rating: 4.6,
    reviewCount: 73,
    images: {
      gold: {
        primary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
      },
      silver: {
        primary: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
      }
    }
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "earrings",
    price: 95,
    material: "gold",
    description: "A curated gift set featuring matching earrings and necklace. Presented in our signature velvet box.",
    details: "18K gold plated brass. Includes stud earrings and delicate pendant necklace. Gift-ready packaging included.",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    rating: 4.9,
    reviewCount: 201,
    images: {
      gold: {
        primary: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
      },
      silver: {
        primary: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
      }
    }
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);