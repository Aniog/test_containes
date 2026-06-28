import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const serviceOptions = [
  { value: 'full_sourcing', label: 'Full sourcing support' },
  { value: 'supplier_verification', label: 'Supplier verification' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_follow_up', label: 'Production follow-up' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
]

export const emptyInquiryValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_type: '',
  quantity: '',
  service_needed: 'full_sourcing',
  target_price: '',
  message: '',
}

export const getEntity = (response) => response?.data ?? response ?? null

export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'We could not send your inquiry. Please try again.'
}

export const validateInquiry = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.company.trim()) return 'Please enter your company name.'
  if (!values.email.trim()) return 'Please enter your business email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.country.trim()) return 'Please enter your country or region.'
  if (!values.product_type.trim()) return 'Please enter the product you want to source.'
  if (!values.service_needed.trim()) return 'Please select the service you need.'
  if (values.message.trim().length < 20) {
    return 'Please add a few more details so we can review your request properly.'
  }

  return null
}

export async function createInquiry(values) {
  console.log('Submitting sourcing inquiry', values)

  const payload = {
    data: {
      name: values.name.trim(),
      company: values.company.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      country: values.country.trim(),
      product_type: values.product_type.trim(),
      quantity: values.quantity.trim(),
      service_needed: values.service_needed,
      target_price: values.target_price.trim(),
      message: values.message.trim(),
      status: 'new',
    },
  }

  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert(payload)
    .select()
    .single()

  if (error || response?.success === false) {
    console.error('Failed to create sourcing inquiry', { response, error })
    return {
      ok: false,
      error: getErrorMessage(response, error),
      entity: null,
    }
  }

  const entity = getEntity(response)
  console.log('Sourcing inquiry created successfully', entity)

  return {
    ok: true,
    error: '',
    entity,
  }
}
