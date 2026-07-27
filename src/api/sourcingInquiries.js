import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'Unable to submit your inquiry. Please try again.'
}

export const createSourcingInquiry = async (values) => {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        company: values.company.trim(),
        country: values.country.trim(),
        service_needed: values.service_needed,
        product_category: values.product_category.trim(),
        product_description: values.product_description.trim(),
        target_quantity: values.target_quantity.trim(),
        shipping_destination: values.shipping_destination.trim(),
        desired_timeline: values.desired_timeline.trim(),
        message: values.message.trim(),
        created_at: new Date().toISOString(),
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? response
}
