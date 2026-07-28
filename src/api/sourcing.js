import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Submission failed. Please try again.';
};

/**
 * Submit a sourcing inquiry and persist it to the database.
 */
export async function submitSourcingInquiry(fields) {
  console.log('[submitSourcingInquiry] Submitting inquiry:', fields);

  const { data: response, error } = await client
    .from('Sourcing Inquiries')
    .insert({
      data: {
        name: fields.name,
        company: fields.company || '',
        email: fields.email,
        phone: fields.phone || '',
        country: fields.country || '',
        service: fields.service || '',
        product: fields.product,
        quantity: fields.quantity || '',
        budget: fields.budget || '',
        message: fields.message || '',
        status: 'new',
      },
    })
    .select()
    .single();

  if (error || response?.success === false) {
    const msg = getErrorMessage(response, error);
    console.error('[submitSourcingInquiry] Error:', msg);
    throw new Error(msg);
  }

  console.log('[submitSourcingInquiry] Inquiry saved:', response?.data);
  return response?.data;
}

/**
 * Subscribe an email to the newsletter.
 */
export async function subscribeNewsletter(email) {
  console.log('[subscribeNewsletter] Subscribing:', email);

  const { data: response, error } = await client
    .from('Newsletter Subscribers')
    .insert({
      data: {
        email,
        subscribed_at: new Date().toISOString(),
        active: true,
      },
    })
    .select()
    .single();

  if (error || response?.success === false) {
    const msg = getErrorMessage(response, error);
    console.error('[subscribeNewsletter] Error:', msg);
    throw new Error(msg);
  }

  console.log('[subscribeNewsletter] Subscribed successfully');
  return response?.data;
}
