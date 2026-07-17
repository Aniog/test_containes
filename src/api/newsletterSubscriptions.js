import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to join right now. Please try again.'
}

export async function subscribeToNewsletter(email) {
  const cleanEmail = email.trim().toLowerCase()

  const { data: response, error } = await client
    .from('NewsletterSubscription')
    .insert({
      data: {
        email: cleanEmail,
        source: 'homepage_newsletter',
        subscribed_at: new Date().toISOString(),
        marketing_consent: true,
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
