import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

/**
 * Submit a sourcing inquiry and persist it to the Sourcing Inquiries table.
 *
 * @param {object} fields - Form field values
 * @param {'homepage_form'|'contact_page'} source - Which form triggered the submission
 * @returns {Promise<void>}
 */
export async function submitSourcingInquiry(fields, source) {
  const payload = {
    name: fields.name,
    email: fields.email,
    message: fields.message,
    source,
    status: 'new',
  };

  if (fields.company) payload.company = fields.company;
  if (fields.country) payload.country = fields.country;
  if (fields.phone) payload.phone = fields.phone;
  if (fields.service) payload.service_type = fields.service;
  if (fields.category) payload.product_category = fields.category;
  if (fields.budget) payload.estimated_budget = fields.budget;

  console.log('[inquiry] Inserting inquiry:', payload);

  const { data: response, error } = await client
    .from('Sourcing Inquiries')
    .insert({ data: payload })
    .select()
    .single();

  if (error) {
    console.error('[inquiry] Insert error:', error);
    throw error;
  }

  if (response?.success === false) {
    const msg = Array.isArray(response.errors)
      ? response.errors.join(', ')
      : 'Submission failed';
    console.error('[inquiry] Validation errors:', msg);
    throw new Error(msg);
  }

  console.log('[inquiry] Inquiry saved, ID:', response?.data?.id);
}
