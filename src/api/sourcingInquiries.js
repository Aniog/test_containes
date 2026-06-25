import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const serviceOptions = [
  { value: 'supplier_search', label: 'Supplier search' },
  { value: 'supplier_verification', label: 'Supplier verification' },
  { value: 'factory_audit', label: 'Factory audit' },
  { value: 'sample_follow_up', label: 'Sample follow-up' },
  { value: 'quality_inspection', label: 'Quality inspection' },
  { value: 'production_tracking', label: 'Production tracking' },
  { value: 'shipping_coordination', label: 'Shipping coordination' },
]

export const timelineOptions = [
  { value: 'as_soon_as_possible', label: 'As soon as possible' },
  { value: 'within_1_month', label: 'Within 1 month' },
  { value: 'within_3_months', label: 'Within 3 months' },
  { value: 'planning_stage', label: 'Planning stage' },
]

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Unable to submit your inquiry. Please try again.'
}

export const createSourcingInquiry = async (values) => {
  const payload = {
    name: values.name.trim(),
    email: values.email.trim(),
    company: values.company.trim(),
    country: values.country.trim(),
    product_category: values.productCategory.trim(),
    product_description: values.productDescription.trim(),
    estimated_order_quantity: values.estimatedOrderQuantity.trim(),
    target_market: values.targetMarket.trim(),
    services_needed: values.servicesNeeded,
    timeline: values.timeline,
    message: values.message.trim(),
    source_page: values.sourcePage || window.location.pathname,
    submitted_at: new Date().toISOString(),
  }

  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({ data: payload })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? response
}
