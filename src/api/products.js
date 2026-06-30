import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const getProducts = async () => {
  const { data, error } = await client
    .from('Products')
    .select('*');
  
  if (error) throw error;
  // Unwrap from entity.data
  return (data?.list || []).map(item => ({
    id: item.id,
    ...item.data
  }));
};

export const subscribeNewsletter = async (email) => {
  const { data, error } = await client
    .from('NewsletterSubscriptions')
    .insert({ data: { email } });
  
  if (error) throw error;
  return data;
};
