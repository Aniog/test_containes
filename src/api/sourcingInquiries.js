import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const getCreatedInquiry = (response) => response?.data ?? null

export const getInquiryErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit your inquiry right now.'
}

export const submitSourcingInquiry = async (values) => {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: values,
    })
    .select()
    .single()

  return {
    response,
    error,
  }
}
