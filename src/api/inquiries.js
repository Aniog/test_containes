import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

export const dataClient = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export async function submitSourcingInquiry(payload) {
  const { data: response, error } = await dataClient
    .from('SourcingInquiry')
    .insert({
      data: {
        ...payload,
        status: 'new',
        created_at: new Date().toISOString(),
      },
    })
    .select()
    .single()

  if (error) {
    return { ok: false, error: error.message || 'Submission failed', response }
  }
  if (response && response.success === false) {
    const errors = Array.isArray(response.errors) ? response.errors.join(', ') : 'Submission failed'
    return { ok: false, error: errors, response }
  }
  return { ok: true, data: response?.data ?? null }
}
