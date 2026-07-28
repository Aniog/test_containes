import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

function generateUUID() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Something went wrong. Please try again.'
}

export async function createInquiry(inquiryData) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        id: generateUUID(),
        name: inquiryData.name,
        email: inquiryData.email,
        company: inquiryData.company || null,
        phone: inquiryData.phone || null,
        product_description: inquiryData.product_description,
        status: 'new',
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    const message = getErrorMessage(response, error)
    throw new Error(message)
  }

  return response?.data ?? null
}
