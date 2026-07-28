import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const TABLE_NAME = 'Sourcing Inquiries'

const getEntity = (response) => response?.data ?? null

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit your inquiry. Please try again.'
}

export const createSourcingInquiry = async (values) => {
  const payload = {
    data: {
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      destination_country: values.destination_country.trim(),
      product_category: values.product_category.trim(),
      estimated_quantity: values.estimated_quantity.trim(),
      message: values.message.trim(),
      page_source: values.page_source,
      status: 'new',
      submitted_at: new Date().toISOString(),
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
