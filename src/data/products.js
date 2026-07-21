// Velmora Fine Jewelry - Seed Product Data
// Premium demi-fine gold jewelry

const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    description: "A stunning gold ear cuff adorned with crystal accents. Perfect for adding a touch of sparkle to your everyday look. Hypoallergenic and nickel-free.",
    price: 42,
    images: [
      "https://via.placeholder.com/800x800/F5F0EB/8B7355?text=Vivid+Aura+Jewels",
      "https://via.placeholder.com/800x800/F5F0EB/8B7355?text=Vivid+Aura+Jewels+2",
    ],
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 124,
    variants: ["gold", "silver"],
    inStock: true,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    description: "Multicolor floral crystal necklace that captures the beauty of a blooming garden. Each crystal is carefully selected for its brilliance and color.",
    price: 68,
    images: [
      "https://via.placeholder.com/800x800/F5F0EB/8B7355?text=Majestic+Flora+Nectar",
      "https://via.placeholder.com/800x800/F5F0EB/8B7355?text=Majestic+Flora+Nectar+2",
    ],
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 89,
    variants: ["gold"],
    inStock: true,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    description: "Chunky gold dome huggie earrings that make a bold yet elegant statement. Perfect for both casual and formal occasions.",
    price: 38,
    images: [
      "https://via.placeholder.com/800x800/F5F0EB/8B7355?text=Golden+Sphere+Huggies",
      "https://via.placeholder.com/800x800/F5F0EB/8B7355?text=Golden+Sphere+Huggies+2",
    ],
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 156,
    variants: ["gold", "silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    description: "Textured gold filigree drop earrings with intricate amber-toned detailing. A true work of art for your ears.",
    price: 54,
    images: [
      "https://via.placeholder.com/800x800/F5F0EB/8B7355?text=Amber+Lace+Earrings",
      "https://via.placeholder.com/800x800/F5F0EB/8B7355?text=Amber+Lace+Earrings+2",
    ],
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.6,
    reviews: 97,
    variants: ["gold"],
    inStock: true,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    description: "A gift-boxed set featuring matching earring and necklace. The perfect gift for someone special or a treasured addition to your own collection.",
    price: 95,
    images: [
      "https://via.placeholder.com/800x800/F5F0EB/8B7355?text=Royal+Heirloom+Set",
      "https://via.placeholder.com/800x800/F5F0EB/8B7355?text=Royal+Heirloom+Set+2",
    ],
    category: "Sets",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 203,
    variants: ["gold"],
    inStock: true,
  },
];

// UGC Reel Data
const ugcItems = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x711/F5F0EB/8B7355?text=UGC+1",
    caption: "Golden hour glow ✨",
    author: "@sarahj",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400x711/F5F0EB/8B7355?text=UGC+2",
    caption: "Everyday elegance 💫",
    author: "@emilyr",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400x711/F5F0EB/8B7355?text=UGC+3",
    caption: "Obsessed with these huggies 💛",
    author: "@jessicat",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/400x711/F5F0EB/8B7355?text=UGC+4",
    caption: "Perfect gift for me 🎁",
    author: "@aishaw",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/400x711/F5F0EB/8B7355?text=UGC+5",
    caption: "Velmora forever 🌟",
    author: "@nicolem",
  },
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Sarah",
    initial: "S",
    rating: 5,
    text: "Absolutely love my Vivid Aura ear cuff! The quality is incredible for the price. I get compliments every time I wear it.",
  },
  {
    id: 2,
    name: "Emily",
    initial: "E",
    rating: 5,
    text: "The Royal Heirloom Set was the perfect gift. Beautiful packaging and even more stunning in person. Will definitely be purchasing again!",
  },
  {
    id: 3,
    name: "Jessica",
    initial: "J",
    rating: 5,
    text: "Finally found hypoallergenic jewelry that doesn't irritate my sensitive ears. The Golden Sphere Huggies are now my everyday go-to.",
  },
];

export { products, ugcItems, testimonials };
