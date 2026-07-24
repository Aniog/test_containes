// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    description: 'A striking gold ear cuff adorned with a luminous crystal accent. This statement piece balances boldness with refinement, featuring a comfortable tension-fit design that hugs the curve of your ear. Perfect for those who appreciate jewelry that sparks conversation.',
    fullDescription: 'The Vivid Aura Jewels ear cuff showcases the beauty of contrast — the warm glow of 18K gold plating against a brilliant crystal centerpiece. Hand-finished by our artisans, each piece features a subtle hammered texture that catches light from every angle. The adjustable fit ensures comfortable wear whether you are dressing up for an evening or adding elegance to your everyday look.',
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80'
    ],
    variants: {
      label: 'Finish',
      options: ['Gold', 'Rose Gold']
    },
    materials: '18K Gold Plated, Cubic Zirconia, Hypoallergenic Sterling Silver Base',
    rating: 4.8,
    reviewCount: 124,
    isBestseller: true
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of a spring garden in full bloom. Delicate crystal flowers are strung on a delicate chain, creating a piece that is both whimsical and sophisticated.',
    fullDescription: 'Inspired by the delicate beauty of wildflower meadows, the Majestic Flora Nectar necklace features an array of hand-selected crystals in soft pastels — rose quartz pink, sage green, and sky blue — each petal meticulously crafted to create a natural, organic arrangement. The adjustable 16-18 inch chain allows you to wear it at your preferred length, making it perfect for layering with other delicate pieces.',
    category: 'necklaces',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80'
    ],
    variants: {
      label: 'Crystal Palette',
      options: ['Spring Garden', 'Ocean Mist']
    },
    materials: '18K Gold Plated, Natural Crystals, Hypoallergenic Sterling Silver Chain',
    rating: 4.9,
    reviewCount: 89,
    isBestseller: true
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    description: 'Chunky gold dome huggie earrings that make an instant impact. These substantial yet lightweight hoops feature a smooth, polished sphere design that frames your face with warm, luminous gold.',
    fullDescription: 'The Golden Sphere Huggies are the embodiment of effortless elegance. Their generous 15mm diameter creates a bold statement while remaining comfortable for all-day wear. The proprietary hinge mechanism ensures they stay securely in place through your busiest days. Each pair is polished by hand to achieve a mirror-like finish that enhances the rich 18K gold plating.',
    category: 'huggies',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80'
    ],
    variants: {
      label: 'Size',
      options: ['Small (12mm)', 'Medium (15mm)', 'Large (18mm)']
    },
    materials: '18K Gold Plated, Hypoallergenic Stainless Steel',
    rating: 4.7,
    reviewCount: 203,
    isBestseller: true
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns inspired by vintage European craftsmanship. Each earring is a miniature work of art, with delicate openwork that creates beautiful shadow patterns.',
    fullDescription: 'The Amber Lace Earrings pay homage to the romantic artistry of antique jewelry-making. Our skilled artisans have recreated traditional filigree techniques using modern precision, resulting in earrings that feature impossibly delicate gold strands forming an intricate, symmetrical pattern. The drop length of 35mm adds graceful movement without overwhelming, making these earrings equally suited for a wedding or a Wednesday lunch.',
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=800&q=80',
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=80'
    ],
    variants: {
      label: 'Finish',
      options: ['Antique Gold', 'Bright Gold']
    },
    materials: '18K Gold Plated, Hypoallergenic Sterling Silver Posts',
    rating: 4.9,
    reviewCount: 67,
    isBestseller: true
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    description: 'A luxurious gift-boxed set featuring a coordinating pair of earrings and necklace. Presented in our signature keepsake box, this set makes a perfect gift for graduations, anniversaries, or simply celebrating someone special — including yourself.',
    fullDescription: 'The Royal Heirloom Set embodies the spirit of jewelry that becomes part of your story. This curated collection features our bestselling huggie earrings paired with a delicate pendant necklace, both sharing the same refined aesthetic and superior craftsmanship. The necklace features a 12mm pendant on a 16-18 inch adjustable chain. Presented in a luxurious matte black gift box with gold foil lettering, it is ready to gift the moment it arrives.',
    category: 'sets',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80'
    ],
    variants: {
      label: 'Style',
      options: ['Classic', 'Modern']
    },
    materials: '18K Gold Plated, Hypoallergenic Materials, Luxury Gift Box Included',
    rating: 5.0,
    reviewCount: 156,
    isBestseller: true
  }
];

export const categories = [
  { 
    id: 'earrings', 
    name: 'Earrings', 
    description: 'From subtle studs to statement drops',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80'
  },
  { 
    id: 'necklaces', 
    name: 'Necklaces', 
    description: 'Delicate chains to bold pendants',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80'
  },
  { 
    id: 'huggies', 
    name: 'Huggies', 
    description: 'Effortless everyday elegance',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality exceeded my expectations. I have received so many compliments on my Golden Sphere Huggies.',
    product: 'Golden Sphere Huggies'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Finally found jewelry that is both beautiful and affordable. The packaging alone made me feel special.',
    product: 'Majestic Flora Nectar'
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'Purchased the Royal Heirloom Set as a gift. The presentation was impeccable and my mother loved it.',
    product: 'Royal Heirloom Set'
  }
];

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&q=80',
    caption: 'Everyday elegance'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'My daily staple'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80',
    caption: 'Layered perfection'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Statement approved'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    caption: 'Gift wrapped'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=400&q=80',
    caption: 'Delicate details'
  }
];

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getBestsellers = () => {
  return products.filter(product => product.isBestseller);
};
