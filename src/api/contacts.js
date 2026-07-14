import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export async function fetchContacts() {
  const { data: response, error } = await client
    .from('Contact Form Responses')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return response?.data?.list ?? [];
}

export async function createContact({ name, email, phone, message }) {
  const { data: response, error } = await client
    .from('Contact Form Responses')
    .insert({
      data: { name, email, phone, message },
    })
    .select()
    .single();

  if (error) throw error;
  if (response?.success === false) {
    const errMsg = Array.isArray(response?.errors) ? response.errors.join(', ') : 'Submission failed';
    throw new Error(errMsg);
  }
  return response?.data ?? null;
}

export async function deleteContact(id, originalData) {
  const { data: response, error } = await client
    .from('Contact Form Responses')
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle();

  if (error) throw error;
  if (response?.success === false) {
    const errMsg = Array.isArray(response?.errors) ? response.errors.join(', ') : 'Delete failed';
    throw new Error(errMsg);
  }
  return true;
}