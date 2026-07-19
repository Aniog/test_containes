export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    material: "18K Gold Plated",
    price: 42,
    rating: 4.9,
    reviews: 124,
    shortDescription:
      "A sculptural gold ear cuff finished with a delicate crystal accent for quiet evening light.",
    description:
      "Designed to frame the ear without a piercing, this polished cuff brings a refined glint to everyday styling and occasion dressing alike.",
    care: "18K gold plated over brass with crystal detailing. Keep dry, store in the provided pouch, and polish gently with a soft cloth.",
    imgId: "product-vivid-aura-primary-a18f4c",
    hoverImgId: "product-vivid-aura-hover-b92d1e",
    titleId: "product-vivid-aura-title",
    descId: "product-vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    material: "Crystal + Gold Plated",
    price: 68,
    rating: 4.8,
    reviews: 96,
    shortDescription:
      "A multicolor floral crystal necklace with a fine gold chain and soft heirloom shimmer.",
    description:
      "A refined floral pendant captures subtle color and light, creating an elevated signature necklace for gifting or self-purchase.",
    care: "18K gold plated chain with hand-set crystal accents. Avoid fragrance and water exposure to preserve shine.",
    imgId: "product-majestic-flora-primary-c33a7d",
    hoverImgId: "product-majestic-flora-hover-d49c21",
    titleId: "product-majestic-flora-title",
    descId: "product-majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    material: "18K Gold Plated",
    price: 38,
    rating: 5,
    reviews: 188,
    shortDescription:
      "Chunky gold dome huggies with a polished silhouette made for daily wear.",
    description:
      "Rounded volume and a close-to-ear fit make these huggies effortless, luminous, and endlessly stackable.",
    care: "18K gold plated over recycled brass with hypoallergenic posts. Wipe after wear and store separately.",
    imgId: "product-golden-sphere-primary-e86b02",
    hoverImgId: "product-golden-sphere-hover-f00ad5",
    titleId: "product-golden-sphere-title",
    descId: "product-golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    material: "Textured Gold Plated",
    price: 54,
    rating: 4.9,
    reviews: 73,
    shortDescription:
      "Textured gold filigree drop earrings with a warm amber-toned editorial finish.",
    description:
      "Lightweight movement and ornate texture create an heirloom-inspired drop earring that still feels modern.",
    care: "Gold plated filigree with secure hooks. Remove before sleeping, swimming, or applying oils.",
    imgId: "product-amber-lace-primary-g14fb8",
    hoverImgId: "product-amber-lace-hover-h22c31",
    titleId: "product-amber-lace-title",
    descId: "product-amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Sets",
    material: "Gift-Boxed Gold Plated",
    price: 95,
    rating: 4.9,
    reviews: 141,
    shortDescription:
      "A gift-boxed earring and necklace pairing with luminous gold detail and graceful sparkle.",
    description:
      "Created for considered gifting, this coordinated set arrives ready to open, layer, and treasure.",
    care: "18K gold plated set with crystal accents. Store in the Velmora gift box between wears.",
    imgId: "product-royal-heirloom-primary-i58e2a",
    hoverImgId: "product-royal-heirloom-hover-j77d0f",
    titleId: "product-royal-heirloom-title",
    descId: "product-royal-heirloom-desc",
  },
]

export const categories = ["Earrings", "Necklaces", "Huggies"]

export const getProductById = (id) => products.find((product) => product.id === id) || products[0]
