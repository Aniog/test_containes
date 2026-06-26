import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function submitSourcingInquiry(values) {
  const payload = {
    ...values,
    status: 'new',
    created_at: new Date().toISOString(),
  }

  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({ data: payload })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
