import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchInquiries() {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return getRows(response)
}

export async function createInquiry(inquiryData) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        name: inquiryData.name,
        email: inquiryData.email,
        company: inquiryData.company || '',
        phone: inquiryData.phone || '',
        country: inquiryData.country,
        product_category: inquiryData.product_category,
        order_volume: inquiryData.order_volume || '',
        services_needed: inquiryData.services_needed || [],
        product_description: inquiryData.product_description || '',
        message: inquiryData.message || '',
        status: 'new',
        created_at: new Date().toISOString(),
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}

export async function updateInquiryStatus(id, status) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .update({
      data: {
        status,
      },
    })
    .eq('id', id)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}
