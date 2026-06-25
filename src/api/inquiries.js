import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'We could not submit your inquiry. Please try again.'
}

export const submitSourcingInquiry = async (values) => {
  const payload = {
    data: {
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      country: values.country.trim(),
      service_needed: values.service_needed,
      product_category: values.product_category.trim(),
      quantity: values.quantity.trim(),
      project_stage: values.project_stage,
      message: values.message.trim(),
      submitted_at: new Date().toISOString(),
      status: 'new',
    },
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
