import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const TABLE = 'Contact Form Responses';
const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export async function getContacts() {
  const { data: response, error } = await client
    .from(TABLE)
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to fetch contacts:', error);
    throw error;
  }
  console.log('Contacts fetched:', response?.data?.list?.length ?? 0);
  return response?.data?.list ?? [];
}

export async function saveContact(contact) {
  const { data: response, error } = await client
    .from(TABLE)
    .insert({
      data: {
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
      },
    })
    .select()
    .single();

  if (error || response?.success === false) {
    const msg =
      Array.isArray(response?.errors) && response.errors.length
        ? response.errors.join(', ')
        : error?.message || 'Failed to save contact';
    console.error('Failed to save contact:', msg);
    throw new Error(msg);
  }

  console.log('Contact saved:', response?.data);
  return response?.data ?? null;
}

export async function deleteContact(id) {
  const { data: response, error } = await client
    .from(TABLE)
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle();

  if (error || response?.success === false) {
    const msg = error?.message || 'Failed to delete contact';
    console.error('Failed to delete contact:', msg);
    throw new Error(msg);
  }

  console.log('Contact deleted:', id);
}
