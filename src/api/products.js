import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export async function fetchProducts() {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return response?.data?.list ?? [];
}

export async function fetchProductBySlug(slug) {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) throw error;
  return response?.data ?? null;
}
