export const products = [
  {
    id: "1",
    name: "Vivid Aura Jewels",
    price: 42.00,
    category: "Earrings",
    material: "18K Gold Plated",
    description: "An elegant gold ear cuff with a subtle crystal accent, designed to gently hug the ear for a radiant, effortless look. Perfect for layering.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    name: "Majestic Flora Nectar",
    price: 68.00,
    category: "Necklaces",
    material: "18K Gold Plated",
    description: "A meticulously crafted multicolor floral crystal necklace that captures the delicate beauty of nature. Suspended on a fine gold chain.",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800",
    rating: 5.0,
    reviews: 89
  },
  {
    id: "3",
    name: "Golden Sphere Huggies",
    price: 38.00,
    category: "Huggies",
    material: "18K Gold Plated",
    description: "Chunky yet lightweight dome huggie earrings. A versatile, modern classic that adds instant polish to any ensemble.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 210
  },
  {
    id: "4",
    name: "Amber Lace Earrings",
    price: 54.00,
    category: "Earrings",
    material: "18K Gold Plated",
    description: "Intricate textured gold filigree drop earrings, evoking vintage charm with a contemporary silhouette.",
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviews: 56
  },
  {
    id: "5",
    name: "Royal Heirloom Set",
    price: 95.00,
    category: "Sets",
    material: "18K Gold Plated",
    description: "A beautifully curated gift-boxed set featuring a matching pendant necklace and stud earrings. The ultimate expression of quiet luxury.",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 142
  }
];

export const getProducts = () => products;
export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => {
  if (!category || category === 'all') return products;
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};
