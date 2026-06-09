import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const TABLE_NAME = 'Sourcing Inquiries'

const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Request failed'
}

export const submitInquiry = async (values) => {
  const payload = {
    data: {
      company_name: values.company_name,
      contact_name: values.contact_name,
      email: values.email,
      phone: values.phone,
      country: values.country,
      product_description: values.product_description,
      quantity: values.quantity,
      services_needed: values.services_needed,
      sourcing_stage: values.sourcing_stage,
      target_market: values.target_market,
      message: values.message,
    },
  }

  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert(payload)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}
