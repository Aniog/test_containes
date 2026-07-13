import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const getRows = (response) => response?.data?.list ?? [];
export const getEntity = (response) => response?.data ?? null;
export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Request failed';
};

export async function fetchContacts() {
  const { data: response, error } = await client
    .from('Contacts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return getRows(response);
}

export async function createContact({ name, email, company, message }) {
  const { data: response, error } = await client
    .from('Contacts')
    .insert({ data: { name, email, company: company || '', message } })
    .select()
    .single();

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }
  return getEntity(response);
}

export async function deleteContact(id) {
  const { data: response, error } = await client
    .from('Contacts')
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle();

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }
}
