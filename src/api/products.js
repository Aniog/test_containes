import client, { getRows } from './client';

export const fetchProducts = async (params = {}) => {
  let query = client.from('Products').select('*');
  
  if (params.category) {
    query = query.eq('category', params.category);
  }
  
  if (params.isBestseller) {
    query = query.eq('isBestseller', true);
  }

  const { data: response, error } = await query;
  if (error) throw error;
  return getRows(response);
};

export const fetchProductBySlug = async (slug) => {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('slug', slug)
    .single();
    
  if (error) throw error;
  return response?.data ?? null;
};
