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
 * Submit a sourcing inquiry.
 * Inserts a SourcingInquiry row capturing the buyer's full contact details
 * and project requirements. The table allows public creates.
 * Returns the created inquiry entity.
 */
export async function submitSourcingInquiry(values) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        name: values.name,
        email: values.email,
        company: values.company || '',
        country: values.country,
        product: values.product,
        product_category: values.productType || 'Other',
        quantity: values.quantity || '',
        target_price: values.targetPrice || '',
        services_needed: values.services || [],
        message: values.message || '',
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
