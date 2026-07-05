export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "gold",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: "An exquisite gold ear cuff accented with a brilliant crystal drop. Designed to catch the light from every angle, this piece transitions effortlessly from desk to dinner.",
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80",
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80",
    ],
    materials: "18K gold plated over brass. Cubic zirconia crystal accent. Hypoallergenic ear post.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean with a soft cloth.",
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "gold",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: "A mesmerizing necklace featuring multicolor floral crystal pendants on a delicate gold chain. Each petal catches the light, creating a subtle rainbow of color.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80",
    ],
    materials: "18K gold plated over brass. Multicolor faceted crystal flowers. Adjustable chain 16-18 inches.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean with a soft cloth.",
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "gold",
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: "Chunky gold dome huggie earrings with a polished finish. Comfortable for all-day wear with a secure click-top closure.",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80",
    ],
    materials: "18K gold plated over brass. Polished dome design. Hypoallergenic posts.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean with a soft cloth.",
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "gold",
    price: 54,
    rating: 4.6,
    reviewCount: 67,
    description: "Textured gold filigree drop earrings with an heirloom feel. Intricate lace-like patterns give these a vintage-inspired elegance that feels modern.",
    images: [
      "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&q=80",
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80",
    ],
    materials: "18K gold plated over brass. Filigree detail. Hypoallergenic posts. Drop length 1.5 inches.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean with a soft cloth.",
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "sets",
    material: "gold",
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description: "A gift-boxed set featuring matching earrings and necklace. The perfect gift — or a well-deserved treat for yourself. Presented in a velvet-lined keepsake box.",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    ],
    materials: "18K gold plated over brass. Cubic zirconia accents. Velvet gift box included.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean with a soft cloth.",
  },
]

export const categories = [
  { id: "earrings", name: "Earrings", count: 12, image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&q=80" },
  { id: "necklaces", name: "Necklaces", count: 8, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
  { id: "huggies", name: "Huggies", count: 6, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80" },
]

export const testimonials = [
  {
    id: 1,
    name: "Sophia M.",
    text: "The quality exceeds the price point tenfold. I've received countless compliments on my Vivid Aura earrings. They look like heirloom pieces.",
    rating: 5,
  },
  {
    id: 2,
    name: "Isabella K.",
    text: "Ordered the Royal Heirloom Set as a gift for my sister — she hasn't taken it off since. The packaging alone felt like opening something truly special.",
    rating: 5,
  },
  {
    id: 3,
    name: "Olivia R.",
    text: "Finally, jewelry that doesn't irritate my sensitive ears. The Golden Sphere Huggies are my everyday staple now. Absolutely in love.",
    rating: 5,
  },
]

export const ugcItems = [
  {
    id: 1,
    caption: "New favorite ear cuff ✨",
    product: "Vivid Aura Jewels",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80",
  },
  {
    id: 2,
    caption: "Layer it, love it, live in it",
    product: "Majestic Flora Nectar",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
  },
  {
    id: 3,
    caption: "Huggies for every mood",
    product: "Golden Sphere Huggies",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80",
  },
  {
    id: 4,
    caption: "Gifted & obsessed 💛",
    product: "Royal Heirloom Set",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80",
  },
  {
    id: 5,
    caption: "Gold on gold on gold",
    product: "Amber Lace Earrings",
    image: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=400&q=80",
  },
  {
    id: 6,
    caption: "Everyday elegance",
    product: "Golden Sphere Huggies",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80",
  },
]