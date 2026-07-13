import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function submitInquiry(values) {
  const { data: response, error } = await client
    .from('InquiryFormResponse')
    .insert({
      data: {
        name: values.name,
        email: values.email,
        company: values.company || '',
        phone: values.phone || '',
        country: values.country || '',
        product_category: values.productCategory,
        product_description: values.productDescription,
        quantity: values.quantity || '',
        sourcing_stage: values.sourcingStage || '',
        services_needed: values.servicesNeeded || [],
        message: values.message || '',
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return { entity: getEntity(response) }
}
