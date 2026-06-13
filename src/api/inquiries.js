import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const TABLE_NAME = 'Sourcing Inquiries'

const getSingleRow = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Failed to submit inquiry'
}

export async function createSourcingInquiry(values) {
  const payload = {
    data: {
      ...values,
      status: 'new',
      created_at: new Date().toISOString(),
    },
  }

  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert(payload)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getSingleRow(response)
}
