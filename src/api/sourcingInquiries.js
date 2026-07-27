import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const TABLE_NAME = 'Sourcing Inquiries'

export function getSourcingInquiryErrorMessage(response, error) {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit the inquiry. Please try again.'
}

export async function createSourcingInquiry(fields) {
  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert({
      data: {
        name: fields.name,
        email: fields.email,
        company: fields.company,
        destination_market: fields.destination_market,
        service_needed: fields.service_needed || 'Not sure yet',
        estimated_order_quantity: fields.estimated_order_quantity,
        product_details: fields.product_details,
        page_source: fields.page_source,
        status: 'new',
        submitted_at: new Date().toISOString(),
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getSourcingInquiryErrorMessage(response, error))
  }

  return response?.data ?? response
}
