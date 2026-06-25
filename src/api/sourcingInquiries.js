import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const TABLE_NAME = 'Sourcing Inquiries'

export const serviceLabels = {
  supplier_search: 'Supplier search',
  factory_verification: 'Factory verification',
  quality_inspection: 'Quality inspection',
  production_follow_up: 'Production follow-up',
  shipping_coordination: 'Shipping coordination',
  full_sourcing_project: 'Full sourcing project',
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed. Please try again.'
}

export async function createSourcingInquiry(values) {
  const payload = {
    name: values.name,
    email: values.email,
    company: values.company,
    country: values.country,
    product_category: values.productCategory,
    estimated_quantity: values.estimatedQuantity,
    service_needed: values.serviceNeeded,
    message: values.message,
    submitted_at: new Date().toISOString(),
    status: 'new',
  }

  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert({ data: payload })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? response
}
