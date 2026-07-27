import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Request failed';
};

export async function submitSourcingInquiry(inquiryData) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        name: inquiryData.name,
        email: inquiryData.email,
        company: inquiryData.company || '',
        country: inquiryData.country || '',
        product: inquiryData.product,
        quantity: inquiryData.quantity || '',
        timeline: inquiryData.timeline || '',
        message: inquiryData.message || '',
        status: 'new',
        source: inquiryData.source || 'website',
      },
    })
    .select()
    .single();

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }

  return response?.data ?? null;
}
