import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit the inquiry. Please try again.'
}

export async function createSourcingInquiry(values) {
  const payload = {
    data: {
      name: values.name.trim(),
      company: values.company.trim(),
      email: values.email.trim(),
      country: values.country.trim(),
      productCategory: values.productCategory.trim(),
      quantity: values.quantity.trim(),
      servicesNeeded: values.servicesNeeded,
      message: values.message.trim(),
      submittedAt: new Date().toISOString(),
    },
  }

  const { data: response, error } = await client
    .from('SourcingInquiries')
    .insert(payload)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? response
}
