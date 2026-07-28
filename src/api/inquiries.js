import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export async function submitSourcingInquiry(formData) {
  console.log('[SourcingInquiry] Submitting inquiry:', formData);

  const { data: response, error } = await client
    .from('Sourcing Inquiries')
    .insert({
      data: {
        name: formData.name,
        company: formData.company || '',
        email: formData.email,
        phone: formData.phone || '',
        country: formData.country,
        category: formData.category,
        service: formData.service || '',
        quantity: formData.quantity || '',
        budget: formData.budget || '',
        description: formData.description,
        source: formData.source || 'contact_page',
        status: 'new',
      },
    })
    .select()
    .single();

  if (error) {
    console.error('[SourcingInquiry] Submission error:', error);
    throw error;
  }

  if (response?.success === false) {
    const msg = Array.isArray(response.errors) && response.errors.length > 0
      ? response.errors.join(', ')
      : 'Submission failed. Please check your details and try again.';
    console.error('[SourcingInquiry] Validation errors:', msg);
    throw new Error(msg);
  }

  console.log('[SourcingInquiry] Submission successful:', response?.data);
  return response?.data ?? null;
}
