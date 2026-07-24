import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;

export const fetchProducts = async (category = null) => {
  let query = client.from('Product').select('*');
  if (category) {
    query = query.eq('category', category);
  }
  const { data: response, error } = await query;
  if (error) throw error;
  return getRows(response);
};

export const fetchProductById = async (id) => {
  const { data: response, error } = await client
    .from('Product')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return getEntity(response);
};
