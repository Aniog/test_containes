import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export async function submitContactLead({ name, email, message }) {
  console.log('[ContactAPI] Submitting lead:', { name, email });

  const { data: response, error } = await client
    .from('ContactLead')
    .insert({
      data: {
        name,
        email,
        message,
        submitted_at: new Date().toISOString(),
      },
    })
    .select()
    .single();

  if (error) {
    console.error('[ContactAPI] Error:', error);
    throw error;
  }

  if (response?.success === false) {
    const msg = Array.isArray(response?.errors) ? response.errors.join(', ') : 'Submission failed';
    console.error('[ContactAPI] Validation error:', msg);
    throw new Error(msg);
  }

  console.log('[ContactAPI] Lead submitted successfully:', response?.data?.id);
  return response?.data ?? null;
}
