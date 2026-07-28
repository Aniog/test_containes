import { client } from './postgrest-client.js'

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

/**
 * Submits a sourcing inquiry to the SourcingInquiry table.
 * Contact details are stored as snapshots on the inquiry record itself.
 * Returns the created inquiry entity.
 */
export async function submitSourcingInquiry(values) {
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        name: values.name,
        email: values.email,
        company: values.company || '',
        country: values.country || '',
        phone: values.phone || '',
        product: values.product,
        quantity: values.quantity || '',
        budget: values.budget || '',
        services: values.services || [],
        message: values.message || '',
        status: 'new',
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
