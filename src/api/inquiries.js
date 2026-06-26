import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const createInquiry = async (inquiryData) => {
  const { data, error } = await client
    .from('Sourcing Inquiries')
    .insert({
      data: inquiryData,
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating inquiry:', error)
    throw new Error(error.message || 'Failed to submit inquiry')
  }

  return data
}