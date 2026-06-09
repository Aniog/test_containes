import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_ANON_KEY, STRK_PROJECT_URL } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const tableName = 'InquiryRequests'

export const emptyInquiryValues = {
  name: '',
  company_name: '',
  email: '',
  phone: '',
  country: '',
  product_name: '',
  product_description: '',
  order_volume: '',
  shipping_destination: '',
  service_needs: [],
  timeline: '',
  notes: '',
}

const getEntity = (response) => response?.data ?? null

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit your sourcing inquiry.'
}

export async function createInquiry(values, sourcePage) {
  const { data: response, error } = await client
    .from(tableName)
    .insert({
      data: {
        ...values,
        status: 'new',
        source_page: sourcePage,
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    return {
      entity: null,
      errorMessage: getErrorMessage(response, error),
    }
  }

  return {
    entity: getEntity(response),
    errorMessage: '',
  }
}
