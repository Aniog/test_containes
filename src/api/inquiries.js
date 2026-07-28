import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const TABLE_NAME = 'Sourcing Inquiries'

export async function submitInquiry(formData) {
  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert({
      data: {
        name: formData.name,
        company_name: formData.company,
        email: formData.email,
        phone: formData.phone || '',
        product_description: formData.product,
        target_quantity: formData.quantity || '',
        target_price: formData.budget || '',
        service_needed: formData.service || '',
        country: formData.country || '',
        additional_details: formData.message || '',
        source_page: formData.sourcePage || 'contact',
        status: 'new',
      },
    })
    .select()
    .single()

  if (error) {
    console.error('Failed to submit inquiry:', error)
    return { success: false, error: error.message || 'Submission failed' }
  }

  if (response?.success === false) {
    const errMsg = Array.isArray(response.errors)
      ? response.errors.join(', ')
      : 'Submission failed'
    return { success: false, error: errMsg }
  }

  return { success: true, data: response?.data }
}
