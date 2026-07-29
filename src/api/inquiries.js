import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const TABLE_NAME = 'SourcingInquiry'

const optionalTextFields = [
  'company',
  'country',
  'target_quantity',
  'budget_range',
  'timeline',
  'message',
]

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'We could not submit your inquiry. Please try again.'
}

const normalizeInquiry = (values, sourcePage) => {
  const payload = {
    name: values.name.trim(),
    email: values.email.trim(),
    product_category: values.product_category.trim(),
    product_details: values.product_details.trim(),
    preferred_contact: values.preferred_contact,
    source_page: sourcePage,
    status: 'new',
    consent: values.consent,
  }

  optionalTextFields.forEach((field) => {
    const value = values[field]?.trim()
    if (value) payload[field] = value
  })

  if (values.services_needed.length > 0) {
    payload.services_needed = values.services_needed
  }

  return payload
}

export const submitSourcingInquiry = async (values, sourcePage = 'website') => {
  const payload = normalizeInquiry(values, sourcePage)
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
