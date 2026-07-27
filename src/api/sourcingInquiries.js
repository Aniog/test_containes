import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const TABLE_NAME = 'Sourcing Inquiries'

export const serviceOptions = [
  { value: 'supplier_search', label: 'Supplier search' },
  { value: 'factory_verification', label: 'Factory verification' },
  { value: 'price_negotiation', label: 'Price negotiation' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_follow_up', label: 'Production follow-up' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
]

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to send your inquiry. Please try again.'
}

export async function createSourcingInquiry(values) {
  const payload = {
    data: {
      full_name: values.full_name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      country: values.country.trim(),
      phone: values.phone.trim(),
      product_category: values.product_category.trim(),
      product_description: values.product_description.trim(),
      service_needs: values.service_needs,
      annual_volume: values.annual_volume.trim(),
      timeline: values.timeline.trim(),
      shipping_destination: values.shipping_destination.trim(),
      created_at: new Date().toISOString(),
    },
  }

  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert(payload)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? response
}
