export const products = [
  {
    id: "vivid-aura",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    material: "Gold Plated",
    description: "A delicate gold ear cuff with a subtle crystal accent. Designed to comfortably hug the curve of your ear for a modern, stacked look without the need for additional piercings.",
    images: [
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "majestic-flora",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    material: "Gold Plated",
    description: "A statement piece featuring a delicate chain interspersed with multicolor floral crystal motifs. Perfect for adding a touch of romance to any ensemble.",
    images: [
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "golden-sphere",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Huggies",
    material: "Gold Plated",
    description: "Chunky, high-polish gold dome huggie earrings. A versatile, everyday essential that brings a quiet luxury to any look.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "amber-lace",
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    material: "Gold Plated",
    description: "Textured gold filigree drop earrings that catch the light beautifully. Vintage-inspired design with a modern, lightweight feel.",
    images: [
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "royal-heirloom",
    name: "Royal Heirloom Set",
    price: 95,
    category: "Sets",
    material: "Gold Plated",
    description: "An elegant gift-boxed set featuring a matching pendant necklace and stud earrings. The perfect gift for someone special, or a luxurious treat for yourself.",
    images: [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];

export const getBestsellers = () => products.slice(0, 5);
export const getProductById = (id) => products.find(p => p.id === id);
