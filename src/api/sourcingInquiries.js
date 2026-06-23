import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const TABLE_NAME = 'Sourcing Inquiries'

const getSingleRow = (response) => response?.data ?? null

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit your inquiry. Please try again.'
}

export const submitSourcingInquiry = async (values) => {
  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert({
      data: {
        name: values.name.trim(),
        email: values.email.trim(),
        company: values.company.trim(),
        country: values.country.trim(),
        product_category: values.productCategory.trim(),
        service_needed: values.serviceNeeded,
        quantity: values.quantity.trim(),
        message: values.message.trim(),
        submitted_at: new Date().toISOString(),
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getSingleRow(response)
}
