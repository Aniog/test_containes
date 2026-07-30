import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export async function submitSourcingInquiry(formData) {
  const { data: response, error } = await client
    .from('Sourcing Inquiries')
    .insert({ data: formData })
    .select()
    .single()

  if (error) throw error

  if (response?.success === false) {
    const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : 'Submission failed'
    throw new Error(msgs)
  }

  return response?.data ?? null
}
