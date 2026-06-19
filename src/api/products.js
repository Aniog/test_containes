import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const getProducts = async (filters = {}) => {
  let query = client.from('Product').select('*');
  
  if (filters.category && filters.category !== 'All') {
    query = query.eq('category', filters.category);
  }
  
  if (filters.isBestseller) {
    query = query.eq('isBestseller', true);
  }

  const { data, error } = await query.order('created_at', { ascending: false });
  
  if (error) throw error;
  return data?.list || [];
};

export const getProductBySlug = async (slug) => {
  const { data, error } = await client
    .from('Product')
    .select('*')
    .eq('slug', slug)
    .single();
    
  if (error) throw error;
  return data || null;
};
