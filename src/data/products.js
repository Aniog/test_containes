export const CATEGORIES = {
  EARRINGS: 'earrings',
  NECKLACES: 'necklaces',
  HUGGIES: 'huggies',
  SETS: 'sets',
};

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: CATEGORIES.EARRINGS,
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff finished with a single prismatic crystal accent. Designed to catch candlelight and compliment an ear stack — no piercing required.',
    materials:
      '18k gold-plated brass, cubic zirconia accent. Nickel-free and hypoallergenic.',
    care: 'Avoid contact with perfume, lotions, and water. Store in a dry pouch and polish gently with a soft cloth.',
    variants: [
      { label: 'Gold', value: 'gold', priceModifier: 0 },
      { label: 'Silver', value: 'silver', priceModifier: 0 },
    ],
    images: {
      primary: {
        id: 'vivid-aura-primary',
        thumbId: 'vivid-aura-primary-thumb',
        ratio: '4x5',
        width: 800,
        queryParts: [
          'product-vivid-aura-desc',
          'product-vivid-aura-name',
          'hero-subhead',
          'hero-title',
        ],
      },
      hover: {
        id: 'vivid-aura-hover',
        thumbId: 'vivid-aura-hover-thumb',
        ratio: '4x5',
        width: 800,
        queryParts: [
          'product-vivid-aura-desc',
          'product-vivid-aura-name',
          'hero-subhead',
        ],
      },
      gallery: [
        {
          id: 'vivid-aura-primary',
          thumbId: 'vivid-aura-primary-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-vivid-aura-desc',
            'product-vivid-aura-name',
            'hero-subhead',
            'hero-title',
          ],
        },
        {
          id: 'vivid-aura-hover',
          thumbId: 'vivid-aura-hover-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-vivid-aura-desc',
            'product-vivid-aura-name',
            'hero-subhead',
          ],
        },
        {
          id: 'vivid-aura-lifestyle',
          thumbId: 'vivid-aura-lifestyle-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-vivid-aura-desc',
            'product-vivid-aura-name',
            'hero-subhead',
          ],
        },
        {
          id: 'vivid-aura-worn',
          thumbId: 'vivid-aura-worn-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-vivid-aura-desc',
            'product-vivid-aura-name',
            'hero-subhead',
          ],
        },
      ],
    },
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: CATEGORIES.NECKLACES,
    rating: 4.9,
    reviewCount: 89,
    description:
      'A delicate collar necklace strung with hand-set multicolor floral crystals. Feminine, vivid, and endlessly wearable from day to night.',
    materials:
      '18k gold-plated chain, hand-set glass crystals, lobster clasp. Length: 38cm + 5cm extender.',
    care: 'Wipe clean after wear, store flat to prevent tangling, remove before swimming.',
    variants: [
      { label: 'Gold', value: 'gold', priceModifier: 0 },
      { label: 'Silver', value: 'silver', priceModifier: 0 },
    ],
    images: {
      primary: {
        id: 'majestic-flora-primary',
        thumbId: 'majestic-flora-primary-thumb',
        ratio: '4x5',
        width: 800,
        queryParts: [
          'product-majestic-flora-desc',
          'product-majestic-flora-name',
          'hero-subhead',
          'hero-title',
        ],
      },
      hover: {
        id: 'majestic-flora-hover',
        thumbId: 'majestic-flora-hover-thumb',
        ratio: '4x5',
        width: 800,
        queryParts: [
          'product-majestic-flora-desc',
          'product-majestic-flora-name',
          'hero-subhead',
        ],
      },
      gallery: [
        {
          id: 'majestic-flora-primary',
          thumbId: 'majestic-flora-primary-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-majestic-flora-desc',
            'product-majestic-flora-name',
            'hero-subhead',
            'hero-title',
          ],
        },
        {
          id: 'majestic-flora-hover',
          thumbId: 'majestic-flora-hover-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-majestic-flora-desc',
            'product-majestic-flora-name',
            'hero-subhead',
          ],
        },
        {
          id: 'majestic-flora-lifestyle',
          thumbId: 'majestic-flora-lifestyle-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-majestic-flora-desc',
            'product-majestic-flora-name',
            'hero-subhead',
          ],
        },
        {
          id: 'majestic-flora-worn',
          thumbId: 'majestic-flora-worn-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-majestic-flora-desc',
            'product-majestic-flora-name',
            'hero-subhead',
          ],
        },
      ],
    },
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: CATEGORIES.HUGGIES,
    rating: 4.7,
    reviewCount: 156,
    description:
      'Chunky dome huggies with a mirror-polished finish. Substantial enough to wear alone, refined enough to stack.',
    materials:
      '18k gold-plated stainless steel, surgical steel posts. Lightweight and tarnish-resistant.',
    care: 'Clean with a soft cloth, avoid harsh chemicals, store in provided box.',
    variants: [
      { label: 'Gold', value: 'gold', priceModifier: 0 },
      { label: 'Silver', value: 'silver', priceModifier: 0 },
    ],
    images: {
      primary: {
        id: 'golden-sphere-primary',
        thumbId: 'golden-sphere-primary-thumb',
        ratio: '4x5',
        width: 800,
        queryParts: [
          'product-golden-sphere-desc',
          'product-golden-sphere-name',
          'hero-subhead',
          'hero-title',
        ],
      },
      hover: {
        id: 'golden-sphere-hover',
        thumbId: 'golden-sphere-hover-thumb',
        ratio: '4x5',
        width: 800,
        queryParts: [
          'product-golden-sphere-desc',
          'product-golden-sphere-name',
          'hero-subhead',
        ],
      },
      gallery: [
        {
          id: 'golden-sphere-primary',
          thumbId: 'golden-sphere-primary-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-golden-sphere-desc',
            'product-golden-sphere-name',
            'hero-subhead',
            'hero-title',
          ],
        },
        {
          id: 'golden-sphere-hover',
          thumbId: 'golden-sphere-hover-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-golden-sphere-desc',
            'product-golden-sphere-name',
            'hero-subhead',
          ],
        },
        {
          id: 'golden-sphere-lifestyle',
          thumbId: 'golden-sphere-lifestyle-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-golden-sphere-desc',
            'product-golden-sphere-name',
            'hero-subhead',
          ],
        },
        {
          id: 'golden-sphere-worn',
          thumbId: 'golden-sphere-worn-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-golden-sphere-desc',
            'product-golden-sphere-name',
            'hero-subhead',
          ],
        },
      ],
    },
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: CATEGORIES.EARRINGS,
    rating: 4.9,
    reviewCount: 72,
    description:
      'Textured filigree drops inspired by antique lace. These earrings frame the face with warm golden light and intricate detail.',
    materials:
      '18k gold-plated brass, titanium posts. Each pair is hand-textured for subtle variation.',
    care: 'Handle by the post to preserve texture, keep dry, store in a soft pouch.',
    variants: [
      { label: 'Gold', value: 'gold', priceModifier: 0 },
    ],
    images: {
      primary: {
        id: 'amber-lace-primary',
        thumbId: 'amber-lace-primary-thumb',
        ratio: '4x5',
        width: 800,
        queryParts: [
          'product-amber-lace-desc',
          'product-amber-lace-name',
          'hero-subhead',
          'hero-title',
        ],
      },
      hover: {
        id: 'amber-lace-hover',
        thumbId: 'amber-lace-hover-thumb',
        ratio: '4x5',
        width: 800,
        queryParts: [
          'product-amber-lace-desc',
          'product-amber-lace-name',
          'hero-subhead',
        ],
      },
      gallery: [
        {
          id: 'amber-lace-primary',
          thumbId: 'amber-lace-primary-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-amber-lace-desc',
            'product-amber-lace-name',
            'hero-subhead',
            'hero-title',
          ],
        },
        {
          id: 'amber-lace-hover',
          thumbId: 'amber-lace-hover-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-amber-lace-desc',
            'product-amber-lace-name',
            'hero-subhead',
          ],
        },
        {
          id: 'amber-lace-lifestyle',
          thumbId: 'amber-lace-lifestyle-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-amber-lace-desc',
            'product-amber-lace-name',
            'hero-subhead',
          ],
        },
        {
          id: 'amber-lace-worn',
          thumbId: 'amber-lace-worn-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-amber-lace-desc',
            'product-amber-lace-name',
            'hero-subhead',
          ],
        },
      ],
    },
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: CATEGORIES.SETS,
    rating: 5.0,
    reviewCount: 41,
    description:
      'A coordinated earring and necklace set, beautifully gift-boxed and ready to give. The ultimate self-gift or celebration present.',
    materials:
      '18k gold-plated brass, cubic zirconia accents, gift box included.',
    care: 'Keep pieces separated in the provided box, polish with a soft cloth.',
    variants: [
      { label: 'Gold', value: 'gold', priceModifier: 0 },
    ],
    images: {
      primary: {
        id: 'royal-heirloom-primary',
        thumbId: 'royal-heirloom-primary-thumb',
        ratio: '4x5',
        width: 800,
        queryParts: [
          'product-royal-heirloom-desc',
          'product-royal-heirloom-name',
          'hero-subhead',
          'hero-title',
        ],
      },
      hover: {
        id: 'royal-heirloom-hover',
        thumbId: 'royal-heirloom-hover-thumb',
        ratio: '4x5',
        width: 800,
        queryParts: [
          'product-royal-heirloom-desc',
          'product-royal-heirloom-name',
          'hero-subhead',
        ],
      },
      gallery: [
        {
          id: 'royal-heirloom-primary',
          thumbId: 'royal-heirloom-primary-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-royal-heirloom-desc',
            'product-royal-heirloom-name',
            'hero-subhead',
            'hero-title',
          ],
        },
        {
          id: 'royal-heirloom-hover',
          thumbId: 'royal-heirloom-hover-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-royal-heirloom-desc',
            'product-royal-heirloom-name',
            'hero-subhead',
          ],
        },
        {
          id: 'royal-heirloom-lifestyle',
          thumbId: 'royal-heirloom-lifestyle-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-royal-heirloom-desc',
            'product-royal-heirloom-name',
            'hero-subhead',
          ],
        },
        {
          id: 'royal-heirloom-worn',
          thumbId: 'royal-heirloom-worn-thumb',
          ratio: '4x5',
          width: 900,
          queryParts: [
            'product-royal-heirloom-desc',
            'product-royal-heirloom-name',
            'hero-subhead',
          ],
        },
      ],
    },
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

export function getRelatedProducts(currentId, limit = 4) {
  const current = getProductById(currentId);
  const sameCategory = PRODUCTS.filter(
    (p) => p.id !== currentId && p.category === current?.category,
  );
  const others = PRODUCTS.filter(
    (p) => p.id !== currentId && p.category !== current?.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}
