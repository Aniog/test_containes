import { DataClient } from '@strikingly/sdk'
import {
  STRK_PROJECT_URL,
  STRK_PROJECT_ANON_KEY,
} from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const TABLE = 'Sourcing Inquiry'

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  if (Array.isArray(response?.data?.errors) && response.data.errors.length > 0) {
    return response.data.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again or email us directly.'
}

export const SERVICE_OPTIONS = [
  { value: '', label: 'Select the service you need' },
  { value: 'supplier-sourcing', label: 'Supplier sourcing & shortlist' },
  { value: 'factory-audit', label: 'Factory audit & verification' },
  { value: 'quality-control', label: 'Quality control & inspections' },
  { value: 'production-follow-up', label: 'Production follow-up' },
  { value: 'shipping-logistics', label: 'Shipping & logistics coordination' },
  { value: 'full-package', label: 'Full-package sourcing (end-to-end)' },
  { value: 'not-sure', label: 'Not sure yet — please advise' },
]

const SOURCE_VALUES = new Set([
  'home',
  'services',
  'how-it-works',
  'products',
  'case-studies',
  'blog',
  'contact',
  'other',
])

const sanitize = (value, max = 200) => {
  if (value == null) return ''
  return String(value).trim().slice(0, max)
}

export async function submitSourcingInquiry(rawValues, sourcePage = 'contact') {
  const values = rawValues || {}
  const payload = {
    full_name: sanitize(values.full_name, 120),
    email: sanitize(values.email, 200).toLowerCase(),
    company: sanitize(values.company, 200),
    country: sanitize(values.country, 80),
    phone: sanitize(values.phone, 40),
    product_type: sanitize(values.product_type, 200),
    order_quantity: sanitize(values.order_quantity, 80),
    target_unit_price: sanitize(values.target_unit_price, 80),
    service_required: sanitize(values.service_required, 200),
    message: sanitize(values.message, 4000),
    source_page: SOURCE_VALUES.has(sourcePage) ? sourcePage : 'other',
    status: 'new',
  }

  if (!payload.full_name) {
    throw new Error('Please tell us your name.')
  }
  if (!payload.email || !/^\S+@\S+\.\S+$/.test(payload.email)) {
    throw new Error('Please enter a valid business email.')
  }
  if (!payload.message) {
    throw new Error('Please share a few details about what you want to source.')
  }

  const { data: response, error } = await client
    .from(TABLE)
    .insert({ data: payload })
    .select()
    .maybeSingle()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
