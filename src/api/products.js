import { client } from './client';

export const getProducts = async (params = {}) => {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .range(0, 100);

  if (error) throw error;
  return response?.data?.list || [];
};

export const getProductById = async (id) => {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return response?.data;
};
