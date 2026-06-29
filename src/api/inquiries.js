import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const createInquiry = async (inquiryData) => {
  const { data: response, error } = await client
    .from('Sourcing Inquiries')
    .insert({
      data: {
        name: inquiryData.name,
        email: inquiryData.email,
        company: inquiryData.company || '',
        country: inquiryData.country || '',
        product_category: inquiryData.productCategory || '',
        message: inquiryData.message,
      },
    })
    .select()
    .single()

  if (error) throw error
  if (response?.success === false) {
    const message = Array.isArray(response.errors) ? response.errors.join(', ') : 'Submission failed'
    throw new Error(message)
  }
  return response
}
