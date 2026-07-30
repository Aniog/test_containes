import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export async function submitSourcingInquiry(formData) {
  console.log('[SourcingInquiry] Submitting inquiry:', formData);

  const payload = {
    data: {
      full_name: formData.full_name,
      email: formData.email,
      company: formData.company || '',
      country: formData.country || '',
      product_category: formData.product_category || '',
      product_description: formData.product_description,
      estimated_quantity: formData.estimated_quantity || '',
      target_price: formData.target_price || '',
      services_needed: formData.services_needed || [],
      message: formData.message || '',
      status: 'new',
    },
  };

  const { data: response, error } = await client
    .from('Sourcing Inquiries')
    .insert(payload)
    .select()
    .single();

  if (error) {
    console.error('[SourcingInquiry] Insert error:', error);
    throw error;
  }

  if (response?.success === false) {
    const msg = Array.isArray(response.errors) ? response.errors.join(', ') : 'Submission failed';
    console.error('[SourcingInquiry] Validation error:', msg);
    throw new Error(msg);
  }

  console.log('[SourcingInquiry] Inquiry submitted successfully:', response?.data?.id);
  return response?.data ?? null;
}
