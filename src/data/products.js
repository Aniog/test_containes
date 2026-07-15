export const products = [
  {
    id: "prod_001",
    name: "Vivid Aura Jewels",
    price: 42.00,
    category: "Earrings",
    material: "18K Gold Plated",
    description: "A striking gold ear cuff featuring a radiant crystal accent. Designed for easy wear without piercing, it adds a touch of modern elegance to any stack.",
    detailedDescription: "The Vivid Aura Jewels ear cuff is a testament to minimalist design met with maximalist shine. Crafted from premium materials and plated in luscious 18K gold, this piece hugs your ear comfortably all day. The delicately set crystal catches the light beautifully, bringing an undeniable warmth to your look.",
    imgId: "velmora-prod-1",
    imgRatio: "4x5",
    tags: ["bestseller", "crystal"],
    cartImgId: "velmora-prod-1-cart"
  },
  {
    id: "prod_002",
    name: "Majestic Flora Nectar",
    price: 68.00,
    category: "Necklaces",
    material: "18K Gold Plated",
    description: "A multicolor floral crystal necklace that drapes gracefully along the collarbone. The perfect delicate statement pieece.",
    detailedDescription: "Inspired by the blooming warmth of a summer garden, the Majestic Flora Nectar necklace combines intricate gold work with carefully selected multicolor crystals. The fine chain ensures the spotlight remains on the delicate floral and nectar arrangements, making it a perfect piece for both everyday elegance and special occasions.",
    imgId: "velmora-prod-2",
    imgRatio: "4x5",
    tags: ["bestseller", "floral"],
    cartImgId: "velmora-prod-2-cart"
  },
  {
    id: "prod_003",
    name: "Golden Sphere Huggies",
    price: 38.00,
    category: "Huggies",
    material: "18K Gold Plated",
    description: "Chunky gold dome huggie earrings offering a sleek and bold silhouette. Perfect for everyday wear.",
    detailedDescription: "Embrace the chunky gold trend with the Golden Sphere Huggies. These dome-shaped earrings are hollowed out to remain incredibly lightweight, allowing you to wear a bold silhouette comfortably. Their polished finish reflects light from every angle, securing easily with a hinged clasp.",
    imgId: "velmora-prod-3",
    imgRatio: "4x5",
    tags: ["bestseller", "chunky"],
    cartImgId: "velmora-prod-3-cart"
  },
  {
    id: "prod_004",
    name: "Amber Lace Earrings",
    price: 54.00,
    category: "Earrings",
    material: "18K Gold Plated",
    description: "Textured gold filigree drop earrings that whisper vintage charm.",
    detailedDescription: "The Amber Lace Earrings evoke the feeling of treasured vintage finds. Intricate filigree work forms delicate, lacy patterns in solid 18K gold plated brass. The warm textured finish lends them an antique, lived-in feel while maintaining a modern lightness.",
    imgId: "velmora-prod-4",
    imgRatio: "4x5",
    tags: ["vintage"],
    cartImgId: "velmora-prod-4-cart"
  },
  {
    id: "prod_005",
    name: "Royal Heirloom Set",
    price: 95.00,
    category: "Sets",
    material: "18K Gold Plated",
    description: "A beautifully curated gift-boxed set featuring a matching pendant necklace and delicate stud earrings.",
    detailedDescription: "The ultimate gifting choice or self-purchase. The Royal Heirloom Set combines our bestselling pendant style with perfectly matched stud earrings. Housed in a premium presentation box, this set offers a complete look rooted in timeless sophistication.",
    imgId: "velmora-prod-5",
    imgRatio: "4x5",
    tags: ["bestseller", "set", "gift"],
    cartImgId: "velmora-prod-5-cart"
  }
];

export const getProducts = () => products;
export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
