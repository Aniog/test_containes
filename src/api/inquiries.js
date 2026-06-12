import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed. Please try again.'
}

// Remove empty strings, null/undefined, and empty arrays so they
// don't violate the schema's enum/format constraints on optional fields.
const cleanPayload = (obj) => {
  const out = {}
  for (const [key, value] of Object.entries(obj || {})) {
    if (value === null || value === undefined) continue
    if (typeof value === 'string') {
      const trimmed = value.trim()
      if (trimmed) out[key] = trimmed
      continue
    }
    if (Array.isArray(value)) {
      if (value.length > 0) out[key] = value
      continue
    }
    out[key] = value
  }
  return out
}

export async function submitInquiry(inquiry) {
  const payload = {
    ...cleanPayload(inquiry),
    status: 'new',
    created_at: new Date().toISOString(),
  }

  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({ data: payload })
    .select()
    .single()

  if (error || response?.success === false) {
    // Surface the real reason during development so we can debug schema issues.
    if (typeof console !== 'undefined') {
      console.error('Inquiry submission failed:', { response, error })
    }
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
