import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'We could not save your email. Please try again.'
}

export async function submitNewsletterSignup(email) {
  const { data: response, error } = await client
    .from('NewsletterSignup')
    .insert({
      data: {
        email,
        source: 'homepage_newsletter',
        createdAt: new Date().toISOString(),
      },
    })

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
