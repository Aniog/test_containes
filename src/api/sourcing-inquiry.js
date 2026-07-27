import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Submission failed. Please try again.';
};

export const submitSourcingInquiry = async (formData) => {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        name: formData.name,
        company: formData.company || '',
        email: formData.email,
        phone: formData.phone || '',
        country: formData.country || '',
        product: formData.product,
        quantity: formData.quantity || '',
        service_needed: formData.service_needed || '',
        details: formData.details || '',
        source_page: formData.source_page || '',
      },
    })
    .select()
    .single();

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }

  return response?.data ?? null;
};
