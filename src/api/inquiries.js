import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const TABLE_NAME = 'Sourcing Inquiries';

export async function submitSourcingInquiry(formData, sourcePage) {
  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert({
      data: {
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        phone: formData.phone || '',
        product: formData.product,
        quantity: formData.quantity || '',
        timeline: formData.timeline || '',
        message: formData.message || '',
        source_page: sourcePage,
        status: 'new',
      },
    })
    .select()
    .single();

  if (error) {
    console.error('Error submitting inquiry:', error);
    throw new Error(error.message || 'Failed to submit inquiry');
  }

  if (response?.success === false) {
    const errorMsg = Array.isArray(response.errors)
      ? response.errors.join(', ')
      : 'Submission failed validation';
    console.error('Validation error:', errorMsg);
    throw new Error(errorMsg);
  }

  console.log('Inquiry submitted successfully:', response);
  return response?.data ?? null;
}
