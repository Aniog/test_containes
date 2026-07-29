import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const TABLE_NAME = 'Sourcing Inquiries'

export const SERVICE_OPTIONS = [
  'Supplier search',
  'Factory verification',
  'Quality inspection',
  'Production follow-up',
  'Shipping coordination',
  'Other',
]

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit the inquiry. Please try again.'
}

export async function createSourcingInquiry(values) {
  console.log('Submitting sourcing inquiry', {
    product_category: values.product_category,
    services_needed: values.services_needed,
  })

  const payload = {
    name: values.name.trim(),
    email: values.email.trim(),
    company: values.company.trim(),
    country: values.country.trim(),
    product_category: values.product_category.trim(),
    order_quantity: values.order_quantity.trim(),
    services_needed: values.services_needed,
    message: values.message.trim(),
    status: 'new',
    submitted_at: new Date().toISOString(),
  }

  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert({ data: payload })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? response
}
