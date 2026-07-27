import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function submitInquiry(formData) {
  const payload = {
    name: formData.name,
    company: formData.company,
    email: formData.email,
    phone: formData.phone || '',
    product: formData.product,
    volume: formData.volume || '',
    message: formData.message || '',
    status: 'new',
    submitted_at: new Date().toISOString(),
  }

  const { data: response, error } = await client
    .from('ContactInquiry')
    .insert({ data: payload })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data || null
}