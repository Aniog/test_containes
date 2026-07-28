import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getEntity = (response) => response?.data ?? null;
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Request failed';
};

export async function submitSourcingInquiry(formData) {
  const { data: response, error } = await client
    .from('Sourcing Inquiries')
    .insert({
      data: {
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone || '',
        company_name: formData.company_name || '',
        country: formData.country || '',
        timeline: formData.timeline || undefined,
        product_description: formData.product_description,
        estimated_quantity: formData.estimated_quantity || '',
        additional_details: formData.additional_details || '',
        status: 'new',
      },
    })
    .select()
    .single();

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }

  const createdInquiry = getEntity(response);
  console.log('Sourcing inquiry submitted successfully:', createdInquiry);
  return createdInquiry;
}
