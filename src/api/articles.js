import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const CATEGORIES = ['All', 'News', 'Reviews', 'Guides', 'Deals', 'Features'];

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Request failed';
};

export async function fetchArticles({ category } = {}) {
  let query = client.from('Articles').select('*').order('date', { ascending: false });
  const { data: response, error } = await query;
  if (error) throw error;
  const rows = getRows(response);
  const published = rows.filter((r) => r.data?.published !== false);
  if (category && category !== 'All') {
    return published.filter((r) => r.data?.category === category);
  }
  return published;
}

export async function fetchAllArticlesAdmin() {
  const { data: response, error } = await client
    .from('Articles')
    .select('*')
    .order('date', { ascending: false });
  if (error) throw error;
  return getRows(response);
}

export async function createArticle(fields) {
  const { data: response, error } = await client
    .from('Articles')
    .insert({ data: fields })
    .select()
    .single();
  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }
  return getEntity(response);
}

export async function updateArticle(id, originalData, fields) {
  const { data: response, error } = await client
    .from('Articles')
    .update({ data: { ...originalData, ...fields } })
    .eq('id', id)
    .select()
    .single();
  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }
  return getEntity(response);
}

export async function deleteArticle(id) {
  const { data: response, error } = await client
    .from('Articles')
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle();
  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }
}
