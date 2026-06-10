import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getEntity = (response) => response?.data ?? null
const getErrorMessages = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export async function submitSourcingInquiry(payload) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({ data: { ...payload, status: 'new' } })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessages(response, error))
  }

  return getEntity(response)
}
