import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export async function submitInquiry(data) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        name: data.name,
        email: data.email,
        company: data.company || '',
        product: data.product,
        quantity: data.quantity || '',
        message: data.message || '',
        source: data.source || 'website',
        status: 'new',
      },
    })
    .select()
    .single();

  if (error) throw error;
  if (response?.success === false) {
    const errors = response.errors?.join(', ') || 'Submission failed';
    throw new Error(errors);
  }

  return response?.data ?? null;
}

export async function listInquiries() {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100);

  if (error) throw error;
  return response?.data?.list ?? [];
}

export async function updateInquiryStatus(id, status) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .update({ data: { status } })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  if (response?.success === false) {
    const errors = response.errors?.join(', ') || 'Update failed';
    throw new Error(errors);
  }

  return response?.data ?? null;
}
