import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit your inquiry.'
}

export const createInquiry = async (values) => {
  console.log('[inquiries] submitting inquiry', values)

  const payload = {
    data: {
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      country: values.country.trim(),
      service_interest: values.serviceInterest,
      product_details: values.productDetails.trim(),
      quantity: values.quantity.trim(),
      target_price: values.targetPrice.trim(),
      timeline: values.timeline.trim(),
      status: 'new',
      source_page: values.sourcePage,
      created_at: new Date().toISOString(),
    },
  }

  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert(payload)
    .select()
    .single()

  if (error || response?.success === false) {
    const message = getErrorMessage(response, error)
    console.error('[inquiries] submit failed', { response, error, message })
    throw new Error(message)
  }

  console.log('[inquiries] submit succeeded', response)
  return response?.data ?? null
}
