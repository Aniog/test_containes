import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getResponseData = (response) => response?.data ?? null

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to send your sourcing inquiry.'
}

export const createSourcingInquiry = async (values) => {
  const payload = {
    data: {
      company_name: values.company_name.trim(),
      contact_name: values.contact_name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      website: values.website.trim(),
      product_details: values.product_details.trim(),
      service_needs: values.service_needs,
      order_volume: values.order_volume.trim(),
      target_market: values.target_market.trim(),
      timeline: values.timeline.trim(),
      shipping_destination: values.shipping_destination.trim(),
      message: values.message.trim(),
      source_page: values.source_page,
      created_at: new Date().toISOString(),
    },
  }

  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert(payload)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getResponseData(response)
}
