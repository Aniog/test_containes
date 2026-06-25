import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const TABLE_NAME = 'Sourcing Inquiries'

export const sourcingServiceOptions = [
  'Supplier sourcing',
  'Factory verification',
  'Quality inspection',
  'Production follow-up',
  'Shipping coordination',
  'Full sourcing project',
]

export const emptyInquiry = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  quantity: '',
  service_needed: 'Full sourcing project',
  timeline: '',
  message: '',
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Unable to submit the inquiry right now. Please try again.'
}

export const validateInquiry = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid business email.'
  if (!values.product_category.trim()) return 'Please tell us what product you want to source.'
  if (!values.service_needed.trim()) return 'Please select the service you need.'
  if (!values.message.trim()) return 'Please share a few details about your sourcing project.'
  return null
}

export async function createSourcingInquiry(values) {
  const payload = {
    name: values.name.trim(),
    company: values.company.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    country: values.country.trim(),
    product_category: values.product_category.trim(),
    quantity: values.quantity.trim(),
    service_needed: values.service_needed,
    timeline: values.timeline.trim(),
    message: values.message.trim(),
    created_at: new Date().toISOString(),
  }

  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert({ data: payload })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
