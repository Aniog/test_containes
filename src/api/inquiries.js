import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function submitInquiry(inquiryData) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        name: inquiryData.name,
        email: inquiryData.email,
        company: inquiryData.company || '',
        country: inquiryData.country || '',
        phone: inquiryData.phone || '',
        service: inquiryData.service || '',
        product: inquiryData.product || '',
        quantity: inquiryData.quantity || '',
        message: inquiryData.message,
        status: 'new',
        source: inquiryData.source || 'contact',
        created_at: new Date().toISOString(),
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}
