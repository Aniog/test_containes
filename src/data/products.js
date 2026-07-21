// Seed product catalog for Velmora Fine Jewelry.
// Real images will be resolved by the strk-img system at runtime.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'Earrings',
    material: 'gold',
    variants: ['Gold', 'Silver'],
    rating: 4.9,
    reviews: 128,
    description:
      'A sculptural gold ear cuff kissed with a single hand-set crystal. Comfortable, cartilage-friendly, and made to be layered day into night.',
    materials:
      '18K gold-plated brass. Hypoallergenic. Nickel-free. Hand-set glass crystal.',
    shipping:
      'Free worldwide shipping over $75. Ships in signature Velmora keepsake box within 24 hours.',
    imgId: 'prod-vivid-aura-a13f8',
    imgIdAlt: 'prod-vivid-aura-alt-b24g9',
    imgQuery: 'gold ear cuff crystal jewelry close up on model warm lit',
    imgQueryAlt: 'gold ear cuff crystal styled flatlay warm neutral',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'Necklaces',
    material: 'gold',
    variants: ['Gold', 'Silver'],
    rating: 4.8,
    reviews: 214,
    description:
      'A delicate floral necklace in warm gold, blooming with pastel crystals. A quiet statement — equally at home over a slip dress or a linen tee.',
    materials:
      '18K gold-plated brass. Adjustable chain 16 – 18". Hypoallergenic. Nickel-free.',
    shipping:
      'Free worldwide shipping over $75. 30-day easy returns.',
    imgId: 'prod-flora-nectar-c35h0',
    imgIdAlt: 'prod-flora-nectar-alt-d46i1',
    imgQuery: 'gold floral necklace with pastel crystals on soft neutral background editorial',
    imgQueryAlt: 'gold floral crystal necklace worn on model warm light',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'Huggies',
    material: 'gold',
    variants: ['Gold', 'Silver'],
    rating: 4.9,
    reviews: 342,
    description:
      "The everyday huggie, elevated. A confident dome silhouette hugs the lobe with a whisper-light click closure. You'll forget you're wearing them.",
    materials:
      '18K gold-plated stainless steel. Hypoallergenic. Water-resistant everyday wear.',
    shipping:
      'Free worldwide shipping over $75. Ships within 24 hours.',
    imgId: 'prod-sphere-huggies-e57j2',
    imgIdAlt: 'prod-sphere-huggies-alt-f68k3',
    imgQuery: 'chunky gold dome huggie hoop earrings close up on model warm lit',
    imgQueryAlt: 'gold dome huggie earrings flatlay neutral background',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'Earrings',
    material: 'gold',
    variants: ['Gold', 'Silver'],
    rating: 4.7,
    reviews: 96,
    description:
      'Hand-textured filigree drops inspired by heirloom lacework. Lightweight enough for all-day wear, luminous under evening light.',
    materials:
      '18K gold-plated brass. Butterfly backs. Hypoallergenic. Nickel-free.',
    shipping:
      'Free worldwide shipping over $75. 30-day easy returns.',
    imgId: 'prod-amber-lace-g79l4',
    imgIdAlt: 'prod-amber-lace-alt-h80m5',
    imgQuery: 'textured gold filigree drop earrings editorial warm light close up',
    imgQueryAlt: 'gold filigree drop earrings worn on model neutral background',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'Necklaces',
    material: 'gold',
    variants: ['Gold', 'Silver'],
    rating: 5.0,
    reviews: 61,
    description:
      'Our most-gifted duo. A slim gold pendant paired with matching studs, arriving in a signature keepsake box with a hand-written card option.',
    materials:
      '18K gold-plated brass. Set of two: 16" pendant + stud earrings. Nickel-free.',
    shipping:
      'Free worldwide shipping. Gift-ready packaging included. 30-day returns.',
    imgId: 'prod-heirloom-set-i91n6',
    imgIdAlt: 'prod-heirloom-set-alt-j02o7',
    imgQuery: 'gold pendant necklace and stud earring gift set in keepsake box warm lit editorial',
    imgQueryAlt: 'gold necklace and earring set on model warm neutral background',
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const categories = ['Earrings', 'Necklaces', 'Huggies'];
