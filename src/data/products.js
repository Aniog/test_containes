export const products = [
  {
    id: "p1",
    name: "VIVID AURA JEWELS",
    price: 42,
    rating: 5,
    description: "A delicate gold ear cuff with a subtle crystal accent. Designed for everyday wear, adding a touch of brilliance without overwhelming.",
    material: "18K Gold Plated",
    category: "Earrings",
    isBestSeller: true,
    imgId: "shop-item-img-p1",
    pdpThumb1: "pdp-thumb-p1-1",
    pdpThumb2: "pdp-thumb-p1-2",
    pdpThumb3: "pdp-thumb-p1-3",
    pdpMain: "pdp-main-img-p1",
    relatedImg: "related-item-img-p1",
    cartImg: "cart-item-img-p1",
    bestsellerImg: "bestseller-img-p1"
  },
  {
    id: "p2",
    name: "MAJESTIC FLORA NECTAR",
    price: 68,
    rating: 4.8,
    description: "A stunning multicolor floral crystal necklace that captures the essence of spring. Perfect for layering.",
    material: "18K Gold Plated",
    category: "Necklaces",
    isBestSeller: true,
    imgId: "shop-item-img-p2",
    pdpThumb1: "pdp-thumb-p2-1",
    pdpThumb2: "pdp-thumb-p2-2",
    pdpThumb3: "pdp-thumb-p2-3",
    pdpMain: "pdp-main-img-p2",
    relatedImg: "related-item-img-p2",
    cartImg: "cart-item-img-p2",
    bestsellerImg: "bestseller-img-p2"
  },
  {
    id: "p3",
    name: "GOLDEN SPHERE HUGGIES",
    price: 38,
    rating: 4.9,
    description: "Chunky gold dome huggie earrings that bring a modern edge to classic jewelry. Hypoallergenic and lightweight.",
    material: "18K Gold Plated",
    category: "Huggies",
    isBestSeller: true,
    imgId: "shop-item-img-p3",
    pdpThumb1: "pdp-thumb-p3-1",
    pdpThumb2: "pdp-thumb-p3-2",
    pdpThumb3: "pdp-thumb-p3-3",
    pdpMain: "pdp-main-img-p3",
    relatedImg: "related-item-img-p3",
    cartImg: "cart-item-img-p3",
    bestsellerImg: "bestseller-img-p3"
  },
  {
    id: "p4",
    name: "AMBER LACE EARRINGS",
    price: 54,
    rating: 4.7,
    description: "Textured gold filigree drop earrings reminiscent of vintage lace. A statement piece for elegant evenings.",
    material: "18K Gold Plated",
    category: "Earrings",
    isBestSeller: true,
    imgId: "shop-item-img-p4",
    pdpThumb1: "pdp-thumb-p4-1",
    pdpThumb2: "pdp-thumb-p4-2",
    pdpThumb3: "pdp-thumb-p4-3",
    pdpMain: "pdp-main-img-p4",
    relatedImg: "related-item-img-p4",
    cartImg: "cart-item-img-p4",
    bestsellerImg: "bestseller-img-p4"
  },
  {
    id: "p5",
    name: "ROYAL HEIRLOOM SET",
    price: 95,
    rating: 5,
    description: "A beautifully curated gift-boxed earring and necklace set. The ultimate expression of quiet luxury.",
    material: "18K Gold Plated",
    category: "Sets",
    isBestSeller: true,
    imgId: "shop-item-img-p5",
    pdpThumb1: "pdp-thumb-p5-1",
    pdpThumb2: "pdp-thumb-p5-2",
    pdpThumb3: "pdp-thumb-p5-3",
    pdpMain: "pdp-main-img-p5",
    relatedImg: "related-item-img-p5",
    cartImg: "cart-item-img-p5",
    bestsellerImg: "bestseller-img-p5"
  }
];

export const getProducts = () => {
  return products;
};

export const getBestSellers = () => {
  return products.filter(p => p.isBestSeller);
};

export const getProductById = (id) => {
  return products.find(p => p.id === id);
};

export const getRelatedProducts = (category, currentId) => {
  return products.filter(p => p.category === category && p.id !== currentId).slice(0, 4);
};
