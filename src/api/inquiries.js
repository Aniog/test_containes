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
 * Submit a sourcing inquiry to the database.
 * @param {Object} formData - The inquiry form data
 * @param {string} sourcePage - Which page the form was submitted from ('home' or 'contact')
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function submitInquiry(formData, sourcePage = 'home') {
  try {
    const { data: response, error } = await client
      .from('Sourcing Inquiry')
      .insert({
        data: {
          full_name: formData.fullName,
          company_name: formData.companyName || '',
          email: formData.email,
          phone: formData.phone || '',
          country: formData.country || '',
          product_category: formData.productCategory || '',
          product_description: formData.productDescription,
          target_delivery: formData.targetDelivery || '',
          source_page: sourcePage,
          status: 'new',
        },
      })
      .select()
      .single()

    if (error || response?.success === false) {
      console.error('Inquiry submission error:', error, response)
      return { success: false, error: getErrorMessage(response, error) }
    }

    console.log('Inquiry submitted successfully:', response?.data?.id)
    return { success: true }
  } catch (err) {
    console.error('Inquiry submission exception:', err)
    return { success: false, error: err.message || 'Submission failed. Please try again.' }
  }
}
