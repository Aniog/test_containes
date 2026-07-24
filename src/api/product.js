import { client } from '../config';

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;

export const fetchProducts = async (filters = {}) => {
  let query = client.from('Product').select('*');
  
  if (filters.category) {
    query = query.eq('category', filters.category);
  }
  
  if (filters.isBestseller) {
    query = query.eq('isBestseller', true);
  }

  const { data: response, error } = await query.order('name', { ascending: true });
  
  if (error) throw error;
  return getRows(response);
};

export const fetchProductBySlug = async (slug) => {
  const { data: response, error } = await client
    .from('Product')
    .select('*')
    .eq('slug', slug)
    .single();
    
  if (error) throw error;
  return getEntity(response);
};
