import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit the inquiry. Please try again.'
}

export const submitSourcingInquiry = async (values) => {
  const payload = {
    data: {
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      country: values.country.trim(),
      phone: values.phone.trim(),
      service_needed: values.service_needed,
      product_category: values.product_category.trim(),
      estimated_quantity: values.estimated_quantity.trim(),
      timeline: values.timeline.trim(),
      message: values.message.trim(),
      status: 'new',
      created_at: new Date().toISOString(),
    },
  }

  const { data: response, error } = await client
    .from('Sourcing Inquiries')
    .insert(payload)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
