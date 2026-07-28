import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const createInquiry = async (inquiryData) => {
  const { data: response, error } = await client
    .from('Inquiries')
    .insert({
      data: inquiryData,
    })
    .select()
    .single()

  if (error) {
    throw new Error(error.message || 'Failed to submit inquiry')
  }

  if (response && response.success === false) {
    const message = Array.isArray(response.errors) ? response.errors.join(', ') : 'Submission failed'
    throw new Error(message)
  }

  return response?.data ?? response
}
