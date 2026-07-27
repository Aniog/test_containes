import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const createInquiry = async (inquiryData) => {
  const now = new Date().toISOString()

  const { data: response, error } = await client
    .from('Sourcing Inquiry')
    .insert({
      data: {
        name: inquiryData.name,
        email: inquiryData.email,
        company: inquiryData.company || null,
        phone: inquiryData.phone || null,
        product_category: inquiryData.productCategory || null,
        message: inquiryData.message,
        status: 'new',
        created_at: now,
        updated_at: now,
      },
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating inquiry:', error)
    throw new Error(error.message || 'Failed to submit inquiry')
  }

  if (response?.success === false) {
    const message = Array.isArray(response.errors) && response.errors.length > 0
      ? response.errors.join(', ')
      : 'Submission failed'
    throw new Error(message)
  }

  return response?.data ?? response
}
