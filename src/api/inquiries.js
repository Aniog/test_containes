import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const TABLE_NAME = 'Sourcing Inquiries'

const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function submitSourcingInquiry(formData) {
  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert({
      data: {
        full_name: formData.full_name,
        email: formData.email,
        company_name: formData.company_name || '',
        country: formData.country || '',
        phone: formData.phone || '',
        product_description: formData.product_description,
        estimated_quantity: formData.estimated_quantity || '',
        target_budget: formData.target_budget || '',
        timeline: formData.timeline || '',
        source_page: formData.source_page || 'unknown',
        status: 'new',
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    const msg = getErrorMessage(response, error)
    console.error('Inquiry submission failed:', msg)
    throw new Error(msg)
  }

  const created = getEntity(response)
  console.log('Inquiry submitted successfully:', created?.id)
  return created
}
