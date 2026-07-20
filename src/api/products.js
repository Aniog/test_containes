import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const fetchProducts = async () => {
  const { data: response, error } = await client
    .from('Product')
    .select('*')
    .limit(20);

  if (error) throw error;
  return response?.data?.list || [];
};

export const fetchProductById = async (id) => {
  const { data: response, error } = await client
    .from('Product')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return response?.data;
};
