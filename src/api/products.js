import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';

export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const getRows = (response) => response?.data?.list ?? [];
export const getEntity = (response) => response?.data ?? null;
export const getSchemaData = (entity) => entity?.data ?? {};

export const fetchProducts = async (filters = {}) => {
  let query = client.from('Product').select('*');
  
  if (filters.category) {
    query = query.eq('category', filters.category);
  }
  
  if (filters.featured) {
    query = query.eq('featured', true);
  }

  const { data: response, error } = await query.order('created_at', { ascending: false });
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
