import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const TABLE_NAME = 'Sourcing Inquiries'

export const getInquiryErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Unable to submit your inquiry. Please try again.'
}

export const submitSourcingInquiry = async (values) => {
  const payload = {
    name: values.name.trim(),
    email: values.email.trim(),
    company: values.company.trim(),
    destination_market: values.destinationMarket.trim(),
    product_details: values.productDetails.trim(),
    source_page: window.location.pathname || '/',
    status: 'new',
    submitted_at: new Date().toISOString(),
  }

  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert({ data: payload })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getInquiryErrorMessage(response, error))
  }

  return response?.data ?? null
}
