import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const createInquiry = async (formData) => {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        full_name: formData.full_name,
        email: formData.email,
        company: formData.company || '',
        phone: formData.phone || '',
        product_category: formData.product_category || '',
        product_description: formData.product_description,
        order_quantity: formData.order_quantity || '',
        target_delivery: formData.target_delivery || '',
        status: 'new',
      },
    })
    .select()
    .single();

  if (error) throw error;
  if (response?.success === false) {
    const msg = Array.isArray(response?.errors)
      ? response.errors.join(', ')
      : 'Submission failed';
    throw new Error(msg);
  }

  return response?.data ?? null;
};
