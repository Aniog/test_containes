export const products = [
  {
    id: "vivid-aura",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    description: "A striking gold ear cuff elevated with a solitary crystal accent. The Vivid Aura cuff is designed to catch the light from every angle, bringing a warm editorial glow to your everyday stack.",
    materialsAndCare: "Crafted in 18K gold vermeil over sterling silver. Avoid contact with water and harsh chemicals to maintain the golden luster.",
    images: [
      "vivid-aura-1",
      "vivid-aura-2",
      "vivid-aura-3"
    ]
  },
  {
    id: "majestic-flora",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    description: "Draped in quiet luxury, this delicate necklace features a multicolor floral crystal arrangement that rests elegantly on the collarbone. Perfect for gifting or elevating a soft neutral ensemble.",
    materialsAndCare: "Crafted in 18K gold vermeil over sterling silver with hand-set cubic zirconia. Wipe clean with a soft cloth.",
    images: [
      "majestic-flora-1",
      "majestic-flora-2"
    ]
  },
  {
    id: "golden-sphere",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Huggies",
    material: "14K Solid Gold",
    description: "Timeless chunky gold dome huggies with a seamless clasp. Substantial enough to wear alone, yet perfectly proportioned for second-hole styling. The definitive modern staple.",
    materialsAndCare: "Solid 14K gold. Hypoallergenic and water-safe for everyday wear.",
    images: [
      "golden-sphere-1",
      "golden-sphere-2"
    ]
  },
  {
    id: "amber-lace",
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    description: "Intricately textured gold filigree drop earrings that weave an heirlooom sensibility into modern styling. Light as air, dramatic in effect.",
    materialsAndCare: "Crafted in 18K gold vermeil over sterling silver. Store in the provided pouch.",
    images: [
      "amber-lace-1",
      "amber-lace-2"
    ]
  },
  {
    id: "royal-heirloom",
    name: "Royal Heirloom Set",
    price: 95,
    category: "Sets",
    material: "18K Gold Plated",
    description: "The ultimate gifting presentation. A matched earring and necklace set packaged in a velvet-lined box, designed as a modern heirloom to be treasured and passed down.",
    materialsAndCare: "Crafted in 18K gold vermeil over sterling silver. Includes a polishing cloth and velvet storage box.",
    images: [
      "royal-heirloom-1",
      "royal-heirloom-2",
      "royal-heirloom-3"
    ]
  }
];

export const getProductById = (id) => products.find(p => p.id === id);