import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to send your inquiry right now.'
}

const getInsertedEntity = (response) => {
  if (Array.isArray(response)) {
    return response[0] ?? null
  }

  if (Array.isArray(response?.data?.list)) {
    return response.data.list[0] ?? null
  }

  return response?.data ?? response ?? null
}

export async function createSourcingInquiry(values) {
  const payload = {
    company_name: values.company_name.trim(),
    contact_name: values.contact_name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    country: values.country.trim(),
    product_name: values.product_name.trim(),
    service_interest: values.service_interest,
    estimated_order_quantity: values.estimated_order_quantity.trim(),
    target_price: values.target_price.trim(),
    target_market: values.target_market.trim(),
    timeline: values.timeline.trim(),
    message: values.message.trim(),
    consent: values.consent,
    source_page: values.source_page,
    status: 'new',
    created_at: new Date().toISOString(),
  }

  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({ data: payload })
    .select()

  if (error || response?.success === false) {
    return {
      success: false,
      entity: null,
      message: getErrorMessage(response, error),
    }
  }

  return {
    success: true,
    entity: getInsertedEntity(response),
    message: '',
  }
}
