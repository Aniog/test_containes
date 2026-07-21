import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const SEED_PRODUCTS = [
  {
    id: 'bc477b00-ecc2-4149-b1a9-6417519e126a',
    data: {
      id: 'bc477b00-ecc2-4149-b1a9-6417519e126a',
      name: 'Vivid Aura Jewels',
      slug: 'vivid-aura-jewels',
      price: 42,
      description: 'Gold ear cuff with crystal accent',
      category: 'earrings',
      rating: 4.5,
      review_count: 24,
      image_url: '',
    },
  },
  {
    id: 'e3d1a3a5-92d4-4e87-91f4-be6d261bd93c',
    data: {
      id: 'e3d1a3a5-92d4-4e87-91f4-be6d261bd93c',
      name: 'Majestic Flora Nectar',
      slug: 'majestic-flora-nectar',
      price: 68,
      description: 'Multicolor floral crystal necklace',
      category: 'necklaces',
      rating: 4.8,
      review_count: 18,
      image_url: '',
    },
  },
  {
    id: '028a49ca-9877-43ce-aba3-cbf02dc688c5',
    data: {
      id: '028a49ca-9877-43ce-aba3-cbf02dc688c5',
      name: 'Golden Sphere Huggies',
      slug: 'golden-sphere-huggies',
      price: 38,
      description: 'Chunky gold dome huggie earrings',
      category: 'huggies',
      rating: 4.6,
      review_count: 31,
      image_url: '',
    },
  },
  {
    id: '0945e707-9f66-40a3-a42e-b206e32fe3e3',
    data: {
      id: '0945e707-9f66-40a3-a42e-b206e32fe3e3',
      name: 'Amber Lace Earrings',
      slug: 'amber-lace-earrings',
      price: 54,
      description: 'Textured gold filigree drop earrings',
      category: 'earrings',
      rating: 4.7,
      review_count: 15,
      image_url: '',
    },
  },
  {
    id: '8bdda28d-a1f9-4014-bedf-e0e159689380',
    data: {
      id: '8bdda28d-a1f9-4014-bedf-e0e159689380',
      name: 'Royal Heirloom Set',
      slug: 'royal-heirloom-set',
      price: 95,
      description: 'Gift-boxed earring + necklace set',
      category: 'sets',
      rating: 4.9,
      review_count: 42,
      image_url: '',
    },
  },
];

export async function fetchProducts(options = {}) {
  const { category, sortBy = 'created_at', order = 'desc', limit = 50 } = options;
  try {
    let query = client.from('Products').select('*').order(sortBy, { ascending: order === 'asc' }).limit(limit);
    if (category) {
      query = query.eq('category', category);
    }
    const { data: response, error } = await query;
    if (error) throw error;
    const rows = response?.data?.list ?? [];
    if (rows.length > 0) return rows;
  } catch (e) {
    console.warn('DB fetch failed, using seed data:', e.message);
  }
  // Fallback to seed data
  let list = [...SEED_PRODUCTS];
  if (category) {
    list = list.filter((p) => p.data.category === category);
  }
  return list;
}

export async function fetchProductBySlug(slug) {
  try {
    const { data: response, error } = await client
      .from('Products')
      .select('*')
      .eq('slug', slug)
      .limit(1);
    if (error) throw error;
    const list = response?.data?.list ?? [];
    if (list.length > 0) return list[0];
  } catch (e) {
    console.warn('DB fetch failed, using seed data:', e.message);
  }
  return SEED_PRODUCTS.find((p) => p.data.slug === slug) || null;
}

export async function fetchBestsellers() {
  // Return all seed products as bestsellers
  return fetchProducts();
}
