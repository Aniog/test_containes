import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export async function fetchProducts(options = {}) {
  const { category, sortBy, limit = 50 } = options;
  let query = client.from('Products').select('*').limit(limit);

  if (category && category !== 'All') {
    query = query.eq('category', category);
  }

  if (sortBy === 'price-asc') {
    query = query.order('price', { ascending: true });
  } else if (sortBy === 'price-desc') {
    query = query.order('price', { ascending: false });
  } else if (sortBy === 'newest') {
    query = query.order('created_at', { ascending: false });
  } else {
    query = query.order('bestseller', { ascending: false });
  }

  const { data: response, error } = await query;
  if (error) throw error;
  return response?.data?.list ?? [];
}

export async function fetchProductBySlug(slug) {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return response?.data ?? null;
}

export async function fetchBestsellers(limit = 5) {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('bestseller', true)
    .limit(limit);

  if (error) throw error;
  return response?.data?.list ?? [];
}
