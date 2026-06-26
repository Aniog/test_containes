import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

/**
 * Submit a sourcing inquiry to the SourcingInquiry table.
 * Returns the created entity on success.
 */
export async function submitSourcingInquiry(payload) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        name: payload.name,
        email: payload.email,
        company: payload.company || '',
        country: payload.country || '',
        phone: payload.phone || '',
        product_category: payload.product_category || '',
        estimated_quantity: payload.estimated_quantity || '',
        budget: payload.budget || '',
        services_needed: payload.services_needed || [],
        message: payload.message,
        source_page: payload.source_page || '',
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
