import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getEntity = (response) => response?.data ?? null

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit your inquiry right now.'
}

export async function submitInquiry(values) {
  const payload = {
    data: {
      name: values.name.trim(),
      company: values.company.trim(),
      email: values.email.trim(),
      country: values.country.trim(),
      product: values.product.trim(),
      quantity: values.quantity.trim(),
      service_interest: values.serviceInterest,
      message: values.message.trim(),
      source_page: values.sourcePage,
      status: 'new',
    },
  }

  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert(payload)
    .select()
    .single()

  if (error || response?.success === false) {
    return {
      success: false,
      error: getErrorMessage(response, error),
    }
  }

  return {
    success: true,
    inquiry: getEntity(response),
  }
}
