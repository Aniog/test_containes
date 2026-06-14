import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const TABLE_NAME = 'SourcingInquiry'

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Could not submit your inquiry. Please try again or email us directly.'
}

export const submitInquiry = async (values) => {
  const payload = {
    name: values.name,
    company: values.company || '',
    email: values.email,
    phone: values.phone || '',
    country: values.country || '',
    product_category: values.productCategory || '',
    product_description: values.productDescription || '',
    target_quantity: values.targetQuantity || '',
    target_unit_price: values.targetUnitPrice || '',
    target_port: values.targetPort || '',
    additional_notes: values.additionalNotes || '',
    source_page: values.sourcePage || '',
  }

  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert({ data: payload })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
