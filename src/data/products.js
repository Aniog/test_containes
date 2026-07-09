const products = [
  {
    id: 'vivid-aura-ear-cuff',
    slug: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    subtitle: 'Gold Ear Cuff with Crystal Accent',
    description: 'A statement ear cuff adorned with brilliant crystals, designed to catch the light from every angle. Crafted in 18K gold plating for a luxurious finish that lasts.',
    longDescription: 'The Vivid Aura Ear Cuff is a modern take on classic elegance. Featuring a delicate crystal accent that sparkles with every movement, this piece adds instant sophistication to any look. No piercing required — simply slide it onto your ear for an effortless style upgrade.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    variants: [
      { name: 'Gold', color: '#C8A96E' },
      { name: 'Silver', color: '#C0C0C0' },
    ],
    rating: 4.8,
    reviewCount: 127,
    bestseller: true,
    imageUrl: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1632806312889-2822760543c9',
    images: [
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1632806312889-2822760543c9',
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1677578329676-7296dd3d1083',
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1599822896904-f11c699160e2',
    ],
    imageQuery: 'gold ear cuff crystal jewelry closeup on dark background',
    imageQueryAlt: 'crystal gold ear cuff worn on ear closeup editorial',
    tags: ['ear cuff', 'crystal', 'gold', 'no-piercing'],
  },
  {
    id: 'majestic-flora-necklace',
    slug: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    subtitle: 'Multicolor Floral Crystal Necklace',
    description: 'A breathtaking floral crystal necklace featuring multicolored gemstones set in an intricate botanical design. Each piece is hand-finished for a one-of-a-kind sparkle.',
    longDescription: 'Inspired by nature\'s most beautiful gardens, the Majestic Flora Nectar necklace is a true work of art. Multicolored crystals are carefully arranged in a floral pattern, creating a piece that transitions seamlessly from day to evening. The adjustable chain ensures the perfect fit.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    variants: [
      { name: 'Gold', color: '#C8A96E' },
      { name: 'Silver', color: '#C0C0C0' },
    ],
    rating: 4.9,
    reviewCount: 89,
    bestseller: true,
    imageUrl: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1615421844228-37d4f0bf8bbc',
    images: [
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1615421844228-37d4f0bf8bbc',
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1603297860099-38e3e5f27254',
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1561872776-234ca64a8873',
    ],
    imageQuery: 'multicolor floral crystal gold necklace on dark velvet background',
    imageQueryAlt: 'floral crystal necklace worn on neck editorial warm light',
    tags: ['necklace', 'floral', 'crystal', 'multicolor'],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    subtitle: 'Chunky Gold Dome Huggie Earrings',
    description: 'Bold yet refined, these dome huggie earrings feature a chunky gold design that hugs the earlobe perfectly. Lightweight enough for all-day wear.',
    longDescription: 'The Golden Sphere Huggies are our most-loved everyday earrings. The chunky dome design makes a statement while the huggie closure ensures comfortable, secure wear. Perfect for stacking with other earrings or wearing solo for a minimalist-chic look.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    variants: [
      { name: 'Gold', color: '#C8A96E' },
      { name: 'Silver', color: '#C0C0C0' },
    ],
    rating: 4.7,
    reviewCount: 203,
    bestseller: true,
    imageUrl: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1582756825287-a250e1e432d9',
    images: [
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1582756825287-a250e1e432d9',
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1632525230528-ec17c49bc168',
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1602752250015-52934bc45613',
    ],
    imageQuery: 'chunky gold dome huggie earrings on dark background luxury',
    imageQueryAlt: 'gold huggie earrings worn closeup warm editorial lighting',
    tags: ['huggies', 'chunky', 'gold', 'dome'],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    subtitle: 'Textured Gold Filigree Drop Earrings',
    description: 'Intricate filigree drop earrings with a vintage-inspired texture. The amber-toned gold catches light beautifully, creating an ethereal glow.',
    longDescription: 'The Amber Lace Earrings draw inspiration from antique lacework, reimagined in warm 18K gold. The intricate filigree pattern creates depth and dimension, while the drop design adds graceful movement. A statement piece for special occasions or elevated everyday wear.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    variants: [
      { name: 'Gold', color: '#C8A96E' },
      { name: 'Silver', color: '#C0C0C0' },
    ],
    rating: 4.9,
    reviewCount: 156,
    bestseller: true,
    imageUrl: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1502723804370-fa1d97a9774e',
    images: [
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1502723804370-fa1d97a9774e',
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1638818019324-3fc09a9cdea8',
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1680532176435-8b9194314447',
    ],
    imageQuery: 'gold filigree drop earrings lace texture on dark background',
    imageQueryAlt: 'filigree gold earrings worn on ear warm light closeup',
    tags: ['earrings', 'filigree', 'drop', 'vintage'],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    subtitle: 'Gift-Boxed Earring + Necklace Set',
    description: 'A luxurious gift set featuring matching gold earrings and necklace, presented in our signature velvet box. The perfect gift for someone special — or yourself.',
    longDescription: 'The Royal Heirloom Set is the ultimate expression of love and luxury. This curated set includes a pair of our bestselling earrings and a perfectly matched necklace, all presented in our signature velvet-lined gift box. Whether for a birthday, anniversary, or "just because," this set makes gifting effortless and unforgettable.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    variants: [
      { name: 'Gold', color: '#C8A96E' },
      { name: 'Silver', color: '#C0C0C0' },
    ],
    rating: 5.0,
    reviewCount: 64,
    bestseller: true,
    imageUrl: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1666060518856-724686a6587d',
    images: [
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1666060518856-724686a6587d',
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1666060518856-724686a6587d',
      'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1666060518856-724686a6587d',
    ],
    imageQuery: 'luxury gold jewelry gift set earring necklace in velvet box',
    imageQueryAlt: 'open velvet jewelry box with gold earring necklace set',
    tags: ['set', 'gift', 'earring', 'necklace'],
  },
];

export const getProducts = () => products;
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductById = (id) => products.find(p => p.id === id);
export const getBestsellers = () => products.filter(p => p.bestseller);
export const getCategories = () => {
  const cats = [...new Set(products.map(p => p.category))];
  return cats;
};
export const getProductsByCategory = (category) =>
  products.filter(p => p.category === category);
export const getRelatedProducts = (productId) =>
  products.filter(p => p.id !== productId).slice(0, 3);

export default products;
