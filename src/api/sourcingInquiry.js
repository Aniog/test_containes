import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Request failed'
}

export async function createSourcingInquiry(values) {
  const payloadData = {
    company_name: values.company_name.trim(),
    full_name: values.full_name.trim(),
    email: values.email.trim(),
    product_details: values.product_details.trim(),
    services_needed: values.services_needed,
    shipping_destination: values.shipping_destination.trim(),
    submitted_at: new Date().toISOString(),
  }

  const optionalFields = {
    phone: values.phone.trim(),
    website: values.website.trim(),
    estimated_order_quantity: values.estimated_order_quantity.trim(),
    target_market: values.target_market.trim(),
    message: values.message.trim(),
  }

  Object.entries(optionalFields).forEach(([key, value]) => {
    if (value) {
      payloadData[key] = value
    }
  })

  const payload = {
    data: payloadData,
  }

  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert(payload)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? response
}
