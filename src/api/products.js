import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const getRows = (response) => response?.data?.list ?? [];
export const getEntity = (response) => response?.data ?? null;

export const fetchProducts = async () => {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  // Map internal data structure to a flatter one if needed for the app
  return getRows(response).map(item => ({
    id: item.id.toString(),
    ...item.data
  }));
};

export const fetchProductById = async (id) => {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  const entity = getEntity(response);
  return entity ? { id: entity.id.toString(), ...entity.data } : null;
};
