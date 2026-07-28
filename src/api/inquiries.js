import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

/**
 * Submit a sourcing inquiry by inserting a row into the SourcingInquiry table.
 * Returns the created inquiry entity.
 */
export async function submitSourcingInquiry(values) {
  const { data: response, error: insertError } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        name: values.name,
        email: values.email,
        company: values.company || '',
        country: values.country || '',
        product_type: values.productType || '',
        service: values.service || '',
        quantity: values.quantity || '',
        message: values.message,
        status: 'new',
      },
    })
    .select()
    .single()

  if (insertError || response?.success === false) {
    throw new Error(getErrorMessage(response, insertError))
  }

  return response?.data ?? null
}
