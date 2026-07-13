import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const getRows = (response) => response?.data?.list ?? [];
export const getEntity = (response) => response?.data ?? null;
export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Request failed';
};

export const fetchTours = async () => {
  const { data: response, error } = await client
    .from('Tours')
    .select('*')
    .order('duration_type', { ascending: true });
  if (error) throw error;
  return getRows(response);
};

export const createTour = async (tourData) => {
  const { data: response, error } = await client
    .from('Tours')
    .insert({ data: tourData })
    .select()
    .single();
  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }
  return getEntity(response);
};

export const updateTour = async (id, tourData) => {
  const { data: response, error } = await client
    .from('Tours')
    .update({ data: tourData })
    .eq('id', id)
    .select()
    .single();
  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }
  return getEntity(response);
};

export const deleteTour = async (id) => {
  const { data: response, error } = await client
    .from('Tours')
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle();
  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }
};
