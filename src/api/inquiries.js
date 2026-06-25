import { STRK_PROJECT_URL } from '../config.jsx'

const SUBMIT_URL = `${STRK_PROJECT_URL}/SourcingInquiry`

function clean(value) {
  return typeof value === 'string' ? value.trim() : value
}

export async function submitSourcingInquiry(payload) {
  const data = { status: 'new' }

  // Required fields - always send
  data.full_name = clean(payload.full_name) || ''
  data.email = clean(payload.email) || ''
  data.product_description = clean(payload.product_description) || ''

  // Optional free-text fields - only send if non-empty
  const optionalText = [
    'company_name',
    'phone',
    'country',
    'estimated_order_quantity',
    'target_unit_price',
    'message',
  ]
  for (const field of optionalText) {
    const v = clean(payload[field])
    if (v) data[field] = v
  }

  // Optional enum fields - only send if a real selection was made
  const productCategory = clean(payload.product_category)
  if (productCategory) data.product_category = productCategory
  const timeline = clean(payload.timeline)
  if (timeline) data.timeline = timeline

  // Optional array field - only send if non-empty
  if (Array.isArray(payload.needed_services) && payload.needed_services.length > 0) {
    data.needed_services = payload.needed_services
  }

  let res
  try {
    res = await fetch(SUBMIT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })
  } catch (networkError) {
    return { ok: false, errors: ['Network error — please check your connection and try again.'] }
  }

  let json
  try {
    json = await res.json()
  } catch (e) {
    json = null
  }

  if (!res.ok || (json && json.success === false)) {
    const errs = (json && json.errors) || [json?.message || 'Failed to submit inquiry.']
    return { ok: false, errors: Array.isArray(errs) ? errs : [String(errs)] }
  }

  return { ok: true, data: json?.data ?? null }
}
