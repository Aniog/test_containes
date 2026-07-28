import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

/**
 * Submit a sourcing inquiry to the database
 * @param {Object} inquiryData - The inquiry form data
 * @param {string} sourcePage - The page where the inquiry was submitted
 * @returns {Promise<{success: boolean, data?: Object, error?: string}>}
 */
export async function submitInquiry(inquiryData, sourcePage = '') {
  try {
    const { data: response, error } = await client
      .from('Sourcing Inquiries')
      .insert({
        data: {
          name: inquiryData.name,
          email: inquiryData.email,
          company: inquiryData.company || '',
          phone: inquiryData.phone || '',
          country: inquiryData.country || '',
          product: inquiryData.product,
          quantity: inquiryData.quantity || '',
          budget: inquiryData.budget || '',
          timeline: inquiryData.timeline || '',
          message: inquiryData.message || '',
          source_page: sourcePage,
          status: 'new',
        },
      })
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
      data: getEntity(response),
    }
  } catch (err) {
    console.error('Inquiry submission error:', err)
    return {
      success: false,
      error: err.message || 'Failed to submit inquiry',
    }
  }
}
