import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export async function submitSourcingInquiry(formData, source) {
  const payload = {
    data: {
      name: formData.name,
      email: formData.email,
      company: formData.company || '',
      country: formData.country,
      product: formData.product,
      quantity: formData.quantity || '',
      services: formData.services || [],
      message: formData.message || '',
      source: source,
    },
  };

  const { data: response, error } = await client
    .from('Sourcing Inquiries')
    .insert(payload)
    .select()
    .single();

  if (error) {
    console.error('Inquiry submission error:', error);
    throw new Error(error.message || 'Failed to submit inquiry');
  }

  if (response?.success === false) {
    const errorMsg = Array.isArray(response.errors)
      ? response.errors.join(', ')
      : 'Submission validation failed';
    console.error('Inquiry validation error:', errorMsg);
    throw new Error(errorMsg);
  }

  console.log('Inquiry submitted successfully:', response?.data);
  return response?.data ?? null;
}
