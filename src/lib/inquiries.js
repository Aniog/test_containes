import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getEntity = (response) => response?.data ?? null

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Failed to submit inquiry'
}

const buildPayload = (values) => ({
  company_name: values.company_name.trim(),
  contact_name: values.contact_name.trim(),
  email: values.email.trim(),
  product_category: values.product_category.trim(),
  services_needed: values.services_needed,
  message: values.message.trim(),
  ...(values.phone.trim() ? { phone: values.phone.trim() } : {}),
  ...(values.website.trim() ? { website: values.website.trim() } : {}),
  ...(values.quantity_estimate.trim()
    ? { quantity_estimate: values.quantity_estimate.trim() }
    : {}),
  ...(values.target_market.trim()
    ? { target_market: values.target_market.trim() }
    : {}),
})

export async function submitInquiry(values) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: buildPayload(values),
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}
