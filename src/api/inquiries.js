import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export async function createInquiry({
  name,
  email,
  company,
  product,
  quantity,
  message,
  source_page,
}) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        name,
        email,
        company: company || '',
        product,
        quantity: quantity || '',
        message: message || '',
        source_page: source_page || 'unknown',
        status: 'new',
      },
    })
    .select()
    .single()

  if (error) throw error
  if (response?.success === false) {
    const msg = Array.isArray(response?.errors)
      ? response.errors.join(', ')
      : 'Submission failed'
    throw new Error(msg)
  }
  return response?.data ?? null
}
