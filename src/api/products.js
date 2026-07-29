import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;

export async function fetchProducts({ category, search, sort } = {}) {
  console.log('[products] fetchProducts', { category, search, sort });
  let query = client.from('Products').select('*');

  if (category && category !== 'all') {
    query = query.eq('category', category);
  }
  if (search) {
    query = query.ilike('name', `%${search}%`);
  }

  const orderField = sort === 'price-asc' || sort === 'price-desc' ? 'price' : 'name';
  const ascending = sort !== 'price-desc';
  query = query.order(orderField, { ascending });

  const { data: response, error } = await query.range(0, 49);
  if (error) throw error;
  return getRows(response);
}

export async function fetchFeaturedProducts() {
  console.log('[products] fetchFeaturedProducts');
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('is_featured', true)
    .range(0, 7);
  if (error) throw error;
  return getRows(response);
}

export async function fetchProductById(id) {
  console.log('[products] fetchProductById', id);
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return getEntity(response);
}

export async function createOrder(orderData) {
  console.log('[orders] createOrder', orderData);
  const { data: response, error } = await client
    .from('Orders')
    .insert({ data: orderData })
    .select()
    .single();
  if (error) throw error;
  if (response?.success === false) {
    throw new Error((response.errors || []).join(', ') || 'Order failed');
  }
  return getEntity(response);
}
