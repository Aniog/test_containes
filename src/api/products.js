import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

// Assuming config.jsx exists or will be created
const projectUrl = STRK_PROJECT_URL || '';
const projectAnonKey = STRK_PROJECT_ANON_KEY || '';
const client = new DataClient(projectUrl, projectAnonKey);

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;

export const fetchProducts = async (filters = {}) => {
  let query = client.from('Products').select('*');
  
  if (filters.category) {
    query = query.eq('category', filters.category);
  }
  
  if (filters.isBestseller) {
    query = query.eq('isBestseller', true);
  }

  const { data: response, error } = await query.order('created_at', { ascending: false });
  if (error) throw error;
  return getRows(response);
};

export const fetchProductById = async (id) => {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('id', id)
    .single();
    
  if (error) throw error;
  return getEntity(response);
};
