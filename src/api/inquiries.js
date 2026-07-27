import { client } from './postgrest-client.js'

const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function submitInquiry(formData) {
  const { data: response, error } = await client
    .from('Sourcing Inquiries')
    .insert({
      data: {
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        phone: formData.phone || '',
        product_category: formData.productCategory,
        product_description: formData.productDescription,
        quantity: formData.quantity || '',
        target_price: formData.targetPrice || '',
        timeline: formData.timeline || '',
        additional_info: formData.additionalInfo || '',
        status: 'new',
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    const message = getErrorMessage(response, error)
    throw new Error(message)
  }

  return getEntity(response)
}
