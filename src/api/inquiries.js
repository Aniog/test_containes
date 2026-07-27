import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export async function submitSourcingInquiry(values) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        full_name: values.full_name,
        company_name: values.company_name || '',
        email: values.email,
        phone: values.phone || '',
        country: values.country,
        product_category: values.product_category || '',
        target_quantity: values.target_quantity || '',
        service_needed: values.service_needed || '',
        description: values.description,
        status: 'new',
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
