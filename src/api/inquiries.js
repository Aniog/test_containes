import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const TABLE = 'Sourcing Inquiries';

/**
 * Submit a sourcing inquiry to the database.
 * @param {Object} fields - Form fields matching the SourcingInquiry schema.
 * @returns {Promise<Object>} The created entity.
 */
export async function submitInquiry(fields) {
  console.log('[inquiries] Submitting inquiry:', fields);

  const { data: response, error } = await client
    .from(TABLE)
    .insert({ data: { status: 'new', ...fields } })
    .select()
    .single();

  if (error) {
    console.error('[inquiries] Insert error:', error);
    throw error;
  }

  if (response?.success === false) {
    const msg = Array.isArray(response.errors)
      ? response.errors.join(', ')
      : 'Submission failed';
    console.error('[inquiries] Validation errors:', response.errors);
    throw new Error(msg);
  }

  console.log('[inquiries] Inquiry saved:', response?.data);
  return response?.data ?? null;
}
