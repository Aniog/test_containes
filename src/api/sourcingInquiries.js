import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed'
}

export async function createSourcingInquiry(inquiry) {
  const { data: response, error } = await client
    .from('Sourcing Inquiries')
    .insert({
      data: {
        name: inquiry.name,
        email: inquiry.email,
        company: inquiry.company || null,
        country: inquiry.country,
        phone: inquiry.phone || null,
        product_category: inquiry.productCategory || null,
        message: inquiry.message,
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? response
}
