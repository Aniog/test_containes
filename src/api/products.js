import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data?.list?.[0] ?? null;

export async function fetchProducts(filters = {}) {
  let query = client.from('Products').select('*');

  if (filters.category) {
    query = query.eq('category', filters.category);
  }
  if (filters.is_bestseller !== undefined) {
    query = query.eq('is_bestseller', filters.is_bestseller);
  }
  if (filters.minPrice !== undefined) {
    query = query.gte('price', filters.minPrice);
  }
  if (filters.maxPrice !== undefined) {
    query = query.lte('price', filters.maxPrice);
  }

  const orderField = filters.sortBy || 'created_at';
  const ascending = filters.sortOrder !== 'desc';
  query = query.order(orderField, { ascending });

  const { data: response, error } = await query;
  if (error) throw error;
  return getRows(response);
}

export async function fetchProductBySlug(slug) {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return getEntity(response);
}

export async function fetchBestsellers() {
  return fetchProducts({ is_bestseller: true });
}

export async function fetchRelatedProducts(category, excludeSlug) {
  const products = await fetchProducts({ category });
  return products.filter((p) => p.data?.slug !== excludeSlug).slice(0, 4);
}
