// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    material: "gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Perfect for stacking or wearing alone for a subtle statement.",
    details: "18K gold plated brass with premium crystal. Hypoallergenic and tarnish-resistant.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    rating: 4.8,
    reviewCount: 124,
    images: {
      gold: {
        primary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
      },
      silver: {
        primary: "https://images.unsplash.com/photo-1506630448388-4bc032bc1973?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
      }
    },
    inStock: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    material: "gold",
    description: "An exquisite multicolor floral crystal necklace that captures the essence of a blooming garden. Each crystal is hand-selected for its brilliance.",
    details: "18K gold plated chain with premium multicolor crystals. Adjustable length 16-18 inches.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    rating: 4.9,
    reviewCount: 89,
    images: {
      gold: {
        primary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80"
      },
      silver: {
        primary: "https://images.unsplash.com/photo-1506630448388-4bc032bc1973?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
      }
    },
    inStock: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    material: "gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are destined to become your everyday signature.",
    details: "18K gold plated brass. Secure hinged closure. Lightweight design for all-day comfort.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    rating: 4.7,
    reviewCount: 156,
    images: {
      gold: {
        primary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
      },
      silver: {
        primary: "https://images.unsplash.com/photo-1506630448388-4bc032bc1973?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
      }
    },
    inStock: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    material: "gold",
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework. A romantic silhouette that catches the light beautifully.",
    details: "18K gold plated brass with delicate filigree detailing. French wire hooks.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    rating: 4.6,
    reviewCount: 72,
    images: {
      gold: {
        primary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
      },
      silver: {
        primary: "https://images.unsplash.com/photo-1506630448388-4bc032bc1973?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
      }
    },
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "earrings",
    price: 95,
    material: "gold",
    description: "A curated gift-boxed pairing of our signature earrings and necklace. Presented in a luxurious velvet box, perfect for gifting or treating yourself.",
    details: "Includes: 1 pair of earrings + 1 necklace. 18K gold plated. Gift-ready packaging included.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    rating: 4.9,
    reviewCount: 63,
    images: {
      gold: {
        primary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80"
      },
      silver: {
        primary: "https://images.unsplash.com/photo-1506630448388-4bc032bc1973?w=800&q=80",
        secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
      }
    },
    inStock: true
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);