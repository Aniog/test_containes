import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function createContactInquiry({ name, email, company, category, details, source }) {
  const now = new Date().toISOString()
  const { data: response, error } = await client
    .from('Contact Inquiry')
    .insert({
      data: {
        name,
        email,
        company: company || null,
        category: category || null,
        details: details || null,
        source: source || 'contact',
        status: 'new',
        created_at: now,
        updated_at: now,
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    const message = getErrorMessage(response, error)
    throw new Error(message)
  }

  return getEntity(response)
}
