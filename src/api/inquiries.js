import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

function generateUuid() {
  // Simple RFC4122 v4 UUID generator without extra deps
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export async function createInquiry(values) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        id: generateUuid(),
        name: values.name,
        email: values.email,
        company: values.company || null,
        phone: values.phone || null,
        product_category: values.product_category || null,
        product_description: values.product_description,
        estimated_volume: values.estimated_volume || null,
        target_market: values.target_market || null,
        message: values.message || null,
        status: 'new',
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
