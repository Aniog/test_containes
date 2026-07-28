import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

/**
 * Submit a sourcing inquiry.
 * Inserts a SourcingInquiry row containing the project details and the
 * buyer's contact information. The CRM can later link the row to a
 * Users record if needed.
 *
 * @param {Object} payload
 * @param {string} payload.name
 * @param {string} [payload.company]
 * @param {string} payload.email
 * @param {string} [payload.phone]
 * @param {string} payload.country
 * @param {string} [payload.productType]
 * @param {string[]} [payload.services]
 * @param {string} payload.details
 * @param {string} [payload.sourcePage]
 * @returns {Promise<{ success: boolean, inquiry: any, error: string | null }>}
 */
export async function submitSourcingInquiry(payload) {
  try {
    const { data: response, error: insertError } = await client
      .from('SourcingInquiry')
      .insert({
        data: {
          name: payload.name,
          company: payload.company || '',
          email: payload.email,
          phone: payload.phone || '',
          country: payload.country,
          productType: payload.productType || '',
          services: Array.isArray(payload.services) ? payload.services : [],
          details: payload.details,
          sourcePage: payload.sourcePage || '',
          status: 'new',
        },
      })
      .select()
      .single()

    if (insertError || response?.success === false) {
      return {
        success: false,
        inquiry: null,
        error: getErrorMessage(response, insertError),
      }
    }

    return {
      success: true,
      inquiry: response?.data ?? null,
      error: null,
    }
  } catch (err) {
    console.error('submitSourcingInquiry error:', err)
    return {
      success: false,
      inquiry: null,
      error: err?.message || 'Submission failed',
    }
  }
}

