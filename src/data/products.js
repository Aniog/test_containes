export const products = [
  {
    id: "1",
    name: "VIVID AURA JEWELS",
    price: 42,
    description: "A stunning gold ear cuff adorned with delicate crystal accents. Perfect for elevating your everyday stack without the need for additional piercings.",
    category: "Earrings",
    material: "18K Gold Plated",
    reviews: { count: 24, average: 4.8 },
    titleId: "prod-title-1",
    descId: "prod-desc-1",
    images: {
      primary: { query: "[prod-title-1] [prod-desc-1]", id: "img-prim-1" },
      hover: { query: "[prod-title-1]", id: "img-hov-1" },
      gallery: [
        { query: "[prod-title-1]", id: "img-gal-1a" },
        { query: "[prod-title-1]", id: "img-gal-1b" }
      ]
    }
  },
  {
    id: "2",
    name: "MAJESTIC FLORA NECTAR",
    price: 68,
    description: "A captivating necklace featuring a vibrant array of multicolor floral crystals. This piece adds a romantic, editorial touch to any neckline.",
    category: "Necklaces",
    material: "18K Gold Plated",
    reviews: { count: 42, average: 4.9 },
    titleId: "prod-title-2",
    descId: "prod-desc-2",
    images: {
      primary: { query: "[prod-title-2] [prod-desc-2]", id: "img-prim-2" },
      hover: { query: "[prod-title-2]", id: "img-hov-2" },
      gallery: [
        { query: "[prod-title-2]", id: "img-gal-2a" },
        { query: "[prod-title-2]", id: "img-gal-2b" }
      ]
    }
  },
  {
    id: "3",
    name: "GOLDEN SPHERE HUGGIES",
    price: 38,
    description: "Chunky gold dome huggie earrings that offer a bold yet refined silhouette. Essential for modern, quiet luxury styling.",
    category: "Huggies",
    material: "18K Gold Plated",
    reviews: { count: 86, average: 4.7 },
    titleId: "prod-title-3",
    descId: "prod-desc-3",
    images: {
      primary: { query: "[prod-title-3] [prod-desc-3]", id: "img-prim-3" },
      hover: { query: "[prod-title-3]", id: "img-hov-3" },
      gallery: [
        { query: "[prod-title-3]", id: "img-gal-3a" },
        { query: "[prod-title-3]", id: "img-gal-3b" }
      ]
    }
  },
  {
    id: "4",
    name: "AMBER LACE EARRINGS",
    price: 54,
    description: "Textured gold filigree drop earrings reminiscent of vintage lace. Lightweight and intricately detailed for a sophisticated look.",
    category: "Earrings",
    material: "18K Gold Plated",
    reviews: { count: 18, average: 4.9 },
    titleId: "prod-title-4",
    descId: "prod-desc-4",
    images: {
      primary: { query: "[prod-title-4] [prod-desc-4]", id: "img-prim-4" },
      hover: { query: "[prod-title-4]", id: "img-hov-4" },
      gallery: [
        { query: "[prod-title-4]", id: "img-gal-4a" },
        { query: "[prod-title-4]", id: "img-gal-4b" }
      ]
    }
  },
  {
    id: "5",
    name: "ROYAL HEIRLOOM SET",
    price: 95,
    description: "Our signature gift-boxed set featuring a complimentary earring and necklace pairing. The ultimate accessible luxury for gifting or self-purchase.",
    category: "Sets",
    material: "18K Gold Plated",
    reviews: { count: 33, average: 5.0 },
    titleId: "prod-title-5",
    descId: "prod-desc-5",
    images: {
      primary: { query: "[prod-title-5] [prod-desc-5]", id: "img-prim-5" },
      hover: { query: "[prod-title-5]", id: "img-hov-5" },
      gallery: [
        { query: "[prod-title-5]", id: "img-gal-5a" },
        { query: "[prod-title-5]", id: "img-gal-5b" }
      ]
    }
  }
];

export const getProducts = () => products;
export const getProductById = (id) => products.find(p => p.id === id);