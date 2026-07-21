import { client } from './postgrest-client'

export async function subscribeToNewsletter(email) {
  const payload = {
    data: {
      email,
      source: 'homepage_newsletter',
      submitted_at: new Date().toISOString(),
    },
  }

  const { data: response, error } = await client
    .from('Newsletter Subscribers')
    .insert(payload)
    .select()
    .single()

  if (error || response?.success === false) {
    const message = Array.isArray(response?.errors) && response.errors.length > 0
      ? response.errors.join(', ')
      : error?.message || 'Newsletter signup failed. Please try again.'
    throw new Error(message)
  }

  return response?.data ?? response
}
