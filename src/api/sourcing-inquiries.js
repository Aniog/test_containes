import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const createInquiry = async (inquiryData) => {
  const payload = {
    id: crypto.randomUUID(),
    name: inquiryData.name,
    company: inquiryData.company || '',
    email: inquiryData.email,
    phone: inquiryData.phone || '',
    product: inquiryData.product,
    quantity: inquiryData.quantity || '',
    budget: inquiryData.budget || '',
    timeline: inquiryData.timeline || '',
    message: inquiryData.message || '',
    hear_about: inquiryData.hearAbout || '',
    status: 'new',
  }

  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({ data: payload })
    .select()
    .single()

  if (error) throw error
  if (response?.success === false) {
    const msg = Array.isArray(response?.errors) ? response.errors.join(', ') : 'Submission failed'
    throw new Error(msg)
  }
  return response?.data ?? null
}
