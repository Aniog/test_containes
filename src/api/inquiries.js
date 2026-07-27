import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const submitInquiry = async (values) => {
  const payload = {
    data: {
      name: values.name,
      email: values.email,
      company: values.company,
      country: values.country,
      phone: values.phone || null,
      productInterest: values.productInterest || null,
      message: values.message,
      createdAt: new Date().toISOString(),
    },
  }

  const { data, error } = await client
    .from('Inquiry')
    .insert(payload)
    .select()
    .single()

  if (error) {
    throw new Error(error.message || 'Failed to submit inquiry')
  }

  if (data && data.success === false) {
    const message = Array.isArray(data.errors) ? data.errors.join(', ') : 'Submission failed'
    throw new Error(message)
  }

  return data
}
