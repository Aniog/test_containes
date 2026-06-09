import { DataClient, User } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit your inquiry. Please try again.'
}

export const submitSourcingInquiry = async (values) => {
  const userRecord = await User.upsert({
    email: values.email,
    name: values.name,
    role: 'guest',
  })

  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        user_id: userRecord?.id,
        name: values.name,
        company: values.company,
        email: values.email,
        country: values.country,
        product_category: values.productCategory,
        quantity: values.quantity,
        services_needed: values.servicesNeeded,
        message: values.message,
        created_at: new Date().toISOString(),
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
