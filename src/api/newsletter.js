import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export async function submitNewsletterSignup(email) {
  const payload = {
    email,
    source: 'homepage-newsletter',
    created_at: new Date().toISOString(),
  }

  const { data: response, error } = await client
    .from('Newsletter Signups')
    .insert({ data: payload })
    .select()
    .single()

  if (error || response?.success === false) {
    const message = Array.isArray(response?.errors) && response.errors.length > 0
      ? response.errors.join(', ')
      : error?.message || 'Unable to join right now. Please try again.'
    throw new Error(message)
  }

  return response?.data ?? response
}
